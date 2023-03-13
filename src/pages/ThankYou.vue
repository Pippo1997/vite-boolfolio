<script>
export default {
    name: 'thank_you'
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2>Grazie per averci contattato</h2>
                <p>Grazie per averci contattato, puoi tornare ai projects cliccando sul bottone</p>
                <router-link :to="{ name: 'project_list' }" class="btn btn-sm btn-success my-2">
                    Torna ai Project
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>