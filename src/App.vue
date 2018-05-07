<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!--<twitter-input/>-->
    <password />
  </div>
</template>

<script>
import twitterInput from './components/twitterInput.vue'
import password from './components/password.vue'

export default {
  name: 'app',
  components: {
    twitterInput,
      password
  }
}
</script>
