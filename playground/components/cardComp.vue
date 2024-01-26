<template>
  <div>
    Card
  </div>
</template>

<script setup lang="ts">
import { Logger } from '#nuxt3-vue3-logger';
const logger = inject<Logger>('nuxt3-vue3-logger', new Logger);

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