import '@/app/ui/global.css';
import {inter, lusitana, roboto} from '@/app/ui/fonts';

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
