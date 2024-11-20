export const categories = [
  "transport",
  "legal",
  "medical",
  "career",
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
  transport: {
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
  career: {
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
