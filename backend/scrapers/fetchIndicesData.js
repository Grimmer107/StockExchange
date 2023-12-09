const cheerio = require("cheerio");
const axios = require("axios");

let indices = {};

const innerObjKeys = [
  "High",
  "Low",
  "Volume",
  "OneYear",
  "YTD",
  "PrevClose",
  "DayRange",
  "FiftyTwoWeekRange",
];

async function getAndSaveIndicesData() {
  await axios.get("https://dps.psx.com.pk/").then((res) => {
    const $ = cheerio.load(res.data);

    $(".tabs__panel.marketIndices__details").each((i, element) => {
      if (i > 3) return false;
      const tab = $(element);
      const indexType = tab.attr("data-name");
      const indexValue = tab.find("h1.marketIndices__price").text();
      let innerObj = {};
      innerObj["Value"] = indexValue;
      tab.find(".stats_value").each((j, value) => {
        innerObj[innerObjKeys[j]] = $(value).text().trim();
      });
      indices[indexType] = innerObj;
    });
  });

  await axios
    .post("http://localhost:5000/api/indicesData", indices)
    .then(() => console.log("Data wriiten in database successfully."))
    .catch((err) => console.log("Request Crashed\n", err));
}

getAndSaveIndicesData();
