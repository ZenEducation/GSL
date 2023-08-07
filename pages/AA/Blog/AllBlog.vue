<script setup>
import { ref, reactive, computed } from 'vue';
import SectionMain from "@/components/AfterAuth/Sections/SectionMain.vue";
import SectionTitleLineWithButton from "@/components/AfterAuth/Sections/SectionTitleLineWithButton.vue";
import BaseButton from "@/components/AfterAuth/Buttons/BaseButton.vue"
import CardBox from "@/components/AfterAuth/Cards/CardBox.vue";
import { mdiChartTimelineVariant, mdiMagnify } from "@mdi/js";
import PremFormField from "~~/components/AfterAuth/Forms/FormField.vue";
import PremFormControl from "~~/components/AfterAuth/Forms/FormControl.vue";
import BaseButtons from "~~/components/AfterAuth/Buttons/BaseButtons.vue";
import { mdiEye, mdiPen } from "@mdi/js";
import CardBoxModal from "@/components/AfterAuth/Cards/CardBoxModal.vue";
import BaseLevel from "@/components/AfterAuth/Buttons/BaseLevel.vue";
import DummyData from "@/DummyData/Blog.json"



const searchquery = ref('');
const categoryFilter = ref('');
const dateFilter = ref('');
const publishedFilter = ref('');

const onDate = ref('');
const beforeDate = ref('');
const afterDate = ref('');
const startDate = ref('');
const endDate = ref('');



const items = reactive(DummyData)

const isModalActive = ref(false);

const isModalDangerActive = ref(false);

const perPage = ref(4);

const currentPage = ref(0);

const checkedRows = ref([]);

const isCategoryDropdownOpen = ref(false);
const isPublishedDropdown = ref(false)
const isDateInputOpen = ref(false);

const toggleCategoryDropdown = () => {
    isCategoryDropdownOpen.value = !isCategoryDropdownOpen.value;
    isPublishedDropdown.value = false;
    isDateInputOpen.value = false;
    publishedFilter.value = ""
    dateFilter.value = ""
};

const togglePublishedInput = () => {
    isPublishedDropdown.value = !isPublishedDropdown.value
    isCategoryDropdownOpen.value = false;
    isDateInputOpen.value = false;
    categoryFilter.value = ""
    dateFilter.value = ""
};

const toggleDateInput = () => {
    isDateInputOpen.value = !isDateInputOpen.value;
    isCategoryDropdownOpen.value = false;
    isPublishedDropdown.value = false;
    categoryFilter.value = ""
    publishedFilter.value = ""
};

// filter function
// filter for search, status, Category, Type and Date
const itemsPaginated = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedPublishedFilter = publishedFilter.value.trim().toLowerCase();
    const trimmedDateFilter = dateFilter.value.trim().toLowerCase();

    let filteredItems = items;

    // Apply search query filter
    if (trimmedSearchQuery.length > 0) {
        filteredItems = filteredItems.filter(
            (item) =>
                item.id.toString().startsWith(trimmedSearchQuery) ||
                item.title.toLowerCase().startsWith(trimmedSearchQuery) ||
                item.created_by.toLowerCase().includes(trimmedSearchQuery)
        );
    }

    // Apply category filter
    if (trimmedCategoryFilter.length > 0) {
        filteredItems = filteredItems.filter((item) =>
            item.category.toLowerCase().includes(trimmedCategoryFilter)
        );
    }


    // Apply Published Filter
    if (trimmedPublishedFilter.length > 0) {
        filteredItems = filteredItems.filter((item) =>
            item.published.toLowerCase().includes(trimmedPublishedFilter)
        );
    }

    // Apply date filter
    if (trimmedDateFilter === "on") {
        filteredItems = filteredItems.filter(
            (item) =>
                new Date(item.createdOn).toDateString() === new Date(onDate.value).toDateString()
        );
    } else if (trimmedDateFilter === "before") {
        filteredItems = filteredItems.filter(
            (item) => new Date(item.createdOn) < new Date(beforeDate.value)
        );
    } else if (trimmedDateFilter === "after") {
        filteredItems = filteredItems.filter(
            (item) => new Date(item.createdOn) > new Date(afterDate.value)
        );
    } else if (trimmedDateFilter === "between") {
        filteredItems = filteredItems.filter(
            (item) =>
                new Date(item.createdOn) >= new Date(startDate.value) &&
                new Date(item.createdOn) <= new Date(endDate.value)
        );
    }

    // Apply pagination
    const start = perPage.value * currentPage.value;
    const end = perPage.value * (currentPage.value + 1);
    return filteredItems.slice(start, end);
});




