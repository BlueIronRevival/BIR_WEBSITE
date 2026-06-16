"use client";

import { useState } from "react";

type DecodedModel = {
  display: string;
  category: string;
  years: string;
  series: string;
  type: string;
  details: string;
  breakdown: string[];
  suffixes?: string[];
  tags: string[];
};

const namedModels: Record<string, DecodedModel> = {
  "9N": {
    display: "Ford 9N",
    category: "Named model",
    years: "1939-1942",
    series: "N-series",
    type: "General-purpose row-crop / utility tractor",
    details: "Original Ford-Ferguson N-series model.",
    breakdown: [
      "9N is a model name rather than a digit-by-digit transmission code.",
      "It is the first N-series Ford tractor.",
    ],
    tags: ["N-series", "flathead 4-cylinder", "pre-war Ford"],
  },
  "2N": {
    display: "Ford 2N",
    category: "Named model",
    years: "1942-1947",
    series: "N-series",
    type: "General-purpose row-crop / utility tractor",
    details: "Wartime and immediate post-war continuation of the 9N line.",
    breakdown: [
      "2N is a model name rather than a later option-decoding model code.",
      "It is part of the N-series family.",
    ],
    tags: ["N-series", "wartime era", "flathead 4-cylinder"],
  },
  "8N": {
    display: "Ford 8N",
    category: "Named model",
    years: "1947-1952",
    series: "N-series",
    type: "General-purpose utility tractor",
    details: "Updated N-series tractor with 4-speed transmission and major chassis revisions.",
    breakdown: [
      "8N is a named model rather than a later three-digit option code.",
      "It is the final N-series tractor before the NAA.",
    ],
    tags: ["N-series", "4-speed", "side-mount on later tractors"],
  },
  NAA: {
    display: "Ford NAA / Golden Jubilee",
    category: "Named model",
    years: "1953-1954",
    series: "NAA series",
    type: "Utility tractor",
    details: "New post-8N design with overhead-valve engine and live hydraulics. 1953 tractors are commonly called Golden Jubilee models.",
    breakdown: [
      "NAA is a model designation rather than a later three-digit code.",
      "1953 tractors used the Golden Jubilee badging for Ford's 50th anniversary.",
    ],
    tags: ["NAA", "Golden Jubilee", "OHV engine"],
  },
  JUBILEE: {
    display: "Ford Golden Jubilee / NAA",
    category: "Nickname / named model",
    years: "1953",
    series: "NAA series",
    type: "Utility tractor",
    details: "Golden Jubilee is the common 1953 anniversary badge name for the NAA tractor.",
    breakdown: ["Golden Jubilee refers to the 1953 anniversary-branded NAA tractor."],
    tags: ["NAA", "1953", "Golden Jubilee"],
  },
  GOLDENJUBILEE: {
    display: "Ford Golden Jubilee / NAA",
    category: "Nickname / named model",
    years: "1953",
    series: "NAA series",
    type: "Utility tractor",
    details: "Golden Jubilee is the common 1953 anniversary badge name for the NAA tractor.",
    breakdown: ["Golden Jubilee refers to the 1953 anniversary-branded NAA tractor."],
    tags: ["NAA", "1953", "Golden Jubilee"],
  },
  "600": {
    display: "Ford 600 series",
    category: "Series family",
    years: "1955-1957",
    series: "Hundred series",
    type: "134 ci utility family",
    details: "The 600 series is the 134 ci utility family in the Hundred series. Individual models include 620, 630, 640, 650, and 660.",
    breakdown: ["Use a full three-digit model such as 640 or 660 to decode transmission and PTO details."],
    tags: ["Hundred series", "134 ci", "utility"],
  },
  "700": {
    display: "Ford 700 series",
    category: "Series family",
    years: "1955-1957",
    series: "Hundred series",
    type: "134 ci row-crop family",
    details: "The 700 series is the 134 ci row-crop family in the Hundred series.",
    breakdown: ["Use a full three-digit model such as 740 or 760 for a complete decode."],
    tags: ["Hundred series", "134 ci", "row-crop"],
  },
  "800": {
    display: "Ford 800 series",
    category: "Series family",
    years: "1955-1957",
    series: "Hundred series",
    type: "172 ci utility family",
    details: "The 800 series is the 172 ci utility family in the Hundred series.",
    breakdown: ["Use a full three-digit model such as 840 or 860 for a complete decode."],
    tags: ["Hundred series", "172 ci", "utility"],
  },
  "900": {
    display: "Ford 900 series",
    category: "Series family",
    years: "1955-1957",
    series: "Hundred series",
    type: "172 ci row-crop family",
    details: "The 900 series is the 172 ci row-crop family in the Hundred series.",
    breakdown: ["Use a full three-digit model such as 940 or 960 for a complete decode."],
    tags: ["Hundred series", "172 ci", "row-crop"],
  },
  "601": {
    display: "Ford 601 Workmaster series",
    category: "Series family",
    years: "1958-1962",
    series: "x01 series",
    type: "134/144 ci utility family",
    details: "The 601 Workmaster is the utility family in the x01 series. Individual models include 621, 631, 641, 651, 661, 671, and 681.",
    breakdown: ["Use a full three-digit model such as 641 or 661 for a complete decode."],
    tags: ["x01 series", "Workmaster", "utility"],
  },
  "701": {
    display: "Ford 701 Workmaster series",
    category: "Series family",
    years: "1958-1962",
    series: "x01 series",
    type: "134/144 ci row-crop family",
    details: "The 701 Workmaster is the row-crop family in the x01 series.",
    breakdown: ["Use a full three-digit model such as 741 or 761 for a complete decode."],
    tags: ["x01 series", "Workmaster", "row-crop"],
  },
  "801": {
    display: "Ford 801 Powermaster series",
    category: "Series family",
    years: "1958-1962",
    series: "x01 series",
    type: "172 ci utility family",
    details: "The 801 Powermaster is the utility family in the x01 series.",
    breakdown: ["Use a full three-digit model such as 841, 861, or 871 for a complete decode."],
    tags: ["x01 series", "Powermaster", "utility"],
  },
  "901": {
    display: "Ford 901 Powermaster series",
    category: "Series family",
    years: "1958-1962",
    series: "x01 series",
    type: "172 ci row-crop family",
    details: "The 901 Powermaster is the row-crop family in the x01 series.",
    breakdown: ["Use a full three-digit model such as 941, 961, or 971 for a complete decode."],
    tags: ["x01 series", "Powermaster", "row-crop"],
  },
  "2000": {
    display: "Ford 2000",
    category: "Series name",
    years: "1962 onward (multiple generations)",
    series: "Thousand series",
    type: "Model family name",
    details: "Ford reused the 2000 model name across more than one generation. Early four-cylinder 2000 tractors from 1962-1964 use five-digit stamped model codes. Later three-cylinder 2000 tractors use a different model-code system; enter a C-prefixed serial number for year lookup.",
    breakdown: ["For early four-cylinder tractors, enter the full five-digit stamped model number when available. For 1965-1975 three-cylinder tractors, enter the C-prefixed serial number."],
    tags: ["Thousand series", "name reused", "enter full code"],
  },
  "4000": {
    display: "Ford 4000",
    category: "Series name",
    years: "1962 onward (multiple generations)",
    series: "Thousand series",
    type: "Model family name",
    details: "Ford reused the 4000 model name across more than one generation. Early four-cylinder 4000 tractors from 1962-1964 use five-digit stamped model codes. Later three-cylinder 4000 tractors use a different model-code system; enter a C-prefixed serial number for year lookup.",
    breakdown: ["For early four-cylinder tractors, enter the full five-digit stamped model number when available. For 1965-1975 three-cylinder tractors, enter the C-prefixed serial number."],
    tags: ["Thousand series", "name reused", "enter full code"],
  },
};

