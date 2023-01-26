<script>
import { ref } from "@vue/reactivity";
import { onMounted } from "@vue/runtime-core";

import { gsap } from "gsap";

export default {
  name: "Table",
  components: {},
  props: {
    tableDetails: Object,
  },
  setup(props) {
    const showMobile = ref(false);

    const carouselResponsiveMatchMedia = () => {
      const gsapmm = gsap.matchMedia();

      const media = `(max-width: ${props.tableDetails.responiveBreakPoint}px)`;

      gsapmm.add(media, () => {
        showMobile.value = !showMobile.value;
      });
    };

    function sortTable(n) {
      var table,
        rows,
        switching,
        i,
        x,
        y,
        shouldSwitch,
        dir,
        switchcount = 0;
      table = document.querySelector(".scssecoTable");
      switching = true;
      // Set the sorting direction to ascending:
      dir = "asc";
      /* Make a loop that will continue until no switching has been done: */
      while (switching) {
        // Start by saying: no switching is done:
        switching = false;
        rows = table.rows;
        /* Loop through all table rows (except the first, which contains table headers): */
        for (i = 1; i < rows.length - 1; i++) {
          // Start by saying there should be no switching:
          shouldSwitch = false;
          /* Get the two elements you want to compare, one from current row and one from the next: */
          x = rows[i].getElementsByTagName("TD")[n];
          y = rows[i + 1].getElementsByTagName("TD")[n];
          /* Check if the two rows should switch place, based on the direction, asc or desc: */
          if (dir == "asc") {
            if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          } else if (dir == "desc") {
            if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
              // If so, mark as a switch and break the loop:
              shouldSwitch = true;
              break;
            }
          }
        }
        if (shouldSwitch) {
          /* If a switch has been marked, make the switch and mark that a switch has been done: */
          rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
          switching = true;
          // Each time a switch is done, increase this count by 1:
          switchcount++;
        } else {
          /* If no switching has been done AND the direction is "asc", set the direction to "desc" and run the while loop again. */
          if (switchcount == 0 && dir == "asc") {
            dir = "desc";
            switching = true;
          }
        }
      }
    }

    onMounted(() => {
      carouselResponsiveMatchMedia();

      // console.log(props.tableDetails.table.thead[1][0].name);
    });

    return { showMobile, sortTable };
  },
};
</script>
<template>
  <div class="tableResponsive">
    <table v-if="showMobile" class="scssecoTable mobile">
      <tbody>
        <tr v-for="(bodyRow, indexBodyRow) in tableDetails.table.tbody" :key="indexBodyRow">
          <td>
            <table>
              <thead>
                <tr>
                  <th :colspan="bodyRow.length + tableDetails.table.thead.length">{{ bodyRow[0].value }}</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(bodyCell, indexBodyCell) in bodyRow" :key="indexBodyCell">
                  <template v-for="(headCell, indexHeadCell) in tableDetails.table.thead">
                    <template v-if="headCell[indexBodyCell]">
                      <th :key="indexHeadCell" :class="[headCell[indexBodyCell].class ? headCell[indexBodyCell].class : null]" :rowspan="headCell[indexBodyCell] && headCell[indexBodyCell].colspan ? headCell[indexBodyCell].colspan : null" :colspan="headCell[indexBodyCell] && headCell[indexBodyCell].rowspan ? headCell[indexBodyCell].rowspan : null">
                        {{ headCell[indexBodyCell].name }}
                      </th>
                    </template>
                  </template>

                  <td :rowspan="bodyCell.colspan ? bodyCell.colspan : null" :class="[bodyCell.class ? bodyCell.class : null]">
                    {{ bodyCell.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </td>
        </tr>
      </tbody>
    </table>
    <table v-else class="scssecoTable desktop">
      <thead v-if="tableDetails.table.thead">
        <tr v-for="(headRow, indexHeadRow) in tableDetails.table.thead" :key="indexHeadRow">
          <th v-for="(headCell, indexHeadCell) in headRow" :key="indexHeadCell" :colspan="headCell.colspan ? headCell.colspan : null" :rowspan="headCell.rowspan ? headCell.rowspan : null" :class="[headCell.class ? headCell.class : '']">
            {{ headCell.name }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(bodyRow, index) in tableDetails.table.tbody" :key="index">
          <td v-for="(bodyCell, index) in bodyRow" :key="index" :colspan="bodyCell.colspan ? bodyCell.colspan : null" :rowspan="bodyCell.rowspan ? bodyCell.rowspan : null" :class="[bodyCell.class ? bodyCell.class : null]">
            {{ bodyCell.value }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- <table class="scssecoTable">
    <tr>
      <th @click="sortTable(0)">Name</th>
      <th @click="sortTable(1)">Country</th>
    </tr>
    <tr>
      <td>Berglunds snabbkop</td>
      <td>Sweden</td>
    </tr>
    <tr>
      <td>North/South</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Alfreds Futterkiste</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Koniglich Essen</td>
      <td>Germany</td>
    </tr>
    <tr>
      <td>Magazzini Alimentari Riuniti</td>
      <td>Italy</td>
    </tr>
    <tr>
      <td>Paris specialites</td>
      <td>France</td>
    </tr>
    <tr>
      <td>Island Trading</td>
      <td>UK</td>
    </tr>
    <tr>
      <td>Laughing Bacchus Winecellars</td>
      <td>Canada</td>
    </tr>
  </table>

  <table class="scssecoTable">
    <thead>
      <tr>
        <th>cutare</th>
      </tr>
    </thead>
    <tr>
      <td>
        <table class="scssecoTable">
          <thead>
            <tr>
              <th colspan="2">Berglunds snabbkop</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Country</td>
              <td>Sweden</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
    <tr>
      <td>
        <table class="scssecoTable">
          <thead>
            <tr>
              <th colspan="2">North/South</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Country</td>
              <td>UK</td>
            </tr>
          </tbody>
        </table>
      </td>
    </tr>
  </table> -->
</template>

<style lang="scss">
@use "../../assets/scss/abstracts/mixins" as mxns;

.tableResponsive {
  display: block;
  width: 100%;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: -ms-autohiding-scrollbar;
}

table,
th,
td {
  border: 1px solid black;
  border-collapse: collapse;
}

table.scssecoTable {
  border-spacing: 0;
  max-width: 100%;
  width: 100%;
  border: 1px solid var(--clr-gray-200);
  border-radius: 5px;
  text-align: center;
  th,
  td {
    padding: 0;
    &:empty {
      display: none;
    }
    @include mxns.mediamin(lg) {
      padding: 1rem;
    }
  }
  th {
    background-color: var(--clr-brandSecondaryColor);
  }
  thead {
    th {
      // cursor: pointer;
    }
  }
  tbody {
    tr:nth-child(even) {
      // background-color: var(--clr-brandSecondaryColor-300);
    }
  }

  table {
    width: 100%;
    th,
    td {
      padding: 1rem;
    }
    td {
      width: 50%;
    }
    tbody {
      tr {
        &:first-child {
          // display: none;
        }
      }
    }
  }
}
</style>
