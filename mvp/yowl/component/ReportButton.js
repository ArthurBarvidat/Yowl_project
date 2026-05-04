"use client";

import { useState } from "react";
export function IconReport({ className = "" }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M4 22V4" />
      <path d="M4 4h12l-2 4 2 4H4" />
    </svg>
  );
}


const REPORT_REASONS = [
  "Spam",
  "Contenu offensant",
  "Harcèlement",
  "Fausses informations",
  "Violence",
  "Autre",
];

export function ReportButton() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSend = () => {
    if (!selected) return;

    console.log("Motif envoyé :", selected);
    // fetch("/api/report", { method: "POST", body: JSON.stringify({ reason: selected }) })

    setSelected(null);
    setOpen(false);
  };

  return (
    <div className="relative">
      {/* Bouton icône */}
      <button
        onClick={() => setOpen(!open)}
        className="p-1 rounded "
        aria-label="Signaler"
      >
        <IconReport className="h-5 w-5 " />
      </button>

      {/* Panneau */}
      {open && (
        <div className="absolute right-0 mt-2 w-56 rounded-lg border-2 border-[#7353BA] text-black bg-white shadow-lg p-3 z-50">
          <p className="mb-2 text-sm font-semibold">
            Motif du signalement
          </p>

          <ul className="space-y-1">
            {REPORT_REASONS.map((reason) => (
              <li key={reason}>
                <button
                  onClick={() => setSelected(reason)}
                  className={`w-full text-left rounded px-2 py-1 text-sm hover:bg-gray-100 ${
                    selected === reason ? "bg-gray-200" : ""
                  }`}
                >
                  {reason}
                </button>
              </li>
            ))}
          </ul>

          <div className="mt-3 flex justify-end gap-2">
            <button
              onClick={() => setOpen(false)}
              className="text-xs text-gray-500 hover:underline"
            >
              Annuler
            </button>
            <button
              onClick={handleSend}
              disabled={!selected}
              className="rounded bg-red-500 px-3 py-1 text-xs text-white disabled:opacity-50"
            >
              Envoyer
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
