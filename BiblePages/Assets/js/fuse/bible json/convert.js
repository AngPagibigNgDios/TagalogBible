const fs = require("fs");const data = JSON.parse(
  fs.readFileSync("bible.json", "utf8")
);const result = {};data.forEach(verse => {  const bn = verse.bn;
  const chp = String(verse.chp);  if (!result[bn]) {    result[bn] = {
      tes: verse.tes,
      tesl: verse.tesl,
      bke: verse.bke,
      bkt: verse.bkt,
      bkl: verse.bkl,
      chapters: {}
    };
  }  if (!result[bn].chapters[chp]) {
    result[bn].chapters[chp] = [];
  }  result[bn].chapters[chp].push({
    v: verse.v,
    eng: verse.eng,
    tag: verse.tag
  });});fs.writeFileSync(
  "bible-optimized.json",
  JSON.stringify(result, null, 2)
);console.log("Done.");