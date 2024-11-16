<template>
<el-image :src="urlEmbedded"></el-image>  
</template>

<script setup>
const props = defineProps({ urlEmbedded: String });
</script>