const hundredFirstDigit: Record<string, string> = {
  "6": "Four-wheel utility chassis with adjustable front axle, 134 ci gas or LP-gas engine",
  "7": "High-clearance row-crop chassis, 134 ci gas or LP-gas engine",
  "8": "Four-wheel utility chassis with adjustable front axle, 172 ci gas or LP-gas engine",
  "9": "High-clearance row-crop chassis, 172 ci gas or LP-gas engine",
};

const hundredSecondDigit: Record<string, string> = {
  "2": "4-speed transmission, no PTO or 3-point lift",
  "3": "4-speed transmission, no PTO",
  "4": "4-speed transmission with PTO and 3-point lift",
  "5": "5-speed transmission with 3-point lift and non-live PTO",
  "6": "5-speed transmission with 3-point lift and live PTO",
};

const x01FirstDigit: Record<string, string> = {
  "5": "One-row offset chassis with 134 ci gas, LP-gas, or 144 ci diesel engine",
  "6": "Four-wheel utility chassis with adjustable front axle, 134 ci gas, LP-gas, or 144 ci diesel engine",
  "7": "High-clearance row-crop chassis with 134 ci gas, LP-gas, or 144 ci diesel engine",
  "8": "Four-wheel utility chassis with adjustable front axle, 172 ci gas, LP-gas, or 172 ci diesel engine",
  "9": "High-clearance row-crop chassis with 172 ci gas, LP-gas, or 172 ci diesel engine",
};

