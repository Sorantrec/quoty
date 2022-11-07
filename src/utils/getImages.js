export default async function getImages(author) {
  let url = "https://en.wikipedia.org/w/api.php";
  const title = String(author).split(" ").join("_");

  const params = {
    action: "query",
    prop: "pageimages|pageterms&piprop=thumbnail&pithumbsize=430",
    titles: title,
    format: "json",
    formatversion: 2,
  };

  url = `${url}?origin=*`;
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  try {
    const res = await fetch(url);
    const resJson = await res.json();
    const page = await resJson.query.pages[0];
    const thumbnail = page.thumbnail?.source;
    if (thumbnail === undefined) return undefined;

    const imgUrl = thumbnail;
    return imgUrl;
  } catch (error) {
    console.log(error);
  }
}
