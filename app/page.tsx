"use client";
import { useSession } from "next-auth/react";
import DashboardHome from "./dashboard/page";
import SignIn from "./login/page";

const page = () => {
  const { data: session, status } = useSession()
  if (status === "authenticated") {
    return (
      <>
        {/* Signed in as {session.user.email} <br />
        <button onClick={() => signOut()}>Sign out</button> */}
        {/* <AssetDashboardPage /> */}
        <DashboardHome/>
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
