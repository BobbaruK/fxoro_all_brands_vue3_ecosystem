<script>
import LanguageChooser from "../../../../../../001-super_global_files/components/LanguageChooser/LanguageChooser.vue";
import languages from "../composables/translations/languages";

export default {
  components: { LanguageChooser },
  name: "LP~OilV2~Header",
  props: { lang: String },
  setup() {
    const menuDetails = {
      menuItems: {
        home: {
          routerName: "Home",
          routerLabel: "Home",
        },
        test: {
          routerLabel: "Test",
          children: {
            test1: {
              routerLabel: "Test1",
            },
            test2: {
              routerLabel: "Test2",
              children: {
                test21: {
                  routerLabel: "Test2-1",
                },
                test22: {
                  routerLabel: "Test2-2",
                },
                test23: {
                  routerLabel: "Test2-3",
                },
                test24: {
                  routerLabel: "Test2-4",
                },
                test25: {
                  routerLabel: "Test2-5",
                },
                test26: {
                  routerLabel: "Test2-6",
                },
                test27: {
                  routerLabel: "Test2-7",
                },
                test28: {
                  routerLabel: "Test2-8",
                },
                test29: {
                  routerLabel: "Test2-9",
                },
                test210: {
                  routerLabel: "Test2-10",
                },
                test211: {
                  routerLabel: "Test2-11",
                },
                test212: {
                  routerLabel: "Test2-12",
                },
                test213: {
                  routerLabel: "Test2-13",
                },
                test214: {
                  routerLabel: "Test2-14",
                },
              },
            },
            test3: {
              routerLabel: "Test3",
            },
            test4: {
              routerLabel: "Test4",
            },
          },
        },
        about: {
          routerName: "About",
          routerLabel: "About",
        },
        services: {
          routerName: "Services",
          routerLabel: "Services",
          children: {
            music: {
              routerName: "MusicServices",
              routerLabel: "Music",
              children: {
                beat: {
                  routerName: "MusicServicesBeat",
                  routerLabel: "Beat",
                },
                verse: {
                  routerName: "MusicServicesVerse",
                  routerLabel: "Verse",
                },
              },
            },
            web: {
              routerName: "WebServices",
              routerLabel: "Web",
              children: {
                beat: {
                  routerName: "WebServicesCode",
                  routerLabel: "Code",
                },
                verse: {
                  routerName: "WebServicesDesign",
                  routerLabel: "Design",
                },
              },
            },
            divider: {
              routerLabel: "divider",
            },
            test: {
              routerName: "About",
              routerLabel: "About",
            },
          },
        },
        test222: {
          routerLabel: "Test222",
        },
        contact: {
          routerName: "Contact",
          routerLabel: "Contact",
        },
      },
    };

    const { lpLangs, defaultLang, flagPath } = languages();

    const langsDetails = {
      lpLangs: lpLangs,
      defaultLang: defaultLang,
      flagPath: flagPath,
    };

    return { menuDetails, langsDetails };
  },
};
</script>

<template>
  <header id="header" class="siteHeader">
    <div class="row">
      <div class="col-6 logoColumn">
        <router-link :to="{ name: 'OilV2Home', params: { lang: lang } }">
          <img
            src="../../../brand/assets/imgs/logos/TradingProfilerLogo-color-white.svg"
            alt="Logo"
            class="logo"
            width="200"
            height="60"
          />
        </router-link>
      </div>
      <div class="col-6 langColumn">
        <LanguageChooser :lang="lang" :languageChooserDetails="langsDetails" />
      </div>
    </div>
  </header>
</template>

<style lang="scss">
@use "../assets/scss/abstracts/variables" as vars;
@use "../assets/scss/abstracts/mixins" as mxns;

header#header.siteHeader {
  padding: 15px 0;
  @include mxns.mediamin(sm) {
    padding: 20px 0;
  }
  @include mxns.mediamin(md) {
    padding: 30px 0;
  }
  @include mxns.mediamin(lg) {
    padding: 35px 0;
  }
  @include mxns.mediamin(xl) {
    padding: 45px 0;
  }
  .logoColumn,
  .langColumn {
    align-items: center;
    display: flex;
  }
  .logoColumn {
    justify-content: flex-start;
  }
  .langColumn {
    justify-content: flex-end;
  }
  .logo {
    display: block;
    height: 45px;
    position: relative;
    width: 150px;
    z-index: 3;
    @include mxns.mediamin(xl) {
      height: 70px;
      width: 200px;
    }
  }
}

$langSpace: 0.5rem;

.lang-chooser {
  align-items: center;
  display: flex;
  justify-content: flex-end;
  position: relative;
  width: 80px;
  img {
    border-radius: 50%;
    border: 2px solid var(--clr-white);
    height: 27px;
    object-fit: cover;
    width: 27px;
  }
  a {
    color: var(--clr-brandSecondaryColor);
    &:hover,
    &:focus {
      color: var(--clr-brandSecondaryColor-600);
    }
    &:focus {
      outline: none;
    }
  }
  .activeLang {
    > a {
      align-content: center;
      align-items: center;
      flex-direction: row;
      display: flex;
      gap: $langSpace;
    }
  }
  ul {
    background-color: var(--clr-white);
    border: 1px solid var(--clr-black);
    border-radius: vars.$borderRadius;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: $langSpace;
    list-style: none;
    margin: 0;
    padding: $langSpace;
    position: absolute;
    right: calc($langSpace * -1);
    top: calc(100% + $langSpace);
    z-index: 5;
    li {
      a {
        align-content: center;
        align-items: center;
        color: var(--clr-black);
        flex-direction: row;
        display: flex;
        gap: $langSpace;
        justify-content: flex-start;
        &:hover {
          color: var(--clr-black);
        }
      }
      &.router-link-active,
      &.router-link-exact-active {
        display: none;
        a {
          font-weight: bold;
        }
      }
    }
  }
}

html[dir="rtl"] {
  .lang-chooser {
    ul {
      right: auto;
      left: calc($langSpace * -1);
    }
  }
}
</style>
