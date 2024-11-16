<template>
  <iframe :src="urlEmbedded"></iframe>
</template>
<script setup>
const props = defineProps({ urlEmbedded: String });
</script>