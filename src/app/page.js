import Link from "next/link";
import { Salad, Leaf, SlidersHorizontal, Bike } from "lucide-react";
import DishCard from "@/components/DishCard";
import Plate from "@/components/Plate";
import { getDishes } from "@/lib/api";
import { MODES } from "@/data/dishes";
import { TARIFFS } from "@/data/programs";
import img1 from "/public/images/1 img health.jpg";

const BENEFITS = [
  { icon: Salad, title: "Прозрачное КБЖУ", text: "Калории и БЖУ указаны у каждого блюда." },
  { icon: Leaf, title: "Свежие ингредиенты", text: "Простой состав без лишнего." },
  { icon: SlidersHorizontal, title: "Индивидуальный выбор", text: "Свой Bowl, рацион или подписка." },
  { icon: Bike, title: "Удобная доставка", text: "Доставка по Алматы и самовывоз." },
];

export default async function Home() {
  const dishes = (await getDishes()).filter((d) => d.popular).slice(0, 6);
  return (
    <>
      <section className="bg-ink text-milk">
        <div className="container-x grid items-center gap-10 py-14 md:grid-cols-[1.15fr_.85fr] md:py-20">
          <div>
            <p className="mb-4 text-xs font-bold tracking-[0.18em] text-lime">HEALTHY FOOD · ALMATY</p>
            <h1 className="h-display">ПИТАЙСЯ ПРАВИЛЬНО. <span className="text-lime">ЖИВИ В СВОЁМ РИТМЕ.</span></h1>
            <p className="mt-6 max-w-lg text-milk/80">Свежие блюда, сбалансированные рационы и индивидуальный подбор питания. Выбирай любимые ингредиенты, контролируй КБЖУ и заказывай полезную еду там, где тебе удобно.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/menu" className="btn-lime">Посмотреть меню</Link>
              <Link href="/build-bowl" className="btn-line">Собрать свой Bowl</Link>
            </div>
          </div>
          <img src="/images/1 img health.jpg" alt="Пример Bowl" className="mx-auto w-full max-w-[400px] h-full object-cover rounded-lg" />
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="h-section mb-8">Питание под твою цель</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {Object.values(MODES).map((m) => (
            <Link key={m.title} href={`/menu?cat=${m.title}`} className={`${m.bg} group flex min-h-[240px] flex-col justify-end gap-2 rounded-lg p-7 transition hover:-translate-y-1`}>
              <h3 className="text-3xl font-extrabold">{m.title}</h3>
              <p className="text-sm">{m.text}</p>
              <span className="text-sm font-bold underline underline-offset-4">Смотреть в меню</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-16">
        <h2 className="h-section mb-8">Популярные блюда</h2>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{dishes.map((d) => <DishCard key={d.id} dish={d} />)}</div>
      </section>

      <section className="bg-ink py-16 text-milk">
        <div className="container-x grid items-center gap-10 md:grid-cols-2">
          <div>
         <iframe
  className="w-full aspect-video rounded-lg"
  src="https://www.youtube.com/embed/wnJlFpodp5o"
  title="Healthy Food video"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
  referrerPolicy="strict-origin-when-cross-origin"
  allowFullScreen
/>
            <h2 className="h-section">СОЗДАЙ BOWL СВОЕЙ МЕЧТЫ</h2>
            <p className="mt-4 max-w-md text-milk/80">Выбирай любимые ингредиенты, экспериментируй с сочетаниями и наблюдай, как меняется КБЖУ твоего блюда.</p>
            <Link href="/build-bowl" className="btn-lime mt-6">Собрать Bowl</Link>
          </div>
          <img src="/images/1 img health.jpg" alt="Пример Bowl" className="mx-auto w-full max-w-[400px] h-full object-cover rounded-lg" />
        </div>
      </section>

      <section className="container-x py-16">
        <h2 className="h-section mb-8">Почему Healthy Food</h2>
        <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {BENEFITS.map(({ icon: Icon, title, text }) => (
            <li key={title} className="rounded-lg border border-ink/10 bg-white p-6">
              <Icon size={26} aria-hidden="true" />
              <h3 className="mt-4 font-extrabold">{title}</h3>
              <p className="mt-1 text-sm text-ink/65">{text}</p>
            </li>
          ))}
        </ul>
      </section>

      <section className="container-x pb-16">
        <h2 className="h-section mb-8">Подписки на обеды</h2>
        <div className="grid gap-5 md:grid-cols-3">
          {TARIFFS.map((t) => (
            <div key={t.id} className="rounded-lg border border-ink/10 bg-white p-6">
              <h3 className="text-xl font-extrabold">{t.id} · {t.days} дней</h3>
              <ul className="mt-3 grid gap-1 text-sm text-ink/65">{t.perks.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          ))}
        </div>
        <Link href="/subscriptions" className="btn-ink mt-6">Выбрать подписку</Link>
      </section>
<div className="container-x py-16">
      <a href="/images/exel/menu.xlsx" download>
        Скачать Excel диаграмму ,
      </a>
    </div>
      <section className="bg-lime py-16 text-center">
        <div className="container-x">
          <h2 className="h-section mx-auto max-w-2xl">ТВОЙ СЛЕДУЮЩИЙ ПОЛЕЗНЫЙ ВЫБОР НАЧИНАЕТСЯ ЗДЕСЬ</h2>
          <Link href="https://forms.gle/3PsASHYCBXA6BLGWA" target="_blank" className="btn-ink mt-6">Пройти опрос</Link>
        </div>
      </section>
    </>
  );
}
