// 4-23
import Vue from 'vue'
import App from './App.vue'

new Vue({
  el: '#app',
  render: function(h) {
    return (
      <div>
        <p>※以下はAppコンポーエントの表示</p>
        <hr />
        <App/>
      </div>
    );
  }
});
