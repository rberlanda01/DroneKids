<template>
  <div class="blogpage">
    <mdb-container>
      <mdb-row class="mt-5">
        <mdb-col md="12">
          <mdb-card reverse>
            <mdb-view
              hover
              cascade
            >
              <img
                src="https://media.licdn.com/dms/image/C4D22AQH-DnwY7g3I5Q/feedshare-shrink_8192/0?e=1560384000&v=beta&t=Dyl3hYJU6ze7yUr7cpwAw6zEeA6FNC-zJSA_nG0ELtw"
                class="img-fluid"
              />
              <mdb-mask
                overlay="white-slight"
                class="waves-light"
                waves
              />
            </mdb-view>
            <mdb-card-body class="text-center cascade">
              <p>Written by
                <a>
                  <strong>Abby Madison</strong>
                </a>, 26/08/2018</p>
              <mdb-btn class="btn-fb waves-light">
                <mdb-icon
                  fab
                  icon="facebook"
                  class="pr-2"
                />
                Facebook
              </mdb-btn>
              <span class="counter">46</span>
              <mdb-btn class="btn-tw waves-light">
                <mdb-icon
                  fab
                  icon="twitter"
                  class="pr-2"
                />
                Twitter
              </mdb-btn>
              <span class="counter">22</span>
              <mdb-btn class="btn-gplus waves-light">
                <mdb-icon
                  fab
                  icon="google-plus"
                  class="pr-2"
                />
                Google
              </mdb-btn>
              <span class="counter">31</span>
              <mdb-btn
                color="default"
                class="waves-light"
              >
                <mdb-icon
                  fab
                  icon="comments"
                  class="pr-2"
                />
                Comments
              </mdb-btn>
              <span class="counter">18</span>
            </mdb-card-body>
          </mdb-card>
          <mdb-container class="mt-5">
            <p>ATENÇÃO SÃO PAULO!
              A DKS, Startup com foco em educação 4.0 já pousou na grande SP, (regiões Norte, Sul,e Oeste). Mora na cidade que nunca dorme e ficou interessado?
              Curta e compartilhe nossa página, e fique ligado nas novidades!
              Acesse nosso site ou entre em contato!
              SITE:
              https://lnkd.in/diPWc_z
              CONTATO:
              Luis Hachebe – (11) 98587-5444
              hachebe@dronekids.com.br
              Karen Nuvolari– (11) 99355-1728
              karen@dronekids.com.br
            </p>
            <p>Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
              possimus, omnis voluptas assumenda est, omnis dolor repellendus. Quis autem vel eum iure reprehenderit qui in ea
              voluptate velit esse quam nihil molestiae consequatur. Temporibus autem quibusdam et aut officiis debitis aut rerum
              necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae itaque earum rerum.
            </p>
          </mdb-container>
        </mdb-col>
      </mdb-row>
      <hr class="mb-5 mt-4" />
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
  mdbCarouselItem,
  mdbCarouselCaption
} from 'mdbvue'
export default {
  name: 'BlogPage',
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
    mdbCarouselItem,
    mdbCarouselCaption
  }
}
</script>

<style scoped>
.blogpage {
  margin-top: 160px;
  margin-bottom: 70px;
}
</style>
