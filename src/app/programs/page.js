import Link from "next/link";
import Macros from "@/components/Macros";
import { PROGRAMS } from "@/data/programs";
import { formatPrice } from "@/lib/format";

export const metadata = {
  title: "Рационы",
  description: "Готовые рационы FIT, BALANCE и LIGHT: пример дневного меню, калорийность и КБЖУ.",
};

export default function ProgramsPage() {
  return (
    <div className="container-x py-12">
      <h1 className="h-display mb-2">Рационы</h1>
      <p className="mb-10 max-w-xl text-ink/65">Выберите готовую программу питания на день. Стоимость и состав ниже — демонстрационные.</p>
      <div className="grid gap-5 md:grid-cols-3">
        {Object.values(PROGRAMS).map((p) => (
          <article key={p.id} className="flex flex-col gap-3 rounded-lg border border-ink/10 bg-white p-6">
            <h2 className="text-2xl font-extrabold">{p.title}</h2>
            <p className="text-sm text-ink/70">{p.description}</p>
            <p className="text-sm">Приёмов пищи в день: <b>{p.meals}</b></p>
            <Macros kcal={p.kcal} p={p.protein} f={p.fat} c={p.carbs} className="text-sm" />
            <div>
              <h3 className="mb-1 text-sm font-bold">Пример дневного меню</h3>
              <ul className="list-disc pl-5 text-sm text-ink/70">{p.sample.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
            <div className="mt-auto flex items-center justify-between pt-3">
              <span className="font-extrabold">{formatPrice(p.pricePerDay)} / день</span>
              <Link href={`/subscriptions?mode=${p.id}`} className="btn-lime px-4 py-2">Выбрать рацион</Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
