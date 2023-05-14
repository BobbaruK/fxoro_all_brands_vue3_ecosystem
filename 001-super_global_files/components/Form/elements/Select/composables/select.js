export default class Select {
  constructor(element) {
    this.element = element;
    this.optgroup = getFormattedOptgrup(element.querySelectorAll("optgroup"));
    this.optgroupOptions = function () {
      const optgrupArr = [];
      this.optgroup.forEach((grup) => {
        const options = console.log(grup.element);
      });
    };
    this.options = getFormattedOptions(element.querySelectorAll("option"));
    this.customElement = document.createElement("div");
    this.labelElement = document.createElement("span");
    this.optionsCustomElement = document.createElement("ul");

    setupCustomSelectElement(this);
    element.after(this.customElement);
  }

  get selectedOption() {
    if (this.optgroup.length) {
      return;
    }
    return this.options.find((option) => option.selected);
  }
}

function setupCustomSelectElement(select) {
  select.optgroupOptions();
  select.customElement.classList.add("custom-select-container");

  select.labelElement.classList.add("custom-select-value");
  // select.labelElement.innerText = select.selectedOption.label;
  select.customElement.append(select.labelElement);

  select.optionsCustomElement.classList.add("custom-select-options");

  select.options.forEach((option) => {
    const optionElement = document.createElement("li");
    optionElement.classList.add("custom-select-option");
    optionElement.classList.toggle("selected", option.selected);
    optionElement.innerText = option.label;
    select.optionsCustomElement.append(optionElement);
  });
  select.customElement.append(select.optionsCustomElement);
}

function getFormattedOptgrup(optgrupElements) {
  return [...optgrupElements].map((optgrupElement) => {
    return {
      disabled: optgrupElement.disabled,
      label: optgrupElement.label,
      element: optgrupElement,
    };
  });
}

function getFormattedOptions(optionElements) {
  return [...optionElements].map((optionElement) => {
    return {
      value: optionElement.value,
      label: optionElement.label,
      selected: optionElement.selected,
      element: optionElement,
    };
  });
}
