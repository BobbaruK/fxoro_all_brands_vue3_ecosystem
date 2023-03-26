# SCSSeco Vue3 Accordion

## How to use

| \*  | Prop    | Type    | Default | Requiered |
| :-: | ------- | ------- | :-----: | :-------: |
| 1.  | `flush` | Boolean |  true   |  &times;  |

1. flush(close) the other AccordionItems if true

### Basic usage

```js
import Accordion from "../001-super_global_files/components/Accordion/Accordion.vue";
import AccordionItem from "../001-super_global_files/components/Accordion/AccordionItem.vue";

export default {
  ...
  components: { Accordion },
  ...
};
```

```html
<Accordion>
  <AccordionItem>
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem class="active">
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem>
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem class="active">
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem>
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
</Accordion>
```

### Flush true

```html
<Accordion :flush="true">
  <AccordionItem>
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem class="active">
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem>
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem class="active">
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
  <AccordionItem>
    <template #title>...</template>
    <template #content>...</template>
  </AccordionItem>
</Accordion>
```
