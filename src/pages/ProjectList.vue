<script>
import axios from 'axios';
import ProjectCard from '../components/ProjectCard.vue';
import { store } from '../store';

export default {
    name: "ProjectList",
    data(){
        return{
            store,
            projects: [],
            loading: true,
            currentPage: 1,
            lastPage: null
        }
    },
    components:{
        ProjectCard
    },
    methods: {
        getProjects(project_page){
            this.loading = true;
            axios.get(`${this.store.baseUrl}/api/projects`, { params:{ page: project_page}}).then((response) => {
                if(response.data.success){
                    this.projects = response.data.results.data
                    this.loading = false;
                    this.currentPage = response.data.results.current_page
                    this.lastPage = response.data.results.last_page
                }
                else{
                    //compare messaggio che dice che non è andato a buon fine
                }
            })
        }
    },
    mounted(){
        this.getProjects()
    }
}
</script>

<template lang="">
    <div class="container">
            <div class="row">
                <div class="col-12">
                    <h2 class="text-center">Vite Boolfolio</h2>
                </div>
                <div v-if="store.loading" class="col-12 d-flex justify-content-center">
                    <div class="loader"></div>
                </div>
                <div v-else class="col-12 d-flex flex-wrap justify-content-center">
                    <div class="row">
                        <div class="col-12 col-md-4" v-for="project in projects" :key="project.id">
                            <ProjectCard :project="project"></ProjectCard>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-12">
                            <nav>
                                <ul class="pagination">
                                    <li :class="currentPage === 1 ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage - 1)">
                                            Prev
                                        </button>
                                    </li>
                                    <li :class="currentPage === i ? 'disabled' : 'page-item'" v-for="i in lastPage">
                                        <button class="page-link" @click="getProjects(i)">
                                            {{ i }}
                                        </button>
                                    </li>
                                    <li :class="currentPage === lastPage ? 'disabled' : 'page-item'">
                                        <button class="page-link" @click="getProjects(currentPage + 1)">
                                            Next
                                        </button>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>

</style>