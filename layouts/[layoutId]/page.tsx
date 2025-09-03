
// ============================================
// 2. app/layouts/[layoutId]/page.tsx
// ============================================
'use client';

import { useParams } from 'next/navigation';
import TradingViewWidget from '../../components/TradingViewWidget';
import { tradingViewConfig } from '@/lib/config';
import Link from 'next/link';

export default function LayoutPage() {
  const params = useParams();
  const layoutId = params.layoutId as string;
  
  const layout = tradingViewConfig.layouts.find(l => l.id === layoutId);
  
  if (!layout) {
    return (
      <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl mb-4">Layout غير موجود</h1>
          <Link href="/" className="text-blue-400 hover:underline">
            العودة للصفحة الرئيسية
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold">{layout.name}</h1>
          <Link 
            href="/" 
            className="px-4 py-2 bg-blue-600 rounded hover:bg-blue-700 transition"
          >
            العودة للقائمة
          </Link>
        </div>
        
        <div className="bg-gray-800 rounded-lg p-4">
          <TradingViewWidget
            layoutId={layoutId}
            symbol={layout.symbol}
            interval={layout.interval}
            studies={layout.studies}
          />
        </div>
      </div>
    </div>
  );
}