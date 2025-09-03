
// app/components/TradingViewWidgetCustom.tsx
'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

interface WidgetConfig {
  name: string;
  symbol: string;
  interval: string;
}

export default function TradingViewWidgetCustom({ config }: { config: WidgetConfig }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      if (containerRef.current && window.TradingView) {
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
          
          // إضافة المؤشرات التي تريدها
          studies: [
            'RSI@tv-basicstudies',
            'MACD@tv-basicstudies',
            'BB@tv-basicstudies',
            'Volume@tv-basicstudies'
          ],
          
          // تخصيص إعدادات المؤشرات
          studies_overrides: {
            "rsi@tv-basicstudies": {
              "rsi.rsi.plot.color": "#2196F3",
              "rsi.level.0": 30,
              "rsi.level.1": 70
            },
            "macd@tv-basicstudies": {
              "macd.histogram.color.0": "#FF5252",
              "macd.histogram.color.1": "#4CAF50"
            }
          },
          
          // إعدادات إضافية
          save_image: true,
          hideideas: false,
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
          
          // تفعيل أدوات الرسم
          disabled_features: [
            "use_localstorage_for_settings"
          ],
          enabled_features: [
            "study_templates",
            "create_volume_indicator_by_default"
          ]
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

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden" style={{ height: '700px' }}>
      <div id="tradingview_widget" ref={containerRef} />
    </div>
  );}