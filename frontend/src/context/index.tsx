"use client";

import { wagmiAdapter, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createAppKit } from "@reown/appkit/react";
import { mainnet, arbitrum, AppKitNetwork } from "@reown/appkit/networks";
import React, { type ReactNode } from "react";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";
import { createSIWE } from "@/utils/siweUtils";

const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

const metadata = {
  name: "Siwe-auth",
  description: "Siwe-auth Example",
  url: "https://appkitexampleapp.com",
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

export const chains: [AppKitNetwork, ...AppKitNetwork[]] = [mainnet, arbitrum];
const siweConfig = createSIWE(chains);


createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: chains,
  defaultNetwork: mainnet,
  metadata: metadata,
  siweConfig,
  features: {
    analytics: true,
  },
  themeMode: "light",
});

function ContextProvider({
  children,
  cookies,
}: {
  children: ReactNode;
  cookies: string | null;
}) {
  const initialState = cookieToInitialState(
    wagmiAdapter.wagmiConfig as Config,
    cookies
  );

  return (
    <WagmiProvider
      config={wagmiAdapter.wagmiConfig as Config}
      initialState={initialState}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider;
