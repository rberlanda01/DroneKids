<template>
  <div class="cursos">
	            <mdb-container>
     <section class="text-center my-5">
		  <h2 class="h1-responsive font-weight-bold text-center my-5">Cursos</h2>
		    <hr class="my-5" />
      <mdb-row>
        <mdb-col md="4">
          <mdb-icon icon="chart-area" size="3x" class="red-text"/>
          <h5 class="font-weight-bold my-4">As Escolas </h5>
          <p class="grey-text mb-md-0 mb-5" >A Drone Kids School, startup voltada para a educação 4.0 foi fundada em 2017 e já está presente em várias das mais importantes escolas particulares da cidade. Levamos para cada um deles, o conceito da Educação 4.0 com a tecnologia dos drones e encantamos nossos alunos (do 4º ao 9º ano).</p>
        </mdb-col>
        <mdb-col md="4">
          <mdb-icon icon="book" size="3x" class="cyan-text"/>
          <h5 class="font-weight-bold my-4">Aos Pilotos</h5>
          <p class="grey-text mb-md-0 mb-5">Imagine você aprender a voar com um mini drone de corrida, usando óculos FPV (fist player view) e correr em um circuito montado na sua escola ou, na sala de aula, aprender a criar um drone. Criando o design, programando e montando peça por peça. No final do curso, você leva para casa o drone.</p>
        </mdb-col>
        <mdb-col md="4">
          <mdb-icon far icon="comments" size="3x" class="orange-text"/>
          <h5 class="font-weight-bold my-4">Aos Pais</h5>
          <p class="grey-text mb-md-0 mb-5">Matricule-se Já A Drone Kids School possui dois cursos, cada um voltado para uma faixa etária. São os cursos: Racer para crianças de 8 a 12 anos e o Maker, voltado para crianças de 12 a 14 anos. Em ambos os casos, usamos drones ultraleves conhecidos como indoor e seguros para as crianças.</p>
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

.cursos{
    margin-top: 160px;
    margin-bottom: 130px;
}
</style>