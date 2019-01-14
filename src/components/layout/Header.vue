<template lang="pug">
    section.hero.is-success
        .hero-head
            header.navbar
                .container
                    .navbar-start
                        .navbar-item
                            strong Platzi Music
                    .navbar-end.navbar-menu
        .hero-body
            .container.has-text-centered
                h1.title Platzi Music
                h2.subtitle Canciones que están "Vuenísimas"
            w-player
</template>

<script>
import WPlayer from './Player'
export default {
    components: {
        WPlayer
    }
}
</script>
