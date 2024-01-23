<template>
    <div>
        Card
    </div>
</template>

<script  setup>
const logger = inject('nuxt3-vue3-logger').init('CardComp');

const data = reactive({
    a: 'a',
    b: 'b',
    c: { key: 'value' }
})

onMounted(() => {
    logger.setMethodName('onMounted - Card');
    logger.debug('card');
    externalFunction()
})

const externalFunction = () => {
    logger.debug('log from function outside component.');
}
</script>

<style></style>