import { ClerkLoaded, ClerkProvider, SignIn, SignUp } from '@clerk/nextjs';

export default function AuthPage() {
  return (
    <ClerkProvider>
      <ClerkLoaded>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <SignIn />
          <SignUp />
        </div>
      </ClerkLoaded>
    </ClerkProvider>
  );
}

