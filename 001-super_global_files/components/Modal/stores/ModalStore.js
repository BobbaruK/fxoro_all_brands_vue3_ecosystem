import { defineStore } from "pinia";

export const useModalStore = defineStore("ModalStore", {
  state: () => ({
    cancelModalFirstShow: false, // v1
  }),
  getters: {},
  actions: {
    cancelModal() {
      this.cancelModalFirstShow = true; // v1
    },
  },
});
