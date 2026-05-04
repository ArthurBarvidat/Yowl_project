import Link from "next/link";
export default function GameCategoriesMates() {
  const games = [
    { id: 1, title: "FC 26", bg: "/fifa.jpeg" },
    { id: 2, title: "League of Legends", bg: "/lol.jpg", fichier: "LOL" },
    { id: 3, title: "VALORANT", bg: "/valo.jpeg", fichier: "VALORANT" },
    { id: 4, title: "Minecraft", bg: "/minecraft.png" },
    { id: 5, title: "Rocket League", bg: "/rocket.jpg" },
    { id: 6, title: "World of Warcraft", bg: "/wow.jpg" },
    { id: 7, title: "Teamfight Tactics", bg: "/Tft.webp" },
    { id: 8, title: "Counter-Strike", bg: "/CS2.jpg" },
    { id: 9, title: "GTA 5", bg: "/GTA.jpeg" },
    { id: 10, title: "COD", bg: "/COD.jpg" },
    { id: 11, title: "Arc Raiders", bg: "/ArcRaiders.jpg" },
    { id: 12, title: "R6", bg: "/R6.jpg" },
  ];

  function GameCard({ game }) {
    return (
      <main className="rounded-2xl overflow-hidden bg-[#3A105E] border border-[#A742EE] text-center">
        <Link href={`/page/global/${game.fichier}`}>
          <div
            className="aspect-[3/4] bg-center bg-cover"
            style={{ backgroundImage: `url(${game.bg})` }}
          />
          <div className="p-2">
            <div className="h-8 flex items-center justify-center text-sm font-semibold text-white text-center">
              {game.title}
            </div>
          </div>
        </Link>
      </main>
    );
  }
  return (
    <div className="px-4 mt-4 pb-5">
      <div className="grid grid-cols-3 gap-3">
        {games.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </div>
  );
}
