import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';

import { ModalProvider } from '@/common/components/providers/modal-provider';
import { QueryProvider } from '@/common/components/providers/query-provider';
import { SocketProvider } from '@/common/components/providers/socket-provider';
import { ThemeProvider } from '@/common/components/providers/theme-provider';
import { cn } from '@/common/utils/utils';

import '@/common/styles/globals.css';

const font = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Harmony - 在线即时通讯平台',
  description: '爱来自华中师范大学 2022 级计算机学院早安少女组',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-tw" suppressHydrationWarning>
      <body className={cn(font.className, 'bg-[#f9eec6] dark:bg-[#313338]')}>
        <ClerkProvider>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem={false}
            storageKey="muxibar-theme"
          >
            <SocketProvider>
              <ModalProvider />
              <QueryProvider>{children}</QueryProvider>
            </SocketProvider>
          </ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
