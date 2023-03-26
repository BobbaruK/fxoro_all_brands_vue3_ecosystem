<script>
import { ref } from "@vue/reactivity";
import { onMounted, onUnmounted } from "@vue/runtime-core";

import Loader from "../Loader/Loader.vue";

import translationsGlossary from "../../composables/translationsGlossary";

export default {
  name: "CountDown",
  components: { Loader },
  props: {
    lang: {
      type: String,
      required: true,
    },
    countdownTo: {
      type: Object,
      required: true,
    },
    showText: {
      type: Boolean,
      default: true,
    },
    autoRemove: {
      type: Boolean,
      default: true,
    },
    stopEnd: {
      type: Boolean,
      default: false,
    },
    hideSeconds: {
      type: Boolean,
      default: false,
    },
    hideMinutes: {
      type: Boolean,
      default: false,
    },
    hideHours: {
      type: Boolean,
      default: false,
    },
    hideDays: {
      type: Boolean,
      default: false,
    },
    hideWeeks: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    // Create constants for seconds, minutes, hours, days and weeks texts
    const textSeconds = translationsGlossary.s.seconds;
    const textMinutes = translationsGlossary.m.minutes;
    const textHours = translationsGlossary.h.hours;
    const textDays = translationsGlossary.d.days;
    const textWeeks = translationsGlossary.w.weeks;

    // Create constants for seconds, minutes, hours, days and weeks values
    const seconds = ref(null);
    const minutes = ref(null);
    const hours = ref(null);
    const days = ref(null);
    const weeks = ref(null);

    // Create constants for seconds, minutes, hours, days and weeks hide feature
    const hideSeconds = ref();
    const hideMinutes = ref();
    const hideHours = ref();
    const hideDays = ref();
    const hideWeeks = ref();

    /**
     * Check if autoRemove is true and remove the rest of the units
     *    ex: if hours is hidden also days and weeks will be hidden
     */
    if (props.autoRemove) {
      hideSeconds.value = props.hideSeconds;
      hideMinutes.value = props.hideMinutes;
      hideHours.value = props.hideHours ? true : hideMinutes.value ? true : false;
      hideDays.value = props.hideDays ? true : hideHours.value ? true : false;
      hideWeeks.value = props.hideWeeks ? true : hideDays.value ? true : false;
    } else {
      hideSeconds.value = props.hideSeconds;
      hideMinutes.value = props.hideMinutes;
      hideHours.value = props.hideHours;
      hideDays.value = props.hideDays;
      hideWeeks.value = props.hideWeeks;
    }

    const updateCountdown = () => {
      /**
       * 1. Create constants and variables
       * 2. Create function setUnitsAutoRemove()
       * 3. Create function setUnitsNoRemove()
       * 4. Create reusable function setUnit(element, unit)
       * 5. Create reusable function setUnitStop(element, unit)
       * 6. Run setUnitsAutoRemove() and setUnitsNoRemove() if
       *    autoRemove is true or false
       * 7. If stopEnd = true set each unit via
       *    setUnitStop(element, unit) and stop the script there
       * 8. set each unit via setUnit(element, unit) if
       *    stopEnd != true
       */

      // 1
      const currentTime = new Date();
      const gap = props.countdownTo - currentTime;
      const second = 1000;
      const minute = second * 60;
      const hour = minute * 60;
      const day = hour * 24;
      const week = day * 7;
      let w, d, h, m, s;

      // 2
      const setUnitsAutoRemove = () => {
        /**
         * a. set the weeks remaining
         * b. set the days remaining:
         *   - if the weeks are hidden set the days remaining untill
         *     the start of the event
         * c. set the hours remaining:
         *   - if the days are hidden the weeks will also be set to
         *     hidden and set the remaining hours untill the start of
         *     the event
         * d. set the minutes remaining:
         *   - if the hours are hidden the days and the weeks will also
         *     be set to hidden and set the remaining minutes untill the
         *     start of the event
         * e. set the seconds remaining:
         *   - if the hours are hidden the minutes, days and the weeks
         *     will also be set to hidden and set the remaining minutes
         *     untill the start of the event
         */
        w = Math.floor(gap / week); // a
        d = hideWeeks.value ? Math.floor(gap / day) : Math.floor((gap % week) / day); // b
        h = hideDays.value ? Math.floor(gap / hour) : Math.floor((gap % day) / hour); // c
        m = hideHours.value ? Math.floor(gap / minute) : Math.floor((gap % hour) / minute); // d
        s = hideMinutes.value ? Math.floor(gap / second) : Math.floor((gap % minute) / second); // e
      };

      // 3
      const setUnitsNoRemove = () => {
        /**
         * a. set the weeks remaining
         * b. set the days remaining:
         *   - if the weeks are hidden set the days remaining untill
         *     the start of the event
         *   - if the weeks are NOT hidden set the days remaining
         *     untill the start of the week
         * c. set the hours remaining:
         *   - if the days are hidden set the hours remaining untill
         *     the start of the week
         *   - if the weeks are also hidden set the hours remaining
         *     untill the start the event
         *   - if the days are NOT hidden set the hours remaining
         *     untill the start of the day
         * d. set the minutes remaining:
         *   - if the hours are hidden set the hours remainig untill
         *     the start of the day
         *   - if the days are also hidden set the minutes remaining
         *     untill the start of the week
         *   - if the weeks are also hidden set the minutes remaining
         *     untill the start of the event
         * e. set the seconds remaining:
         *   - if the minutes are hidden set the seconds remaining untill
         *     the start of the hour
         *   - if the hours are hidden set the seconds remainig untill
         *     the start of the day
         *   - if the days are also hidden set the seconds remaining
         *     untill the start of the week
         *   - if the weeks are also hidden set the seconds remaining
         *     untill the start of the event
         */
        w = Math.floor(gap / week); // 3-a
        d = hideWeeks.value ? Math.floor(gap / day) : Math.floor((gap % week) / day); // 3-b
        h = hideDays.value ? Math.floor((gap % week) / hour) : Math.floor((gap % day) / hour); // 3-c
        m = hideHours.value
          ? hideDays.value
            ? Math.floor((gap % week) / minute)
            : Math.floor((gap % day) / minute)
          : Math.floor((gap % hour) / minute); // 3-d
        s = hideMinutes.value
          ? hideHours.value
            ? hideDays.value
              ? Math.floor((gap % week) / second)
              : Math.floor((gap % day) / second)
            : Math.floor((gap % hour) / second)
          : Math.floor((gap % minute) / second); // 3-f
      };

      // 4
      const setUnit = (element, unit) => {
        /**
         * Format the number ("03" instead of "3") and if it is
         * a negative number make it positive the add it to the DOM
         */
        element.value.innerHTML =
          currentTime < props.countdownTo
            ? unit < 10
              ? unit >= 0
                ? `0${unit}`
                : unit
              : unit
            : unit > -10
            ? `0${Math.abs(unit + 1)}`
            : Math.abs(unit + 1);
      };

      // 5
      const setUnitStop = (element, unit) => {
        /**
         * Format the number ("03" instead of "3") and add it
         * to the DOM. If the number is less than 0 stop
         * at 0
         */
        element.value.innerHTML = unit <= 0 ? "00" : unit < 10 ? `0${unit}` : unit;
      };

      // 6
      if (props.autoRemove) {
        setUnitsAutoRemove();
      } else {
        setUnitsNoRemove();
      }

      // 7
      if (props.stopEnd) {
        if (!hideWeeks.value) {
          setUnitStop(weeks, w);
        }

        if (!hideDays.value) {
          setUnitStop(days, d);
        }

        if (!hideHours.value) {
          setUnitStop(hours, h);
        }

        if (!hideMinutes.value) {
          setUnitStop(minutes, m);
        }

        if (!hideSeconds.value) {
          setUnitStop(seconds, s);
        }

        return;
      }

      // 8
      if (!hideWeeks.value) {
        setUnit(weeks, w);
      }

      if (!hideDays.value) {
        setUnit(days, d);
      }

      if (!hideHours.value) {
        setUnit(hours, h);
      }

      if (!hideMinutes.value) {
        setUnit(minutes, m);
      }

      if (!hideSeconds.value) {
        setUnit(seconds, s);
      }
    };

    /**
     * Create an empty variable and when mount the component
     * setInterval to run updateCountdown every 1000 ms
     */
    let interval;
    onMounted(() => {
      interval = setInterval(updateCountdown, 1000);
    });

    /**
     * Create function stopInterval() to clearInterval
     */
    const stopInterval = () => {
      clearInterval(interval);
    };

    /**
     * On unmount the component run the stopInterval() function
     */
    onUnmounted(() => {
      stopInterval();
    });

    return {
      textSeconds,
      textMinutes,
      textHours,
      textDays,
      textWeeks,
      seconds,
      minutes,
      hours,
      days,
      weeks,
      hideSeconds,
      hideMinutes,
      hideHours,
      hideDays,
      hideWeeks,
    };
  },
};
</script>
<template>
  <div class="countdown">
    <div v-if="!hideWeeks">
      <div v-if="showText">{{ textWeeks[lang] }}</div>
      <div class="counter" ref="weeks"><Loader /></div>
    </div>
    <div v-if="!hideDays">
      <div v-if="showText">{{ textDays[lang] }}</div>
      <div class="counter" ref="days"><Loader /></div>
    </div>
    <div v-if="!hideHours">
      <div v-if="showText">{{ textHours[lang] }}</div>
      <div class="counter" ref="hours"><Loader /></div>
    </div>
    <div v-if="!hideMinutes">
      <div v-if="showText">{{ textMinutes[lang] }}</div>
      <div class="counter" ref="minutes"><Loader /></div>
    </div>
    <div v-if="!hideSeconds">
      <div v-if="showText">{{ textSeconds[lang] }}</div>
      <div class="counter" ref="seconds"><Loader /></div>
    </div>
  </div>
</template>

<style lang="scss">
.countdown,
.countdown > div {
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  position: relative;
}
.countdown {
  flex-wrap: wrap;
  justify-content: flex-start;
  div.counter {
    display: block;
    font-size: 130%;
    font-weight: bold;
    max-width: 100%;
  }
  .loader {
    font-size: 40px;
  }
}
.countdown > div {
  flex-direction: column;
  padding: 1rem;
  border-radius: 5px;
  border: 1px solid black;
}
</style>
