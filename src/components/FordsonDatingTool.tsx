"use client";

import { FormEvent, useMemo, useState } from "react";

type FordsonModel = "F" | "N";
type FactoryId = "dearborn" | "cork-f" | "cork-n" | "transition" | "dagenham";

type SerialRange = {
  year: string;
  start: number;
  end: number;
  note?: string;
};

type Factory = {
  id: FactoryId;
  model: FordsonModel;
  label: string;
  ranges: SerialRange[];
};

const factories: Factory[] = [
  {
    id: "dearborn",
    model: "F",
    label: "Dearborn, Michigan, USA",
    ranges: [
      { year: "1917", start: 1, end: 259 },
      { year: "1918", start: 260, end: 34426 },
      { year: "1919", start: 34427, end: 92113 },
      { year: "1920", start: 92114, end: 169583 },
      { year: "1921", start: 169584, end: 201025 },
      { year: "1922", start: 201026, end: 268582 },
      { year: "1923", start: 268583, end: 370351 },
      { year: "1924", start: 371352, end: 455359 },
      { year: "1925", start: 455360, end: 567607 },
      { year: "1926", start: 567608, end: 629829 },
      {
        year: "1926 / 1927-1928 boundary",
        start: 629830,
        end: 629830,
        note: "The supplied chart lists serial 629830 as both the end of 1926 and the beginning of the 1927-1928 range.",
      },
      { year: "1927-1928", start: 629831, end: 747681 },
    ],
  },
  {
    id: "cork-f",
    model: "F",
    label: "Cork, Ireland",
    ranges: [
      { year: "1919", start: 63001, end: 63200 },
      { year: "1920", start: 65001, end: 65500 },
      { year: "1920", start: 105001, end: 108229 },
      { year: "1921", start: 108230, end: 109672 },
      { year: "1921", start: 109673, end: 110000 },
      { year: "1921", start: 170958, end: 172000 },
      { year: "1922", start: 250001, end: 250300 },
      { year: "1922", start: 253001, end: 253562 },
    ],
  },
  {
    id: "cork-n",
    model: "N",
    label: "Cork, Ireland",
    ranges: [
      { year: "1929", start: 747682, end: 757368 },
      { year: "1930", start: 757369, end: 772564 },
      { year: "1931", start: 772565, end: 776065 },
    ],
  },
  {
    id: "transition",
    model: "N",
    label: "Cork-to-Dagenham transition",
    ranges: [
      {
        year: "1932",
        start: 776066,
        end: 779153,
        note: "Later production in this range came from Dagenham, with Cork-made parts continuing in use.",
      },
    ],
  },
  {
    id: "dagenham",
    model: "N",
    label: "Dagenham, England",
    ranges: [
      {
        year: "1933",
        start: 779154,
        end: 781966,
      },
      { year: "1934", start: 781967, end: 785547 },
      { year: "1935", start: 785548, end: 794702 },
      { year: "1936", start: 794703, end: 807580 },
      { year: "1937", start: 807581, end: 826778 },
      { year: "1938", start: 826779, end: 837825 },
      { year: "1939", start: 837826, end: 854237 },
      { year: "1940", start: 854238, end: 874913 },
      { year: "1941", start: 874914, end: 897623 },
      { year: "1942", start: 897624, end: 925273 },
      { year: "1943", start: 925274, end: 957573 },
      { year: "1944", start: 957574, end: 975418 },
      {
        year: "1945",
        start: 975419,
        end: 983647,
        note: "The final Model N, serial 983647, was built June 4, 1945.",
      },
    ],
  },
];

function formatSerial(value: number) {
  return value.toLocaleString("en-US");
}

