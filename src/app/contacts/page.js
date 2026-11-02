import ContactForm from "@/components/ContactForm";
import { SITE } from "@/config/site";

export const metadata = { title: "Контакты", description: "Адрес, телефон, WhatsApp, Instagram и график работы Healthy Food Almaty." };

export default function ContactsPage() {
  return (
    <div className="container-x grid gap-12 py-12 md:grid-cols-2">
      <div>
        <h1 className="h-display mb-6">Контакты</h1>
        <address className="grid gap-2 not-italic text-ink/80">
          <p>{SITE.address}</p><p>{SITE.hours}</p>
          <p>Телефон: <a className="font-bold underline" href={`tel:${SITE.phone.replace(/\s/g, "")}`}>{SITE.phone}</a></p>
          <p><a className="font-bold underline" href={SITE.whatsapp}>WhatsApp</a> · <a className="font-bold underline" href={SITE.instagram}>Instagram</a></p>
        </address>
        <iframe title="Карта: расположение кафе" loading="lazy" className="mt-6 h-72 w-full rounded-lg border-0"
          src={`https://www.google.com/maps?q=${encodeURIComponent(SITE.mapQuery)}&output=embed`} />
      </div>
      <div><h2 className="mb-4 text-2xl font-extrabold">Напишите нам</h2><ContactForm /></div>
    </div>
  );
}
