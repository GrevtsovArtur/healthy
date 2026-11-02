export const metadata = { title: "Админ-панель", robots: { index: false } };

export default function Page() {
  return (<div className="container-x py-12"><h1 className="h-display mb-4">Админ-панель</h1><p className="max-w-xl text-ink/65">Раздел в разработке. Здесь появятся данные, которые приходят из базы PostgreSQL и API (см. src/lib/api.js и prisma/schema.prisma).</p></div>);
}
