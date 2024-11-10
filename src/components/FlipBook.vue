<template>
  <div class="flipbook-viewport">
    <div class="container">
      <draggable-box parentItem="page11" v-if="show"></draggable-box>
      <div class="flipbook">
        <div
          id="page11"
          class="page11"
          style="background-image: url(01.jpg)"
        ></div>
        <div class="double" style="background-image: url(02.jpg)"></div>
        <div class="double" style="background-image: url(03.jpg)"></div>
        <div class="double" style="background-image: url(04.jpg)"></div>
        <div class="double" style="background-image: url(05.jpg)"></div>
        <div class="double" style="background-image: url(06.jpg)"></div>
        <div class="page" style="background-image: url(07.jpg)"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import DraggableBox from "./dragable/DraggableBox.vue";
const show = ref(false);
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
      turned: function (e) {
        show.value = true;
      },
    },
  });
});
</script>

<style scoped>
@import url("double-page.css");
</style>