const x01SecondDigit: Record<string, string> = {
  "1": "Select-O-Speed transmission, no PTO",
  "2": "4-speed transmission, no PTO or 3-point lift",
  "3": "4-speed transmission, no PTO",
  "4": "4-speed transmission with PTO and 3-point lift",
  "5": "5-speed transmission with 3-point lift and non-live PTO",
  "6": "5-speed transmission with 3-point lift and live PTO",
  "7": "Select-O-Speed transmission with single-speed PTO and 3-point lift",
  "8": "Select-O-Speed transmission with dual and ground-speed PTO and 3-point lift",
};

const thousandFirstDigit: Record<string, string> = {
  "2": "134 ci gasoline or 144 ci diesel engine family (2000)",
  "4": "172 ci gas, LP-gas, or 172 ci diesel engine family (4000)",
};

const thousandSecondDigit: Record<string, string> = {
  "0": "Industrial model produced prior to 1963",
  "1": "Industrial or agricultural model produced after 1963",
};

const thousandThirdFourth: Record<string, string> = {
  "10": "Row-crop chassis",
  "11": "Offset chassis",
  "20": "Utility chassis with adjustable front axle",
  "21": "Orchard chassis with non-adjustable front axle",
  "30": "Utility chassis with non-adjustable front axle (light industrial)",
  "31": "Low-center-of-gravity chassis",
  "40": "Heavy-duty industrial tractor with subframe",
  "41": "Heavy-duty industrial tractor with subframe and cast grille",
};

const thousandTransmissionBySecondAndLast: Record<string, string | null> = {
  "00": null,
  "01": "4-speed without PTO or hydraulics",
  "02": "4-speed with hydraulics, without PTO",
  "03": "4-speed with hydraulics and PTO",
  "04": "Select-O-Speed without hydraulics or PTO",
  "05": "Select-O-Speed with hydraulics and single-speed 540 PTO",
  "06": "Select-O-Speed with hydraulics, 540 and 1000 PTO, and ground-speed PTO",
  "09": "5-speed with live PTO",
  "10": "4-speed without PTO",
  "11": "4-speed with PTO",
  "12": "5-speed with live PTO",
  "14": "Select-O-Speed without PTO",
  "16": "Select-O-Speed with 540 and 1000 independent PTO",
  "17": "Select-O-Speed with 540 and 1000 independent PTO plus ground-speed PTO",
};

const threeCylinderThousandSerialRanges = [
  { year: "1965", start: 100000, end: 124199 },
  { year: "1966", start: 124200, end: 161299 },
  { year: "1967", start: 161300, end: 190199 },
  { year: "1968", start: 190200, end: 225999 },
  { year: "1969", start: 226000, end: 257599 },
  { year: "1970", start: 257600, end: 292099 },
  { year: "1971", start: 292100, end: 327199 },
  { year: "1972", start: 327200, end: 367299 },
  { year: "1973", start: 367300, end: 405199 },
  { year: "1974", start: 405200, end: 450699 },
  { year: "1975 and higher", start: 450700, end: null },
];

