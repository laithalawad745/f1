// ============================================
// 1. lib/tradingview-config.ts - مع معرف Chart الخاص بك
// ============================================
export const quickAccessCharts = {
  gold: {
    id: 'gold-xauusd',
    name: 'الذهب - XAUUSD',
    symbol: 'OANDA:XAUUSD',
    interval: '15', // 15 دقيقة كما في الصورة
    studies: [],
    savedLayoutId: 'ZeVrLdgT', // معرف Chart الخاص بك من الرابط
    chartUrl: 'https://www.tradingview.com/chart/ZeVrLdgT/'
  },
  oil: {
    id: 'oil-wti',
    name: 'النفط - WTI',
    symbol: 'NYMEX:CL1!',
    interval: '240',
    studies: [],
    savedLayoutId: '', // أضف معرف layout النفط هنا لاحقاً
  },
  btc: {
    id: 'bitcoin',
    name: 'البيتكوين - BTC/USD',
    symbol: 'BINANCE:BTCUSDT',
    interval: '240',
    studies: [],
    savedLayoutId: '', // أضف معرف layout البيتكوين هنا لاحقاً
  },
  eurusd: {
    id: 'eurusd',
    name: 'اليورو/دولار',
    symbol: 'FX:EURUSD',
    interval: 'D',
    studies: [],
    savedLayoutId: '', // أضف معرف layout اليورو هنا لاحقاً
  }
};