watch(searchquery, () => {
    currentPage.value = 0;
});



//Pagination Function
//for pages in pagination based on data max 4 data will show per page
const numPages = computed(() => {
    const trimmedSearchQuery = searchquery.value.trim().toLowerCase();
    const trimmedCategoryFilter = categoryFilter.value.trim().toLowerCase();
    const trimmedPublishedFilter = publishedFilter.value.trim().toLowerCase();
    const trimmedDateFilter = dateFilter.value.trim().toLowerCase();

    let filteredItems = items;

    // Apply search query filter
    if (trimmedSearchQuery.length > 0) {
        filteredItems = filteredItems.filter(
            (item) =>
                item.id.toString().includes(trimmedSearchQuery) ||
                item.title.toLowerCase().includes(trimmedSearchQuery) ||
                item.created_by.toLowerCase().includes(trimmedSearchQuery)
        );
    }




    // Apply category filter
    if (trimmedCategoryFilter.length > 0) {
        filteredItems = filteredItems.filter((item) =>
            item.category.toLowerCase().includes(trimmedCategoryFilter)
        );
    }



    // Apply Published Filter
    if (trimmedPublishedFilter.length > 0) {
        filteredItems = filteredItems.filter((item) =>
            item.published.toLowerCase().includes(trimmedPublishedFilter)
        );
    }

    // Apply date filter
    if (trimmedDateFilter === "on") {
        filteredItems = filteredItems.filter(
            (item) =>
                new Date(item.createdOn).toDateString() === new Date(onDate.value).toDateString()
        );
    } else if (trimmedDateFilter === "before") {
        filteredItems = filteredItems.filter(
            (item) => new Date(item.createdOn) < new Date(beforeDate.value)
        );
    } else if (trimmedDateFilter === "after") {
        filteredItems = filteredItems.filter(
            (item) => new Date(item.createdOn) > new Date(afterDate.value)
        );
    } else if (trimmedDateFilter === "between") {
        filteredItems = filteredItems.filter(
            (item) =>
                new Date(item.createdOn) >= new Date(startDate.value) &&
                new Date(item.createdOn) <= new Date(endDate.value)
        );
    }

    return Math.ceil(filteredItems.length / perPage.value);
});


const currentPageHuman = computed(() => currentPage.value + 1);

const pagesList = computed(() => {
    const pagesList = [];

    for (let i = 0; i < numPages.value; i++) {
        pagesList.push(i);
    }

    return pagesList;
});

const remove = (arr, cb) => {
    const newArr = [];

    arr.forEach((item) => {
        if (!cb(item)) {
            newArr.push(item);
        }
    });

    return newArr;
};


const clearResult = () => {
    searchquery.value = ""

    categoryFilter.value = ""

    publishedFilter.value = ""
    dateFilter.value = ""
    onDate.value = ""
    beforeDate.value = ""
    afterDate.value = ""
    startDate.value = ""
    endDate.value = ""

    isCategoryDropdownOpen.value = false;

    isPublishedDropdown.value = false;
    isDateInputOpen.value = false;
}
</script>

