<template>
  <div :class="['page-viewport', ]">
    <div id="magazine" :class="{ 'page-first': page === 1,'page-last': page === 5 }">
      <div class="img-page" style="background-image: url(01.jpg)"></div>
      <div class="img-page" style="background-image: url(01.jpg)"></div>
      <div class="img-page" style="background-image: url(02.jpg)"></div>
      <div class="img-page" style="background-image: url(03.jpg)"></div>
      <div class="img-page" style="background-image: url(04.jpg)"></div>
      <div class="img-page" style="background-image: url(05.jpg)"></div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
const page = ref(1);
onMounted(() => {
  $("#magazine").turn({
    page: page.value,
    display: "double",
    acceleration: true,
    gradients: !$.isTouch,
    elevation: 50,
    autoCenter: true,
    when: {
      turned: function (e, page) {
        console.log('Current view: ', $(this).turn('view'));
      },
    },
  });
});
</script>

<style scoped>
.page-viewport {
  padding: 50px 50px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
#magazine {
  height: 100%;
  width: 100%;
	
}
.page-first{
	margin-left: -200px;
}
.page-last{
	margin-right: -200px;
}
#magazine .turn-page {
  background-color: #ccc;
}
.img-page {
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
