<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);

import CarretWrapper from "../CarretWrapper/CarretWrapper.vue";

export default {
  name: "AccordionItem",
  components: { CarretWrapper },
  props: {
    flush: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const scssecoAccordion__Item = ref(null);
    const scssecoAccordion__Header = ref(null);
    const scssecoAccordion__Caret = ref(null);
    const scssecoAccordion__Content = ref(null);

    const accordionAnimation = gsap.timeline({
      defaults: {
        duration: 0.45,
        // ease: "back",
        ease: "power4.out",
        // ease: "linear",
        // ease: "elastic",
      },
    });

    const arrangeAccordionItems = () => {
      if (scssecoAccordion__Item.value.classList.contains("active")) {
        gsap.set(scssecoAccordion__Content.value, {
          height: `${scssecoAccordion__Content.value.scrollHeight}px`,
        });
        gsap.set(scssecoAccordion__Caret.value, {
          rotate: 180,
        });
      } else {
        gsap.set(scssecoAccordion__Content.value, {
          height: 0,
        });
        gsap.set(scssecoAccordion__Caret.value, {
          rotate: 0,
        });
      }
    };

    const titleClick = (e) => {
      if (accordionAnimation.isActive()) return;

      if (scssecoAccordion__Item.value.classList.contains("active")) {
        accordionAnimation
          .to(scssecoAccordion__Content.value, {
            height: 0,
            // scaleY: 0,
            onStart: () => {
              scssecoAccordion__Item.value.classList.remove("active");
            },
          })
          .to(
            scssecoAccordion__Caret.value,
            {
              rotate: 0,
            },
            "<"
          );
      }
      if (!scssecoAccordion__Item.value.classList.contains("active")) {
        accordionAnimation
          .to(scssecoAccordion__Content.value, {
            height: `${scssecoAccordion__Content.value.scrollHeight}px`,
            // scaleY: 1,
            onStart: () => {
              scssecoAccordion__Item.value.classList.add("active");
            },
          })
          .to(
            scssecoAccordion__Caret.value,
            {
              rotate: 180,
            },
            "<"
          );
      }

      if (props.flush === true) {
        const getSiblings = (e) => {
          // for collecting siblings
          let siblings = [];
          // if no parent, return no sibling
          if (!e.parentNode) {
            return siblings;
          }
          // first child of the parent node
          let sibling = e.parentNode.firstChild;

          // collecting siblings
          while (sibling) {
            if (sibling.nodeType === 1 && sibling !== e) {
              siblings.push(sibling);
            }
            sibling = sibling.nextSibling;
          }
          return siblings;
        };

        const siblings = getSiblings(scssecoAccordion__Item.value);

        siblings.forEach((sibling, index) => {
          if (!sibling.classList.contains("active")) return;

          const siblingContents = sibling.querySelector(".scssecoAccordion__Content");
          const siblingCarrets = sibling.querySelector(".caretWrapper");

          accordionAnimation
            .to(
              siblingContents,
              {
                height: 0,
                onStart: () => {
                  sibling.classList.remove("active");
                },
              },
              "<"
            )
            .to(
              siblingCarrets,
              {
                rotate: 0,
              },
              "<"
            );
        });
      }
    };

    onMounted(() => {
      scssecoAccordion__Caret.value = scssecoAccordion__Item.value.querySelector(".caretWrapper");

      // console.log(scssecoAccordion__Caret.value);

      arrangeAccordionItems();
    });

    return {
      scssecoAccordion__Item,
      scssecoAccordion__Header,
      scssecoAccordion__Content,
      titleClick,
    };
  },
};
</script>

<template>
  <div ref="scssecoAccordion__Item" class="scssecoAccordion__Item">
    <div ref="scssecoAccordion__Header" class="scssecoAccordion__Header">
      <button @click="titleClick">
        <slot name="title">Title</slot>
      </button>
      <CarretWrapper />
    </div>
    <div ref="scssecoAccordion__Content" class="scssecoAccordion__Content">
      <div class="scssecoAccordion__ContentInner">
        <slot name="content">Content</slot>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.scssecoAccordion__Item {
  &:not(:last-child) {
    border-bottom: 1px solid var(--clr-gray-200);
  }
  &.active {
    .scssecoAccordion__Header {
      border-bottom: 1px solid var(--clr-gray-200);
    }
  }
  .scssecoAccordion__Header {
    align-items: center;
    background-color: var(--clr-brandSecondaryColor-200);
    border-bottom: 1px solid transparent;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: space-between;
    padding: 1rem;
    button {
      display: block;
    }
    .caretWrapper {
      width: 20px;
    }
  }
  .scssecoAccordion__Content {
    overflow: hidden;
    .scssecoAccordion__ContentInner {
      padding: 1rem;
    }
  }
}
</style>
