"use client";
import { useSession } from "next-auth/react";
import AssetDashboardPage from "./dashboard";
import SignIn from "./login/page";

const page = () => {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
        <AssetDashboardPage />
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
