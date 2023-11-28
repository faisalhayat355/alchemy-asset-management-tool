"use client";
import { useSession } from "next-auth/react"
import DashboardPage from "./dashboard";
import SignIn from "./login/page";

const page = () => {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
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
