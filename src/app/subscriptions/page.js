import { Suspense } from "react";
import SubscriptionPlanner from "@/components/SubscriptionPlanner";

export const metadata = {
  title: "Подписки",
  description: "Подписки на обеды на 10, 20 и 30 дней: START, SMART и PRO. Выберите рацион, дни и способ получения.",
};

export default function SubscriptionsPage() {
  return (
    <div className="container-x py-12">
      <h1 className="h-display mb-2">Подписки</h1>
      <p className="mb-10 max-w-xl text-ink/65">Выберите тариф и настройте питание под свой график.</p>
      <Suspense fallback={<div className="h-64 animate-pulse rounded-lg bg-ink/10" />}><SubscriptionPlanner /></Suspense>
    </div>
  );
}
