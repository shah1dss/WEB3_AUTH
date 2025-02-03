"use client";
import { useAppKit, useAppKitAccount } from "@reown/appkit/react";

export default function Header() {
  const { open } = useAppKit();
  const { isConnected } = useAppKitAccount();

  return (
    <div className="flex justify-end">
      {isConnected ? (
        <w3m-button />
      ) : (
        <button
          className="bg-black text-white px-4 py-2 rounded-md"
          onClick={() => open({ view: "Connect" })}
        >
          Connect Wallet
        </button>
      )}
    </div>
  );
}
