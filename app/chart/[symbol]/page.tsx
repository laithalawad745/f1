// app/chart/[symbol]/page.tsx

'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function ChartPage() {
  const params = useParams();
  const symbol = params.symbol as string;
  const containerRef = useRef<HTMLDivElement>(null);

  const chartConfigs = {
    gold: {
      name: 'الذهب - XAUUSD',
      symbol: 'OANDA:XAUUSD',
      interval: '15',
      studies: [
        'RSI@tv-basicstudies',
        'MACD@tv-basicstudies'
      ]
    },
    oil: {
      name: 'النفط - WTI',
      symbol: 'NYMEX:CL1!',
      interval: '240',
      studies: ['Volume@tv-basicstudies']
    },
    btc: {
      name: 'البيتكوين',
      symbol: 'BINANCE:BTCUSDT',
      interval: '240',
      studies: ['RSI@tv-basicstudies']
    },
    eurusd: {
      name: 'اليورو/دولار',
      symbol: 'FX:EURUSD',
      interval: 'D',
      studies: ['BB@tv-basicstudies']
    }
  };

  const config = chartConfigs[symbol as keyof typeof chartConfigs];

  useEffect(() => {
    if (!config || !containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      if (window.TradingView) {
        new window.TradingView.widget({
          width: '100%',
          height: 700,
          symbol: config.symbol,
          interval: config.interval,
          timezone: 'Asia/Riyadh',
          theme: 'dark',
          style: '1',
          locale: 'ar',
          toolbar_bg: '#1a1a1a',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: 'tradingview_widget',
          studies: config.studies,
          save_image: true,
          hide_side_toolbar: false,
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650'
        });
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [config]);

  if (!config) {
    return <div>الصفحة غير موجودة</div>;
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <div className="bg-gray-800 p-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">{config.name}</h1>
        <div className="flex gap-2">
          <Link href="/" className="px-4 py-2 bg-gray-700 text-white rounded">
            رجوع
          </Link>
          <a 
            href={`https://www.tradingview.com/chart/ch0f3ADe/?symbol=${config.symbol}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-600 text-white rounded"
          >
            فتح في TradingView
          </a>
        </div>
      </div>
      
      <div className="p-4">
        <div id="tradingview_widget" ref={containerRef} />
      </div>
    </div>
  );
}

// =================================