import "./globals.css";
import "yet-another-react-lightbox/styles.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL("https://lp-ministerio360.vercel.app"),
  title: "Ministério360 | Sistema de gestão para igrejas — teste grátis por 30 dias",
  description:
    "Pare de perder visitantes, voluntários e o controle das finanças. Membros, visitantes, escalas, ministérios e finanças da sua igreja em um só lugar. Teste grátis por 30 dias, sem cartão.",
  openGraph: {
    title: "Ministério360 | Sistema de gestão para igrejas",
    description:
      "Organize membros, visitantes, escalas e finanças da sua igreja. 30 dias grátis, sem cartão de crédito.",
    type: "website",
    locale: "pt_BR",
    images: [{ url: "/screens/dashboard.png", width: 1914, height: 908 }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} font-sans`}>

        {/* META PIXEL */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '742793068228900');
              fbq('track', 'PageView');
            `,
          }}
        />

        {/* NOSCRIPT (obriga meta pixel funcionar sem js) */}
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=742793068228900&ev=PageView&noscript=1"
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}