"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "@/hooks/use-toast";

const SignOutLink = () => {
  const handleLogout = () => {
    toast({ description: "You have been signed out" });
  };
  return (
    <SignOutButton redirectUrl="/">
      <button onClick={handleLogout} className="w-full text-left">
        Sign out
      </button>
    </SignOutButton>
  );
};
export default SignOutLink;
