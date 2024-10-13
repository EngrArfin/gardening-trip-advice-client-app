import { Metadata } from "next";
import MyProfile from "./my-profile/page";
import UserNavBar from "@/components/User/UserNavBar";
import Profile from "@/components/User/Profile/Profile";

export const metadata: Metadata = {
  title: "gardening Trip Advice",
  description: "Its For gardening",
};

export default function ProfileLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserNavBar></UserNavBar>
      <div className="min-h-screen my-3">
        <div className="flex justify-between">
          <div className="w-[30%]">
            <Profile></Profile>
          </div>
          <div className="w-[60%] bg-base-200 rounded-box ml-2">{children}</div>
          <div className="w-[20%] ml-2">Hello</div>
        </div>
      </div>
    </div>
  );
}
