import React from 'react';
import { AdvancedChart } from 'react-tradingview-embed';

export default function TradingChart() {
  return (
    <>
      <div className="main-chart mb15">
        <AdvancedChart
          widgetProps={{
            theme: 'dark',
            symbol: 'BINANCE:BTCUSDT',
            allow_symbol_change: true,
            toolbar_bg: '#000',
            height: 550,
          }}
        />
      </div>
    </>
  );
}
