<template>
  <div class="cursos">
    <mdb-container>
      <section class="text-center my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Cursos</h2>
        <hr class="my-5" />
        <mdb-row>
         <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-view class="overlay rounded z-depth-1">
            <img src="https://www.dronekids.com.br/wp-content/uploads/2019/04/Image33-768x432.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h4 class="font-weight-bold my-3">ÀS ESCOLAS</h4>
            <p class="grey-text">A Drone Kids School, startup voltada para a educação 4.0 foi fundada em 2017 e já está presente em várias das mais importantes escolas particulares da cidade. Levamos para cada um deles, o conceito da Educação 4.0 com a tecnologia dos drones e encantamos nossos alunos (do 4º ao 9º ano).</p>
            <mdb-btn color="indigo" ><mdb-icon icon="clone" class="left"/> View project</mdb-btn>
          </mdb-card-body>
        </mdb-col>
         <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-view class="overlay rounded z-depth-1">
            <img src="https://www.dronekids.com.br/wp-content/uploads/2019/04/Image4-768x432.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h4 class="font-weight-bold my-3">AOS PILOTOS</h4>
            <p class="grey-text">Imagine você aprender a voar com um mini drone de corrida, usando óculos FPV (fist player view) e correr em um circuito montado na sua escola ou, na sala de aula, aprender a criar um drone. Criando o design, programando e montando peça por peça. No final do curso, você leva para casa o drone.</p>
            <mdb-btn color="indigo" ><mdb-icon icon="clone" class="left"/> View project</mdb-btn>
          </mdb-card-body>
        </mdb-col>
        <mdb-col lg="4" md="12" class="mb-lg-0 mb-4">
          <mdb-view class="overlay rounded z-depth-1">
            <img src="https://www.dronekids.com.br/wp-content/uploads/2018/08/infoaospais-768x437.jpg" alt="sample photo" class="img-fluid"/>
            <a>
              <mdb-mask waves overlay="white-slight"/>
            </a>
          </mdb-view>
          <mdb-card-body class="pb-0">
            <h4 class="font-weight-bold my-3">AOS PAIS</h4>
            <p class="grey-text">Matricule-se Já   A Drone Kids School possui dois cursos, cada um voltado para uma faixa etária. São os cursos: Racer para crianças de 8 a 12 anos e o Maker, voltado para crianças de 12 a 14 anos. Em ambos os casos, usamos drones ultraleves conhecidos como indoor e seguros para as crianças.</p>
            <mdb-btn color="indigo"><mdb-icon icon="clone" class="left"/> View project</mdb-btn>
          </mdb-card-body>
        </mdb-col>
        </mdb-row>
      </section>
    </mdb-container>
  </div>
</template>

<script>
import {
  mdbNavbar,
  mdbNavbarNav,
  mdbNavItem,
  mdbBtn,
  mdbContainer,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbIcon,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbDropdownItem,
  mdbRow,
  mdbCol,
  mdbView,
  mdbMask,
  mdbTabs,
  mdbCard,
  mdbCardImage,
  mdbCardHeader,
  mdbCardBody,
  mdbCardTitle,
  mdbCardText,
  mdbCardFooter,
  mdbCardUp,
  mdbCardAvatar,
  mdbCardGroup,
  mdbCarousel,
  mdbCarouselItem,
  mdbCarouselCaption
} from 'mdbvue'
export default {
  name: 'Cursos',
  components: {
    mdbNavbar,
    mdbNavbarNav,
    mdbNavItem,
    mdbBtn,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbContainer,
    mdbIcon,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbCol,
    mdbRow,
    mdbView,
    mdbMask,
    mdbTabs,
    mdbCard,
    mdbCardImage,
    mdbCardHeader,
    mdbCardBody,
    mdbCardTitle,
    mdbCardText,
    mdbCardFooter,
    mdbCardUp,
    mdbCardAvatar,
    mdbCardGroup,
    mdbCarousel,
    mdbCarouselItem,
    mdbCarouselCaption
  }
}
</script>

<style scoped>
.cursos {
  margin-top: 160px;
  margin-bottom: 130px;
}
</style>
