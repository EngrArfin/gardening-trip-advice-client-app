import SideBar from "@/components/User/SideBar";
import UserNavBar from "@/components/User/UserNavBar";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "gardening Trip Advice",
  description: "Its For gardening",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <UserNavBar />
      <div className="min-h-screen my-3">
        <div className="flex justify-between">
          <div className="w-[20%]">
            <SideBar />
          </div>
          <div className="w-[60%] bg-base-200 rounded-box ml-2">{children}</div>
          <div className="w-[20%] ml-2">
            <SideBar />
          </div>
        </div>
      </div>
    </div>
  );
}
