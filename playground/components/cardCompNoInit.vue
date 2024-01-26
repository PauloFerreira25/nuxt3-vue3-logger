<template>
    <div>
        cardCompNoInit
    </div>
</template>

<script setup lang="ts">
import { Logger } from '#nuxt3-vue3-logger';
const logger = new Logger()

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