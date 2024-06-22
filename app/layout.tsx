import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
	metadataBase: new URL("https://next-supabase-vote.vercel.app/"),

	title: "Namrata Chandarana",
	authors: {
		name: "NamrataChandarana",
	},
	description:
		"Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.",
	openGraph: {
		title: "namrataChandarana",
		description:
			"Based in India, I'm a Fullstack developer passionate about building a modern web application that users love.",
		url: "https://next-supabase-vote.vercel.app/",
		siteName: "namrataChandarana-portfolio",
		// images: "/og.png",
		type: "website",
	},
	keywords: ["web developer", "freelancer", "Mern stack developer"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        </body>
    </html>
  );
}
