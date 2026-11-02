
const i = (id, name, kcal, p, f, c, grams, price, color) => ({ id, name, per100: { kcal, p, f, c }, grams, price, color });

export const BOWL_STEPS = [
  { id: "base", title: "Основа", multiple: false, items: [
    i("rice", "Рис", 130, 2.6, 0.3, 28, 150, 300, "#E9E2C8"), i("quinoa", "Киноа", 120, 4.4, 1.9, 21, 150, 500, "#D9B77A"),
    i("bulgur", "Булгур", 83, 3.1, 0.2, 19, 150, 350, "#C79B5B"), i("lettuce", "Салат", 15, 1.4, 0.2, 2.9, 100, 300, "#7FB04A") ] },
  { id: "protein", title: "Белок", multiple: false, items: [
    i("chicken", "Курица", 165, 31, 3.6, 0, 100, 900, "#E8C9A0"), i("beef", "Говядина", 250, 26, 15, 0, 100, 1400, "#8B4A3A"),
    i("salmon", "Лосось", 208, 20, 13, 0, 100, 1800, "#F08A6C"), i("tofu", "Тофу", 144, 17, 8.7, 2.8, 100, 700, "#F1E6C4") ] },
  { id: "veg", title: "Овощи", multiple: true, items: [
    i("cucumber", "Огурец", 15, 0.7, 0.1, 3.6, 60, 150, "#9CCB6B"), i("tomato", "Томаты", 18, 0.9, 0.2, 3.9, 60, 200, "#D8452F"),
    i("carrot", "Морковь", 41, 0.9, 0.2, 10, 60, 150, "#E8892B"), i("broccoli", "Брокколи", 34, 2.8, 0.4, 7, 60, 300, "#3F7D3A") ] },
  { id: "extras", title: "Дополнения", multiple: true, items: [
    i("avocado", "Авокадо", 160, 2, 15, 9, 50, 600, "#A8C56B"), i("corn", "Кукуруза", 86, 3.3, 1.4, 19, 50, 200, "#F2C94C"),
    i("edamame", "Эдамаме", 121, 12, 5, 9, 50, 400, "#6FA54B"), i("sesame", "Кунжут", 573, 18, 50, 23, 10, 150, "#F4EBD0") ] },
  { id: "sauce", title: "Соус", multiple: false, items: [
    i("yogurt", "Йогуртовый", 90, 3, 5, 8, 40, 100, "#FFFFFF"), i("teriyaki", "Терияки", 89, 5.9, 0, 16, 40, 150, "#5A3320"),
    i("sesame-sauce", "Кунжутный", 300, 6, 28, 8, 30, 200, "#D8C08A") ] },
];
