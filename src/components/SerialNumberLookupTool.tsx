"use client";

import { useMemo, useState } from "react";
import fordSerialRanges from "@/data/fordSerialRanges.json";

type SerialRange = {
  era?: string;
  model_family?: string;
  model?: string;
  year: number;
  serial_start_raw: string;
  serial_end_raw: string;
  serial_prefix: string;
  serial_start_num: number;
  serial_end_num: number | null;
  notes?: string;
};

type NormalizedSerial = {
  raw: string;
  prefix: string;
  number: number | null;
};

type SerialMatch = SerialRange & {
  original_input: string;
  normalized_serial: string;
  display_family: string;
  display_year: number;
};

const serialData = fordSerialRanges as SerialRange[];

const modelOptionsByFamily: Record<string, string[]> = {
  "N Series": ["9N", "2N", "8N"],
  "NAA/Jubilee": ["NAA", "Golden Jubilee"],
  "Hundred Series": ["600", "700", "800", "900"],
  "01 Series": ["601", "701", "801", "901"],
  "Thousand 4-cyl": ["2000", "4000"],
  "Thousand 3-cyl": ["2000", "3000", "4000", "5000"],
  "x600 Series": ["2600", "3600", "4600", "5600", "6600", "7600"],
};

const familyHelpText: Record<string, string> = {
  "N Series": "N Series tractors include the 9N, 2N, and 8N. Serial numbers were typically stamped on the left side of the engine block. Note that 2N tractors commonly use a 9N serial prefix.",
  "NAA/Jubilee": "NAA / Jubilee tractors used NAA-prefixed serial numbers. Check the flat stamped area on the left side of the engine.",
  "Hundred Series": "Hundred Series tractors used numeric serials. Model and serial stamps are separate, so verify both before drawing a conclusion.",
  "01 Series": "01 Series tractors also used numeric serials. Because serials can overlap by era, model selection matters here.",
  "Thousand 4-cyl": "Early 4-cylinder Thousand Series tractors used numeric serials. Check the stamped identification area carefully and confirm the model.",
  "Thousand 3-cyl": "Later 3-cylinder Thousand Series tractors commonly use a plant prefix such as A, B, or C before the serial number.",
  "x600 Series": "x600 tractors commonly use plant-prefixed serial numbers. Prefixes such as A, B, or C indicate production plant.",
};

function normalizeSerial(input: string): NormalizedSerial {
  const cleaned = String(input || "")
    .toUpperCase()
    .trim()
    .replace(/[*<>]/g, "")
    .replace(/[^A-Z0-9]/g, "");

  const splitMatch = cleaned.match(/^(.*?)(\d+)$/);
  if (!splitMatch) return { raw: cleaned, prefix: "", number: null };

  return {
    raw: cleaned,
    prefix: splitMatch[1] || "",
    number: Number.parseInt(splitMatch[2], 10),
  };
}

function familyAliases(selectedFamily: string) {
  const map: Record<string, string[]> = {
    "N Series": ["N SERIES", "9N", "2N", "8N"],
    "9N": ["9N"],
    "2N": ["2N"],
    "8N": ["8N"],
    "NAA/Jubilee": ["NAA", "JUBILEE", "GOLDEN JUBILEE", "NAA/JUBILEE"],
    "Hundred Series": ["HUNDRED", "600", "700", "800", "900", "HUNDRED SERIES"],
    "01 Series": ["01", "601", "701", "801", "901", "01 SERIES"],
    "Thousand 4-cyl": ["THOUSAND 4-CYL", "THOUSAND 4 CYL", "4-CYL", "4 CYL", "2000", "4000"],
    "Thousand 3-cyl": ["THOUSAND 3-CYL", "THOUSAND 3 CYL", "3-CYL", "3 CYL", "2000", "3000", "4000", "5000"],
    "x600 Series": ["X600", "2600", "3600", "4600", "5600", "6600", "7600"],
  };

  return map[selectedFamily] || [selectedFamily];
}

