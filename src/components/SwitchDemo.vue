<template>
  <div>
    <Switch v-model:value="xxx" />
  </div>
</template>

<script lang="ts">
import Switch from '../lib/Switch.vue';
import {ref} from 'vue';

export default {
  components: {Switch},
  setup(){
    const xxx = ref(true)
    return {xxx}
  }
};

</script>