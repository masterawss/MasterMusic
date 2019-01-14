<template lang="pug">
    div
        section.hero.is-primary
            .hero-body
                p.title 
                    | Buscar
                p.subtitle 
                    | Busca las mejores músicas de todo el mundo
                div
                    .field.has-addons
                        .control
                            input.input.is-large(@keyup.enter="search" v-model="searchQuery" type="text" placeholder="Buscar canción")
                        .control
                            button.button.is-large.is-success(@click="search") Buscar
        .container
            w-notification.not(v-show="notification.showNotification" :has-data="notification.hasData")
                p(v-if="notification.hasData" slot="body")
                    | {{ searchCantidad }}
                p(v-else  slot="body")
                    | No se encontró resultados

        w-loader(v-show="isLoading")
        .container.results
            .columns.is-multiline
                .column.is-one-quarter(v-for="track in tracks")
                    w-card-track(:track="track")
        
</template>

<script>

import trackService from '../services/track'

import WCardTrack from './layout/CardTrack.vue'
import WLoader from './shared/Loader.vue'
import WNotification from './shared/ResultNotification.vue'

export default {
    name: 'PlatziMusic',
    components: {
        WCardTrack,
        WLoader,
        WNotification
    },
    data(){
        return {
            notification: {
                showNotification: false,
                hasData: ''
            },
            showNotification: false,
            searchQuery: '',
            tracks: [],
            isLoading: false
        }
    },

    watch: {
        'notification.showNotification' () {
                if (this.notification.showNotification) {
                    setTimeout(() => {
                        this.notification.showNotification = false
                    }, 3000);
                }
            }
    },

    methods: {
        search (){
            if(!this.searchQuery) return

            this.isLoading = true
            trackService.search(this.searchQuery)
                .then(res => {
                    this.tracks = res.tracks.items
                    this.isLoading = false
                    this.notification = {
                        showNotification: true,
                        hasData: res.tracks.items.length > 0
                    }
                })
        }
    },
    computed: {
        searchCantidad () {
            return 'Se ha encontrado ' + this.tracks.length + ' resultados';
        }
    },
}
</script>

<style>
    .padding{
        margin-top: 20vh;
    }
    .not{
        margin: 20px;
    }
</style>

