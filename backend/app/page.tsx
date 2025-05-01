
'use client';

import { Suspense, useState, useEffect } from 'react';
import { useAuth, useUser, SignInButton, SignUpButton, UserButton, SignOutButton } from '@clerk/nextjs';
import Table from '@/components/table';
import TablePlaceholder from '@/components/table-placeholder';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();
  const { user } = useUser(); // Access user details
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loadingAuth, setLoadingAuth] = useState(true);
  const [title, setTitle] = useState('');
  const [link, setLink] = useState('');
  const [type, setType] = useState('OTHER');
  const [length, setLength] = useState('');
  const [topic, setTopic] = useState('');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (isSignedIn && user) {
      const userEmail = user.primaryEmailAddress?.emailAddress;

      if (userEmail) {
        fetch(`/api/admins/${userEmail}`)
          .then((res) => res.json())
          .then((data) => {
            setIsAuthenticated(data.authenticated);
            setLoadingAuth(false);
          })
          .catch((error) => {
            console.error('Error checking authentication:', error);
            setLoadingAuth(false);
          });
      } else {
        setLoadingAuth(false);
      }
    } else {
      setLoadingAuth(false);
    }
  }, [isSignedIn, user]);

  const handleAddVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');

    try {
      const response = await fetch('/api/videos', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ title, link, type, length, show: true }),
        body: JSON.stringify({
          title,
          link,
          type,
          length,
          show: true,
          topic,           // send the topic
        }),
      });

      // parse & log the JSON so you see exactly what came back
      const data = await response.json();
      console.log('POST /api/videos →', response.status, data);


      if (!response.ok) {
        // const errorData = await response.json();
        // throw new Error(errorData.error || 'Failed to add video');
        
        // show errors in UI
        if (data.errors) {
          throw new Error(data.errors.map((e: any) => e.message).join('; '));
        }
        throw new Error(data.error || `Failed to add video (${response.status})`);
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

  if (!isLoaded || loadingAuth) return <p>Loading...</p>;

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
      ) : !isAuthenticated ? (
        <div className="flex flex-col items-center">
          <p className="text-red-500 text-center mb-4">You are not authorized to access this page.</p>
          <SignOutButton>
            <button className="bg-red-500 text-white px-4 py-2 rounded">Sign Out</button>
          </SignOutButton>
        </div>
      ) : (
        <>
          <UserButton />
          <div className="mt-10 w-full max-w-3xl flex justify-center">
            <Suspense fallback={<TablePlaceholder />}>
              <Table isSignedIn={isSignedIn} />
            </Suspense>
          </div>
          <div className="mt-10 w-full max-w-lg flex flex-col items-center">
            <h2 className="text-xl font-semibold mb-4">Add New Video</h2>
            {message && <p className="text-green-500 mb-4">{message}</p>}
            <form onSubmit={handleAddVideo} className="flex flex-col space-y-4 w-full">
              <input
                type="text"
                placeholder="Topic"
                value={topic}
                onChange={e => setTopic(e.target.value)}
                required
                className="p-2 border rounded w-full"
              />
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
