import CartView from "@/components/CartView";
export const metadata = { title: "Корзина", description: "Ваш заказ в Healthy Food Almaty.", robots: { index: false } };
export default function CartPage() {
  return (<div className="container-x max-w-3xl py-12"><h1 className="h-display mb-8">Корзина</h1><CartView /></div>);
}
