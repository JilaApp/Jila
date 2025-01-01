export const categories = [
  "transportation",
  "legal",
  "medical",
  "professional_development",
  "other",
] as const;

export type Category = (typeof categories)[number];

export enum iconType {
  Entypo,
  FontAwesome,
}

export const iconMap: Record<
  Category,
  {
    name: string;
    type: iconType.FontAwesome | iconType.Entypo;
    label: string;
    color: string;
  }
> = {
  transportation: {
    name: "bus",
    type: iconType.FontAwesome,
    label: "Transport",
    color: "#577590",
  },
  legal: {
    name: "balance-scale",
    type: iconType.FontAwesome,
    label: "Legal",
    color: "#9F2020",
  },
  medical: {
    name: "heartbeat",
    type: iconType.FontAwesome,
    label: "Medical",
    color: "#F9C74F",
  },
  professional_development: {
    name: "suitcase",
    type: iconType.FontAwesome,
    label: "Career",
    color: "#90BE6D",
  },
  other: {
    name: "dots-three-horizontal",
    type: iconType.Entypo,
    label: "Other",
    color: "#9C9C9C",
  },
};

export interface Video {
  id: string;
  title: string;
  show: boolean;
  type: Category;
  length: string;
  link: string;
  topic: string;
  topic_id: string;
}
