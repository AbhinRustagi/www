import {
  PiBriefcaseFill,
  PiBuildingFill,
  PiStarFourFill,
} from "react-icons/pi";

export interface TimelineItem {
  type: "work" | "education" | "life_update";
  title: string;
  date: string;
  description?: string;
}

export const TYPE_DISPLAY_MAP = {
  work: {
    display: "Work",
    icon: PiBriefcaseFill,
    color: "text-blue-400",
  },
  education: {
    display: "Education",
    icon: PiBuildingFill,
    color: "text-yellow-300",
  },
  life_update: {
    display: "Life Update",
    icon: PiStarFourFill,
    color: "text-green-300",
  },
};
