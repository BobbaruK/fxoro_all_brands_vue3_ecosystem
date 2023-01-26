<script>
import { onMounted } from "@vue/runtime-core";

import Table from "../../../../../../../../001-super_global_files/components/Table/Table.vue";
import reloadComponent from "../../../../../../../../001-super_global_files/composables/reloadComponent";

import translationsGlossary from "../../../../../../../../001-super_global_files/composables/translationsGlossary";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~Table~Section1",
  components: { Table },
  props: {
    lang: String,
  },
  setup() {
    const { componentKey } = reloadComponent();

    const newDateFunction = (date) => {
      const actualDate = new Date(date);
      const day = actualDate.getDate() < 10 ? `0${actualDate.getDate()}` : actualDate.getDate();
      const month = actualDate.getMonth() + 1 < 10 ? `0${actualDate.getMonth() + 1}` : actualDate.getMonth() + 1;
      const year = actualDate.getFullYear();

      return `${day}.${month}.${year}`;
    };

    const tableDetails1 = {
      table: {
        thead: [
          [
            {
              name: "Table title",
              colspan: 8,
              class: "tableTitle",
            },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
          ],
          [
            {
              name: "Share / Country",
              colspan: 2,
              class: "tableSecondTitle",
            },
            {},
            {
              name: "Currency / Margin / Trading hours",
              colspan: 3,
              class: "tableSecondTitle",
            },
            {},
            {},
            {
              name: "Date / Show",
              colspan: 3,
              class: "tableSecondTitle",
            },
            {},
            {},
          ],
          [
            {
              name: "Share",
              class: "tableThirdTitle",
            },
            {
              name: "Country",
              class: "tableThirdTitle",
            },
            {
              name: "Currency",
              class: "tableThirdTitle",
            },
            {
              name: "Margin",
              class: "tableThirdTitle",
            },
            {
              name: "Trading hours",
              class: "tableThirdTitle",
            },
            {
              name: "Date",
              class: "tableThirdTitle",
            },
            {
              name: "Show",
              class: "tableThirdTitle",
            },
            {
              name: "Active",
              class: "tableThirdTitle",
            },
          ],
        ],
        tbody: [
          // [
          //   /* Share */ { value: "" },
          //   /* Country */ { value: "" },
          //   /* Currency */ { value: "" },
          //   /* Margin */ { value: "" },
          //   /* Trading hours */ { value: "" },
          //   /* Date */ { value: "" },
          //   /* Show */ { value: "" },
          //   /* Active */ { value: "" },
          // ],
          [/* Share */ { value: "Sandvik" }, /* Country */ { value: "Sweden", class: "orgh" }, /* Currency */ { value: "EUR" }, /* Margin */ { value: 0.25 }, /* Trading hours */ { value: "Mon 00:05- Fri 23:00" }, /* Date */ { value: newDateFunction("January 20 2023") }, /* Show */ { value: true }, /* Active */ { value: true }],
          [/* Share */ { value: "Microsoft" }, /* Country */ { value: "USA" }, /* Currency */ { value: "USD" }, /* Margin */ { value: 0.45 }, /* Trading hours */ { value: "Mon 00:05- Fri 23:00" }, /* Date */ { value: newDateFunction("January 24 2023") }, /* Show */ { value: false }, /* Active */ { value: true }],
          [/* Share */ { value: "STMicroelectronics" }, /* Country */ { value: "Italy" }, /* Currency */ { value: "EUR" }, /* Margin */ { value: 0.15 }, /* Trading hours */ { value: "Mon 00:05- Fri 23:00" }, /* Date */ { value: newDateFunction("January 26 2023") }, /* Show */ { value: true }, /* Active */ { value: true }],
        ],
        tbody2: [
          {
            share: "Sandvik",
            country: "Sweden",
            currency: "EUR",
            margin: 0.25,
            tradingHours: "Mon 00:05- Fri 23:00",
            date: newDateFunction("January 20 2023"),
            show: true,
          },
          {
            share: "Microsoft",
            country: "USA",
            currency: "USD",
            margin: 0.45,
            tradingHours: "Mon 00:05- Fri 23:00",
            date: newDateFunction("January 24 2023"),
            show: false,
          },
          {
            share: "STMicroelectronics",
            country: "Italy",
            currency: "EUR",
            margin: 0.15,
            tradingHours: "Mon 00:05- Fri 23:00",
            date: newDateFunction("January 26 2023"),
            show: true,
          },
        ],
      },
      sticky: false,
      sort: false,
      search: false,
      responiveBreakPoint: 991,
    };

    const tableDetails2 = {
      table: {
        thead: [
          [
            {
              name: "Instrument",
              rowspan: 2,
            },
            {
              name: "Christmas",
              colspan: 3,
            },
            {},
            {},
            {
              name: "New Year",
              colspan: 3,
            },
            {},
            {},
          ],
          [{}, { name: "Friday, Dec 23" }, { name: "Monday, Dec 26" }, { name: "Tuesday, Dec 27" }, { name: "Friday, Dec 30" }, { name: "Monday, Jan 2" }, { name: "Tuesday, Jan 3" }],
        ],
        tbody: [
          // [
          //   /* Instrument */ { value: "" },
          //   /* Friday, Dec 23 */ { value: "" },
          //   /* Monday, Dec 26 */ { value: "" },
          //   /* uesday, Dec 27 */ { value: "" },
          //   /* Friday, Dec 30 */ { value: "" },
          //   /* Monday, Jan 2 */ { value: "" },
          //   /* Tuesday, Jan 3 */ { value: "" },
          // ],
          [/* Instrument */ { value: "FOREX" }, /* Friday, Dec 23 */ { value: "Regular" }, /* Monday, Dec 26 */ { value: "Regular" }, /* uesday, Dec 27 */ { value: "Regular" }, /* Friday, Dec 30 */ { value: "Regular" }, /* Monday, Jan 2 */ { value: "Regular" }, /* Tuesday, Jan 3 */ { value: "Regular" }],
          [/* Instrument */ { value: "Oil" }, /* Friday, Dec 23 */ { value: "Regular" }, /* Monday, Dec 26 */ { value: "Regular" }, /* uesday, Dec 27 */ { value: "Regular" }, /* Friday, Dec 30 */ { value: "Regular" }, /* Monday, Jan 2 */ { value: "Regular" }, /* Tuesday, Jan 3 */ { value: "Regular" }],
          [/* Instrument */ { value: "Coffee" }, /* Friday, Dec 23 */ { value: "Regular" }, /* Monday, Dec 26 */ { value: "Closed" }, /* uesday, Dec 27 */ { value: "14:30-20:30 (Late Open)" }, /* Friday, Dec 30 */ { value: "Regular" }, /* Monday, Jan 2 */ { value: "Closed" }, /* Tuesday, Jan 3 */ { value: "Regular" }],
        ],
      },
      sticky: false,
      sort: false,
      search: false,
      responiveBreakPoint: 991,
    };

    const tableDetails3 = {
      table: {
        thead: [
          [
            {
              name: "Indices – 2023",
              colspan: 4,
            },
            { name: null },
            {},
            {},
          ],
          [{ name: "Symbol" }, { name: "Description" }, { name: "Expiration date / Rollover date" }, { name: "Time" }],
        ],
        tbody: [
          // [
          //   /* Symbol */ { value: "" },
          //   /* Description */ { value: "" },
          //   /* Expiration date */ { value: "" },
          //   /* Time */ { value: "" },
          // ],
          [/* Symbol */ { value: "AUS200", rowspan: 4, class: "aus" }, /* Description */ { value: "March" }, /* Expiration date */ { value: "15/03/2023" }, /* Time */ { value: "00:05:00" }],
          [/* Symbol */ { value: "AUS200", class: "hideDesk" }, /* Description */ { value: "June" }, /* Expiration date */ { value: "14/06/2023" }, /* Time */ { value: "00:05:00" }],
          [/* Symbol */ { value: "AUS200", class: "hideDesk" }, /* Description */ { value: "September" }, /* Expiration date */ { value: "20/09/2023" }, /* Time */ { value: "00:05:00" }],
          [/* Symbol */ { value: "AUS200", class: "hideDesk" }, /* Description */ { value: "December" }, /* Expiration date */ { value: "20/12/2023" }, /* Time */ { value: "00:05:00" }],
          [/* Symbol */ { value: "GER40", rowspan: 4 }, /* Description */ { value: "March" }, /* Expiration date */ { value: "16/03/2023" }, /* Time */ { value: "23:05:00" }],
          [/* Symbol */ { value: "GER40", class: "hideDesk" }, /* Description */ { value: "June" }, /* Expiration date */ { value: "15/06/2023" }, /* Time */ { value: "23:05:00" }],
          [/* Symbol */ { value: "GER40", class: "hideDesk" }, /* Description */ { value: "September" }, /* Expiration date */ { value: "14/09/2023" }, /* Time */ { value: "23:05:00" }],
          [/* Symbol */ { value: "GER40", class: "hideDesk" }, /* Description */ { value: "December" }, /* Expiration date */ { value: "14/12/2023" }, /* Time */ { value: "23:05:00" }],
        ],
      },
      sticky: false,
      sort: false,
      search: false,
      responiveBreakPoint: 991,
    };

    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });
    return { componentKey, tableDetails1, tableDetails2, tableDetails3, translationsGlossary };
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>{{ translationsGlossary.t.table[lang] }}</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="margin-bottom: 200px">
          <Table :table-details="tableDetails1" :key="componentKey" />
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="margin-bottom: 200px">
          <Table :table-details="tableDetails2" :key="componentKey" />
        </div>
      </div>
      <div class="row">
        <div class="col-12" style="margin-bottom: 200px">
          <Table :table-details="tableDetails3" :key="componentKey" />
        </div>
      </div>
      <div class="row">
        <div class="col-12"></div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@use "../../../assets/scss/abstracts/mixins" as mxns;

.tableTitle {
  color: red;
  @include mxns.mediamax(md) {
    display: none;
  }
}
.tableSecondTitle {
  color: green;
  @include mxns.mediamax(sm) {
    display: none;
  }
}
.tableThirdTitle {
  color: blue;
}

.hideDesk {
  @include mxns.mediamin(lg) {
    display: none;
  }
}

// .aus {
//   position: relative;
//   &::before {
//     content: "";
//     position: absolute;
//     height: 100%;
//     width: 100%;
//     background: red;
//     inset: 0;
//     z-index: -1;
//   }
// }
</style>