function valueContainsAlias(value: string | undefined, aliases: string[]) {
  const normalizedValue = String(value || "").toUpperCase();
  return aliases.some((alias) => normalizedValue.includes(alias.toUpperCase()));
}

function familyMatchesRow(selectedFamily: string, row: SerialRange) {
  if (!selectedFamily) return true;

  const aliases = familyAliases(selectedFamily);
  return (
    valueContainsAlias(row.model_family, aliases) ||
    valueContainsAlias(row.era, aliases) ||
    valueContainsAlias(row.model, aliases) ||
    valueContainsAlias(row.notes, aliases)
  );
}

function rowPrefixMatches(normalized: NormalizedSerial, row: SerialRange) {
  const rowPrefix = String(row.serial_prefix || "").toUpperCase();
  return rowPrefix === "" ? normalized.prefix === "" : normalized.prefix === rowPrefix;
}

function rowNumberMatches(normalized: NormalizedSerial, row: SerialRange) {
  if (normalized.number === null || Number.isNaN(normalized.number)) return false;
  const start = Number(row.serial_start_num);
  if (Number.isNaN(start)) return false;
  if (row.serial_end_num === null) return normalized.number >= start;

  const end = Number(row.serial_end_num);
  if (Number.isNaN(end)) return false;
  return normalized.number >= start && normalized.number <= end;
}

function scoreRow(normalized: NormalizedSerial, selectedFamily: string, row: SerialRange) {
  let score = 0;
  if (familyMatchesRow(selectedFamily, row)) score += 100;
  if (rowPrefixMatches(normalized, row)) score += 50;
  if (rowNumberMatches(normalized, row)) score += 200;
  if (selectedFamily === "2N" && normalized.prefix === "9N") score += 25;
  if (selectedFamily === "N Series" && String(row.model_family || "").toUpperCase() === "2N" && normalized.prefix === "9N") score += 10;
  return score;
}

function findFordSerialMatch(input: string, selectedFamily: string): SerialMatch | null {
  const normalized = normalizeSerial(input);
  if (!normalized.raw || normalized.number === null) return null;

  const candidates = serialData.filter(
    (row) => familyMatchesRow(selectedFamily, row) && rowPrefixMatches(normalized, row) && rowNumberMatches(normalized, row),
  );

  if (!candidates.length) return null;

  candidates.sort((a, b) => {
    const scoreA = scoreRow(normalized, selectedFamily, a);
    const scoreB = scoreRow(normalized, selectedFamily, b);
    if (scoreB !== scoreA) return scoreB - scoreA;
    if (a.year !== b.year) return a.year - b.year;
    return a.serial_start_num - b.serial_start_num;
  });

  const row = candidates[0];
  return {
    ...row,
    original_input: input,
    normalized_serial: normalized.raw,
    display_family: row.model_family || row.era || selectedFamily || "Ford Tractor",
    display_year: row.year,
  };
}

function buildWarnings(match: SerialMatch, selectedFamily: string, selectedModel: string) {
  const warnings = [];

  if (selectedFamily === "N Series" && selectedModel === "2N" && match.normalized_serial.startsWith("9N")) {
    warnings.push("2N tractors often carry a 9N serial prefix. That is expected and does not by itself mean the tractor is a 9N.");
  }

  if (["Hundred Series", "01 Series", "Thousand 4-cyl"].includes(selectedFamily)) {
    warnings.push("This era uses numeric serial systems that can overlap across Ford families. Always confirm the model stamp along with the serial.");
  }

  if (["Thousand 3-cyl", "x600 Series"].includes(selectedFamily)) {
    warnings.push("Later tractors often use plant-prefixed serial numbers. Prefix letters such as A, B, or C should be included when present.");
  }

  return warnings;
}

