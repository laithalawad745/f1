export interface Layout {
  id: string;
  name: string;
  symbol: string;
  interval: string;
  studies: string[];
  savedLayoutId?: string; // TradingView saved layout ID
}

export interface TradingViewWidgetProps {
  layoutId: string;
  width?: string | number;
  height?: string | number;
  symbol?: string;
  interval?: string;
  theme?: 'light' | 'dark';
  locale?: string;
}