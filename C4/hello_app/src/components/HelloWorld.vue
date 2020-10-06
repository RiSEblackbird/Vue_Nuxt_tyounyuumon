// 4-25
<script>
export default {
  name: 'HelloWorld',
  data: function () {
    return {
      title: 'JSX',
      message: 'これは、dataに用意したメッセージです。'
    };
  },
  render: function (h) {
    return (
      <div>
        <h1>{this.title}</h1>
        <p>{this.message}</p>
      </div>
    );
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