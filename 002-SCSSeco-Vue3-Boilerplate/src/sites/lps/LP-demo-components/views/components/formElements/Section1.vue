<script>
import { onMounted } from "@vue/runtime-core";

import Input from "../../../../../../../../001-super_global_files/components/Form/Input/Input.vue";
import Textarea from "../../../../../../../../001-super_global_files/components/Form/Textarea/Textarea.vue";
import Select from "../../../../../../../../001-super_global_files/components/Form/Select/Select.vue";

import hljs from "highlight.js/lib/core";
import javascript from "highlight.js/lib/languages/javascript";
import html from "highlight.js/lib/languages/xml";
hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("html", html);
import "highlight.js/styles/github-dark.css";

export default {
  name: "LP~DemoComponents~Components~FormElements~Section1",
  components: { Input, Textarea, Select },
  props: {
    lang: String,
  },
  setup() {
    onMounted(() => {
      document.querySelectorAll("pre code").forEach((el) => {
        hljs.highlightElement(el);
      });
    });

    return {};
  },
};
</script>

<template>
  <section id="section1" class="section">
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Form Elements</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <div>
            <div class="inputComponent">
              <h3>Type: button</h3>
              <p>
                <Input :type="'button'" :value="'asmr'" :name="'button'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'button'&quot; :value=&quot;'asmr'&quot; :name=&quot;'button'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: checkbox</h3>
              <p>
                <Input :type="'checkbox'" :value="'asmr'" :name="'checkbox'" checked required />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'checkbox'&quot; :value=&quot;'asmr'&quot; :name=&quot;'checkbox'&quot; checked required /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: color</h3>
              <p>
                <Input :type="'color'" :value="'asmr'" :name="'color'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'color'&quot; :value=&quot;'asmr'&quot; :name=&quot;'color'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: date</h3>
              <p>
                <Input :type="'date'" :value="'2018-07-22'" :name="'date'" :min="'2018-01-01'" :max="'2018-12-31'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'date'&quot; :value=&quot;'2018-07-22'&quot; :name=&quot;'date'&quot; :min=&quot;'2018-01-01'&quot; :max=&quot;'2018-12-31'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: datetime-local</h3>
              <p>
                <Input
                  :type="'datetime-local'"
                  :value="'2018-06-12T19:30'"
                  :name="'datetime-local'"
                  :min="'2017-06-07T00:00'"
                  :max="'2019-06-14T00:00'"
                />
              </p>
              <pre><code class="language-html">&lt;Input
  :type=&quot;'datetime-local'&quot;
  :value=&quot;'2018-06-12T19:30'&quot;
  :name=&quot;'datetime-local'&quot;
  :min=&quot;'2017-06-07T00:00'&quot;
  :max=&quot;'2019-06-14T00:00'&quot;
/&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: email</h3>
              <p>
                <Input
                  :type="'email'"
                  :name="'email'"
                  :list="'defaultEmails'"
                  :placeholder="'mail.com'"
                  :pattern="/.+@globex\.com/i"
                />
                <datalist id="defaultEmails">
                  <option value="jbond007@mi6.defence.gov.uk"></option>
                  <option value="jbourne@unknown.net"></option>
                  <option value="nfury@shield.org"></option>
                  <option value="tony@starkindustries.com"></option>
                  <option value="hulk@grrrrrrrr.arg"></option>
                </datalist>
              </p>
              <pre><code class="language-html">&lt;Input
  :type=&quot;'email'&quot;
  :name=&quot;'email'&quot;
  :list=&quot;'defaultEmails'&quot;
  :placeholder=&quot;'mail.com'&quot;
  :pattern=&quot;/.+@globex.com/i&quot;
/&gt;
&lt;datalist id=&quot;defaultEmails&quot;&gt;
  &lt;option value=&quot;jbond007@mi6.defence.gov.uk&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;jbourne@unknown.net&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;nfury@shield.org&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;tony@starkindustries.com&quot;&gt;&lt;/option&gt;
  &lt;option value=&quot;hulk@grrrrrrrr.arg&quot;&gt;&lt;/option&gt;
