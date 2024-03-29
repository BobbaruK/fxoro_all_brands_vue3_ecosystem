<script>
import { gsap } from "gsap";
import { onClickOutside } from "@vueuse/core";
import { onMounted, onUnmounted, ref, watchEffect } from "@vue/runtime-core";

import { useModalStore } from "./stores/ModalStore";

import translationsGlossary from "../../composables/translationsGlossary";

export default {
  name: "Modal",
  props: {
    lang: {
      type: String,
    },
  },
  setup() {
    const modalStore = useModalStore();

    const modalTl = gsap.timeline({
      paused: true,
      defaults: {
        duration: 0.35,
        ease: "none",
      },
      onStart: () => {
        modalStore.cancelModal();
      },
      onComplete: () => {},
      onReverseComplete: () => {
        // ctx.emit("closeModal");
      },
    });

    const onBeforeModalLoad = (e) => {
      gsap.set(e, {
        autoAlpha: 0,
      });
      gsap.set(e.querySelector(".modal"), {
        yPercent: -150,
        scale: 0,
      });

      modalTl
        .to(e, {
          autoAlpha: 1,
          onStart: () => {
            document.body.style.overflow = "hidden";
          },
        })
        .to(
          e.querySelector(".modal"),
          {
            yPercent: 0,
            scale: 1,
          },
          "<"
        );
    };

    const closeModal = () => {
      document.body.style.overflow = "auto";
      modalTl.reverse();
    };

    // click on the form overlay
    const modal = ref(null);
    onMounted(() => {
      onClickOutside(modal, () => {
        document.body.style.overflow = "auto";
        modalTl.reverse();
      });
    });

    modalTl.play();

    return { onBeforeModalLoad, closeModal, modal, translationsGlossary };
  },
};
</script>

<template>
  <Teleport to="#modals">
    <div>
      <transition appear @before-enter="onBeforeModalLoad" :css="false">
        <div class="modalOverlay">
          <div ref="modal" class="modal">
            <div class="close" @click="closeModal">&#215; {{ translationsGlossary.c.close[lang] }}</div>
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </Teleport>
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/variables" as vars;

.modalOverlay {
  align-content: center;
  align-items: center;
  display: flex;
  inset: 0;
  justify-content: center;
  position: fixed;
  z-index: 40;
  &::before {
    background-color: var(--clr-brandPrimaryColor);
    content: "";
    inset: 0;
    opacity: 0.9;
    position: absolute;
    z-index: 0;
  }
  .modal {
    background: var(--clr-brandPrimaryColor-dark);
    border-radius: 7px;
    border: 2px solid var(--clr-brandPrimaryColor-400);
    color: var(--clr-white);
    margin: 0 calc(vars.$gap / 2);
    max-height: 100vh;
    max-width: 500px;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 30px 15px 15px;
    position: relative;
    width: 100%;
    .close {
      background: var(--clr-brandPrimaryColor-400);
      border-radius: 0 0 0 5px;
      cursor: pointer;
      font-weight: bold;
      padding: 3px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
}

html[dir="rtl"] {
  .modalOverlay {
    .modal {
      .close {
        border-radius: 0 0 5px 0;
        right: auto;
        left: 0;
      }
    }
  }
}
</style>
