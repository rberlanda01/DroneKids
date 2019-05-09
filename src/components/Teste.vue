<template>

 <div class="hello">
    <h1>{{ titulo }}</h1>
    <h2>{{ subtitulo }}</h2>
    <ul>
      Acesse:
      <li>
        <a href="https://dronekids.com.br" target="_blank">http://dronekids.com.br</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      titulo: 'Pagina de teste',
      subtitulo: 'Em construção'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
.hello{
 margin-top: 220px;
    margin-bottom: 100px;

}
</style>
