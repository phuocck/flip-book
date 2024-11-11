<template>
  <div class="flipbook-viewport">
    <div class="container">
      <div class="flipbook">
        <div
          v-for="(item, index) in pages"
          :key="index"
          :class="item.classes"
          :id="`page_${item.id}`"
          :style="{ 'background-image': `url(${item.url})` }"
        ></div>
      </div>

      <template v-for="item in activePages" :key="item.id">
        <draggable-box
          :parentItem="`page_${item.id}`"
          @drag="onDrag"
          :id="item.id"
          :x="item.boxMetaData?.x"
          :y="item.boxMetaData?.y"
        >
          <div class="element-edit"></div>
        </draggable-box>
      </template>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DraggableBox from "./dragable/DraggableBox.vue";
const props = defineProps({ pages: Array });
const activePages = ref([]);

const onDrag = (x, y, id) => {
  const page = props.pages.find((x) => x.id === id);
  if (page.boxMetaData) {
    page.boxMetaData.x = x;
    page.boxMetaData.y = y;
  }
};
onMounted(() => {
  // $(".flipbook .double").scissor();
  $(".flipbook").turn({
    // Elevation
    elevation: 50,
    // Enable gradients
    gradients: true,
    // Auto center this flipbook
    autoCenter: true,
    when: {
      turned: function (e, turnedPage, pageShowed) {
        activePages.value = props.pages.filter((x) =>
          pageShowed.includes(x.id) && x.boxMetaData
        );
      },
    },
  });
});
</script>

<style scoped>
@import url("double-page.css");
.element-edit {
  background-color: #ffffff26;
  height: 100%;
}
</style>
