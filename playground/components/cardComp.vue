<template>
    <div>
        Card
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
    const log = logger.init('CardComp', 'onMounted - Card');
    log.debug('card');
    externalFunction()
    log.debug('card2');
})

const externalFunction = () => {
    const log = logger.init('CardComp', 'externalFunction');
    log.debug('log from function outside component.');
}
</script>

<style></style>