const suffixMap: Record<string, string> = {
  "1": "Tricycle with single front wheel",
  "4": "High-clearance with wide front",
  "5": "Factory wide front end",
  S: "Sherman transmission",
  L: "LP-gas engine",
  D: "Diesel engine",
};

const examples = ["641", "660", "871-D", "41204", "C292100", "8N", "NAA"];

function normalizeInput(value: string) {
  return value.toUpperCase().replace(/\s+/g, "").trim();
}

function splitBaseAndSuffixes(input: string) {
  const cleaned = normalizeInput(input);
  const pieces = cleaned.split("-").filter(Boolean);
  if (pieces.length === 0) return { base: "", suffixes: [] };

  let base = pieces[0];
  let suffixes = pieces.slice(1);

  if (/^\d{5}[A-Z0-9]+$/.test(base)) {
    const match = base.match(/^(\d{5})([A-Z0-9]+)$/);
    if (match) {
      base = match[1];
      suffixes = [match[2], ...suffixes];
    }
  }

  if (!/^\d{5}$/.test(base) && /^\d{3}[A-Z0-9]+$/.test(base)) {
    const match = base.match(/^(\d{3})([A-Z0-9]+)$/);
    if (match) {
      base = match[1];
      suffixes = [match[2], ...suffixes];
    }
  }

  return { base, suffixes };
}

function parseSuffixes(suffixes: string[]) {
  return suffixes.flatMap((suffix) =>
    suffix.split("").map((ch) => `${ch}: ${suffixMap[ch] || "Suffix not recognized by this version"}`),
  );
}

function decodeHundred(code: string, suffixes: string[]): DecodedModel | null {
  if (!/^\d{3}$/.test(code)) return null;
  const [a, b, c] = code.split("");
  if (c !== "0" || !hundredFirstDigit[a] || !hundredSecondDigit[b]) return null;

  const seriesMap: Record<string, string> = {
    "6": "600 series",
    "7": "700 series",
    "8": "800 series",
    "9": "900 series",
  };

  return {
    display: `Ford ${code}`,
    category: "3-digit model code",
    years: "1955-1957",
    series: `Hundred series (${seriesMap[a]})`,
    type: hundredFirstDigit[a],
    details: hundredSecondDigit[b],
    breakdown: [
      `${a} = ${hundredFirstDigit[a]}`,
      `${b} = ${hundredSecondDigit[b]}`,
      `${c} = Hundred series model year family (1955-1957)`,
    ],
    suffixes: parseSuffixes(suffixes),
    tags: ["Hundred series", seriesMap[a]],
  };
}

function decodeX01(code: string, suffixes: string[]): DecodedModel | null {
  if (!/^\d{3}$/.test(code)) return null;
  const [a, b, c] = code.split("");
  if (c !== "1" || !x01FirstDigit[a] || !x01SecondDigit[b]) return null;

  const seriesMap: Record<string, string> = {
    "5": "501 series",
    "6": "601 Workmaster",
    "7": "701 Workmaster",
    "8": "801 Powermaster",
    "9": "901 Powermaster",
  };

  return {
    display: `Ford ${code}`,
    category: "3-digit model code",
    years: "1958-1962",
    series: `x01 series (${seriesMap[a]})`,
    type: x01FirstDigit[a],
    details: x01SecondDigit[b],
    breakdown: [
      `${a} = ${x01FirstDigit[a]}`,
      `${b} = ${x01SecondDigit[b]}`,
      `${c} = x01 series model year family (1958-1962)`,
    ],
    suffixes: parseSuffixes(suffixes),
    tags: ["x01 series", seriesMap[a]],
  };
}

