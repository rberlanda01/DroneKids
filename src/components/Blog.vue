<template>
  <div class="blog">
    <mdb-container>
      <h2 class="h1-responsive font-weight-bold text-center my-5">Blog</h2>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col
          lg="5"
          xl="4"
        >
          <mdb-view
            hover
            class="rounded z-depth-1-half mb-lg-0 mb-4"
          >
            <img
              class="img-fluid"
              src="https://mymodernmet.com/wp/wp-content/uploads/2018/01/dronestagram-best-aerial-photos-2017-6.jpg"
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
        <mdb-col
          lg="7"
          xl="8"
          class="corpo"
        >
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>Title of the news</strong>
          </h3>
          <p class="dark-grey-text">Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere
            possimus, omnis voluptas assumenda est, omnis dolor repellendus et aut officiis debitis cum soluta nobis est eligendi
            placeat facere aut rerum.</p>
          <p>by
            <a class="font-weight-bold">Jessica Clark</a>, 19/04/2018</p>
          <mdb-btn
            tag="a"
            href="#/BlogPage"
            color="primary"
            size="md"
          >Ver Mais</mdb-btn>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col
          lg="5"
          xl="4"
        >
          <mdb-view
            hover
            class="rounded z-depth-1-half mb-lg-0 mb-4"
          >
            <img
              class="img-fluid"
              src="https://i.ytimg.com/vi/82gc8UYizN8/maxresdefault.jpg"
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
        <mdb-col
          lg="7"
          xl="8"
          class="corpo"
        >
          <h3 class="font-weight-bold mb-3 p-0">
            <strong>Title of the news</strong>
          </h3>
          <p class="dark-grey-text">At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti
            quos dolores et quas molestias excepturi sint occaecati cupiditate non provident et accusamus iusto odio dignissimos
            et dolorum fuga.</p>
          <p>by
            <a class="font-weight-bold">Jessica Clark</a>, 16/04/2018</p>
          <mdb-btn
            tag="a"
            href="#/BlogPage"
            color="primary"
            size="md"
          >Ver Mais</mdb-btn>
        </mdb-col>
      </mdb-row>
      <hr class="my-5" />
      <mdb-row>
        <mdb-col
          lg="5"
          xl="4"
        >
          <mdb-view
            hover
            class="rounded z-depth-1-half mb-lg-0 mb-4"
          >
            <img
              class="img-fluid"
              src="https://scontent.fbfh3-2.fna.fbcdn.net/v/t1.0-9/59581201_2416492631728552_175894913819344896_n.jpg?_nc_cat=108&_nc_oc=AQntJyHB2Yy093HwOJibSYvtO9pvDSDtkJLkcKzCm4tzh83M_7cVpWiHktKFY_adsAMi7OUI7wzCl73semI7THnP&_nc_ht=scontent.fbfh3-2.fna&oh=e29f459cf92811660d35ef104b38e19b&oe=5D7122BA"
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
        <mdb-col
          lg="7"
          xl="8"
          class="corpo"
        >
          <h3 class="font-weight-bold mb-3 p-0 ">
            <strong>Title of the news</strong>
          </h3>
          <p class="dark-grey-text">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, psam voluptatem
            quia consectetur.</p>
          <p>by
            <a class="font-weight-bold">Jessica Clark</a>, 12/04/2018</p>
          <mdb-btn
            tag="a"
            href="#/BlogPage"
            color="primary"
            size="md"
          >Ver Mais</mdb-btn>
        </mdb-col>
      </mdb-row>
    </mdb-container>
    <mdb-container style="margin-top: 75px;">
      <mdb-row>
        <mdb-btn-toolbar>
          <mdb-btn-group class="mr-2">
            <mdb-btn>1</mdb-btn>
            <mdb-btn>2</mdb-btn>
            <mdb-btn>3</mdb-btn>
            <mdb-btn>4</mdb-btn>
          </mdb-btn-group>
          <mdb-btn-group class="mr-2">
            <mdb-btn>5</mdb-btn>
            <mdb-btn>6</mdb-btn>
            <mdb-btn>7</mdb-btn>
          </mdb-btn-group>
          <mdb-btn-group>
            <mdb-btn>8</mdb-btn>
          </mdb-btn-group>
        </mdb-btn-toolbar>
      </mdb-row>
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
  name: 'Blog',
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
.blog {
  margin-top: 160px;
  margin-bottom: 70px;
}
.corpo {
  text-align: left;
}
</style>
