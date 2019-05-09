<template>
  <!-- Footer -->
  <mdb-footer color='unique-color-dark' class='page-footer font-small pt-0'>
    <div style='backgroundColor: #6351ce'>
      <mdb-container class='text-left'>
        <mdb-row class='py-4 d-flex align-items-center'>
          <mdb-col md='6' lg='5' class='text-center text-md-left mb-4 mb-md-0'>
            <h6 class='mb-0 white-text'>Acompanhe nossas redes sociais!</h6>
          </mdb-col>
          <mdb-col md='6' lg='7' class='text-center text-md-right'>
            <a class='fb-ic ml-0'  href="https://www.facebook.com/dronekidsschool/">
              <i class='fab fa-facebook white-text mr-lg-4'></i>
            </a>
                               <a class='li-ic' href="https://www.linkedin.com/company/drone-kids-school/">
              <i class='fab fa-linkedin-in white-text mr-lg-4'></i>
            </a>
            <a class='ins-ic' href="https://www.instagram.com/drone_kids_school/">
              <i class='fab fa-instagram white-text mr-lg-4'></i>
            </a>
          </mdb-col>
        </mdb-row>
      </mdb-container>
    </div>
    <mdb-container class='mt-5 mb-4 text-center text-md-left'>
      <mdb-row class='mt-3'>
        <mdb-col md='3' lg='4' xl='3' class='mb-4'>
          <h6 class='text-uppercase font-weight-bold'>
            <strong>DRONE KIDS</strong>
          </h6>
          <hr class='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto' style='width: 60px'>
          <p>
  Preparamos as crianças oferecendo um curso de conceito inovador e divertido para alunos de 8 a 12 anos de idade, no qual, a metodologia foi construída para desafiá-lo a aprender e aplicar os conteúdos e as habilidades com projetos reais.
          </p>
        </mdb-col>
        <mdb-col md='2' lg='2' xl='2' class='mb-4'>
          <h6 class='text-uppercase font-weight-bold'>
            <strong>Sobre</strong>
          </h6>
          <hr class='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto' style='width: 60px'>
          <p>
            <a href='#/About'>O que fazemos?</a>
          </p>
		   <p>
            <a href='#!'>Educação 4.0</a>
          </p>
		   <p>
            <a href='#!'>Metodologia STEAM</a>
          </p>
		   <p>
            <a href='#!'>Escola do Futuro </a>
          </p>
		   <p>
            <a href='#/Atuando'>Parceiros</a>
          </p>
         <p>
            <a href='#/Cursos'>Cursos</a>
          </p>
          <p>
            <a href='#/Fotos'>Fotos</a>
          </p>
		          </mdb-col>
        <mdb-col md='3' lg='2' xl='2' class='mb-4'>
          <h6 class='text-uppercase font-weight-bold'>
            <strong>Links</strong>
          </h6>
          <hr class='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto' style='width: 60px'>
          <p>
            <a href='#!'>Seja um parceiro</a>
          </p>
          <p>
            <a href='#!'>Loja</a>
          </p>
          <p>
            <a href='#!'>Blog</a>
          </p>
		     <p>
            <a href='#/Contato'>Contato</a>
          </p>
                </mdb-col>
        <mdb-col md='4' lg='3' xl='3' class='mb-4'>
          <h6 class='text-uppercase font-weight-bold'>
            <strong>Contato</strong>
          </h6>
          <hr class='deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto' style='width: 60px'>
          <p>
            <i class='fas fa-home mr-3'></i> dronekids.com.br
          </p>
          <p>
            <i class='fas fa-envelope mr-3'></i> contato@dronekids.com.br
          </p>
          <p>
            <i class='fas fa-phone mr-3'></i> + 55(41) 99187-0066
          </p>
          <p>
            <i class='fas fa-print mr-3'></i> +55 (41) 3363-5051
          </p>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <div class='footer-copyright text-center py-3'>
      <mdb-container fluid>
      
      </mdb-container>
    </div>
  </mdb-footer>
  <!-- Footer -->
</template>

<script>
import { mdbFooter, mdbContainer, mdbRow, mdbCol } from 'mdbvue'
export default {
  name: 'Inicio',
  components: {
    mdbFooter,
    mdbContainer,
    mdbRow,
    mdbCol
  }
}
</script>
