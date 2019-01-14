<template lang="pug">
    .card(v-blur="track.preview_url")
        .card-image
            figure.image.is-1b1
                img(:src="track.album.images[0].url")
        .card-content
            .media
                .media-left
                    figure.image.is-48x48
                        img(:src="track.album.images[0].url")
                .media-content
                    p.title.is-6
                        strong {{ track.name }}
                    p.subtitle.is-6 {{ track.artists[0].name }}
            .content
                small {{ track.duration_ms | ms-to-mm }}
                nav.level
                    .level-left
                    
                        a.level-item
                            button(v-if="track.preview_url !== ''" @click="selectTrack")
                                | Reproducir
</template>

<script>
export default {
    props: {
        track: {
            type: Object,
            required: true
        }
    },
    methods: {
        selectTrack () {
            this.$bus.$emit('set-track', this.track)
        }
    }
}
</script>

