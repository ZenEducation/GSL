<template>
    <div>
        <VueMultiselect v-model="taggingSelected" :options="taggingOptions" :multiple="true" :taggable="true" @tag="addTag"
            tag-placeholder="Add this as a new tag" placeholder="Type to search or add tag" label="name" track-by="name" />
        <VueMultiselect v-model="value" :options="taggingOptions" :close-on-select="true" :clear-on-select="false"
            placeholder="Select one" label="name" track-by="name" />
    </div>
</template>
  
<script>
import VueMultiselect from 'vue-multiselect';

export default {
    components: { VueMultiselect },
    data() {
        return {
            taggingSelected: [],
            value: [],
            taggingOptions: [
                { name: 'Vue.js', language: 'JavaScript' },
                { name: 'Adonis', language: 'JavaScript' },
                { name: 'Rails', language: 'Ruby' },
                { name: 'Sinatra', language: 'Ruby' },
                { name: 'Laravel', language: 'PHP' },
                { name: 'Phoenix', language: 'Elixir' },
            ],
        };
    },
    methods: {
        addTag(newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor(Math.random() * 10000000),
            };
            this.taggingOptions.push(tag);
            // Clone the selected option object and add the clone to the taggingSelected array
            this.taggingSelected.push(JSON.parse(JSON.stringify(tag)));
        },
    },
};
</script>
  
<style src="vue-multiselect/dist/vue-multiselect.css"></style>
  