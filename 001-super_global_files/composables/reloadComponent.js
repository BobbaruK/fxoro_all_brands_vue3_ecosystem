/**
 * Reload Component when viewport changes
 */

import { ref } from "@vue/runtime-core";
import { gsap } from "gsap";

const gsapmm = gsap.matchMedia();

const reloadComponent = () => {
  const componentKey = ref(0);

  gsapmm.add("(max-width: 575px)", () => {
    componentKey.value++;
  });

  gsapmm.add("(min-width: 576px) and (max-width: 767px)", () => {
    componentKey.value++;
  });

  gsapmm.add("(min-width: 768px) and (max-width: 991px)", () => {
    componentKey.value++;
  });

  gsapmm.add("(min-width: 992px) and (max-width: 1199px)", () => {
    componentKey.value++;
  });

  gsapmm.add("(min-width: 1200px) and (max-width: 1399px)", () => {
    componentKey.value++;
  });

  gsapmm.add("(min-width: 1400px)", () => {
    componentKey.value++;
  });

  return { componentKey };
};

export default reloadComponent;
