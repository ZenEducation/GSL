// store.js
import { defineStore } from 'pinia';

export const useBlogStore = defineStore('blog', {
    state: () => ({
        formData: null,
    }),
    getters: {
        getFormData: state => state.formData,
    },
    actions: {
        saveFormData(formData) {
            this.formData = formData;
        },
        clearFormData() {
            this.formData = null;
        },
    },
});
