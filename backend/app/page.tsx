// app/page.tsx
'use client';

import { Suspense, useState } from 'react';
import { useAuth, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Table from '@/components/table';
import TablePlaceholder from '@/components/table-placeholder';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState('OTHER');
  const [length, setLength] = useState('');
  const [message, setMessage] = useState('');

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, link, type, length, show: true }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to add video');
      }

      setMessage('Video added successfully!');
      setTitle('');
      setLink('');
      setType('OTHER');
      setLength('');
    } catch (error: any) {
      setMessage(error.message);
    }
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center">
      <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
        Jila Admin Portal
      </h1>

      {!isSignedIn ? (
        <div className="flex space-x-4 mt-6">
          <SignInButton>
            <button className="bg-blue-500 text-white px-4 py-2 rounded">Sign In</button>
          </SignInButton>
          <SignUpButton>
            <button className="bg-green-500 text-white px-4 py-2 rounded">Sign Up</button>
          </SignUpButton>
        </div>
      ) : (
        <>
          <UserButton />

          {/* Centered Table Component */}
          <div className="mt-10 w-full max-w-3xl flex justify-center">
            <Suspense fallback={<TablePlaceholder />}>
              <Table isSignedIn={isSignedIn} />
            </Suspense>
          </div>

          {/* Centered Add New Video Section */}
          <div className="mt-10 w-full max-w-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Add New Video</h2>
            {message && <p className="text-green-500 mb-4">{message}</p>}
            <form onSubmit={handleAddVideo} className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                className="p-2 border rounded w-full"
              />
              <input
                type="text"
                placeholder="YouTube Link"
                value={link}
                onChange={(e) => setLink(e.target.value)}
                required
                className="p-2 border rounded w-full"
              />
              <select
                value={type}
                onChange={(e) => setType(e.target.value)}
                className="p-2 border rounded w-full"
              >
                <option value="PROFESSIONAL_DEVELOPMENT">Professional Development</option>
                <option value="MEDICAL">Medical</option>
                <option value="TRANSPORTATION">Transportation</option>
                <option value="LEGAL">Legal</option>
                <option value="OTHER">Other</option>
              </select>
              <input
                type="text"
                placeholder="Length"
                value={length}
                onChange={(e) => setLength(e.target.value)}
                required
                className="p-2 border rounded w-full"
              />
              <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full">
                Add Video
              </button>
            </form>
          </div>
        </>
      )}
    </main>
  );
}
