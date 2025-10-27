import { http, createConfig } from 'wagmi';
import { somniaMainnet, somniaTestnet } from './chains';
import { injected, coinbaseWallet, walletConnect } from 'wagmi/connectors';

export const config = createConfig({
  chains: [somniaMainnet, somniaTestnet],
  connectors: [
    injected({
      target: 'metaMask',
      shimDisconnect: true,
    }),
    coinbaseWallet({
  appName: 'argumentative',
  appLogoUrl: '/logo-argumentative.png', // Updated logo URL
    }),
    walletConnect({
      projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'demo', // Replace with your actual project ID
      metadata: {
  name: 'argumentative',
        description: 'Decentralized prediction markets and debates platform',
  url: 'https://argumentative.com', // Updated URL
  icons: ['/logo-argumentative.png'], // Updated logo URL
      },
    }),
  ],
  transports: {
    [somniaMainnet.id]: http(
      process.env.NEXT_PUBLIC_SOMNIA_MAINNET_RPC || 'https://api.infra.mainnet.somnia.network/'
    ),
    [somniaTestnet.id]: http(
      process.env.NEXT_PUBLIC_SOMNIA_TESTNET_RPC || 'https://dream-rpc.somnia.network/'
    ),
  },
  ssr: true,
  storage: typeof window !== 'undefined' ? (window.localStorage as any) : undefined,
});