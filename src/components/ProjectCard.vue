<script>
import { store } from '../store';

export default {
    name: 'ProjectCard',
    props:{
        project: Object,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template lang="">
    <div class="card my-3">
        <div class="card-body">
            <div class="card-img-top">
                <img class="img-fluid" :src="project.cover_image != null ? `${store.baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/400/200'">
            </div>
            <div class="card-title py-1">
                <h5>{{project.title}}</h5>
            </div>
            <div class="card-text py-1">
                {{project.content}}
            </div>
            <div class="d-flex flex-end">
                <!-- <a href="#" class="btn btn-sm btn-success">Leggi l'articolo</a> -->
                <router-link :to="{ name: 'single_project', params: { slug: project.slug } }" class="btn btn-sm btn-success">
                    Leggi l'articolo
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    .card-title{
        width : 300px;
        overflow:hidden;
        display:inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    .card-text{
        width : 350px;
        overflow:hidden;
        display:inline-block;
        text-overflow: ellipsis;
        white-space: nowrap;
    }
    
</style>