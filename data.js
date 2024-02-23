import Post from "./Post.js";

export default function getThisYearsData(values, thisYear) {

  for (let i = 0; i < values.length; i++) {
    let value = values[i];
    if (value.date >= 1704063600000) {
      let timestamp = value.date;
      let datetime = value.date;
      let temp = value.value;
      let post = new Post(timestamp, datetime, temp);
      thisYear.push(post);
    }
  }
  return thisYear;
}
