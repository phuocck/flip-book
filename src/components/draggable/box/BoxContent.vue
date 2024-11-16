<template>
  <component :is="componentFactory" :urlEmbedded="urlEmbedded"></component>
</template>

<script setup>
import BoxMediaType from "../../../constants/enum/BoxMediaType";
import AudioBox from "./AudioBox.vue";
import ImageBox from "./ImageBox.vue";
import VideoBox from "./VideoBox.vue";
import WebBox from "./WebBox.vue";
const props = defineProps({ type: Number, urlEmbedded: String, data: String });
const componentFactory = () => {
  switch (props.type) {
    case BoxMediaType.Audio:
      return AudioBox;
    case BoxMediaType.Image:
      return ImageBox;
    case BoxMediaType.Web:
      return WebBox;
    case BoxMediaType.Video:
      return VideoBox;
  }
};
</script>
