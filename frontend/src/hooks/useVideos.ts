import { Category } from "@/types";
import { useQuery } from "@tanstack/react-query";

const EXPO_PUBLIC_API_BASE_URL = process.env.EXPO_PUBLIC_API_BASE_URL;

if (!EXPO_PUBLIC_API_BASE_URL)
  throw new Error("Missing EXPO_PUBLIC_API_BASE_URL");

type VideoType = {
  [key: string]: string;
};

export const useVideos = (category: Category) => {
  return useQuery<VideoType>({
    queryKey: ["types", category],
    queryFn: async () => {
      const response = await fetch(
        `${EXPO_PUBLIC_API_BASE_URL}/api/types/${category}`
      );

      if (!response.ok) {
        throw new Error(response.status.toString());
      }

      const responseJson = await response.json();

      return responseJson;
    },
    enabled: !!category,
  });
};
