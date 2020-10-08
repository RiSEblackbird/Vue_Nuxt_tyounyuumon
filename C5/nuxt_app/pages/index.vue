// 5-11
<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ $store.state.message }}</p>
  </section>
</template>

<script>
export default {
  data: function () {
    return { 
      title: 'Hello'
    };
  }
};
</script>

<style>
.container {
  padding: 5px 10px;
}
h1 {
  font-size: 60pt;
  color: #345980;
}
p {
  padding-top: 5px;
  font-size: 20px;
}
pre {
  padding: 10px;
  font-size: 18px;
  background-color: #efefef;
}
hr {
  margin: 10px 0px;
}
</style>
