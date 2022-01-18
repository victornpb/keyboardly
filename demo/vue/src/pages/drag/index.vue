<template>
  <div>
    <v-app-bar>
      <v-toolbar-title>Spacial Navigation</v-toolbar-title>
      <v-spacer/>
   
      <v-btn @click="spawnRects()" data-hotkey="r">
        <v-icon>mdi-reload</v-icon>
        Randomize (R)
      </v-btn>
    </v-app-bar>
    <v-container>
    <div id="area" style="width: 800px; height: 800px">
      <template v-for="item in items">
        <div
          data-shortcut-component
          class="Draggable Resizable"
          :style="{
            top: item.top,
            left: item.left,
            width: item.width,
            height: item.height,
          }"
          :key="item.name"
        >
          <v-card class="cardd" elevation="10">
            {{ item.name }}
          </v-card>
        </div>
      </template>
    </div>
    </v-container>
  </div>
</template>
<script>
import { enableDragAndResize } from './dragresize';
import { createRects } from './util';

export default {
  data() {
    return {
      items: [],
    };
  },
  mounted() {
    console.log('mounted');
    

    console.log('created');
    this.spawnRects();
  },
  methods: {
    spawnRects() {
      this.items = [];
      // create non overlapping rects
      const rects = createRects(10, {
        areaWidth: 800,
        areaHeight: 800,
        widthRange: [2, 2],
        heightRange: [2, 2],
        gridSize: 32,
      });

      for (let i = 0; i < rects.length; i++) {
        this.items.push({
          name: `Thing ${i + 1}`,
          top: `${rects[i].t}px`,
          left: `${rects[i].l}px`,
          width: `${rects[i].w}px`,
          height: `${rects[i].h}px`,
        });
      }

      enableDragAndResize(this.$el, false);
    },
  },
};
</script>
<style scoped>
@import url(./dragresize.css);
#area {
  position: relative;
  background-color: #ffffff;
  border: 2px inset gray;
}

div .Draggable {
  position: absolute;
  padding: 5px;
  border-radius: 4px;
  z-index: 1;
}

.cardd {
  width: 100%;
  height: 100%;
  background-color: #e91e63 !important;
  pointer-events: none;
}
</style>