<template>
  <div id="app">
    <img src="./assets/logo.png">
    <twitter-input/>
  </div>
</template>

<script>
import twitterInput from './components/twitterInput.vue'

export default {
  name: 'app',
  components: {
    twitterInput
  }
}
</script>
