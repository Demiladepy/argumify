import { Zap, Twitter, Github, Mail, Globe } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 py-12 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Zap className="h-5 w-5 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold text-foreground">Argumentative</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              Breaking echo chambers through AI-powered debates and prediction markets on the Somnia blockchain.
            </p>
            <p className="text-sm text-muted-foreground">
              Built for the <span className="font-medium text-foreground">Somnia DeFi Mini Hackathon</span>
            </p>
          </div>

          {/* Platform Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#markets" className="hover:text-foreground transition-colors">Markets</a></li>
              <li><a href="#debates" className="hover:text-foreground transition-colors">Debates</a></li>
              <li><a href="#leaderboard" className="hover:text-foreground transition-colors">Leaderboard</a></li>
              <li><a href="#nft" className="hover:text-foreground transition-colors">NFT Marketplace</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Resources</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#docs" className="hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#github" className="hover:text-foreground transition-colors">GitHub</a></li>
              <li><a href="#whitepaper" className="hover:text-foreground transition-colors">Whitepaper</a></li>
              <li><a href="#faucet" className="hover:text-foreground transition-colors">Somnia Faucet</a></li>
            </ul>
          </div>

          {/* Community & Contact */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex items-center gap-2 transition-colors"><Twitter size={15}/> Twitter</a></li>
              <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex items-center gap-2 transition-colors"><Github size={15}/> GitHub</a></li>
              <li><a href="https://argumentative.ai" target="_blank" rel="noopener noreferrer" className="hover:text-foreground flex items-center gap-2 transition-colors"><Globe size={15}/> Website</a></li>
              <li><a href="mailto:contact@argumentative.ai" className="hover:text-foreground flex items-center gap-2 transition-colors"><Mail size={15}/> Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border/40 pt-6 text-center text-sm text-muted-foreground space-y-2">
          <p>&copy; 2025 Argumentative. Built on Somnia Testnet. All rights reserved.</p>
          <p className="text-xs">
            Designed with ❤️ by the <span className="text-foreground font-medium">Argumentative Team</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
