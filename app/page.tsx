"use client";
import { useSession } from "next-auth/react";
import DashboardPage from "./dashboard";
import Dashboard from "./dashboard";
import SignIn from "./login/page";

const page = () => {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
        <DashboardPage />
      </>
    );
  }
  return (
    <>
      <SignIn />
    </>
  );
};

export default page;