&lt;/datalist&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: file</h3>
              <p>
                <Input :type="'file'" :name="'file'" :accept="'image/png, image/jpeg'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'file'&quot; :name=&quot;'file'&quot; :accept=&quot;'image/png, image/jpeg'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: hidden</h3>
              <p>
                <Input :type="'hidden'" :name="'hidden'" :value="1234" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'hidden'&quot; :name=&quot;'hidden'&quot; :value=&quot;1234&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: image</h3>
              <p>
                <Input
                  :type="'image'"
                  :name="'image'"
                  :height="57"
                  :width="173"
                  :alt="`Cine plm foloseste d'astea`"
                  :src="'https://interactive-examples.mdn.mozilla.net/media/examples/login-button.png'"
                />
              </p>
              <pre><code class="language-html">&lt;Input
  :type=&quot;'image'&quot;
  :name=&quot;'image'&quot;
  :height=&quot;57&quot;
  :width=&quot;173&quot;
  :alt=&quot;`Cine plm foloseste d'astea`&quot;
  :src=&quot;'https://interactive-examples.mdn.mozilla.net/media/examples/login-button.png'&quot;
/&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: month</h3>
              <p>
                <Input :type="'month'" :name="'month'" :min="'2018-03'" :value="'2018-05'" disabled />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'month'&quot; :name=&quot;'month'&quot; :min=&quot;'2018-03'&quot; :value=&quot;'2018-05'&quot; disabled /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: password</h3>
              <p>
                <Input
                  :type="'password'"
                  :name="'password'"
                  :minlength="9"
                  :maxlength="12"
                  :pattern="/(?!000)([0-6]\d{2}|7([0-6]\d|7[012]))([ -])?(?!00)\d\d\3(?!0000)\d{4}/i"
                  required
                />
              </p>
              <pre><code class="language-html">&lt;Input
  :type=&quot;'password'&quot;
  :name=&quot;'password'&quot;
  :minlength=&quot;9&quot;
  :maxlength=&quot;12&quot;
  :pattern=&quot;/(?!000)([0-6]d{2}|7([0-6]d|7[012]))([ -])?(?!00)dd3(?!0000)d{4}/i&quot;
  required
/&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: radio</h3>
              <p>
                <Input :type="'radio'" :name="'radio'" :value="1234" required />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'radio'&quot; :name=&quot;'radio'&quot; :value=&quot;1234&quot; required /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: range</h3>
              <p>
                <Input :type="'range'" :name="'range'" :min="0" :max="100" :value="80" :step="20" required />
              </p>
              <pre><code class="language-html">&lt;Input
  :type=&quot;'range'&quot;
  :name=&quot;'range'&quot;
  :min=&quot;0&quot;
  :max=&quot;100&quot;
  :value=&quot;80&quot;
  :step=&quot;20&quot;
  required
/&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: reset</h3>
              <p>
                <Input :type="'reset'" :name="'reset'" :value="'Reset'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'reset'&quot; :name=&quot;'reset'&quot; :value=&quot;'Reset'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: search</h3>
              <p>
                <Input :type="'search'" :name="'search'" :placeholder="'Search the site…'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'search'&quot; :name=&quot;'search'&quot; :placeholder=&quot;'Search the site&hellip;'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: submit</h3>
              <p>
                <Input :type="'submit'" :name="'submit'" :value="'Send Request'" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'submit'&quot; :name=&quot;'submit'&quot; :value=&quot;'Send Request'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: tel</h3>
              <p>
                <Input :type="'tel'" :name="'tel'" :placeholder="'First part'" :pattern="/[0-9]{3}/i" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'tel'&quot; :name=&quot;'tel'&quot; :placeholder=&quot;'First part'&quot; :pattern=&quot;/[0-9]{3}/i&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: text</h3>
              <p>
                <Input :type="'text'" :name="'text'" required :minlength="4" :maxlength="8" :size="10" />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'text'&quot; :name=&quot;'text'&quot; required :minlength=&quot;4&quot; :maxlength=&quot;8&quot; :size=&quot;10&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: time</h3>
              <p>
                <Input :type="'time'" :name="'time'" :value="'16:00'" :min="'09:00'" :max="'18:00'" required />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'time'&quot; :name=&quot;'time'&quot; :value=&quot;'16:00'&quot; :min=&quot;'09:00'&quot; :max=&quot;'18:00'&quot; required /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: url</h3>
              <p>
                <Input
                  :type="'url'"
                  :name="'url'"
                  :placeholder="'https://example.com'"
                  :pattern="/https:.*/i"
                  :size="30"
                  required
                />
              </p>
              <pre><code class="language-html">&lt;Input
  :type=&quot;'url'&quot;
  :name=&quot;'url'&quot;
  :placeholder=&quot;'https://example.com'&quot;
  :pattern=&quot;/https:.*/i&quot;
  :size=&quot;30&quot;
  required
