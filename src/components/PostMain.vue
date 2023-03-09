<script>
import axios from 'axios';

export default {
    name: "PostMain",
    data(){
        return{
            projects: [],
            loading: true,
            baseUrl: 'http://127.0.0.1:8000'
        }
    },
    methods: {
        getProjects(){
            this.loading = true;
            axios.get(`${this.baseUrl}/api/projects`).then((response) => {
                if(response.data.success){
                    this.projects = response.data.results
                    this.loading = false;
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
                <div class="col-12">
                    <div v-if="loading" class="d-flex justify-content-center">
                        <div class="loader"></div>
                    </div>
                    <div v-else class="d-flex flex-wrap gap-5 justify-content-center">
                        <div v-for="project in projects" :key="project.id" class="col-3">
                            <div class="card my-3">
                                <div class="card-body">
                                    <div class="card-img-top">
                                        <img :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'" class="img-fluid">
                                    </div>
                                    <h5 class="card-title">{{project.title}}</h5>
                                    <p class="card-text">{{project.content}}</p>
                                    <a href="#" class="btn btn-sm btn-success">
                                        Leggi l'articolo
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scoped>
    .loader {
        border: 16px solid #f3f3f3; 
        border-top: 16px solid #3498db;
        border-radius: 50%;
        width: 120px;
        height: 120px;
        animation: spin 2s linear infinite;
    }

    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
</style>