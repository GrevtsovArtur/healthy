import { Suspense } from "react";
import MenuCatalog from "@/components/MenuCatalog";
import { GridSkeleton } from "@/components/Skeleton";
import { getDishes } from "@/lib/api";

export const metadata = {
  title: "Меню",
  description: "Меню Healthy Food Almaty: КБЖУ, состав и аллергены каждого блюда. Режимы FIT, BALANCE и LIGHT.",
};


export default async function MenuPage() {
  const dishes = await getDishes();
  return (
    <div className="container-x py-12">
      <h1 className="h-display mb-2">Меню</h1>
      <p className="mb-8 max-w-xl text-ink/65">Калории, белки, жиры и углеводы указаны для каждого блюда. Откройте карточку, чтобы увидеть состав и аллергены.</p>
      <Suspense fallback={<GridSkeleton />}><MenuCatalog dishes={dishes} /></Suspense>
    </div>
  );
}
