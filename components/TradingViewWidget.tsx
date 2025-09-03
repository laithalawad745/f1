'use client';

import { useEffect, useRef, memo } from 'react';

declare global {
  interface Window {
    TradingView: any;
  }
}

interface TradingViewWidgetProps {
  layoutId: string;
  symbol?: string;
  interval?: string;
  studies?: string[];
  savedLayoutId?: string;
  chartUrl?: string;
  width?: string | number;
  height?: string | number;
}

function TradingViewWidget({
  layoutId,
  symbol = 'OANDA:XAUUSD',
  interval = '15',
  studies = [],
  savedLayoutId,
  chartUrl,
  width = '100%',
  height = 650
}: TradingViewWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // إذا كان هناك chart URL مباشر، استخدم iframe
    if (chartUrl && savedLayoutId) {
      if (containerRef.current) {
        containerRef.current.innerHTML = `
          <iframe 
            src="https://www.tradingview.com/widgetembed/?frameElementId=tradingview_${layoutId}&symbol=${symbol}&interval=${interval}&hidesidetoolbar=0&symboledit=1&saveimage=1&toolbarbg=f1f3f6&studies=[]&theme=dark&style=1&timezone=Asia%2FRiyadh&studies_overrides={}&overrides={}&enabled_features=[]&disabled_features=[]&locale=ar&utm_source=localhost&utm_medium=widget&utm_campaign=chart&utm_term=${symbol}#${savedLayoutId}"
            style="width: 100%; height: ${height}px; border: 0;"
            allowfullscreen
          ></iframe>
        `;
      }
      return;
    }

    // الكود الأصلي للـ widget
    const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/tv.js';
    script.async = true;
    
    script.onload = () => {
      if (containerRef.current && window.TradingView) {
        const widgetConfig = {
          width: width,
          height: height,
          symbol: symbol,
          interval: interval,
          timezone: 'Asia/Riyadh',
          theme: 'dark',
          style: '1',
          locale: 'ar',
          toolbar_bg: '#1a1a1a',
          enable_publishing: false,
          allow_symbol_change: true,
          container_id: `tradingview_${layoutId}`,
          studies: studies,
          show_popup_button: true,
          popup_width: '1000',
          popup_height: '650',
          // تفعيل الحفظ والتحميل
          save_image: true,
          hideideas: false,
          // معرف Layout إذا كان متاح
          ...(savedLayoutId && { 
            custom_css_url: `https://www.tradingview.com/chart/${savedLayoutId}/`,
            charts_storage_url: 'https://saveload.tradingview.com',
            charts_storage_api_version: '1.1',
            client_id: 'tradingview.com',
            user_id: 'public_user_id',
            load_last_chart: true
          })
        };

        new window.TradingView.widget(widgetConfig);
      }
    };

    document.head.appendChild(script);

    return () => {
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, [layoutId, symbol, interval, studies, savedLayoutId, chartUrl, width, height]);

  return (
    <div className="tradingview-widget-container h-full">
      <div 
        id={`tradingview_${layoutId}`}
        ref={containerRef}
        className="w-full h-full"
      />
    </div>
  );
}

export default memo(TradingViewWidget);