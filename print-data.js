import { getColour } from "./process-data-utils.js";

const container = document.querySelector("main");

export function printData(data) {
  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data-div");
  let dateParagraph = document.createElement("p");
  let tempParagraph = document.createElement("p");
  tempParagraph.classList.add("temp-paragraph");

  let colour = getColour(data.maxTemperature);
  dataDiv.style.backgroundColor = colour;

  dateParagraph.innerText = data.date; //+ " " + data.observationTime;
  tempParagraph.innerText = data.maxTemperature.toFixed(1);
  dataDiv.append(dateParagraph, tempParagraph);
  container.append(dataDiv);
}

export function printDataWithTime(data) {
  let dataDiv = document.createElement("div");
  dataDiv.classList.add("data-div");
  let dateParagraph = document.createElement("p");
  let tempParagraph = document.createElement("p");
  tempParagraph.classList.add("temp-paragraph");

  let colour = getColour(data.maxTemperature);
  dataDiv.style.backgroundColor = colour;

  dateParagraph.innerText = data.date + " " + data.observationTime;
  tempParagraph.innerText = data.maxTemperature.toFixed(1);
  dataDiv.append(dateParagraph, tempParagraph);
  container.append(dataDiv);
}

