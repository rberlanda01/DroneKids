<template>
  <div class="hello">
    <mdb-container>
      <h2 class="h1-responsive font-weight-bold text-center my-5">O que fazemos</h2>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="5">
          <mdb-view
            class="rounded mb-lg-0 mb-4"
            hover
          >
            <img
              class="img-fluid"
              src="../assets/logo.png"
              alt="Sample image"
            />
            <a>
              <mdb-mask
                overlay="white-slight"
                waves
              />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="7">
          <a class="green-text">
            <h6 class=" mb-3">
              <mdb-icon
                icon="utensils"
                class="pr-2"
              />Tecnologia Inovadora</h6>
          </a>
          <h3 class=" mb-3 p-0">
            <strong>Educação 4.0</strong>
          </h3>
          <p
            class="grey-text"
            style="font-size: 18px;"
          >A Tecnologia dos Drones aplicada na Educação 4.0 proporciona uma experiência prática para os alunos nos principais pilares da nova economia digital, tais como, Impressão 3D, Inteligência Artificial, Realidade Virtual e Aumentada, ainda sob a ótica da interdisciplinaridade através da metodologia STEAM.</p>
          <mdb-btn outline="indigo">Read more</mdb-btn>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="7">
          <a class="pink-text">
            <h6 class=" mb-3">
              <mdb-icon
                icon="image"
                class="pr-2"
              />Educação do Futuro
            </h6>
          </a>
          <h3 class=" mb-3 p-0">
            <strong>Metodologia STEAM</strong>
          </h3>
          <p
            class="grey-text"
            style="font-size: 18px;"
          >Com o STEAM (Science, Technology, Engineering, Arts and Math), alunos experimentam e vivenciam o pensamento científico de maneira interpretativa e reflexiva, seja por meio de brincadeiras na Educação Infantil ou em projetos interdisciplinares para turmas mais avançadas. Em atividades focadas na metodologia STEAM, alunos resolvem problemas, pensam "fora da caixa" e se beneficiam de um aprendizado.</p>
          <mdb-btn outline="primary">Ler Mais</mdb-btn>
          <!-- <mdb-btn color="pink" size="md" class="mb-lg-0 mb-4 waves-light">Read more</mdb-btn> -->
        </mdb-col>
        <mdb-col lg="5">
          <mdb-view
            class="rounded  mb-lg-0 mb-4"
            hover
          >
            <img
              class="img-fluid"
              src="../assets/logo.png"
              alt="Sample image"
            />
            <a>
              <mdb-mask
                overlay="white-slight"
                waves
              />
            </a>
          </mdb-view>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="5">
          <mdb-view
            class="rounded  mb-lg-0 mb-4"
            hover
          >
            <img
              class="img-fluid"
              src="../assets/logo.png"
              alt="Sample image"
            />
            <a>
              <mdb-mask
                overlay="white-slight"
                waves
              />
            </a>
          </mdb-view>
        </mdb-col>
        <mdb-col lg="7">
          <a class="indigo-text">
            <h6 class=" mb-3">
              <mdb-icon
                icon="suitcase"
                class="pr-2"
              />Parceira</h6>
          </a>
          <h3 class=" mb-3 p-0">
            <strong>Escola do Futuro</strong>
          </h3>
          <p
            class="grey-text"
            style="font-size: 18px;"
          >Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt. Neque porro qui dolorem ipsum quia sit amet.</p>
          <mdb-btn outline="info">Info</mdb-btn>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col lg="7">
          <a class="pink-text">
            <h6 class=" mb-3">
              <mdb-icon
                icon="image"
                class="pr-2"
              />Educação do Futuro
            </h6>
          </a>
          <h3 class=" mb-3 p-0">
            <strong>Programas Sociais</strong>
          </h3>
          <p
            class="grey-text"
            style="font-size: 18px;"
          >A Drone Kids School apoia dois programas sociais. Um deles é para formação de pilotos de drones em conjunto com o Instituto Bom Aluno. Outro programa apoiado pela Drone Kids é Instituto Somos Mais, que atua em favor de vítimas de violência intrafamiliar: www.institutosomosmais.com.br .</p>
          <mdb-btn outline="default">Ler Mais</mdb-btn>
          <!-- <mdb-btn color="pink" size="md" class="mb-lg-0 mb-4 waves-light">Read more</mdb-btn> -->
        </mdb-col>
        <mdb-col lg="5">
          <mdb-view
            class="rounded  mb-lg-0 mb-4"
            hover
          >
            <img
              class="img-fluid"
              src="../assets/logo.png"
              alt="Sample image"
            />
            <a>
              <mdb-mask
                overlay="white-slight"
                waves
              />
            </a>
          </mdb-view>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
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
  name: 'Matricula',
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
