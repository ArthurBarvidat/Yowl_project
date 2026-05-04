import TopBar from "@/component/TopBar";
import BottomBar from "@/component/BottomBar";
import GameCategoriesMates from "@/component/GameCategoriesMates";

export default function Home() {
  return (
    <main className="w-full max-w-xl mx-auto min-h-screen pb-10">
      <TopBar />
      <div className="pt-13">
        <GameCategoriesMates />
      </div>
      <BottomBar />
    </main>
  );
}