<template>
    <div>
        <NuxtLayout name="zen">
            <SectionMain>
                <SectionTitleLineWithButton :icon="mdiChartTimelineVariant" title="All Blogs" main>
                    <BaseButton label="Create Content" small color="contrast" />


                </SectionTitleLineWithButton>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <PremFormField horizontal>
                        <PremFormControl v-model="searchquery" :icon="mdiMagnify"
                            placeholder="Search by Title or ID or Created Name" />
                    </PremFormField>
                    <PremFormField label="Filter By:" horizontal>

                        <BaseButtons>


                            <BaseButton label="Category" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleCategoryDropdown" :active="isCategoryDropdownOpen" />



                            <BaseButton label="Published" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="togglePublishedInput" :active="isPublishedDropdown" />

                            <BaseButton label="Created On" color="info" class="   text-white font-bold py-2 px-4 rounded "
                                outline small @click="toggleDateInput" :active="isDateInputOpen" />
                        </BaseButtons>



                        <!-- Category Dropdown -->
                        <div v-if="isCategoryDropdownOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="categoryFilter" class="w-1/2">
                                <option value=""> Select Category </option>
                                <option value="jee coaching">JEE Coaching</option>
                                <option value="neet coaching">Neet Coaching</option>
                                <option value="coursera">Coursera</option>

                            </select>
                        </div>


                        <!-- Published Dropdown -->
                        <div v-if="isPublishedDropdown" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <select name="status" id="status" v-model="publishedFilter" class="w-1/2">
                                <option value=""> Select Type </option>
                                <option value="yes">Yes</option>
                                <option value="no">No</option>


                            </select>
                        </div>

                        <!-- Submitted On Date Input -->
                        <div v-if="isDateInputOpen" class="mt-2 py-2 bg-white rounded shadow-lg text-center">
                            <div>
                                <select name="status" id="status" v-model="dateFilter" class="w-1/2 ">
                                    <option value=""> Select Date Filter </option>

                                    <option value="on">On</option>
                                    <option value="before">Before</option>
                                    <option value="after">After</option>
                                    <option value="between">Between</option>

                                </select>
                            </div>

                            <div class="block">
                                <input v-if="dateFilter == 'on'" type="date" name="" id="" v-model="onDate">
                                <input v-if="dateFilter == 'before'" type="date" name="" id="" v-model="beforeDate">
                                <input v-if="dateFilter == 'after'" type="date" name="" id="" v-model="afterDate">
                                <input v-if="dateFilter == 'between'" type="date" name="" id="" v-model="startDate">
                                <p v-if="dateFilter == 'between'">To</p>
                                <input v-if="dateFilter == 'between'" type="date" name="" id="" v-model="endDate">
                            </div>

                        </div>



                        <div style="align-items: right; text-align: right; text-decoration: underline;"><button
                                @click="clearResult">Reset Filters</button></div>
                    </PremFormField>
                </CardBox>
                <CardBox class="mb-6 g:mb-0 lg:col-span-2 xl:col-span-3" if-from @submit.prevent="submit">
                    <!-- <TableViewCreator :data="newData" /> -->
                    <CardBoxModal v-model="isModalActive" title="Sample modal">
                        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                        <p>This is sample modal</p>
                    </CardBoxModal>

                    <CardBoxModal v-model="isModalDangerActive" title="Please confirm" button="danger" has-cancel>
                        <p>Lorem ipsum dolor sit amet <b>adipiscing elit</b></p>
                        <p>This is sample modal</p>
                    </CardBoxModal>

                    <div v-if="checkedRows.length" class="p-3 bg-gray-100/50 dark:bg-slate-800">
                        <span v-for="checkedRow in checkedRows" :key="checkedRow.id"
                            class="inline-block px-2 py-1 rounded-sm mr-2 text-sm bg-gray-100 dark:bg-slate-700">
                            {{ checkedRow.name }}
                        </span>
                    </div>

                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Created By</th>
                                <th>Published</th>
                                <th>Created On</th>
                                <th>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(client, index) in itemsPaginated" :key="client.id"
                                class="border-b-0 lg:w-6 before:hidden">
                                <td data-label="Client ID" class="border-b-0 lg:w-6 before:hidden">
                                    {{ client.id }}
                                </td>
                                <td data-label="Title">
                                    {{ client.title }}
                                </td>


                                <td data-label="Category">
                                    {{ client.category }}
                                </td>
                                <td data-label="Created_By">
                                    {{ client.created_by }}
                                </td>
                                <td data-label="Published">
                                    {{ client.published }}
                                </td>

                                <td data-label="Submitted" class="lg:w-1 whitespace-nowrap">
                                    <small class="text-gray-500 dark:text-slate-400">{{
                                        client.createdOn }}</small>
                                </td>
                                <td class="before:hidden lg:w-1 whitespace-nowrap">
                                    <BaseButtons type="justify-start lg:justify-end" no-wrap>
                                        <BaseButton color="info" :icon="mdiEye" small @click="isModalActive = true" />
                                        <BaseButton color="info" :icon="mdiPen" small @click="isModalDangerActive = true" />
                                    </BaseButtons>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div class="p-3 lg:px-6 border-t border-gray-100 dark:border-slate-800">
                        <BaseLevel>
                            <BaseButtons>
                                <BaseButton v-for="page in pagesList" :key="page" :active="page === currentPage"
                                    :label="page + 1" :color="page === currentPage ? 'lightDark' : 'whiteDark'" small
                                    @click="currentPage = page" />
                            </BaseButtons>
                            <small>Page {{ currentPageHuman }} of {{ numPages }}</small>
                        </BaseLevel>
                    </div>

                </CardBox>

            </SectionMain>
        </NuxtLayout>
    </div>
</template>



