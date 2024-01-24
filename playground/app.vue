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
  const log = logger.setMethodName('onMounted')
  log.debug('test nada', data.a, 123)
  log.debug('test', data.a, 123)
  log.setMethodName('onMounted');
  log.debug('onMounted');
  log.debug('test', data.a, 123)
  log.info('test', data.b)
  log.info('test', data.c)
  log.warn('test')
  log.error('test')
  log.fatal('test')
  externalFunction()
})

const externalFunction = () => {
  logger.debug('log from function outside component.');
}

</script>
