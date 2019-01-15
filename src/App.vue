<template>
  <div id="app">
    <div v-fx-layout:column-reverse.xs="toggle" v-fx-wrap>
      <div>Hello</div>
      <div>world</div>
    </div>
    <div>
      <button @click="toggle = !toggle">{{ toggle }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  toggle: boolean = true
}
</script>
