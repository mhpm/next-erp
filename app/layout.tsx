import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { SideMenu } from '@/components';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'RCM',
  description: 'Software Manager',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {process.env.NODE_ENV === 'development' && (
          <script src="https://unpkg.com/react-scan/dist/auto.global.js"></script>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <SideMenu />
          <div className="flex-1 p-6">{children}</div>
        </div>
      </body>
    </html>
  );
}
