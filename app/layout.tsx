
// ============================================
// 5. app/layout.tsx - Root Layout
// ============================================
import type { Metadata } from 'next';
import './globals.css';


export const metadata: Metadata = {
  title: 'منصة مشاركة تحليلات التداول',
  description: 'شارك وتصفح تحليلات التداول المختلفة',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ar" dir="rtl">
      <body >
        {children}
      </body>
    </html>
  );
}