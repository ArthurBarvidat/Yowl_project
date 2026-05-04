import TopBar from "@/component/TopBar";
import BottomBar from "@/component/BottomBar";
import GameCategories from "@/component/GameCategories";

export default function CategoriesPage() {
  return (
    <main className="w-full max-w-xl mx-auto min-h-screen pb-10">
      <TopBar />
      <div className="pt-13">
        <GameCategories />
      </div>
      <BottomBar />
    </main>
  );
}
