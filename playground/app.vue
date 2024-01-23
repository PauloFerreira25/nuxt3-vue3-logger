<template>
  <div>
    Nuxt module playground!
  </div>
</template>

<script setup>
const logger = inject('vuejs3-logger');
logger.debug('setup');

const data = reactive({
  a: 'a',
  b: 'b'
})

onMounted(() => {
  logger.debug('onMounted');
  logger.debug('test', data.a, 123)
  logger.info('test', data.b)
  logger.warn('test')
  logger.error('test')
  logger.fatal('test')
  externalFunction()

})

const externalFunction = () => {
  // log from external function
  const logger = inject('vuejs3-logger');
  logger.debug('log from function outside component.');
}

</script>
