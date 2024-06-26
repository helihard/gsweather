export function formatTimestamp(timestamp, timeZone) {
  const date = new Date(timestamp);
  const formats = {
    timeZone,
    timeZoneName: "short",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "2-digit",
    minute: "numeric",
    //second: "numeric",
    hour12: false
  };
  return new Intl.DateTimeFormat("sv-SE", formats).format(date);
}

export function getColour(temp) {
  if (temp >= -5.9 && temp <= -3) {
    return "cornflowerblue";
  } else if (temp >= -2.9 && temp <= -0.1) {
    return "powderblue";
  } else if (temp >= 0 && temp <= 2.9) {
    return "white";
  } else if (temp >= 3 && temp <= 5.9) {
    return "bisque";
  } else if (temp >= 6 && temp <= 8.9) {
    return "burlywood";
  } else if (temp >= 9 && temp <= 11.9) {
    return "darkkhaki";
  } else if (temp >= 12 && temp <= 14.9) {
    return "darkseagreen";
  } else if (temp >= 15 && temp <= 17.9) {
    return "darkolivegreen";
  } else if (temp >= 18 && temp <= 20.9) {
    return "forestgreen";
  } else if (temp >= 21 && temp <= 23.9) {
    return "darkgreen";
  } else if (temp >= 24 && temp <= 26.9) {
    return "gold";
  } else if (temp >= 27 && temp <= 29.9) {
    return "goldenrod";
  }
}
