<template>
  <div>导航栏 | <router-link to="/">Poyap</router-link>
    | <router-link to="/xxx">Poyap2</router-link>
  </div>
  <hr/>
  <router-view/>
</template>

<script>
import Poyap from './components/Poyap.vue'

export default {
  name: 'App',
}
</script>
