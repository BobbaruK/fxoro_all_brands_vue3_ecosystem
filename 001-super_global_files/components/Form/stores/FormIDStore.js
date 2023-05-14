import { defineStore } from "pinia";

export const useFormIDStore = defineStore("FormIDStore", {
  state: () => ({
    alreadyAddIDs: false,
  }),
  getters: {},
  actions: {
    addIDs(elements) {
      if (!this.alreadyAddIDs) {
        this.alreadyAddIDs = true;
        elements.forEach((element, index) => {
          element.id = `registerForm-${index + 1}`;
        });
      }
    },
  },
});
