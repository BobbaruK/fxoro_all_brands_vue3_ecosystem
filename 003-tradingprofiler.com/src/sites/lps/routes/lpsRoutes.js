// Demo LPs
import lpDemoRoutes from "../LP-demo/routes/lp-Demo-Routes";
import lpDemo2Routes from "../LP-demo2/routes/lp-Demo2-Routes";
import lpDemo3Routes from "../LP-demo3/routes/lp-Demo3-Routes";

// Actual LPs
import lpComeToLearnRoutes from "../cometolearn/routes/lp-ComeToLearn-Routes";
import lpCryptoUniverseRoutes from "../crypto-universe/routes/lp-CryptoUniverse-Routes";
import lpEducationRoutes from "../education/routes/lp-Education-Routes";
import lpForexSignalsRoutes from "../forexsignals/routes/lp-ForexSignals-Routes";
import lpGoldRoutes from "../gold/routes/lp-Gold-Routes";
import lpLiveTradingSignalsRoutes from "../livetradingsignals/routes/lp-LiveTradingSignals-Routes";
import lpOilRoutes from "../oil/routes/lp-Oil-Routes";
import lpSignalsRoutes from "../signals/routes/lp-Signals-Routes";
import lpTradingSignals3Routes from "../trading-signals3/routes/lp-TradingSignals3-Routes";
import lpSignalKit02V2Routes from "../signalkit02_v2/routes/lp-SignalKit02V2-Routes";
import lpFinancialMarketsRoutes from "../financial-markets/routes/lp-FinancialMarkets-Routes";
import lpFreedomToTradeRoutes from "../freedom-to-trade/routes/lp-FreedomToTrade-Routes";

const lpsRoutes = [
  {
    path: "/lp",
    name: "LPs",
    component: () => import("../LPs.vue"),
    props: true,
    children: [
      // Demo LPs
      ...lpDemoRoutes,
      ...lpDemo2Routes,
      ...lpDemo3Routes,
      // Actual LPs
      ...lpComeToLearnRoutes,
      ...lpCryptoUniverseRoutes,
      ...lpEducationRoutes,
      ...lpForexSignalsRoutes,
      ...lpGoldRoutes,
      ...lpLiveTradingSignalsRoutes,
      ...lpOilRoutes,
      ...lpSignalsRoutes,
      ...lpTradingSignals3Routes,
      ...lpSignalKit02V2Routes,
      ...lpFinancialMarketsRoutes,
      ...lpFreedomToTradeRoutes,
    ],
  },
];

export default lpsRoutes;
