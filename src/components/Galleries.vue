<template>
  <div class="main-image border border-[#d8d8d8] mb-[23px] h-530px">
    <img
      :src="defaultImage"
      class="img-fluid rounded-top object-cover"
      alt=""
    />
  </div>
  <div class="image-list flex gap-2">
    <div
      class="border cursor-pointer border-[#d8d8d8] w-[181px]"
      v-for="image in gallery"
      :key="image"
      @click="handleChangeImage(image.image_url)"
    >
      <img :src="image.image_url" class="img-fluid rounded-top" alt="" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  thumbs: Object,
  gallery: Object,
});

const defaultImage = ref(props.thumbs.image_url);

const handleChangeImage = (url) => {
  defaultImage.value = url;
};
</script>

<style lang="scss" scoped></style>
