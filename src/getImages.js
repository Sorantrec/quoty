export default async function getImages(author) {
  let url = "https://en.wikipedia.org/w/api.php";
  const title = String(author).split(" ").join("_");

  const params = {
    action: "query",
    prop: "pageimages|pageterms",
    pagetermsPiprop: "original",
    titles: title,
    format: "json",
    formatversion: 2,
    special: "FilePath",
  };

  url = url + "?origin=*";
  Object.keys(params).forEach(function (key) {
    url += "&" + key + "=" + params[key];
  });

  try {
    const res = await fetch(url);
    const resJson = await res.json();
    var page = await resJson.query.pages[0];
    const pageImage = page.pageimage;
    const imgUrl = `https://en.wikipedia.org/wiki/Special:FilePath/${pageImage}`;
    return imgUrl;
  } catch (error) {
    console.log(error);
  }
}
