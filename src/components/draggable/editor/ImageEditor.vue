<template>
  <el-tabs></el-tabs>
</template>

<script setup>
import { useBoxEditor } from "./useBoxEditor";
const { data } = useBoxEditor();
const expose = defineExpose(["getData"]);
</script>
