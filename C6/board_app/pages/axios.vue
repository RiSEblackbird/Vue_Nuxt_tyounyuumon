// 6-13
<template>
  <section class="container">
    <h1>{{ title }}</h1>
    <p>{{ message }}</p>
  </section>
</template>

<script>
import firebase from 'firebase';

export default {
  data: function () {
    return {
      title: 'Auth',
      message: 'This is it!!!'
    };
  },
  created: function () {
    var firebaseConfig = {
      apiKey: "……キー……",
      authDomain: "プロジェクト.firebaseapp.com",
      databaseURL: "https://プロジェクト.firebaseio.com",
      projectId: "プロジェクト",
      storageBucket: "プロジェクト.appspot.com",
      messagingSenderId: "……ID……",
      appId: "....",
      measurementId: "...."
    };
    firebase.initializeApp(firebaseConfig);

    var provider = new firebase.auth.GoogleAuthProvider();
    var self = this;
    firebase.auth().signInWithPopup(provider)
      .then(function(result) {
        self.message = result.user.displayName + ', ' 
          + result.user.email;
      });
  }
}
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
  font-size: 20pt;
}
ul {
  margin: 0px 10px;
  background-color: aliceblue;
}
li {
  padding: 10px;
  font-size: 16pt;
}
div {
  font-size: 14pt;
}
input {
  font-size: 14pt;
}
button {
  font-size: 14pt;
}
tr th {
  width: 150px;
  background-color: darkblue;
  color: white;
  font-size: 16pt;
}
tr td {
  padding: 5px 10px;
  background-color: #eef;
  font-size: 14pt;
}
pre {
  padding: 10px;
  font-size: 18pt;
  background-color: #efefef;
  white-space: pre-wrap;
}
hr {
  margin: 10px 0px;
}
</style>