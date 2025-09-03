
// ============================================
// 5. app/page.tsx - الصفحة الرئيسية المحدثة
// ============================================
import Link from 'next/link';
import QuickAccessBar from '../components/QuickAccessBar';
import { quickAccessCharts } from '@/lib/tradingview-config';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* شريط الوصول السريع */}
      <QuickAccessBar />
      
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8">
          منصة مشاركة تحليلات التداول
        </h1>
        
        {/* القسم الرئيسي - الأسواق المميزة */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-center">الأسواق الرئيسية</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {Object.entries(quickAccessCharts).map(([key, chart]) => (
              <Link
                key={key}
                href={`/chart/${key}`}
                className="block p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-all duration-200 border border-gray-700 hover:border-blue-500 text-center"
              >
                <div className="text-3xl mb-3">
                  {key === 'gold' && '🏆'}
                  {key === 'oil' && '🛢️'}
                  {key === 'btc' && '₿'}
                  {key === 'eurusd' && '💱'}
                </div>
                <h3 className="text-xl font-semibold mb-2">{chart.name}</h3>
                <p className="text-gray-400 text-sm">{chart.symbol}</p>
                <p className="text-gray-500 text-xs mt-1">الإطار: {chart.interval}</p>
              </Link>
            ))}
          </div>
        </div>

        {/* قسم جميع التحليلات */}
        <div>
          <h2 className="text-2xl font-semibold mb-6 text-center">جميع التحليلات المتاحة</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* يمكنك إضافة المزيد من التحليلات هنا */}
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">تحليل الأسهم الأمريكية</h3>
              <p className="text-gray-400 text-sm">NASDAQ, NYSE</p>
              <Link href="/layouts/stocks-us" className="text-blue-400 hover:underline text-sm mt-2 inline-block">
                عرض التحليل →
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">تحليل الأسهم السعودية</h3>
              <p className="text-gray-400 text-sm">تداول، نمو</p>
              <Link href="/layouts/stocks-saudi" className="text-blue-400 hover:underline text-sm mt-2 inline-block">
                عرض التحليل →
              </Link>
            </div>
            
            <div className="p-6 bg-gray-800 rounded-lg">
              <h3 className="text-lg font-semibold mb-2">تحليل العملات الرقمية</h3>
              <p className="text-gray-400 text-sm">BTC, ETH, Altcoins</p>
              <Link href="/layouts/crypto" className="text-blue-400 hover:underline text-sm mt-2 inline-block">
                عرض التحليل →
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
