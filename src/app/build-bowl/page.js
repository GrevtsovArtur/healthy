import BowlBuilder from "@/components/BowlBuilder";
import { getBowlSteps } from "@/lib/api";

export const metadata = {
  title: "Конструктор Bowl",
  description: "Соберите свой Bowl: основа, белок, овощи, дополнения и соус. КБЖУ и цена пересчитываются сразу.",
};

export default async function BuildBowlPage() {
  const steps = await getBowlSteps();
  return (
    <div className="container-x py-12">
      <h1 className="h-display mb-2">Создай Bowl своей мечты</h1>
      <p className="mb-10 max-w-xl text-ink/65">Выбирай ингредиенты и наблюдай, как меняется КБЖУ и цена блюда.</p>
      <BowlBuilder steps={steps} />
    </div>
  );
}
