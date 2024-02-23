import { formatTimestamp } from "./process-data-utils.js";

export default class Post {
  constructor(timestamp, datetime, temp) {
    this.timestamp = timestamp;
    this.datetime = formatTimestamp(datetime, "Europe/Stockholm");
    this.temp = parseFloat(temp);
  }
}
