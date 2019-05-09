<template>
  <mdb-container>
    <mdb-navbar
      style="font-size: 1.75rem; background-color: #873bad; color: #fff;"
      position="top"
      href="#/"
      transparent
      scrolling
    >
      <mdb-container>
        <mdb-navbar-brand href="#/"><strong> <img
              class="rounded-circle  "
              src="../assets/logo1.png"
              alt="mdb logo"
              s
            ></strong></mdb-navbar-brand>
        <mdb-navbar-toggler style="max-width: 1140px">
          <mdb-navbar-nav left>
            <mdb-nav-item
              waves-fixed
              active
              href="#/"
            >Inicio</mdb-nav-item>
            <mdb-nav-item
              waves-fixed
              href="#/About"
            >Sobre</mdb-nav-item>
            <mdb-nav-item
              waves-fixed
              href="#/Cursos"
            >Cursos</mdb-nav-item>
            <mdb-nav-item
              waves-fixed
              href="#/Atuando"
            >Parceiros</mdb-nav-item>
            <mdb-nav-item
              waves-fixed
              href="#/Loja"
            >Loja</mdb-nav-item>
            <mdb-nav-item
              waves-fixed
              href="#/Blog"
            >Blog</mdb-nav-item>
            <mdb-nav-item
              waves-fixed
              href="#/Contato"
            >Contato</mdb-nav-item>
          </mdb-navbar-nav>
          <!--Search form -->
          <mdb-navbar-nav right>
            <form>
              <mdb-row class='py-4 d-flex align-items-center'>
                <a
                  class='fb-ic ml-0'
                  href="https://www.facebook.com/dronekidsschool/"
                >
                  <i class='fab fa-facebook white-text mr-lg-4'></i>
                </a>
                <a
                  class='li-ic'
                  href="https://www.linkedin.com/company/drone-kids-school/"
                >
                  <i class='fab fa-linkedin-in white-text mr-lg-4'></i>
                </a>
                <a
                  class='ins-ic'
                  href="https://www.instagram.com/drone_kids_school/"
                >
                  <i class='fab fa-instagram white-text mr-lg-4'></i>
                </a>
              </mdb-row>
            </form>
          </mdb-navbar-nav>
          <!--/.Search form -->
        </mdb-navbar-toggler>
      </mdb-container>
    </mdb-navbar>
  </mdb-container>
</template>
<script>

import {
  mdbNavbar,
  mdbNavbarBrand,
  mdbNavbarToggler,
  mdbNavbarNav,
  mdbNavItem,
  mdbDropdown,
  mdbDropdownMenu,
  mdbDropdownToggle,
  mdbInput,
  mdbDropdownItem,
  mdbFormInline,
  mdbContainer,
  mdbMask,
  mdbRow,
  mdbCol,
  mdbBtn
} from 'mdbvue'

export default {
  name: 'Navigation',
  components: {
    mdbNavbar,
    mdbNavbarBrand,
    mdbNavbarToggler,
    mdbNavbarNav,
    mdbNavItem,
    mdbDropdown,
    mdbDropdownMenu,
    mdbDropdownToggle,
    mdbDropdownItem,
    mdbFormInline,
    mdbInput,
    mdbContainer,
    mdbMask,
    mdbRow,
    mdbCol,
    mdbBtn
  },
  data () {
    return {
      links: [
        {
          id: 0,
          text: 'Home',
          page: '/Home'
        }
      ]
    }
  }
}
</script>
<style>
.top-nav-collapse {
  background-color: #7763e6e6 !important;
}
.rounded-circle {
  border-radius: 25% !important;
  background-color: aliceblue;
}
a {
  color: #ffffff;
}
a:hover {
  text-decoration: none;
  color: #bcd9fa8a;
}
</style>