function decodeEarlyThousand(code: string, suffixes: string[]): DecodedModel | null {
  if (!/^\d{5}$/.test(code)) return null;
  const a = code[0];
  const b = code[1];
  const cd = code.slice(2, 4);
  const e = code[4];
  const transmission = thousandTransmissionBySecondAndLast[`${b}${e}`];

  if (!thousandFirstDigit[a] || !thousandSecondDigit[b] || !thousandThirdFourth[cd] || !transmission) {
    return null;
  }

  const family = a === "2" ? "2000" : "4000";

  return {
    display: `Ford ${code}`,
    category: "5-digit stamped model code",
    years: "1962-1964",
    series: `Early four-cylinder Thousand series (${family})`,
    type: thousandThirdFourth[cd],
    details: transmission,
    breakdown: [
      `${a} = ${thousandFirstDigit[a]}`,
      `${b} = ${thousandSecondDigit[b]}`,
      `${cd} = ${thousandThirdFourth[cd]}`,
      `${e} = ${transmission}`,
    ],
    suffixes: parseSuffixes(suffixes),
    tags: ["Thousand series", family, "4-cylinder"],
  };
}

function decodeThreeCylinderThousandSerial(code: string): DecodedModel | null {
  const match = code.match(/^C(\d{6})$/);
  if (!match) return null;

  const serialNumber = Number(match[1]);
  const range = threeCylinderThousandSerialRanges.find(
    (item) => serialNumber >= item.start && (item.end === null || serialNumber <= item.end),
  );

  if (!range) return null;

  const rangeText = range.end === null ? `C${range.start} and higher` : `C${range.start} to C${range.end}`;

  return {
    display: `Ford ${code}`,
    category: "3-cylinder Thousand serial number",
    years: range.year,
    series: "1965-1975 Ford Thousand series, 3-cylinder engines",
    type: "C-prefixed serial number",
    details: `Serial falls in the ${range.year} production range.`,
    breakdown: [
      "C = serial prefix used in the published 1965-1975 Thousand series serial chart",
      `${match[1]} = sequential tractor serial number`,
      `${range.year} range = ${rangeText}`,
      "Stamped serials for this era are commonly found on the right/front/top corner of the transmission housing",
    ],
    suffixes: [],
    tags: ["Thousand series", "3-cylinder", "serial number", range.year],
  };
}

function decodeInput(rawValue: string): DecodedModel | null {
  const { base, suffixes } = splitBaseAndSuffixes(rawValue);
  if (!base) return null;

  const serial = decodeThreeCylinderThousandSerial(base);
  if (serial) return serial;

  const named = namedModels[base];
  if (named) return { ...named, suffixes: parseSuffixes(suffixes) };

  return decodeHundred(base, suffixes) || decodeX01(base, suffixes) || decodeEarlyThousand(base, suffixes);
}

