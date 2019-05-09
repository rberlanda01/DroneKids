import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Matricula from '@/components/Matricula'
import About from '@/components/About'
import Cursos from '@/components/Cursos'
import Fotos from '@/components/Fotos'
import Contato from '@/components/Contato'
import Blog from '@/components/Blog'
import BlogPage from '@/components/BlogPage'


Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'About',
      component: About
	},
    {
      path: '/Matricula',
      name: 'Matricula',
      component: Matricula
	},
	{
		path: '/Cursos',
		name: 'Cursos',
		component: Cursos
	  },
	  {
		path: '/Fotos',
		name: 'Fotos',
		component: Fotos
	  },
	  {
		path: '/Atuando',
		name: 'Atuando',
		component: Fotos
	  },
	  {
		path: '/Contato',
		name: 'Contato',
		component: Contato
	  },
	  {
		path: '/Blog',
		name: 'Blog',
		component: Blog
	  },
	  {
		path: '/BlogPage',
		name: 'BlogPage',
		component: BlogPage
	  },
  ]
})
