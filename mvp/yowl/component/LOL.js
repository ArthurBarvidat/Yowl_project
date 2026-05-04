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

export default function LOL() {
  "use client";

  const ranks = [
    { id: 1, name: "Iron", bg: "/Loliron.jpg" },
    { id: 2, name: "Bronze", bg: "/Lolbronze.jpg" },
    { id: 3, name: "Silver", bg: "/Lolsilver.jpg" },
    { id: 4, name: "Gold", bg: "/Lolgold.jpg" },
    { id: 5, name: "Platinum", bg: "/Lolplat.jpg" },
    { id: 6, name: "Emerald", bg: "/Lolemerald.jpg" },
    { id: 7, name: "Diamond", bg: "/Loldiam.jpg" },
    { id: 8, name: "Master", bg: "/Lolmaster.jpg" },
    { id: 9, name: "GrandMaster", bg: "/Lolgm.jpg" },
    { id: 10, name: "Challenger", bg: "/Lolchal.jpg" },
  ];

  function RankCard({ rank }) {
    return (
      <Link href={`/page/chatglobal/LOL/${rank.name}`}>
        <div
          className="
        w-full
        rounded-2xl
        overflow-hidden
        border border-[#A742EE]
        bg-[#3A105E]
        flex
        h-20
        active:scale-[0.98]
        transition
      "
        >
          <div className="w-1/2 h-full flex items-center justify-center">
            <div
              className="w-full h-full bg-no-repeat bg-center"
              style={{
                backgroundImage: `url(${rank.bg})`,
                backgroundSize: "150%",
                backgroundPosition: "140% 55%",
              }}
            />
          </div>

          <div className="w-1/2 h-full px-4 py-3 flex items-center justify-between">
            <div className="min-w-0">
              <div className="text-xl font-semibold truncate">{rank.name}</div>
            </div>

            <div className=" text-xl leading-none">›</div>
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
