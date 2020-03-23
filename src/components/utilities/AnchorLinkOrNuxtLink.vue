<template>
    <nuxt-link v-if="nuxt" :to="to" :target="target ? target : '_self'">
        <slot></slot>
    </nuxt-link>
    <a v-else :href="to" :target="target ? target : '_self'">
        <slot></slot>
    </a>
</template>

<script>
export default {
    props: ['nuxt', 'target', 'to']
}
</script>