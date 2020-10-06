// 4-28
<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr/>
    <button v-on:click="doAction">
      {{ btn }}
    </button>
    <transition name="transit"
        v-on:before-enter="startAction"
        v-on:before-leave="startAction"
        v-on:after-enter="endAction"
        v-on:after-leave="endAction">
      <p v-if="flg" class="trans">Transition!!!!!</p>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    title: String
  },
  data: function () {
    return {
      message: 'Transition Sample!!!!',
      flg: true,
      btn: 'Hide'
    };
  },
  methods: {
    doAction: function () {
      this.flg = !this.flg;
    },
    startAction: function () {
      if (this.flg) {
        this.message = '現れそう.........';
      } else {
        this.message = '消えてしまう.....(絶望)';
      }
    },
    endAction: function () {
      if (this.flg) {
        this.btn = 'Hide';
        this.message = '現れた！！！！！！';
      } else {
        this.btn = 'Show';
        this.message = '消えた！！！！！';
      }
    }
  }
}
</script>

<style>
div {
  margin: 0px;
  padding: 0px;
  text-align: left;
}
h1 {
  font-size: 72pt;
  font-weight: bold;
  text-align: right;
  letter-spacing: -8px;
  color: #f0f0f0;
  margin: 0px;
}
p {
  margin: 0px;
  color: #666;
  font-size: 16pt;
}
.trans {
  background-color: #ddf;
  padding: 10px;
  font-size: 20px;
}
.transit-enter-active {
  transition: opacity 1.0s;
}
.transit-leave-active {
  transition: opacity 3.0s;
}
.transit-enter {
  opacity: 0;
}
.transit-enter-to {
  opacity: 1.0;
}
.transit-leave {
  opacity: 1.0;
}
.transit-leave-to {
  opacity: 0;
}
.inner {
  color: red;
  font-size: 14pt;
}
.etc {
  color: green;
  background-color: #eee;
  font-size: 12px;
  padding: 5px;
}
</style>