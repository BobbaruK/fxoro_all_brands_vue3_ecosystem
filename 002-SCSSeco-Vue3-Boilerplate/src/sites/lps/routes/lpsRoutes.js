import lpDemoRoutes from "../LP-demo/routes/lp-Demo-Routes";
import lpDemoComponentsRoutes from "../LP-demo-components/routes/lp-Demo_Components-Routes";
import lpDemo2Routes from "../LP-demo2/routes/lp-Demo2-Routes";
import lpDemo3Routes from "../LP-demo3/routes/lp-Demo3-Routes";

const lpsRoutes = [
  {
    path: "/lp",
    name: "LPs",
    component: () => import("../LPs.vue"),
    props: true,
    children: [...lpDemoRoutes, ...lpDemoComponentsRoutes, ...lpDemo2Routes, ...lpDemo3Routes],
  },
];

export default lpsRoutes;
