import { VideoType } from "@prisma/client";

export interface VideoArgs {
  title: string;
  show?: boolean;
  type: VideoType;
  length: string;
  link: string;
}
