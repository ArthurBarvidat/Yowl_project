import Link from "next/link";
export function IconBack({ className = "" }) {
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
      <path d="M15 18l-6-6 6-6" />
    </svg>
  );
}

export default function VALORANT() {
  "use client";

  const ranks = [
    { id: 1, name: "Iron", bg: "/Valoiron.png" },
    { id: 2, name: "Bronze", bg: "/Valobronze.png" },
    { id: 3, name: "Silver", bg: "/Valosilver.png" },
    { id: 4, name: "Gold", bg: "/Valogold.png" },
    { id: 5, name: "Platinum", bg: "/Valoplatinium.png" },
    { id: 6, name: "Diamond", bg: "/Valodiam.png" },
    { id: 7, name: "Ascendant", bg: "/Valoasc.png" },
    { id: 8, name: "Immortal", bg: "/Valoimmo.png" },
    { id: 9, name: "Radiant", bg: "/Valoradiant.png" },
  ];

  function RankCard({ rank }) {
    return (
      <Link href={`/page/chatglobal/VALORANT/${rank.name}`}>
        <div
          className="
          w-full h-20
          rounded-2xl
          overflow-hidden
          border border-[#A742EE]
          bg-[#3A105E]
          flex
          active:scale-[0.98]
          transition
        "
        >
          <div
            className="w-1/2 h-full bg-no-repeat bg-center"
            style={{
              backgroundImage: `url(${rank.bg})`,
              backgroundSize: "100%",
            }}
          />

          <div className="w-1/2 h-full px-4 py-3 flex items-center justify-between">
            <div className="text-lg font-semibold text-white truncate">
              {rank.name}
            </div>
            <div className="text-white text-xl leading-none">›</div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <div className="px-4 mt-4 pb-5">
      <div className="flex flex-col gap-3">
        {ranks.map((r) => (
          <RankCard key={r.id} rank={r} />
        ))}
      </div>
    </div>
  );
}
