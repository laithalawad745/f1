
// ============================================
// 3. app/components/QuickAccessBar.tsx - شريط سريع محدث
// ============================================
'use client';

import Link from 'next/link';
import { quickAccessCharts } from '@/lib/tradingview-config';

export default function QuickAccessBar() {
  return (
    <div className="bg-gray-800 border-b border-gray-700 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center gap-2">
            <span className="text-gray-400 text-sm font-medium">الوصول السريع:</span>
            
            {/* زر الذهب مع تمييز خاص */}
            <Link
              href="/chart/gold"
              className="px-4 py-1.5 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white rounded-md text-sm font-medium transition-all flex items-center gap-2 shadow-lg"
            >
              <span>🏆</span>
              <span>الذهب XAUUSD</span>
              <span className="text-xs opacity-75">15m</span>
            </Link>

            <Link
              href="/chart/oil"
              className="px-4 py-1.5 bg-gray-700 hover:bg-gray-600 text-white rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              <span>🛢️</span>
              <span>النفط</span>
            </Link>

            <Link
              href="/chart/btc"
              className="px-4 py-1.5 bg-orange-600 hover:bg-orange-700 text-white rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              <span>₿</span>
              <span>بيتكوين</span>
            </Link>

            <Link
              href="/chart/eurusd"
              className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-medium transition-colors flex items-center gap-2"
            >
              <span>💱</span>
              <span>EUR/USD</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-gray-400 text-sm">
              <span className="text-green-400">● </span>
              متصل بـ TradingView
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}