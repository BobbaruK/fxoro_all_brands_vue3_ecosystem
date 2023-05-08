// Demo LPs
import lpDemoRoutes from "../LP-demo/routes/lp-Demo-Routes";
import lpDemo2Routes from "../LP-demo2/routes/lp-Demo2-Routes";
import lpDemo3Routes from "../LP-demo3/routes/lp-Demo3-Routes";

// Actual LPs
import lpComeToLearnRoutes from "../cometolearn/routes/lp-ComeToLearn-Routes";
import lpCryptoUniverseV1Routes from "../crypto-universe-v1/routes/lp-CryptoUniverseV1-Routes";
import lpCryptoUniverseV2Routes from "../crypto-universe-v2/routes/lp-CryptoUniverseV2-Routes";
import lpEducationRoutes from "../education/routes/lp-Education-Routes";
import lpForexSignalsRoutes from "../forexsignals/routes/lp-ForexSignals-Routes";
import lpGoldV1Routes from "../gold-v1/routes/lp-GoldV1-Routes";
import lpGoldV2Routes from "../gold-v2/routes/lp-GoldV2-Routes";
import lpLiveTradingSignalsRoutes from "../livetradingsignals/routes/lp-LiveTradingSignals-Routes";
import lpOilV1Routes from "../oil-v1/routes/lp-OilV1-Routes";
import lpOilV2Routes from "../oil-v2/routes/lp-OilV2-Routes";
import lpSignalsRoutes from "../signals/routes/lp-Signals-Routes";
import lpTradingSignals3Routes from "../trading-signals3/routes/lp-TradingSignals3-Routes";
import lpSignalKit02V2Routes from "../signalkit02_v2/routes/lp-SignalKit02V2-Routes";
import lpFinancialMarketsRoutes from "../financial-markets/routes/lp-FinancialMarkets-Routes";

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
      ...lpCryptoUniverseV1Routes,
      ...lpCryptoUniverseV2Routes,
      ...lpEducationRoutes,
      ...lpForexSignalsRoutes,
      ...lpGoldV1Routes,
      ...lpGoldV2Routes,
      ...lpLiveTradingSignalsRoutes,
      ...lpOilV1Routes,
      ...lpOilV2Routes,
      ...lpSignalsRoutes,
      ...lpTradingSignals3Routes,
      ...lpSignalKit02V2Routes,
      ...lpFinancialMarketsRoutes,
    ],
  },
];

export default lpsRoutes;
