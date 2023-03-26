<script>
import { useRoute } from "vue-router";

import Caret from "../Caret/Caret.vue";

export default {
  name: "Breadcrumbs",
  components: { Caret },
  props: {
    lang: {
      type: String,
      required: true,
    },
    showHomeIcon: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  setup(props) {
    const route = useRoute();

    return { route };
  },
};
</script>

<template>
  <section id="breadCrumbsSection" class="breadCrumbsWrapper" v-if="route.meta.breadCrumbs">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <nav>
            <ul>
              <li v-for="(crumb, index) in route.meta.breadCrumbs" :key="index">
                <router-link
                  :to="{ name: crumb.href, params: { lang: lang } }"
                  v-if="crumb.href && index != route.meta.breadCrumbs.length - 1"
                >
                  <span v-if="index == 0 && showHomeIcon">
                    <svg idth="20" height="20" viewBox="0 0 20 20">
                      <path
                        fill="currentColor"
                        d="m16 8.5l1.53 1.53l-1.06 1.06L10 4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z"
                      />
                    </svg>
                  </span>
                  <span v-else>
                    {{ crumb.label[lang] }}
                  </span>
                </router-link>
                <span v-else-if="index == 0 && showHomeIcon">
                  <svg idth="20" height="20" viewBox="0 0 20 20">
                    <path
                      fill="currentColor"
                      d="m16 8.5l1.53 1.53l-1.06 1.06L10 4.62l-6.47 6.47l-1.06-1.06L10 2.5l4 4v-2h2v4zm-6-2.46l6 5.99V18H4v-5.97zM12 17v-5H8v5h4z"
                    />
                  </svg>
                </span>
                <span v-else>
                  {{ crumb.label[lang] }}
                </span>
                <Caret v-if="index != route.meta.breadCrumbs.length - 1" />
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
section#breadCrumbsSection.breadCrumbsWrapper {
  --gap: 0.5rem;

  padding: var(--gap) 0;
  nav {
    ul {
      align-content: center;
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      column-gap: var(--gap);
      justify-content: flex-start;
      list-style-type: none;
      line-height: 1;
      margin: 0;
      padding: 0;
    }
    li {
      align-items: center;
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: var(--gap);
      justify-content: flex-start;
    }
    span.caretWrapper {
      align-items: center;
      display: grid;
      height: 0.7em;
      transform: rotate(-90deg);
      width: 0.7em;
      span {
        width: inherit;
        height: inherit;
      }
    }
  }
}

html[dir="rtl"] {
  section#breadCrumbsSection.breadCrumbsWrapper {
    nav {
      ul {
      }
      span.caretWrapper {
        transform: rotate(90deg);
      }
    }
  }
}
</style>
