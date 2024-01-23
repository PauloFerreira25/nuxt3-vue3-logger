<template>
  <div>
    Nuxt module playground!
    <cardComp />
    <cardCompNoInit />
  </div>
</template>

<script setup>
const logger = inject('nuxt3-vue3-logger').init('app');

logger.debug('setup');

const data = reactive({
  a: 'a',
  b: 'b',
  c: { key: 'value' }
})

onMounted(() => {
  logger.debug('test nada', data.a, 123)
  logger.debug('test', data.a, 123)
  logger.setMethodName('onMounted');
  logger.debug('onMounted');
  logger.debug('test', data.a, 123)
  logger.info('test', data.b)
  logger.info('test', data.c)
  logger.warn('test')
  logger.error('test')
  logger.fatal('test')
  externalFunction()
})

const externalFunction = () => {
  logger.debug('log from function outside component.');
}

</script>
