# SCSSeco Vue3 FXORO Register Form

## How to use

| \*  | Prop            | Type    |  Default   | Requiered |
| :-: | --------------- | ------- | :--------: | :-------: |
| 1.  | `agreementType` | String  | wBrandName |  &times;  |
| 2.  | `buttonText`    | String  |     -      |  &check;  |
| 3.  | `lang`          | String  |     -      |  &check;  |
| 4.  | `test`          | Boolean |   false    |  &times;  |

1. Set the agreement type
   - wBrandName - with the brand name included
   - woBrandName - without the brand name
2. set the text of the form button
3. set the language of the form
4. activate the test mode (not sending to crm, no recaptcha)

## Basic usage

```js
import Form from "../001-super_global_files/components/Form/forms/fxoroForms/RegisterForm-test.vue";

export default {
  ...
  components: { Form },
  ...
};
```

```html
<Form 
  :agreementType="'wBrandName'" 
  :buttonText="formButton[lang]" 
  :lang="lang" 
  :test="true" 
/>
```

## Layouts

Layouts are used via classes

```js
/*
 * Default layout
 *
 * |  First Name   |
 * |  Last Name    |
 * |  Email        |
 * |  Country      |
 * |  Phone        |
 * |  Agreement(s) |
 * |  Submit       |
 */

/*
 * .layout1
 *
 * |  First Name   ||  Last Name    |
 * |  Email                         |
 * |  Country                       |
 * |  Phone                         |
 * |  Agreement(s)                  |
 * |  Submit                        |
 */

/*
 * .layout2
 *
 * |  First Name   ||  Last Name    ||  Email        |
 * |  Country      ||  Phone        ||  Submit       |
 * |  Agreement(s)                                   |
 */
```

### Layouts usage

```html
<Form 
  class="layout1" 
  :buttonText="formButton[lang]" 
  :lang="lang"
/>
```

You can make custom layouts via css