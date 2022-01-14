
export default {

      // カウンタ関数
  methods: {
    addCount (e) {
      this.$store.commit('counter/add')
    },
    subtractCount (e) {
      this.$store.commit('counter/subtract')
    },
    clearCount (e) {
      this.$store.commit('counter/clear')
    },

    reset: function () {
      // リセット時は`$data`にアサイン
      Object.assign(this.$data, this.data());
    },

  },
  // 表示後
  mounted(){
    console.log('表示後');
  }
}