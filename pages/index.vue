<template>
  <section class="container">
    <div>
      <h1>カウンター</h1>
<blockquote>
      <h2>{{count}}</h2>
</blockquote>
      <button @click="addCount">アップ</button><p />
      <button @click="subtractCount">ダウン</button><p />
      <button @click="clearCount">クリア</button><p />
    </div>
<blockquote>
Apr/3/2019<p />
</blockquote>
  </section>
</template>

<script>
export default {
  computed: {
    count () { return this.$store.state.counter.count }
  },
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    },
    subtractCount (e) {
      this.$store.commit('counter/subtract')
    },
    clearCount (e) {
      this.$store.commit('counter/clear')
    }
  }
}
</script>