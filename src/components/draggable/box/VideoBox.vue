<template>
  <video :src="urlEmbedded"></video>
</template>

<script setup>
const props = defineProps({ urlEmbedded: String });
</script>
<style scoped>
video {
  width: 100%;
  height: 100%;
}
</style>
