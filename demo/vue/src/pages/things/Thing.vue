<template>
  <div class="card" data-shortcut-component>
    <div>Text input box</div>
    <v-text-field v-model="text" />
    <v-btn @click="clear" data-shortcut="Backspace|ctrl-k|k">Backspace (ctrl-k|k))</v-btn>
    <v-btn @click="text=msg" data-shortcut="r">Reset (R)</v-btn>
    <div @click="alert(text)" data-shortcut="F1" data-prevent> (F1) </div>
  </div>
</template>

<script>

export default {
  props: {
    msg: String
  },
  data() {
    return {
      text: this.msg
    };
  },
  methods: {
    clear() {
      this.text = "";
    },
    alert(msg) {
      alert("Text: "+msg);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.card {
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  background: white;
}
[disabled]{
  opacity: 0.6;
}
</style>
