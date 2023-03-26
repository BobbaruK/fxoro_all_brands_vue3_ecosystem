# SCSSeco Vue3 Countdown

## How to use

| \*  | Prop           | Type    | Default | Requiered |
| :-: | -------------- | ------- | :-----: | :-------: |
| 1.  | `lang`         | String  |    -    |  &check;  |
| 2.  | `countdown-to` | Object  |    -    |  &check;  |
| 3.  | `show-text`    | Boolean |  true   |  &times;  |
| 4.  | `auto-remove`  | Boolean |  true   |  &times;  |
| 5.  | `stop-end`     | Boolean |  false  |  &times;  |
| 6.  | `hide-seconds` | Boolean |  false  |  &times;  |
| 7.  | `hide-minutes` | Boolean |  false  |  &times;  |
| 8.  | `hide-hours`   | Boolean |  false  |  &times;  |
| 9.  | `hide-days`    | Boolean |  false  |  &times;  |
| 10. | `hide-weeks`   | Boolean |  false  |  &times;  |

1. Get the right translation for words like "weeks", "day" and so on
2. Receive a date Object that represents the start of the event
3. Show or hide the text("weeks", "days" and so on)
4. If you hide a unit, this will also hide the rest of the bigger units <br> ex: if hours is hidden also days and weeks will be hidden
5. The counter will stop when the event start or it will continue counting up from the start of the event
6. hide the seconds unit
7. hide the minutes unit
8. hide the hours unit
9. hide the days unit
10. hide the weeks unit

## Basic usage

```js
import Countdown from "../001-super_global_files/components/Countdown/Countdown.vue";

export default {
  ...
  components: { Countdown },
  ...
};
```

```html
<Countdown :lang="'ro'" :countdown-to="new Date('March 25 2023 00:00:00')" />
```

| Weeks | Days | Hours | Minutes | Seconds |
| :---: | :--: | :---: | :-----: | :-----: |
|  01   |  05  |  09   |   17    |   23    |

<br>

## Customize via props

```html
<Countdown
  :lang="'ro'"
  :countdown-to="new Date('March 25 2023 00:00:00')"
  :auto-remove="false"
  :hide-days="true"
  :hide-minutes="true"
/>
```

| Weeks | Hours | Seconds |
| :---: | :---: | :-----: |
|  01   |  27   |  1796   |

Because minutes are hidden, seconds represents the amount of seconds untill the hour changes <br> Because days are hidden, hours represents the amount of hours untill the week changes <br><br><br>

```html
<Countdown :lang="'ro'" :countdown-to="new Date('March 25 2023 00:00:00')" :hide-hours="true" />
```

| Minutes | Seconds |
| :-----: | :-----: |
|  10643  |   35    |

Because hours is hidden and `:auto-remove="true"`(default) it will not show the days and the weeks by default<br><br><br>

```html
<Countdown :lang="'ro'" :countdown-to="new Date('March 25 2020 00:00:00')" :stop-end="true" />
```

| Weeks | Days | Hours | Minutes | Seconds |
| :---: | :--: | :---: | :-----: | :-----: |
|  00   |  00  |  00   |   00    |   00    |
