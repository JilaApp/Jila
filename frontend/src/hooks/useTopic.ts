import { Category } from "@/types";
import { useQuery } from "@tanstack/react-query";

const EXPO_PUBLIC_API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!EXPO_PUBLIC_API_BASE_URL)
  throw new Error("Missing EXPO_PUBLIC_API_BASE_URL");

type VideoType = {
  id: string;
  title: string;
  show: boolean;
  type: string;
  length: string;
  link: string;
  topic: string;
  topic_id: string;
  sequence: number;
  google_drive_link: string; 
  num_upvotes: number;
  num_downvotes: number;
};

export const useTopic = (topicId: string) => {
  return useQuery<VideoType[]>({
    queryKey: ["topic", topicId],
    queryFn: async () => {
      const response = await fetch(
        `${EXPO_PUBLIC_API_BASE_URL}/api/topic/${topicId}`
      );

      if (!response.ok) {
        throw new Error(response.status.toString());
      }

      const responseJson = await response.json();

      return responseJson;
    },
    enabled: !!topicId,
  });
};
