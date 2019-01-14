<template lang="pug">
        .notification(:class="hasData ? 'is-success' : 'is-danger'")
            button.delete
            slot(name="body")
</template>

<script>
export default {
    props: {
        hasData: {
            type: Boolean,
        }
    },

}
</script>


