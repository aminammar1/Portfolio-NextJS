import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono, Old_Standard_TT, Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
});

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  weight: ["400", "500", "600"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  weight: ["400", "500"],
});

const oldStandard = Old_Standard_TT({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["400", "700"],
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
    { media: "(prefers-color-scheme: dark)", color: "#080a0c" },
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
        className={`${poppins.variable} ${geist.variable} ${geistMono.variable} ${oldStandard.variable} font-sans antialiased bg-background text-foreground`}
      >
        <script dangerouslySetInnerHTML={{ __html: themeInit }} />
        {children}
      </body>
    </html>
  );
}
