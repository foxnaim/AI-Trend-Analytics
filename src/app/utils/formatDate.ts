export function formatDate(date: string | Date, locale: string = "ru-RU"): string {
 const parsedDate = new Date(date);
 return parsedDate.toLocaleDateString(locale, {
   year: "numeric",
   month: "long",
   day: "numeric",
 });
}
