<template>
  <el-dialog v-model="open">
    <component :is="dialogEditorFactory"></component>
  </el-dialog>
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
          @dblclick="openEditor(item)"
          :id="item.id"
          :x="item.boxMetaData?.x"
          :y="item.boxMetaData?.y"
        >
          <box-content
            :type="item.type"
            :urlEmbedded="item.urlEmbedded"
          ></box-content>
        </draggable-box>
      </template>
    </div>
  </div>
</template>

<script setup>
import BoxContent from "./draggable/box/BoxContent.vue";
import { onMounted, ref } from "vue";
import DraggableBox from "./draggable/DraggableBox.vue";
const props = defineProps({ pages: Array });
const activePages = ref([]);
const open = ref(false);
const onDrag = (x, y, id) => {
  const page = props.pages.find((x) => x.id === id);
  if (page.boxMetaData) {
    page.boxMetaData.x = x;
    page.boxMetaData.y = y;
  }
};
const openEditor = (item) => {
  open.value = true;
};
const dialogEditorFactory = () => {
}
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
        activePages.value = props.pages.filter(
          (x) => pageShowed.includes(x.id) && x.boxMetaData
        );
      },
    },
  });
});

const fetchMetaData = () => {
  
}
</script>

<style scoped>
@import url("double-page.css");
.element-edit {
  background-color: #ffffff26;
  height: 100%;
}
</style>