/&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Type: week</h3>
              <p>
                <Input
                  :type="'week'"
                  :name="'week'"
                  :value="'2018-W22'"
                  :min="'2018-W18'"
                  :max="'2018-W26'"
                  required
                  id="das"
                />
              </p>
              <pre><code class="language-html">&lt;Input :type=&quot;'week'&quot; :name=&quot;'week'&quot; :value=&quot;'2018-W22'&quot; :min=&quot;'2018-W18'&quot; :max=&quot;'2018-W26'&quot; required /&gt;</code></pre>
            </div>
          </div>
          <div>
            <div class="inputComponent">
              <h3>Textarea</h3>
              <p>
                <Textarea :name="'textarea'" :rows="5" :cols="70" :value="'123 asd'" />
              </p>
              <pre><code class="language-html">&lt;Textarea id=&quot;dsada&quot; :rows=&quot;5&quot; :cols=&quot;70&quot; :value=&quot;'123 asd'&quot; /&gt;</code></pre>
            </div>
            <div class="inputComponent">
              <h3>Select</h3>
              <p>
                <Select :name="'select'">
                  <optgroup label="Swedish Cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                  </optgroup>
                  <optgroup label="German Cars">
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                  </optgroup>
                  <optgroup label="Tari de cacat">
                    <option dial-code="+93" value="AF">Afghanistan (AF)</option>
                    <option dial-code="+358" value="AX">Aland Islands (AX)</option>
                    <option dial-code="+355" value="AL">Albania (AL)</option>
                    <option dial-code="+213" value="DZ">Algeria (DZ)</option>
                    <option dial-code="+1684" value="AS">AmericanSamoa (AS)</option>
                    <option dial-code="+376" value="AD">Andorra (AD)</option>
                    <option dial-code="+244" value="AO">Angola (AO)</option>
                    <option dial-code="+1264" value="AI">Anguilla (AI)</option>
                    <option dial-code="+672" value="AQ">Antarctica (AQ)</option>
                    <option dial-code="+1268" value="AG">Antigua and Barbuda (AG)</option>
                    <option dial-code="+54" value="AR">Argentina (AR)</option>
                    <option dial-code="+374" value="AM">Armenia (AM)</option>
                    <option dial-code="+297" value="AW">Aruba (AW)</option>
                    <option dial-code="+61" value="AU">Australia (AU)</option>
                    <option dial-code="+43" value="AT">Austria (AT)</option>
                    <option dial-code="+994" value="AZ">Azerbaijan (AZ)</option>
                    <option dial-code="+1242" value="BS">Bahamas (BS)</option>
                    <option dial-code="+973" value="BH">Bahrain (BH)</option>
                  </optgroup>
                  <option dial-code="+880" value="BD">Bangladesh (BD)</option>
                  <option dial-code="+1246" value="BB">Barbados (BB)</option>
                  <option dial-code="+375" value="BY">Belarus (BY)</option>
                  <option dial-code="+32" value="BE">Belgium (BE)</option>
                  <option dial-code="+501" value="BZ" selected>Belize (BZ)</option>
                  <option dial-code="+229" value="BJ">Benin (BJ)</option>
                  <option dial-code="+1441" value="BM">Bermuda (BM)</option>
                  <option dial-code="+975" value="BT">Bhutan (BT)</option>
                </Select>
              </p>
              <pre><code class="language-html">&lt;Textarea id=&quot;dsada&quot; :rows=&quot;5&quot; :cols=&quot;70&quot; :value=&quot;'123 asd'&quot; /&gt;</code></pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
.inputComponent {
  align-items: stretch;
  border-radius: 10px;
  border: 1px solid lightgray;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  justify-content: center;
  margin: 0 0 1rem;
  padding: 0.5rem;
  > * {
    margin: 0;
  }
}
</style>
