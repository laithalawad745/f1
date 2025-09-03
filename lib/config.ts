
// ============================================
// 4. lib/config.ts
// ============================================
export const tradingViewConfig = {
  layouts: [
    {
      id: 'crypto-daily',
      name: 'تحليل العملات الرقمية - يومي',
      symbol: 'BINANCE:BTCUSDT',
      interval: 'D',
      studies: ['RSI@tv-basicstudies', 'MACD@tv-basicstudies'],
    },
    {
      id: 'forex-4h',
      name: 'تحليل الفوركس - 4 ساعات',
      symbol: 'FX:EURUSD',
      interval: '240',
      studies: ['BB@tv-basicstudies', 'Volume@tv-basicstudies'],
    },
    {
      id: 'stocks-weekly',
      name: 'تحليل الأسهم - أسبوعي',
      symbol: 'NASDAQ:AAPL',
      interval: 'W',
      studies: ['MASimple@tv-basicstudies', 'RSI@tv-basicstudies'],
    },
    {
      id: 'gold-analysis',
      name: 'تحليل الذهب',
      symbol: 'FOREXCOM:XAUUSD',
      interval: 'D',
      studies: ['PivotPointsHighLow@tv-basicstudies', 'VWAP@tv-basicstudies'],
    },
    {
      id: 'oil-analysis',
      name: 'تحليل النفط',
      symbol: 'NYMEX:CL1!',
      interval: '240',
      studies: ['IchimokuCloud@tv-basicstudies', 'Volume@tv-basicstudies'],
    },
    {
      id: 'saudi-stocks',
      name: 'الأسهم السعودية',
      symbol: 'TADAWUL:2222',
      interval: 'D',
      studies: ['RSI@tv-basicstudies', 'MASimple@tv-basicstudies'],
    }
  ],
  
  widgetConfig: {
    theme: 'dark',
    locale: 'ar',
    enable_publishing: false,
    allow_symbol_change: true,
    container_id: 'tradingview_widget',
    save_image: false,
    hide_side_toolbar: false,
    show_popup_button: true,
  }
};
