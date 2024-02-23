import getThisYearsData from "./data.js";
import { calcMax, calcMaxWithTime } from "./calc-max.js";
import { printData, printDataWithTime } from "./print-data.js";
import { container } from "./sort-btn.js";

const latestUpdate = document.querySelector("#latest-update");
const datetimeBtn = document.querySelector("#datetime-btn");
const dateBtn = document.querySelector("#date-btn");
const clockIcon = document.querySelector("#clock-icon");

/*let apiData = [];
let localStorageApiData = localStorage.getItem("apiData");

if (localStorageApiData) {
  apiData = JSON.parse(localStorageApiData);
} else {
  apiData = await fetchOpenData();
}*/

const apiData = await fetchOpenData();
//console.log(apiData);
const values = apiData.value;
let thisYearsData = [];

async function fetchOpenData() {
  const openDataLink = "https://opendata-download-metobs.smhi.se/api/version/1.0/parameter/1/station/89230/period/latest-months/data.json";
  const response = await fetch(openDataLink);
  const latestMonthsData = await response.json();
  //localStorage.setItem("apiData", JSON.stringify(latestMonthsData));
  return latestMonthsData;
}

thisYearsData = getThisYearsData(values, thisYearsData);
//console.log(thisYearsData);

const latest = thisYearsData[thisYearsData.length - 1].datetime;
latestUpdate.innerText = `Senast uppdaterad: ${latest}`;

let maxTemps = calcMax(thisYearsData);

maxTemps.forEach(entry => {
  printData(entry);
});

datetimeBtn.addEventListener("click", function () {
  container.innerText = "";
  let maxTempsWithTime = calcMaxWithTime(thisYearsData);

  maxTempsWithTime.forEach(entry => {
    printDataWithTime(entry);
  });
  datetimeBtn.style.display = "none";
  clockIcon.style.display = "none";
  dateBtn.style.display = "inline-block";
});

dateBtn.addEventListener("click", function () {
  container.innerText = "";

  maxTemps.forEach(entry => {
    printData(entry);
  });
  dateBtn.style.display = "none";
  datetimeBtn.style.display = "inline-block";
  clockIcon.style.display = "inline-block";
});
