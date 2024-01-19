<template>
  <nav class="">
    <ul class="flex -space-x-px justify-center">
      <li>
        <button
          @click="prev"
          :class="{ disabled: currentPage === 1 }"
          class="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          <
        </button>
      </li>
      <li>
        <button
          v-for="(page, index) in totalPages"
          :key="index"
          :class="{ active: currentPage === page }"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
          @click="goto(page)"
        >
          {{ page }}
        </button>
      </li>
      <li>
        <button
          @click="next"
          :class="{ disabled: currentPage === totalPages }"
          class="px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
        >
          >
        </button>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { getCurrentInstance, reactive, computed } from "vue";

const props = defineProps({
  total: {
    type: Number,
  },
  itemsPerpage: {
    type: Number,
    default: 5,
  },
  currentPage: {
    type: Number,
    default: 1,
  },
});

// console.log("totalItems", props.total);
// console.log("itemsPerpage", props.itemsPerpage);
// console.log("currentPage", props.currentPage);

const instance = getCurrentInstance();
const state = reactive({
  currentPage: props.currentPage,
});

const totalPages = computed(() => Math.ceil(props.total / props.itemsPerpage));
// console.log("totalPages", totalPages);

const prev = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
    instance.emit("update:currentPage", state.currentPage);
  }
};

const goto = (page) => {
  // console.log(page);
  state.currentPage = page;
  instance.emit("update:currentPage", state.currentPage);
};

const next = () => {
  if (state.currentPage < totalPages.value) {
    state.currentPage++;
    instance.emit("update:currentPage", state.currentPage);
  }
};
</script>

<style scoped>
.active {
  background-color: gray;
  color: white;
}

.disabled {
  cursor: not-allowed;
}
</style>
