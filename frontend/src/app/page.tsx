"use client";

import { Layout } from "@/components/Layout";
import { useAccount } from "wagmi";

export default function Home() {
  const { isConnected } = useAccount();

  return (
    <Layout>
      <div>
        Status:
        <span className="bg-black text-white px-[4px] py-[2px] rounded-[4px]">
          {" "}
          {isConnected ? "Connected" : "Disconnected"}
        </span>
      </div>
    </Layout>
  );
}
