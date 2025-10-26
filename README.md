**⚔️ Argumentative — The AI-Powered DeFi Debate Platform**

Where conviction meets code.

Argumentative transforms financial prediction markets into AI-driven arenas for intelligent debates — blending DeFi, AI, and SocialFi into one transparent, community-powered ecosystem.

**🧭 Table of Contents**

Overview

Vision

Features

Technical Stack

Architecture

Installation

Quick Start

Usage

AI Resolution Flow

Deployment

Contributing

License

Contact

**🚀 Overview**

Argumentative is an AI-powered DeFi protocol built on the Somnia blockchain, enabling users to debate, stake, and earn through intelligent, on-chain prediction markets.

Participants don’t just speculate — they argue, persuade, and shape financial consensus through verifiable discourse.

By merging AI reasoning, staking mechanisms, and NFT participation tokens, Argumentative introduces a new class of DeFi utility:

“Truth-as-a-Service.”

Why It Matters

Crypto communities often exist in echo chambers. Argumentative challenges that by rewarding evidence-backed opinions and transparent reasoning — making finance more social, meritocratic, and data-driven.

**🌐 Vision**

"Turning DeFi debates into on-chain truth engines."

Argumentative’s mission is to make decentralized finance more interactive, intelligent, and impactful.
Users engage in prediction markets where AI models evaluate discourse quality, community sentiment, and logical consistency to guide outcomes.

The system rewards clarity, foresight, and constructive reasoning — not noise.

**🧩 Features**

⚔️ Core Features

AI Debate Resolution — AI models analyze arguments, sentiment, and logical flow to propose fair outcomes.

Prediction Markets — Create, trade, and stake on future events with transparent odds and dynamic yield curves.

On-Chain Debates — Every argument and vote is stored immutably on the blockchain.

NFT Participation Tokens — Mint unique debate passes for entry and earn tradable “Reputation Badges.”

Gamified Leaderboards — Track top debaters, most accurate predictors, and yield champions.

DeFi Integration — Staking, yield farming, and rewards — all integrated into debates.

Somnia Blockchain — Powered by Somnia’s ultra-fast EVM-compatible Layer-1 with sub-second finality.

**🛠 Technical Stack**

Layer	Technology
Frontend	React.js, Next.js, Tailwind CSS
Blockchain	Solidity, Somnia Testnet
Web3 Integration	Ethers.js, Wagmi
AI Engine	Node.js (Sentiment Analysis, Debate Scoring)
Backend/API	Next.js API Routes
Storage	IPFS for arguments and metadata
Deployment	Vercel (Frontend) + Somnia Smart Contracts


**🧱 Architecture**

User (Wallet: MetaMask)
     ↓
Frontend (React + Next.js + Tailwind)
     ↓
Backend (Next.js API + AI Engine)
     ↓
Smart Contracts (Somnia Testnet)
     ↓
On-Chain Storage (IPFS / Events)
     ↓
Dashboard (Real-Time Market + Debate Data)

Flow

Create Market: Users open new prediction markets and mint NFT passes.

Debate Phase: Participants post arguments (stored via IPFS), vote, and stake assets.

AI Analysis: AI models assess discourse and sentiment.

Resolution: AI proposes results → community can vote to override.

Yield Distribution: Winners earn yield; losers’ stakes fuel Somnia grants.

**⚙️ Installation**

Prerequisites

Node.js ≥ v18

npm or bun

MetaMask (configured for Somnia Testnet)

Somnia test tokens (Get from faucet
)

Clone Repository
git clone https://github.com/Demiladepy/Argumentative.git
cd Argumentative

**Install Dependencies**

npm install
# or
bun install

Set Up Environment
cp .env.example .env


Then configure:

NEXT_PUBLIC_SOMNIA_RPC_URL=https://testnet.somnia.network/rpc
NEXT_PUBLIC_CHAIN_ID=50312
NEXT_PUBLIC_MARKET_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_NFT_CONTRACT_ADDRESS=0x...
NEXT_PUBLIC_YIELD_TOKEN_ADDRESS=0x...

🧭 Quick Start
npm run dev


Then visit:
👉 http://localhost:3000

💬 Usage
Create a Market

Connect wallet

Click “Start Debate”

Input:

Question: “Will BTC hit $100K by Q4 2025?”

Description: Market overview

Stake amount

Approve transaction → Mint debate NFT

Debate live!

Join a Debate

Browse active markets

Select a side

Post arguments

Vote and stake

🧠 AI Resolution Flow

Collects on-chain arguments and votes

Performs sentiment and logic scoring

Suggests resolution

DAO members can override via governance vote

Rewards distributed automatically