export function SerialNumberLookupTool() {
  const [selectedFamily, setSelectedFamily] = useState("");
  const [selectedModel, setSelectedModel] = useState("");
  const [serialInput, setSerialInput] = useState("");
  const [hasAttempt, setHasAttempt] = useState(false);

  const modelOptions = selectedFamily ? modelOptionsByFamily[selectedFamily] || [] : [];
  const match = useMemo(() => {
    if (!hasAttempt || !selectedFamily || !selectedModel || !serialInput.trim()) return null;
    const lookupKey = selectedFamily === "N Series" ? selectedModel : selectedFamily;
    return findFordSerialMatch(serialInput.trim(), lookupKey);
  }, [hasAttempt, selectedFamily, selectedModel, serialInput]);

  const resetForm = () => {
    setSelectedFamily("");
    setSelectedModel("");
    setSerialInput("");
    setHasAttempt(false);
  };

  return (
    <div className="space-y-6">
      <div className="border-t-4 border-bir-blue bg-white p-6 shadow-card sm:p-8">
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <label htmlFor="tractorFamily" className="block text-sm font-bold text-bir-navy">
              Tractor family / series
            </label>
            <select
              id="tractorFamily"
              value={selectedFamily}
              onChange={(event) => {
                setSelectedFamily(event.target.value);
                setSelectedModel("");
                setHasAttempt(false);
              }}
              className="mt-2 min-h-12 w-full border border-bir-navy/25 bg-bir-cream/50 px-4 text-bir-charcoal outline-none focus:border-bir-blue"
            >
              <option value="">Select family</option>
              {Object.keys(modelOptionsByFamily).map((family) => (
                <option key={family} value={family}>
                  {family}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="tractorModel" className="block text-sm font-bold text-bir-navy">
              Model
            </label>
            <select
              id="tractorModel"
              value={selectedModel}
              disabled={!modelOptions.length}
              onChange={(event) => {
                setSelectedModel(event.target.value);
                setHasAttempt(false);
              }}
              className="mt-2 min-h-12 w-full border border-bir-navy/25 bg-bir-cream/50 px-4 text-bir-charcoal outline-none focus:border-bir-blue disabled:bg-bir-charcoal/10 disabled:text-bir-charcoal/45"
            >
              <option value="">Select model</option>
              {modelOptions.map((model) => (
                <option key={model} value={model}>
                  {model}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-2">
            <div className="border border-bir-blue/20 bg-bir-blue/10 p-4 text-sm leading-6 text-bir-navy">
              {selectedFamily ? familyHelpText[selectedFamily] : "Select a tractor family to see model options and serial number notes."}
            </div>
          </div>

          <div className="md:col-span-2">
            <label htmlFor="serialInput" className="block text-sm font-bold text-bir-navy">
              Serial number
            </label>
            <input
              id="serialInput"
              type="text"
              value={serialInput}
              onChange={(event) => {
                setSerialInput(event.target.value);
                setHasAttempt(false);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") setHasAttempt(true);
              }}
              placeholder="Example: 8N245637 or 9N105500 or C450800"
              autoComplete="off"
              className="mt-2 min-h-12 w-full border border-bir-navy/25 bg-bir-cream/50 px-4 text-bir-charcoal outline-none focus:border-bir-blue"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <button type="button" onClick={() => setHasAttempt(true)} className="button button-dark flex-1">
            Lookup Tractor Year
          </button>
          <button type="button" onClick={resetForm} className="button border border-bir-navy/25 text-bir-navy hover:bg-bir-cream sm:min-w-36">
            Reset
          </button>
        </div>
      </div>

      <LookupResult
        hasAttempt={hasAttempt}
        match={match}
        selectedFamily={selectedFamily}
        selectedModel={selectedModel}
        serialInput={serialInput.trim()}
      />

      <p className="text-sm leading-6 text-bir-charcoal/60">
        For best results, confirm both the stamped model identification and the stamped serial number. Some Ford numbering systems overlap across families and eras.
      </p>
    </div>
  );
}

function LookupResult({
  hasAttempt,
  match,
  selectedFamily,
  selectedModel,
  serialInput,
}: {
  hasAttempt: boolean;
  match: SerialMatch | null;
  selectedFamily: string;
  selectedModel: string;
  serialInput: string;
}) {
  if (!hasAttempt) {
    return (
      <div className="min-h-24 border border-bir-navy/15 bg-white p-6 text-bir-charcoal/65 shadow-card" aria-live="polite">
        Select a family, model, and serial number to run a lookup.
      </div>
    );
  }

  if (!selectedFamily) return <EmptyResult title="Missing tractor family." body="Select the tractor family / series first." />;
  if (!selectedModel) return <EmptyResult title="Missing model." body="Select the tractor model before running the lookup." />;
  if (!serialInput) return <EmptyResult title="Missing serial number." body="Enter a serial number to continue." />;

  if (!match) {
    return (
      <div className="border border-bir-rust/35 bg-white p-6 shadow-card" aria-live="polite">
        <h2 className="font-display text-2xl font-bold text-bir-rust">No match found.</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-3">
          <ResultStat label="Family" value={selectedFamily || "Not selected"} />
          <ResultStat label="Model" value={selectedModel || "Not selected"} />
          <ResultStat label="Serial entered" value={serialInput || "None"} />
        </div>
        <p className="mt-4 leading-7 text-bir-charcoal/70">
          Check the stamped serial carefully, confirm the tractor family, and make sure the model choice is correct.
        </p>
      </div>
    );
  }

  const warnings = buildWarnings(match, selectedFamily, selectedModel);
  const notes = [
    `Matched serial range: ${match.serial_start_raw} to ${match.serial_end_raw}`,
    match.era ? `Era: ${match.era}` : null,
    match.model_family ? `Dataset family: ${match.model_family}` : null,
    match.serial_prefix ? `Expected serial prefix: ${match.serial_prefix}` : "Expected serial prefix: numeric serial only",
    `Normalized serial: ${match.normalized_serial}`,
    `Likely production year: ${match.display_year}`,
    selectedModel ? `Selected model: ${selectedModel}` : null,
  ].filter(Boolean);

  return (
    <div className="border-t-4 border-bir-rust bg-white p-6 shadow-card sm:p-8" aria-live="polite">
      <h2 className="font-display text-3xl font-bold text-bir-navy">{match.display_family} serial number match</h2>
      <p className="mt-2 leading-7 text-bir-charcoal/70">
        This serial number most likely falls in the {match.display_year} production year.
      </p>

      <div className="mt-6 grid gap-3 md:grid-cols-3">
        <ResultStat label="Family" value={selectedFamily || "Unknown"} />
        <ResultStat label="Model" value={selectedModel || "Not specified"} />
        <ResultStat label="Serial entered" value={match.original_input} />
        <ResultStat label="Normalized serial" value={match.normalized_serial} />
        <ResultStat label="Likely year" value={String(match.display_year)} />
        <ResultStat label="Range matched" value={`${match.serial_start_raw} - ${match.serial_end_raw}`} />
      </div>

      {warnings.length ? (
        <div className="mt-5 space-y-3">
          {warnings.map((warning) => (
            <div key={warning} className="border border-bir-rust/25 bg-bir-rust/10 p-4 leading-6 text-bir-charcoal/75">
              {warning}
            </div>
          ))}
        </div>
      ) : null}

      <div className="mt-6 border-t border-bir-navy/15 pt-5">
        <h3 className="font-bold text-bir-navy">Notes</h3>
        <ul className="mt-3 list-disc space-y-2 pl-5 leading-7 text-bir-charcoal/70">
          {notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function EmptyResult({ title, body }: { title: string; body: string }) {
  return (
    <div className="border border-bir-navy/15 bg-white p-6 shadow-card" aria-live="polite">
      <h2 className="font-display text-2xl font-bold text-bir-navy">{title}</h2>
      <p className="mt-3 leading-7 text-bir-charcoal/70">{body}</p>
    </div>
  );
}

function ResultStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-bir-navy/15 bg-bir-cream/40 p-4">
      <div className="text-xs font-bold uppercase tracking-[0.12em] text-bir-charcoal/55">{label}</div>
      <div className="mt-2 break-words font-bold leading-6 text-bir-navy">{value}</div>
    </div>
  );
}
