import CheckoutForm from "@/components/CheckoutForm";
export const metadata = { title: "Оформление заказа", description: "Оформление заказа в Healthy Food Almaty.", robots: { index: false } };
export default function CheckoutPage() {
  return (<div className="container-x py-12"><h1 className="h-display mb-8">Оформление заказа</h1><CheckoutForm /></div>);
}
