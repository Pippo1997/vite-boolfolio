<script>
export default {
    name: 'not_found'
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Pagina non trovata</h2>
                <router-link :to="{ name: 'project_list' }" class="btn btn-sm btn-success my-2">
                    Torna ai Project
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="">
    
</style>