<template>
  <el-input v-model="data"></el-input>
</template>

<script setup>
import { useBoxEditor } from "./useBoxEditor";
const { data } = useBoxEditor();
const expose = defineExpose(["getData"]);
</script>
