import { ref } from "vue";
export const useBoxEditor = () => {
  const data = ref("");
  const dataType = ref(0);
  const DATA_TYPE = {
    Binary: 1,
    Link: 2,
  };
  const binaryData = ref(null);
  const getData = () => {
    return data.value;
  };
  return { dataType, data, binaryData };
};
