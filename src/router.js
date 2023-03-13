// importiamo createRouter e createWebHistory
import { createRouter, createWebHistory } from 'vue-router';

// importiamo le componenti rappresentanti
import HomePage from './pages/HomePage.vue';
import ProjectList from './pages/ProjectList.vue';
import SingleProject from './pages/SingleProject.vue';
import Contacts from './pages/Contacts.vue';
import ThankYou from './pages/ThankYou.vue';
import NotFound from './pages/NotFound.vue';

// creiamo oggetto router
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'homepage',
            component: HomePage
        },
        {
            path: '/blog',
            name: 'project_list',
            component: ProjectList
        },
        //rotta per dettaglio project
        {
            path: '/blog/:slug', //con :nome passiamo il parametro per vedere il fettaglio di un articolo,iol nome deve concidere con quello dato in api.php
            name: 'single_project',
            component: SingleProject
        },
        {
            path: '/contacts', 
            name: 'contacts',
            component: Contacts
        },
        {
            path: '/thank_you', 
            name: 'thank_you',
            component: ThankYou
        },
        //404 not-found
        {
            path: '/*',
            name: 'not_found',
            component: NotFound
        }
    ]
});

// esportare il router
export { router }

