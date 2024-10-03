import prisma from "@/lib/prisma";
import RefreshButton from "./refresh-button";

export default async function Table() {
  const startTime = Date.now();
  const videos = await prisma.videos.findMany();
  const duration = Date.now() - startTime;

  return (
    <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
      <div className="flex justify-between items-center mb-4">
        <RefreshButton />
      </div>
      <div className="divide-y divide-gray-900/5">
        {videos.map((video) => (
          <div
            key={video.id}
            className="flex items-center justify-between py-3"
          >
            <div className="flex items-center space-x-4">
              <div className="space-y-1">
                <p className="font-medium leading-none">{video.title}</p>
                <p className="text-sm text-gray-500">{video.type}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
