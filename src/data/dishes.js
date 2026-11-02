
const d = (id, name, category, mode, description, price, kcal, protein, fat, carbs, weight, ingredients, allergens, hue, image, popular = false) =>
  ({ id, name, category, mode, description, price, kcal, protein, fat, carbs, weight, ingredients, allergens, hue, popular, image });

export const DISHES = [
  d("b1", "Bowl с курицей и киноа", "bowls", "FIT", "Куриная грудка, киноа, брокколи, йогуртовый соус", 2900, 520, 42, 14, 48, 380, ["курица", "киноа", "брокколи", "огурец"], ["молочные"], 100, "/healthy/images/bowl-chicken.png", true),
  d("b2", "Bowl с лососем", "bowls", "BALANCE", "Лосось, рис, авокадо, эдамаме", 3900, 610, 34, 24, 60, 400, ["лосось", "рис", "авокадо", "эдамаме"], ["рыба", "соя", "кунжут"], 30, "/healthy/images/bowl-salmon.png", true),
  d("b3", "Bowl с тофу", "bowls", "LIGHT", "Тофу, булгур, овощи, кунжутный соус", 2600, 410, 22, 13, 52, 360, ["тофу", "булгур", "томаты", "морковь"], ["соя", "глютен", "кунжут"], 140, "/healthy/images/bowl-tofu.png", true),
  d("s1", "Салат с говядиной", "salads", "FIT", "Говядина, микс салата, томаты", 3200, 380, 36, 16, 18, 300, ["говядина", "салат", "томаты", "огурец"], [], 10, "/healthy/images/salad-beef.png", true),
  d("s2", "Греческий лайт", "salads", "LIGHT", "Огурец, томаты, фета, оливки", 1900, 240, 9, 18, 12, 260, ["огурец", "томаты", "фета", "оливки"], ["молочные"], 60, "/healthy/images/salad-greek.png", true),
  d("s3", "Цезарь с курицей", "salads", "BALANCE", "Курица, романо, пармезан, сухарики", 2700, 450, 32, 24, 25, 280, ["курица", "романо", "пармезан"], ["глютен", "молочные", "яйца"], 90, "/healthy/images/salad-ceasar.png", true),
  d("z1", "Овсянка с ягодами", "breakfast", "LIGHT", "Овсянка на молоке, ягоды, миндаль", 1500, 320, 11, 9, 50, 250, ["овсянка", "молоко", "ягоды", "миндаль"], ["глютен", "молочные", "орехи"], 40, "/healthy/images/breakfast-oatmeal.png", true),
  d("z2", "Омлет с овощами", "breakfast", "FIT", "Три яйца, шпинат, томаты", 1700, 290, 24, 19, 6, 220, ["яйца", "шпинат", "томаты"], ["яйца"], 110, "/healthy/images/breakfast-omelette.png", true),
  d("d1", "Смузи зелёный", "drinks", "LIGHT", "Шпинат, яблоко, банан", 1300, 140, 3, 1, 30, 300, ["шпинат", "яблоко", "банан"], [], 120, "/healthy/images/drink-smoothie.png", true),
  d("d2", "Протеиновый коктейль", "drinks", "FIT", "Молоко, банан, протеин", 1800, 260, 28, 4, 26, 350, ["молоко", "банан", "протеин"], ["молочные"], 20, "/healthy/images/drink-protein.png", true),
  d("t1", "Чизкейк без сахара", "desserts", "LIGHT", "Творожный, на миндальной муке", 1600, 230, 12, 14, 12, 110, ["творог", "миндаль"], ["молочные", "орехи", "яйца"], 70, "/healthy/images/dessert-cheesecake.png", true),
  d("t2", "Энергетический шар", "desserts", "BALANCE", "Финики, орехи, кокос", 900, 180, 4, 8, 24, 50, ["финики", "грецкий орех", "кокос"], ["орехи"], 30, "/healthy/images/dessert-energy-ball.png", true),
];

export const MODES = {
  FIT: { title: "FIT", text: "Высокобелковые блюда для активных людей и спортсменов.", bg: "bg-lime" },
  BALANCE: { title: "BALANCE", text: "Сбалансированное питание на каждый день.", bg: "bg-clay" },
  LIGHT: { title: "LIGHT", text: "Блюда с контролируемой калорийностью.", bg: "bg-white" },
};
