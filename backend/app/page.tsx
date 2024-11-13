// app/page.tsx
'use client';

import { Suspense } from 'react';
import { useAuth, SignInButton, SignUpButton, UserButton } from '@clerk/nextjs';
import Table from '@/components/table';
import TablePlaceholder from '@/components/table-placeholder';

export default function Home() {
  const { isLoaded, isSignedIn } = useAuth();

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
          <Suspense fallback={<TablePlaceholder />}>
            <Table isSignedIn={isSignedIn} /> {/* Pass isSignedIn as a prop */}
          </Suspense>
        </>
      )}
    </main>
  );
}