export function FordsonDatingTool() {
  const [model, setModel] = useState<FordsonModel>("F");
  const [factoryId, setFactoryId] = useState<FactoryId>("dearborn");
  const [serialInput, setSerialInput] = useState("");
  const [submittedSerial, setSubmittedSerial] = useState<number | null>(null);

  const availableFactories = useMemo(
    () => factories.filter((factory) => factory.model === model),
    [model],
  );

  const selectedFactory = factories.find((factory) => factory.id === factoryId);
  const result =
    submittedSerial !== null
      ? selectedFactory?.ranges.find(
          (range) => submittedSerial >= range.start && submittedSerial <= range.end,
        )
      : undefined;

  function handleModelChange(nextModel: FordsonModel) {
    const firstFactory = factories.find((factory) => factory.model === nextModel);
    setModel(nextModel);
    setFactoryId(firstFactory?.id ?? "dearborn");
    setSubmittedSerial(null);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const parsedSerial = Number(serialInput.replace(/[,\s]/g, ""));
    setSubmittedSerial(Number.isInteger(parsedSerial) && parsedSerial > 0 ? parsedSerial : 0);
  }

  return (
    <div className="border-t-4 border-bir-blue bg-white p-7 shadow-card sm:p-12">
      <p className="eyebrow text-bir-rust">Serial Number Dating</p>
      <h2 className="mt-3 font-display text-4xl font-bold text-bir-navy">
        Find your Fordson&apos;s production year
      </h2>
      <p className="mt-4 max-w-2xl leading-7 text-bir-charcoal/70">
        Select the model and factory shown for your tractor, then enter its serial number.
      </p>

      <form onSubmit={handleSubmit} className="mt-9 grid gap-6">
        <fieldset>
          <legend className="mb-3 text-sm font-bold text-bir-navy">Fordson model</legend>
          <div className="grid grid-cols-2 gap-3">
            {(["F", "N"] as FordsonModel[]).map((option) => (
              <label
                key={option}
                className={`flex cursor-pointer items-center justify-center border px-5 py-4 font-display text-xl font-bold transition ${
                  model === option
                    ? "border-bir-blue bg-bir-blue text-white"
                    : "border-bir-navy/20 bg-bir-cream/40 text-bir-navy hover:border-bir-blue"
                }`}
              >
                <input
                  type="radio"
                  name="model"
                  value={option}
                  checked={model === option}
                  onChange={() => handleModelChange(option)}
                  className="sr-only"
                />
                Model {option}
              </label>
            ))}
          </div>
        </fieldset>

        <label htmlFor="factory" className="text-sm font-bold text-bir-navy">
          Production location
          <select
            id="factory"
            value={factoryId}
            onChange={(event) => {
              setFactoryId(event.target.value as FactoryId);
              setSubmittedSerial(null);
            }}
            className="mt-2 block min-h-14 w-full border border-bir-navy/25 bg-bir-cream/40 px-4 font-normal text-bir-charcoal outline-none focus:border-bir-blue"
          >
            {availableFactories.map((factory) => (
              <option key={factory.id} value={factory.id}>
                {factory.label}
              </option>
            ))}
          </select>
        </label>

        <label htmlFor="fordson-serial" className="text-sm font-bold text-bir-navy">
          Serial number
          <input
            id="fordson-serial"
            type="text"
            inputMode="numeric"
            value={serialInput}
            onChange={(event) => {
              setSerialInput(event.target.value);
              setSubmittedSerial(null);
            }}
            placeholder={model === "F" ? "Example: 455360" : "Example: 807581"}
            className="mt-2 block min-h-14 w-full border border-bir-navy/25 bg-bir-cream/40 px-4 text-lg font-normal outline-none focus:border-bir-blue"
          />
        </label>

        <button type="submit" className="button button-dark justify-self-start">
          Date this Fordson
        </button>
      </form>

      {submittedSerial !== null && (
        <div
          className={`mt-9 border-l-4 p-6 ${
            result ? "border-bir-blue bg-bir-cream/60" : "border-bir-rust bg-bir-rust/5"
          }`}
          aria-live="polite"
        >
          {result ? (
            <>
              <p className="eyebrow text-bir-rust">Dating Result</p>
              <p className="mt-2 font-display text-4xl font-bold text-bir-navy">{result.year}</p>
              <p className="mt-3 leading-7 text-bir-charcoal/75">
                Fordson Model {model}, produced at {selectedFactory?.label}. Serial{" "}
                {formatSerial(submittedSerial)} falls within the listed range{" "}
                {formatSerial(result.start)} to {formatSerial(result.end)}.
              </p>
              {result.note && (
                <p className="mt-4 text-sm italic leading-6 text-bir-charcoal/60">{result.note}</p>
              )}
            </>
          ) : (
            <>
              <p className="font-display text-2xl font-bold text-bir-navy">No matching range found</p>
              <p className="mt-2 leading-7 text-bir-charcoal/70">
                Check the serial number, model, and production location. The supplied chart contains
                gaps, especially among Cork-built Model F tractors, so not every number between the
                first and last production serial is listed.
              </p>
            </>
          )}
        </div>
      )}
    </div>
  );
}
