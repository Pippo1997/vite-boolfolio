<script>
export default {
    name: 'ProjectCard',
    props:{
        project: Object,
        baseUrl: String
    }
}
</script>

<template lang="">
    <div class="card my-3">
        <div class="card-body">
            <div class="card-img-top">
                <img class="img-fluid" :src="project.cover_image != null ? `${baseUrl}/storage/${project.cover_image}` : 'https://picsum.photos/200/300'">
            </div>
            <div class="card-title py-1">
                <h5>{{project.title}}</h5>
            </div>
            <div class="card-text py-1">
                {{project.content}}
            </div>
            <a href="#" class="btn btn-sm btn-success">
                Leggi l'articolo
            </a>
        </div>
    </div>
</template>

<style lang="">
    
</style>