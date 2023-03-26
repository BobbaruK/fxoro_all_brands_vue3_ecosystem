<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import { gsap } from "gsap";

export default {
  name: "Accordion",
  props: {
    flush: {
      type: Boolean,
      required: false,
      default: true,
    },
  },
  setup(props) {
    const scssecoAccordion = ref(null);
    const scssecoAccordionItems = ref(null);

    // Set animation timeline
    const accordionAnimation = gsap.timeline({
      defaults: {
        duration: 0.45,
        // ease: "back",
        ease: "power4.out",
        // ease: "linear",
        // ease: "elastic",
      },
    });

    const setAccordionItems = (accItem, accItemCaret, accItemContent) => {
      /**
       * 1. check if the accordion item has class of active
       * 2. set the height via gsap and rotate the caret 180 deg
       * 3. if the accordion item does not have a class of active
       *    set the height to 0 and reset the caret to its original
       *    rotation
       */

      // 1
      if (accItem.classList.contains("active")) {
        // 2
        gsap.set(accItemContent, {
          height: `${accItemContent.scrollHeight}px`,
        });
        gsap.set(accItemCaret, {
          rotate: 180,
        });

        return;
      }

      // 3
      gsap.set(accItemContent, {
        height: 0,
      });
      gsap.set(accItemCaret, {
        rotate: 0,
      });
    };

    const titleClick = (accItem, accItemCaret, accItemContent) => {
      /**
       * 1. if the gsap animation is running do nothing
       * 2. create a reusable function - accordionItemAnimation() -
       *    that handles open/close animation
       * 3. if accordion item has a class of active fire up close animation
       *    via accordionItemAnimation
       * 4. if accordion item does not have a class of active fire
       *    up open animation via accordionItemAnimation
       * 5. if flush is true close all other accordion items
       *    a. create a function to get the siblings
       *    b. close each sibling
       */
      // 1
      if (accordionAnimation.isActive()) return;

      // 2
      const accordionItemAnimation = (height, classAdd, rotate) => {
        accordionAnimation
          .to(accItemContent, {
            height: height,
            onStart: () => {
              classAdd === true ? accItem.classList.add("active") : accItem.classList.remove("active");
            },
          })
          .to(
            accItemCaret,
            {
              rotate: rotate,
            },
            "<"
          );
      };

      // 3
      if (accItem.classList.contains("active")) {
        accordionItemAnimation(0, false, 0);
      }

      // 4
      if (!accItem.classList.contains("active")) {
        accordionItemAnimation(`${accItemContent.scrollHeight}px`, true, 180);
      }

      // 5
      if (props.flush === true) {
        // a
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
        const siblings = getSiblings(accItem);

        // b
        siblings.forEach((sibling, index) => {
          if (!sibling.classList.contains("active")) return;

          const siblingContents = sibling.querySelector(".scssecoAccordion__Content");
          const siblingCarets = sibling.querySelector(".caretWrapper");

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
              siblingCarets,
              {
                rotate: 0,
              },
              "<"
            );
        });
      }
    };

    onMounted(() => {
      scssecoAccordionItems.value = Array.from(scssecoAccordion.value.children);

      for (let accordionItem of scssecoAccordionItems.value) {
        const accordionItemHeader = accordionItem.querySelector(".scssecoAccordion__Header");
        const accordionItemHeaderButton = accordionItemHeader.querySelector(".title");
        const accordionItemHeaderCaret = accordionItemHeader.querySelector(".caretWrapper");
        const accordionItemContent = accordionItem.querySelector(".scssecoAccordion__Content");

        accordionItemHeaderButton.addEventListener("click", (e) =>
          titleClick(accordionItem, accordionItemHeaderCaret, accordionItemContent)
        );

        setAccordionItems(accordionItem, accordionItemHeaderCaret, accordionItemContent);
      }
    });
    return { scssecoAccordion };
  },
};
</script>

<template>
  <div ref="scssecoAccordion" class="scssecoAccordion">
    <slot />
  </div>
</template>

<style lang="scss">
.scssecoAccordion {
  border: 1px solid var(--clr-gray-200);
  border-radius: 5px;
}
</style>