export function ModelDecoderTool() {
  const [input, setInput] = useState("");
  const trimmedInput = input.trim();
  const decoded = trimmedInput ? decodeInput(trimmedInput) : null;
  const hasAttempt = trimmedInput.length > 0;

  return (
    <div className="space-y-6">
      <div className="border-t-4 border-bir-blue bg-white p-6 shadow-card sm:p-8">
        <label htmlFor="modelInput" className="block text-sm font-bold text-bir-navy">
          Enter a Ford model number
        </label>
        <div className="mt-3 flex flex-col gap-3 sm:flex-row">
          <input
            id="modelInput"
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Examples: 641, 660, 861-D, 41204, C292100, 8N, NAA"
            autoComplete="off"
            spellCheck={false}
            className="min-h-12 flex-1 border border-bir-navy/25 bg-bir-cream/50 px-4 text-bir-charcoal outline-none focus:border-bir-blue"
          />
          <button type="button" onClick={() => setInput(trimmedInput)} className="button button-dark">
            Decode
          </button>
        </div>
        <p className="mt-3 text-sm leading-6 text-bir-charcoal/65">
          Supports optional suffixes such as <code>-D</code>, <code>-L</code>, or <code>-S</code>, plus C-prefixed 1965-1975 3-cylinder Thousand serial numbers.
        </p>
        <div className="mt-5 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold text-bir-charcoal/65">Try:</span>
          {examples.map((example) => (
            <button
              key={example}
              type="button"
              onClick={() => setInput(example)}
              className="min-h-9 border border-bir-blue/25 bg-bir-blue/10 px-3 text-sm font-bold text-bir-navy hover:bg-bir-blue hover:text-white"
            >
              {example}
            </button>
          ))}
        </div>
      </div>

      <ResultPanel decoded={decoded} hasAttempt={hasAttempt} rawInput={trimmedInput} />

      <div className="grid gap-4 md:grid-cols-2">
        {[
          ["Named models", "9N, 2N, 8N, NAA, Golden Jubilee, and broad Ford series names such as 600, 601, 800, and 801."],
          ["3-digit model codes", "Hundred and x01 tractors such as 640, 660, 641, 661, 871, and 981."],
          ["5-digit early Thousand codes", "1962-1964 four-cylinder 2000 and 4000 model numbers such as 21201 or 41204."],
          ["3-cylinder Thousand serials", "1965-1975 C-prefixed serial numbers such as C100000, C292100, and C450700."],
        ].map(([title, body]) => (
          <div key={title} className="bg-white p-5 shadow-card">
            <h3 className="font-display text-xl font-bold text-bir-navy">{title}</h3>
            <p className="mt-2 leading-7 text-bir-charcoal/70">{body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResultPanel({ decoded, hasAttempt, rawInput }: { decoded: DecodedModel | null; hasAttempt: boolean; rawInput: string }) {
  if (!hasAttempt) {
    return (
      <div className="min-h-28 border border-bir-navy/15 bg-white p-6 text-bir-charcoal/65 shadow-card" aria-live="polite">
        Enter a model number to see the decode.
      </div>
    );
  }

  if (!decoded) {
    return (
      <div className="border border-bir-rust/35 bg-white p-6 text-bir-charcoal shadow-card" aria-live="polite">
        <h2 className="font-display text-2xl font-bold text-bir-rust">No match found</h2>
        <p className="mt-2 font-bold text-bir-navy">{rawInput}</p>
        <p className="mt-4 text-bir-charcoal/75">This version recognizes N-series named models, NAA / Golden Jubilee, Hundred series, x01 series, 1965-1975 3-cylinder Thousand serial numbers, and early 1962-1964 2000 / 4000 five-digit codes.</p>
      </div>
    );
  }

  const statItems = [
    ["Years", decoded.years],
    ["Series", decoded.series],
    ["Chassis / family", decoded.type],
    ["Transmission / equipment", decoded.details],
  ];

  return (
    <div className="border-t-4 border-bir-rust bg-white p-6 shadow-card sm:p-8" aria-live="polite">
      <h2 className="font-display text-3xl font-bold text-bir-navy">{decoded.display}</h2>
      <p className="mt-1 font-bold text-bir-charcoal/60">{decoded.category}</p>

      <div className="mt-6 grid gap-3 md:grid-cols-2">
        {statItems.map(([label, value]) => (
          <div key={label} className="border border-bir-navy/15 bg-bir-cream/40 p-4">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-bir-charcoal/55">{label}</div>
            <div className="mt-2 font-bold leading-6 text-bir-navy">{value}</div>
          </div>
        ))}
        {decoded.suffixes && decoded.suffixes.length > 0 ? (
          <div className="border border-bir-navy/15 bg-bir-cream/40 p-4 md:col-span-2">
            <div className="text-xs font-bold uppercase tracking-[0.12em] text-bir-charcoal/55">Suffixes</div>
            <div className="mt-2 space-y-1 font-bold leading-6 text-bir-navy">
              {decoded.suffixes.map((suffix) => (
                <div key={suffix}>{suffix}</div>
              ))}
            </div>
          </div>
        ) : null}
      </div>

      <ul className="mt-6 divide-y divide-bir-navy/15 border-y border-bir-navy/15">
        {decoded.breakdown.map((item) => (
          <li key={item} className="py-3 leading-7 text-bir-charcoal/75">
            <span className="font-bold text-bir-navy">Breakdown:</span> {item}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {decoded.tags.map((tag) => (
          <span key={tag} className="bg-bir-blue/10 px-3 py-1 text-sm font-bold text-bir-navy">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
