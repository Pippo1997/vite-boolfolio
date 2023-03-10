<script>
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'SingleProject',
    data(){
        return{
            store,
            project: null,
            loading: true,
        }
    },
    mounted() {
        this.store.loading = true
        axios.get(`${this.store.baseUrl}/api/projects/${this.$route.params.slug}`).then((response) => {
            if(response.data.success){
                this.project = response.data.project
                this.loading = false
            }
            else{
                // redirect 404
                this.$route.push({ name: 'not_found' })
            }
        })
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center mt-5" v-if="loading">
                <div class="loader"></div>
            </div>
            <div class="col-12" v-else>
                <div class="float-end">
                    <router-link :to="{ name: 'project_list' }" class="btn btn-sm btn-success">
                        Torna ai Project
                    </router-link>
                </div>
                <div class="card mt-5">
                    <div class="card-img-top">
                        <div class="cover-img">
                            <img :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/400/200'" class="img-fluid">
                        </div>
                    </div>
                    <div class="card-title mt-3">
                        <h2>{{ project.title }}</h2>
                    </div>
                    <div class="card-body">
                        <p>{{ project.content }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .cover-img{
        width: 300px;
    }
</style>