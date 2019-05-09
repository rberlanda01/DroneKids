<template>
  <div
    class="hello"
    style="margin-top: 115px;  margin-bottom: 15px"
  >
    <mdb-row class="page row hm-gradient mask flex-center">
      <mdb-col
        md="6"
        xs="12"
        class="half-page column animated fadeInLeft"
        style="text-align: -webkit-right; padding-top: 100px; padding-bottom: 100px;"
      >
        <h1
          class="heading display-3"
          style="font-family: unset; color: #33b5e5;"
        >Drone Kids</h1>
        <h2
          class="subheading font-weight-bold"
          style="margin: 0px; color: #aa66cc"
        >Learning by Droning.</h2>
        <img
          class="image animated fadeInDown"
          style="width: 90%;"
          src="../assets/entrada2.png"
        >
        <mdb-row>
          <mdb-btn
            icon="caret-right"
            icon-right
            color="secondary"
          >Saiba Mais</mdb-btn>
          <mdb-btn
            icon="caret-right"
            icon-right
            color="info"
          >Matricule-se</mdb-btn>
        </mdb-row>
      </mdb-col>
      <mdb-col
        class="column"
        md="6"
        xs="12"
      >
        <mdb-view>
          <img
            class="image animated fadeInDown"
            style="width: 77%;"
            src="../assets/logo.png"
          >
          <mdb-mask
            flex-center
            class=""
          />
        </mdb-view>
      </mdb-col>
    </mdb-row>
    <About></About>
    <Cursos></Cursos>
    <Fotos></Fotos>
    <Atuando></Atuando>
    <Contato></Contato>
  </div>
</template>

<script>
import About from '../components/About'
import Cursos from '../components/Cursos'
import Fotos from '../components/Fotos'
import Atuando from '../components/Atuando'
import Contato from '../components/Contato'
import {
  mdbBtn,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbContainer,
  mdbIcon,
  mdbCol,
  mdbRow,
  mdbView,
  mdbMask
} from 'mdbvue'
export default {
  name: 'Home',
  components: {
    'About': About,
    'Cursos': Cursos,
    'Fotos': Fotos,
    'Atuando': Atuando,
    'Contato': Contato,
    mdbBtn,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbContainer,
    mdbIcon,
    mdbCol,
    mdbRow,
    mdbView,
    mdbMask
  },
  titulo: 'Inicio',
  subtitulo: 'AEEEE'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: black;
}
h2 {
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
.hello {
  margin-top: 180px;
  margin-bottom: 100px;
}
.nav-link {
  display: block;
  padding: 0.5rem 2.5rem;
  font-size: 18px;
}

.top-nav-collapse {
  background-color: #82b1ff !important;
}

h1,
h5 {
  text-transform: uppercase;
}

h5 {
  letter-spacing: 3px;
}
.rgba-blue-slight {
  background-color: none;
}
.hello {
  margin-top: 0px;
}
.logo {
  height: 40px;
  width: auto;
  margin: 10px;
}

.menu {
  text-align: end;
  padding-right: 0.5em;
}

.hm-gradient {
  background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.3),
    rgba(209, 149, 249, 0.3)
  );
}

.navbar {
  background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.3),
    rgba(209, 149, 249, 0.3)
  );
  box-shadow: 0 0 0 0 transparent;
  margin-top: 50px;
}

.nav-pills .nav-link.active,
.nav-pills .show > .nav-link {
  color: #fdfdfd;
  background-color: #0078f973;
}
.navbar:not(.top-nav-collapse) {
  background: transparent;
}

.row {
  margin: 0;
  padding: 0;
}

.column {
  margin: 0;
  padding: 0;
}

.half-page {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  padding: 0 6rem;
}

.heading {
  font-weight: 700;
  color: #5d4267;
}

.subheading {
  margin: 2.5rem 0;
  color: #bcb2c0;
  font-size: 1.5rem;
}

.btn-lily {
  background: linear-gradient(
    40deg,
    rgba(0, 51, 199, 0.7),
    rgba(209, 149, 249, 0.7)
  );
}

.image {
  width: 100%;
}

.paragraph {
  padding: 3rem 1.5em;
}

@media screen and (max-width: 770px) {
  .half-page {
    padding: 2rem;
  }

  .navbar {
    position: relative;
    margin-top: 5px;
  }
  .navbar:not(.top-nav-collapse) {
    background: linear-gradient(
      40deg,
      rgba(0, 51, 199, 0.3),
      rgba(209, 149, 249, 0.3)
    );
  }
}

@media screen and (max-width: 400px) {
  .half-page {
    padding: 1rem;
  }
}

@media screen and (max-width: 320px) {
  .heading {
    font-size: 4em;
  }
}
</style>
