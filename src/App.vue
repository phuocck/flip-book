<script setup>
import FlipBook from "./components/FlipBook.vue";
import { ref } from "vue";
const metaDataType = {
  Audio: 1,
  Video: 2,
  Image: 3,
};
const pages = ref([
  {
    id: 1,
    url: "01.jpg",
    boxMetaData: {
      type: metaDataType.Audio,
      x: 0,
      y: 1,
      w: 100,
      h: 300,
    },
  },
  {
    id: 2,
    url: "02.jpg",
    boxMetaData: {
      type: metaDataType.Audio,
      x: 0,
      y: 1,
      w: 100,
      h: 300,
    },
  },
  {
    id: 3,
    url: "03.jpg",
  },
  {
    id: 4,
    url: "04.jpg",
  },
]);
</script>

<template>
  <div class="header">
    <div class="logo-flip-box">FlipBook</div>
    <div class="logo-logout"></div>
  </div>
  <div class="content">
  <flip-book :pages="pages"></flip-book>

    <div class="menu-editor"></div>
    <div class="content-page"></div>
  </div>
</template>

<style>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.content {
  display: flex;
  flex-direction: column;
}
.header {
  height: 3.5rem;
  width: 100%;
  background-color: #646cffaa;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  padding: 0 20px;
}
.content {
  height: calc(100% - 3.5rem);
  width: 100%;
}

.header .logo-flip-box {
  color: #fff;
  font: 700;
  font-weight: 700;
  height: 100%;
}
</style>
