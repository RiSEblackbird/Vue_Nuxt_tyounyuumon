// 4-33
<template>
  <div class="hello">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
    <hr/>
    <button v-on:click="doAction">
      Show/Hide
    </button>
    <br><br>
    <transition name="transit">
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
  width: 150px;
  background-color: #ddf;
  padding: 10px;
  font-size: 20pt;
}
.transit-enter-active {
  transition: 1.0s;
  animation: anim 
}
.transit-leave-active {
  transition: 1.0s;
  animation: anim 5.0s;
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
.transit-enter, .transit-leave-to {
  transform: translateX(400px) translateY(100px) scaleX(0.7) scaleY(9.0)
    rotateX(540deg) rotateY(540deg);
  opacity: 0.1;
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

@keyframes anim {
  0% {
    transform: translateX(0px) translateY(0px) rotateZ(0deg);
    opacity: 1.0;
    background-color: #ddf;
  }
  25% {
    transform: translateX(250px) translateY(0px) rotateZ(0deg);
    opacity: 1.0;
    background-color: #fdd;
  }
  50% {
    transform: translateX(250px) translateY(-100px) rotateZ(540deg);
    opacity: 1.0;
    background-color: #dfd;
  }
  75% {
    transform: translateX(250px) translateY(-100px) rotateZ(540deg);
    opacity: 1.0;
    background-color: #fdf;
  }
  100% {
    transform: translateX(0px) translateY(-200px) rotateZ(1080deg);
    opacity: 1.0;
    background-color: #ffd;
  }
}
</style>