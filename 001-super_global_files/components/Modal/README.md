# SCSSeco Vue3 Modal

## How to use

| \*  | Prop/Attrs                 | Type    | Default | Requiered |
| :-: | -------------------------- | ------- | :-----: | :-------: |
| 1.  | `delay`                    | Number  |    0    |  &times;  |
| 2.  | `lang`                     | String  |    -    |  &check;  |
| 3.  | `modalID`                  | String  |    -    |  &check;  |
| 4.  | `v-model="showModal"`      | Boolean |    -    |  &check;  |
| 5.  | `@closeModal="closeModal"` | Boolean |    -    |  &check;  |

1. Time untill modal show (ms). 0 means off
2. Get the right translation for words like "close"
3. The id of the modal
4. Show/hide the modal
5. Close modal via `v-model`

## Basic usage

```javascript
import Modal from "../001-super_global_files/components/Modal/Modal.vue";

const showModal = ref(false);
```

```html
<button @click="showModal = !showModal">...</button>
<Modal
  :delay="1500"
  :lang="lang"
  :modalID="'home-modal'"
  v-model="showModal"
  @closeModal="showModal = false"
>
  <h1>Lorem, ipsum dolor.</h1>
</Modal>
```
