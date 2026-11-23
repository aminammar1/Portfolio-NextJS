import type { Metadata, Viewport } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

/*
 * Zen Kaku Gothic New and Dela Gothic One are Japanese families. Through
 * next/font/google they arrive as ~120 unicode-range slices per weight and
 * Next preloads nearly all of them (241 files, ~2.8 MB on first visit).
 * The site only renders Latin text, so we self-host just Google's `latin`
 * slice of each weight (~10 KB each), with Google's latin unicode-range.
 * Both fonts are SIL OFL 1.1 -- see app/fonts/README.md.
 */
// Body: a Japanese gothic with clean Latin -- reads like anime UI text.
const body = localFont({
  src: [
    { path: "./fonts/zen-kaku-gothic-new-400-latin.woff2", weight: "400", style: "normal" },
    { path: "./fonts/zen-kaku-gothic-new-500-latin.woff2", weight: "500", style: "normal" },
    { path: "./fonts/zen-kaku-gothic-new-700-latin.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-body",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
});

// Display: heavy, blocky title-card type for names and section titles.
const anime = localFont({
  src: "./fonts/dela-gothic-one-400-latin.woff2",
  weight: "400",
  variable: "--font-anime",
  display: "swap",
  declarations: [{ prop: "unicode-range", value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD" }],
});

// Katakana for the アミン watermark only. Not preloaded, and the
// unicode-range means browsers fetch it only when kana is actually drawn.
const animeKana = localFont({
  src: "./fonts/dela-gothic-one-400-kana.woff2",
  weight: "400",
  variable: "--font-anime-kana",
  display: "swap",
  preload: false,
  adjustFontFallback: false,
  declarations: [{ prop: "unicode-range", value: "U+3000-30FF" }],
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
        className={`${body.variable} ${geistMono.variable} ${anime.variable} ${animeKana.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
