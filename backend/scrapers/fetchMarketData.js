const cheerio = require("cheerio");
const axios = require("axios");
//const fs = require("fs");

let jsonDocObject = {};
let jsonDoc = [];

let names = [];
let scrips = [];
let ldcps = [];
let opens = [];
let highs = [];
let lows = [];
let currents = [];
let changes = [];
let volumes = [];

let container = [scrips, ldcps, opens, highs, lows, currents, changes, volumes];

async function getAndSaveMarketData() {
  await axios.get("https://www.psx.com.pk/market-summary/").then((res) => {
    const $ = cheerio.load(res.data);

    $(".red-text-td td, .green-text-td td, .blue-text-td td").each((i, element) => {
      const tableContents = $(element);

      const cellText = tableContents.text().trim();

      if (i % 8 == 0) {
        const dataScrip = tableContents.attr("data-srip");
        container[0].push(dataScrip);
      } else {
        container[i % 8].push(cellText);
      }
    });

    $("td[class=dataportal]").each((i, element) => {
      names[i] = $(element).text().trim();
    });

    const listSize = scrips.length;
    for (i = 0; i < 250; i++) {
      let tempObj = {
        name: names[i],
        scrip: scrips[i],
        ldcp: ldcps[i],
        open: opens[i],
        high: highs[i],
        low: lows[i],
        current: currents[i],
        change: changes[i],
        volume: volumes[i],
      };

      jsonDoc.push(tempObj);
    }

    jsonDocObject = {
      marketData: jsonDoc,
    };

    //console.log(names);

    /* Write the json data to file */
    /*fs.writeFile("data.json", JSON.stringify(jsonDocObject, null, 3), (error) => {
      if (!error) {
        console.log("Data successfully fetched.");
      } else {
        console.log(error.message);
      }
    });*/
  });
  /** Save fetched data in the database */
  await axios
    .post("http://localhost:5000/api/marketData", jsonDocObject)
    .then(() => console.log("Data wriiten in database successfully."))
    .catch((err) => console.log("Request Crashed\n", err));
}

getAndSaveMarketData();
