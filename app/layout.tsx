import type { Metadata, Viewport } from "next";
import { Dela_Gothic_One, Geist_Mono, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// Body: a Japanese gothic with clean Latin -- reads like anime UI text.
const body = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
});

// Display: heavy, blocky title-card type for names and section titles.
const anime = Dela_Gothic_One({
  subsets: ["latin"],
  variable: "--font-anime",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Mohamed Amine Ammar — Full Stack Software Developer",
  description:
    "Full Stack Software Developer in Monastir, Tunisia — building scalable web applications, microservices and AI-powered platforms.",
  keywords: ["Mohamed Amine Ammar", "Full Stack Developer", "Next.js", "React", "Go", "Tunisia", "Portfolio"],
  authors: [{ name: "Mohamed Amine Ammar" }],
  openGraph: {
    title: "Mohamed Amine Ammar — Full Stack Software Developer",
    description: "Scalable web applications, microservices and AI-powered platforms.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f2f7ff" },
    { media: "(prefers-color-scheme: dark)", color: "#070b24" },
  ],
};

const themeInit = `
(function(){
  try {
    var t = localStorage.getItem('theme');
    if (t === 'dark' || (!t && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${body.variable} ${geistMono.variable} ${anime.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
