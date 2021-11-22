<template>
  <div>
      <h1>Random spacial</h1>
    <div
      id="area"
      style="width: 800px; height: 800px"
    >
      <template v-for="item in items">
        <v-card
          data-shortcut-component
          class="Draggable Resizable blue"
          elevation="10"
          :style="{
            top: item.top,
            left: item.left,
            width: item.width,
            height: item.height,
          }"
          :key="item.name"
        >
          {{ item.name }}
        </v-card>
      </template>
    </div>
  </div>
</template>
<script>
import { enableDragAndResize } from "./dragresize";
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export default {
  data() {
    return {
      items: [],
    };
  },
  created() {
    console.log("created");

    const areaWidth = 800;
    const areaHeight = 800;
    const gridSize = 32;

    for (let i = 0; i < 10; i++) {
      const width = getRandomInt(2, 4) * gridSize;
      const height = getRandomInt(2, 4) * gridSize;
      const top = getRandomInt(0, Math.floor((areaHeight - height) / gridSize)) * gridSize;
      const left = getRandomInt(0, Math.floor((areaWidth - width) / gridSize)) * gridSize;
      this.items.push({
        name: "thing " + i,
        top: top + "px",
        left: left + "px",
        width: width + "px",
        height: height + "px",
      });
    }
  },
  mounted() {
    console.log("mounted");
    enableDragAndResize(this.$el, false);
  },
};
</script>
<style scoped>
@import url(./dragresize.css);
#area {
  position: relative;
  width: 621px;
  height: 450px;
  background-color: #ffffff;
  border: 2px inset gray;
  left: 39px;
  top: 57px;
  text-align: center;
}

div .Draggable {
  position: absolute;
}
</style>