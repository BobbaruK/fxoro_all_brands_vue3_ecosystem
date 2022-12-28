<script>
import { onMounted } from "@vue/runtime-core";

import dataSite from "../../../../dataSite.json";

import Loader from "@/components/global/Loader.vue";

export default {
  name: "GlobalFooter",
  components: { Loader },
  props: {
    lang: String,
  },
  setup(props) {
    const loadFooterByCountry = async (url) => {
      let data = JSON.stringify({
        Token: dataSite.GlobalFooterToken,
        language: props.lang,
        show_social: false,
        show_menu: false,
      });
      fetch(url, {
        headers: { "Content-Type": "application/json" },
        method: "POST",
        body: data,
      })
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          const div = document.getElementById("globalFooter");
          div.innerHTML = data.content;
        })
        .then(() => {
          const disclaimer = document.getElementById("catapult-cookie-bar");
          // console.log(disclaimer.offsetHeight);
          const footer = document.getElementById("footer");
          footer.style.paddingBottom = `${disclaimer.offsetHeight}px`;
        });
    };

    const lfc = (continent) => {
      if (continent === "Europe") {
        loadFooterByCountry("https://fxoro.com/services/footer/");
      } else {
        loadFooterByCountry("https://global.fxoro.com/services/footer/");
      }
    };

    const loadFooter = async () => {
      const logs = process.env.VUE_APP_LOG_ERRORS;
      const logStylesAPI = ["font-size: 14px", "font-weight: bold"].join(";");
      const logStylesAPImsg = ["font-size: 12px", "font-weight: bold", "color: magenta"].join(";");

      try {
        //* Main country API
        let data = "";
        const myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("DNT", "1");
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
        const urlencoded = new URLSearchParams();
        urlencoded.append("Token", dataSite.CountryToken);
        const requestOptions = {
          method: "POST",
          headers: myHeaders,
          body: urlencoded,
          redirect: "follow",
        };
        const loadDataFXAPI = await fetch(dataSite.fxoroCountryAPI, requestOptions);

        if (!loadDataFXAPI.ok) {
          throw Error();
        }

        data = await loadDataFXAPI.json();

        lfc(data.Continent);

        // console.log(data);
      } catch (err) {
        if (logs === "true") {
          console.log(`%cLooks like there was a problem with main API(s):`, logStylesAPI, err);
          console.log("%c> Loading backup API(s)...", logStylesAPImsg);
        }

        try {
          let data = "";
          //* Backup country API
          const loadDataIPAPI = await fetch("http://ip-api.com/json/?fields=3145728");

          if (!loadDataIPAPI.ok) {
            throw Error(`${loadDataIPAPI.status} ${loadDataIPAPI.statusText}`);
          }

          data = await loadDataIPAPI.json();

          lfc(data.continent);

          // console.log(data);
        } catch (e) {
          if (logs === "true") {
            console.log(`%cLooks like there was a problem with backup API(s):`, logStylesAPI, e);
            console.log("%c> Cannot fetch backup API(s). Footer pepsi!", logStylesAPImsg);
          }
        }
      }
    };

    onMounted(() => {
      loadFooter();
    });

    return {};
  },
};
</script>

<template>
  <div id="globalFooter">
    <Loader />
  </div>
</template>

<style lang="scss">
#globalFooter {
  --clr-footerBackground: #353535;
  --clr-footerTextColor: #fff;

  position: relative;
  min-height: 200px;

  .hstripProds {
    display: none;
  }

  footer#footer {
    background: var(--clr-footerBackground);
    color: var(--clr-footerTextColor);
    font-size: 12px;
    line-height: normal;
    padding: 20px 0;

    p {
      font-size: 13px;
      margin: 0 0 1rem;
      line-height: normal;
    }
  }

  .disclaimer_footer {
    background: white;
    -webkit-box-shadow: 0 -2px 15px 3px rgb(0 0 0 / 30%);
    box-shadow: 0 -2px 15px 3px rgb(0 0 0 / 30%);
    color: black;
    font-size: 15px;
    inset: auto 0 0 0;
    padding: 15px 0;
    position: fixed;
    z-index: 0;
  }
}
</style>
