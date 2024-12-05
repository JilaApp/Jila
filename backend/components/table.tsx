// components/table.tsx
'use client';

import { useEffect, useState } from 'react';

interface Video {
  id: string;
  title: string;
  type: string;
  length: string;
  link: string;
}

interface TableProps {
  isSignedIn: boolean;
}

export default function Table({ isSignedIn }: TableProps) {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchVideos() {
      try {
        const response = await fetch('/api/videos');
        if (!response.ok) {
          throw new Error('Failed to fetch videos');
        }
        const data = await response.json();
        setVideos(data);
      } catch (error) {
        console.error('Error fetching videos:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchVideos();
  }, []);


  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/videos?id=${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete video');
      }
      setVideos(videos.filter(video => video.id !== id));
    } catch (error) {
      console.error('Error deleting video:', error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Type</th>
          <th>Length</th>
          <th>Link</th>
          {isSignedIn && <th>Actions</th>} {/* Show actions column if signed in */}
        </tr>
      </thead>
      <tbody>
        {videos.map((video) => (
          <tr key={video.id}>
            <td>{video.title}</td>
            <td>{video.type}</td>
            <td>{video.length}</td>
            <td>
              <a href={`https://youtube.com/watch?v=${video.link}`} target="_blank" rel="noopener noreferrer">
                {video.link}
              </a>
            </td>
            {isSignedIn && (
              <td>
                <button onClick={() => handleDelete(video.id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            )}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
