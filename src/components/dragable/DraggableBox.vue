<script setup>
import VueDraggableResizable from "vue-draggable-resizable";
import { ref } from "vue";
const props = defineProps({
  x: Number,
  y: Number,
  parentItem: String,
  id: Number,
});
const emit = defineEmits(["drag"]);

let timeout = 0;

const onDragCallback = (x, y) => {
  clearTimeout(timeout);
  timeout = setTimeout(() => {
    emit("drag", x, y, props.id);
  }, 500);
};
</script>
<template>
  <Teleport :to="'#' + parentItem">
    <vue-draggable-resizable
      :axis="'both'"
      :lock-aspect-ratio="true"
      :parent="true"
      :x="x"
      :y="y"
      :onDrag="onDragCallback"
    >
      <slot></slot>
    </vue-draggable-resizable>
  </Teleport>
</template>
<style lang="css">
@import "vue-draggable-resizable/style.css";
.draggable {
  z-index: 100 !important;
}
</style>
