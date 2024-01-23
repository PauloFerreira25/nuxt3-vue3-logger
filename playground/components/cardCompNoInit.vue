<template>
    <div>
        cardCompNoInit
    </div>
</template>

<script  setup>
const logger = inject('nuxt3-vue3-logger');

const data = reactive({
    a: 'a',
    b: 'b',
    c: { key: 'value' }
})

onMounted(() => {
    logger.debug('cardCompNoInit');
    externalFunction()
})

const externalFunction = () => {
    logger.debug('log from function outside component.');
}
</script>

<style></style>