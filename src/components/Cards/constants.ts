import type { cardVariation } from "./types";

export const notice = <cardVariation>{
  cardStyle: "bg-mercury-100/80 hover:bg-mercury-100",
  circleStyle: "bg-selenium-400",
  iconVariation: "entypo:megaphone",
  iconColor: "white",
};
export const alert = <cardVariation>{
  cardStyle: "bg-protoc-50/80 hover:bg-protoc-100/80",
  circleStyle: "bg-protoc-300/80",
  iconVariation: "ph:warning-fill",
  iconColor: "white",
};

export const variations = <Record<string, cardVariation>>{
  notice: notice,
  alert: alert,
};
