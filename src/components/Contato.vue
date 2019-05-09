<template>

  <div class="contato">
    <mdb-container>
      <section class="my-5">
        <h2 class="h1-responsive font-weight-bold text-center my-5">Contato</h2>
        <hr class="my-5" />
        <mdb-row>
          <mdb-col
            lg="5"
            class="lg-0 mb-4"
          >
            <mdb-card>
              <mdb-card-body>
                <form>
                  <p class="h4 text-center mb-4">Contato</p>
                  <div class="grey-text">
                    <mdb-input
                      label="Nome"
                      group
                      type="text"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <mdb-input
                      label="Email"
                      group
                      type="email"
                      validate
                      error="wrong"
                      success="right"
                    />
                    <mdb-textarea
                      :rows="2"
                      label="Your message"
                    />
                  </div>
                  <div class="text-center">
                    <mdb-btn outline="secondary">Enviar
                      <mdb-icon
                        far
                        icon="paper-plane"
                        class="ml-1"
                      />
                    </mdb-btn>
                  </div>
                </form>
              </mdb-card-body>
            </mdb-card>
          </mdb-col>
          <mdb-col lg="7">
            <div
              id="map-container"
              class="rounded z-depth-1-half map-container"
              style="height: 400px"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3602.9581847222635!2d-49.24218688498558!3d-25.439661483783983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce387159a7721%3A0xe6209144185a8bf8!2sDrone+Kids+School!5e0!3m2!1spt-PT!2sbr!4v1557295789597!5m2!1spt-PT!2sbr"
                width="100%"
                height="100%"
                frameBorder="0"
                style="border: 0"
              ></iframe>
            </div>
            <br />
            <mdb-row class="text-center">
              <mdb-col md="4">
                <mdb-icon
                  class="icon"
                  icon="map-marked"
                />
                <p class="mb-md-0">Curitiba, Paraná</p>
              </mdb-col>
              <mdb-col md="4">
                <mdb-icon
                  class="icon"
                  icon="phone"
                />
                <p>+55 (41) 3363-5051</p>
              </mdb-col>
              <mdb-col md="4">
                <mdb-icon
                  class="icon"
                  icon="envelope"
                />
                <p>contato@dronekids.com.br</p>
              </mdb-col>
            </mdb-row>
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
  mdbCarouselCaption,
  mdbInput,
  mdbTextarea
} from 'mdbvue'
export default {
  name: 'Contato',
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
    mdbCarouselCaption,
    mdbInput,
    mdbTextarea
  }
}
</script>

<style scoped>
.contato {
  margin-top: 160px;
  margin-bottom: 50px;
}
.icon {
  font-size: 50px;
  background-color: transparent;
}
a {
  background-color: aliceblue;
}
</style>
