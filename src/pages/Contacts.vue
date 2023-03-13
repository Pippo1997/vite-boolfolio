<script>
import axios from 'axios';
import { store } from '../store';

export default {
    name: 'Contacts',
    data(){
        return{
            store,
            name: '',
            surname: '',
            email: '',
            phone: '',
            message: '',
            errors: {},
            success: false,
            loading: false,
        }
    },
    methods:{
        sendForm(){
            const data = {
                name: this.name,
                surname: this.surname,
                email: this.email,
                phone: this.phone,
                message: this.message,
            }

            this.loading = true;
            this.errors = {};

            axios.post(`${this.store.baseUrl}/api/contacts`, data).then((response) => {
                if(!response.data.success){
                    this.errors = response.data.errors
                }
                else{
                    this.name = '';
                    this.surname = '';
                    this.email = '';
                    this.phone = '';
                    this.message = '';
                }

                setTimeout(() => {
                    this.$router.push({ 'name': 'thank_you' });
                }, 3000);
            });
        }
    }
}
</script>

<template lang="">
    <div class="container">
        <div class="row">
            <div class="col-12 text-center">
                <h2>Pagina Contatti</h2>
            </div>
            <div class="col-12">
                <h5 class="text-center my-5">Info di contatto</h5>
                <div class="row my-5">
                    <div class="col-12 col-md-6">
                        <div class="d-flex flex-column text-center">
                            <div class="my-2">
                                <strong><i class="fas fa-map me-2"></i> Indirizzo:</strong> Via: Via Ciccio num: 23, Città: Udine CAP 33333 (sigla provincia: UD)
                            </div>
                            <div class="my-2">
                                <strong><i class="fas fa-book me-2"></i> Partita Iva:</strong> 12345678901
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6">
                        <div class="d-flex flex-column text-center">
                            <div class="my-2">
                                <strong><i class="fas fa-phone me-2"></i> Telefono:</strong> 321 123456789
                            </div>
                            <div class="my-2">
                                <strong><i class="fas fa-envelope me-2"></i> Email:</strong> info@boolpress.com
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="background-green py-4">
        <div class="container">
            <div class="col-12 my-5">
                <h5 class="text-center my-5 text-white">SCRIVICI</h5>
                <form @submit.prevent="sendForm">
                    <div class="row">
                        <div class="col-12 col-md-6">
                            <label class="control-label text-white" for="name">Nome</label>
                            <input type="text" class="form-control" :class="{ 'is-invalid':errors.name }" name="nome" id="nome" placeholder="Nome" v-model="name">
                            <div v-for="(error, index) in errors.name" :key="`message-error-${index}`" class="text-danger">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label text-white" for="cognome">Cognome</label>
                            <input type="text" class="form-control" :class="{ 'is-invalid':errors.surname }" name="cognome" id="cognome" placeholder="Cognome" v-model="surname">
                            <div v-for="(error, index) in errors.surname" :key="`message-error-${index}`" class="text-white">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label text-white" for="email">Email</label>
                            <input type="text" class="form-control" :class="{ 'is-invalid':errors.email }" name="email" id="email" placeholder="Email" v-model="email">
                            <div v-for="(error, index) in errors.email" :key="`message-error-${index}`" class="text-white">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 col-md-6">
                            <label class="control-label text-white" for="name">Telefono</label>
                            <input type="text" class="form-control" :class="{ 'is-invalid':errors.phone }" name="telefono" id="telefono" placeholder="Telefono" v-model="phone">
                            <div v-for="(error, index) in errors.phone" :key="`message-error-${index}`" class="text-white">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 my-2">
                            <label class="control-label text-white" for="messaggio">Messaggio</label>
                            <textarea name="messaggio" id="messaggio" class="form-control" :class="{ 'is-invalid':errors.message }" placeholder="Messaggio" v-model="message"></textarea>
                            <div v-for="(error, index) in errors.message" :key="`message-error-${index}`" class="text-white">
                                {{ error }}
                            </div>
                        </div>
                        <div class="col-12 my-5 text-white" v-if="success">
                            Messaggio inviato con successo 
                        </div>
                        <div class="col-12 my-2 text-center">
                            <button class="send_email" type="submit" :disabled="loading"> {{ loading ? 'Invio messaggio...' : 'Invia' }} </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <h2 class="text-center my-2">GOOGLE MAPS EMPEDDED</h2>
    </div>
</template>

<style lang="scss" scoped>
    .background-green{
        background-color: green;
        .send_email{
            background-color: white;
            color: green;
            border: 1px solid green;
            padding: 10px 20px;
            transition: 0.2s;
    
            &:hover{
                background-color: green;
                color: white;
                border: 1px solid white;
            }
        }
    }
</style>