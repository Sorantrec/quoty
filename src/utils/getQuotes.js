export default async function getQuotes() {
  const result = await fetch("https://type.fit/api/quotes");
  const jsonResult = await result.json();
  return jsonResult;
}