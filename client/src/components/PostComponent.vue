<template>
  <div>
    
  </div>
</template>

<script>
import axios from 'axios';
const url = 'http://localhost:5000/api/posts'
export default {
  name: 'PostComponent',
  props: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
