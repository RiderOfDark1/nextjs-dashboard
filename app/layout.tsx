import '@/app/ui/global.css';
import {inter, lusitana, roboto} from '@/app/ui/fonts';
import { Metadata } from "next";

export const metadata: Metadata = {
      title: {
        template: '%s | Acme Dashboard',
        default: 'Acme Dashboard',
    },
    description: 'The official Next.js Course Dashboard, build with App Rounter',
    metadataBase: new URL('https://next-learn-dashboard.vercel.sh')
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  //console.log(lusitana);
  return (
    <html lang="en">
      <body className={ `${roboto.className} antialiased` } >{children}</body>
    </html>
  );
}
