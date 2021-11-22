<template>
  <div id="Hello">
      <v-toolbar>
        <span>Toolbar</span>
        <v-btn data-hotkey="o" @click="open">Open (o)</v-btn>
        <v-btn data-hotkey="ctrl-s" @click="save">Save (ctrl-s)</v-btn>
        <span>{{status}}</span>
      </v-toolbar>

    <Thing id="c1" msg="Lorem" />
    <Thing id="c2" msg="Foo" disabled />
    <Thing id="c3" msg="Bar " />

    <div class="box">

      <div
        class="box"
        data-shortcut-group="vertical"
        style="border: 1px solid blue"
      >
        List:
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut:keydown:click="space">Y</button>
          <input />
        </div>
      </div>

      <div class="card" data-shortcut-component>
        Item 3
        <button data-shortcut="x">X</button>
        <button data-shortcut="y">Y</button>
        <input />
      </div>

      <div
        class="box"
        data-shortcut-group="horizontal"
        style="border: 1px solid blue"
      >
        List:
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
      </div>

      <div
        class="box"
        data-shortcut-group="vertical"
        style="border: 1px solid blue"
      >
        List:
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
      </div>

      <div class="card" data-shortcut-component>
        Item 3
        <button data-shortcut="x">X</button>
        <button data-shortcut="y">Y</button>
        <input />
      </div>

      <div
        class="box"
        data-shortcut-group="grid"
        style="border: 1px solid blue"
      >
        List:
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
        <div class="card" data-shortcut-component>
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component>
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
      </div>

      <div class="box">
        List:
        <div class="card" data-shortcut-component tabindex="0">
          Item 1
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component tabindex="0">
          Item 2
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
        </div>
        <div class="card" data-shortcut-component tabindex="0">
          Item 3
          <button data-shortcut="x">X</button>
          <button data-shortcut="y">Y</button>
          <input />
        </div>
      </div>
    </div>

    <div id="container">
      <div class="leftbox">
        <div class="focusable" data-shortcut-component></div>
        <div class="focusable" data-shortcut-component></div>
        <div class="focusable" data-shortcut-component></div>
        <div class="focusable" data-shortcut-component></div>
        <div class="nonfocusable"></div>
      </div>
      <div class="rightbox">
        <div id="main" class="focusable" data-shortcut-component></div>
        <div class="bottombox">
          <div class="focusable" data-shortcut-component></div>
          <div class="focusable" data-shortcut-component></div>
          <div class="focusable" data-shortcut-component></div>
          <br />
          <div class="focusable" data-shortcut-component></div>
          <div class="focusable" data-shortcut-component></div>
          <div class="focusable" data-shortcut-component></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Thing from "./Thing";
export default {
  components: {
    Thing,
  },
  data() {
    return {
      status: null,
    };
  },
  methods:{
    open(){
      this.status = 'Open...';
      setTimeout(() => {
        this.status = null;
      }, 1000);
    },
    save(){
      this.status = 'Saved!';
      setTimeout(() => {
        this.status = null;
      }, 1000);
    },
  },
};
</script>
<style scoped>
.focus {
  outline: 5px solid orange;
}
.box {
  border: 1px solid gray;
  padding: 10px;
  margin: 10px;
}

.card {
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  margin: 10px;
  background: white;
}

[data-shortcut-group="horizontal"] {
  display: flex;
  flex-direction: row;
}

[data-shortcut-group="grid"] {
  --display: flex;
  --flex-direction: row;
  --flex-wrap: wrap;
}

#container {
  background-color: #eee;
  width: 825px;
  height: 600px;
  margin: 0 auto;
  border: 1px solid black;
}

.leftbox {
  float: left;
}

.rightbox {
  float: right;
}

.bottombox {
  font-size: 0px;
}

.leftbox .focusable,
.bottombox .focusable,
.nonfocusable {
  background-color: blue;
  width: 200px;
  height: 114px;
  margin: 5px;

  color: white;
  text-align: center;
  line-height: 114px;
  vertical-align: top;
  font-size: 1rem;
}

.nonfocusable {
  background-color: #bbb;
  color: black;
}

.nonfocusable::before {
  content: "Non-focusable Element";
}

.bottombox .focusable {
  display: inline-block;
  margin-left: 0px;
  margin-bottom: 0px;
}

#main {
  background-color: green;
  width: 610px;
  height: 352px;
  margin: 5px 0 0 0;
}

.focusable {
  outline: 0;
}

.focusable:focus {
  opacity: 0.5;
}

#sidebox {
  width: 825px;
  margin: 2em auto 0 auto;
}
</style>