
export default {
    // 変数（パスワードマスク）
    data(){
      return{
        passHidden:true,
      }
    },
    // 呼び出し先の値が変われば、キャッシュしてくれる。
    // 動的に変わる変数などで使う。
    computed: {
      count () { return this.$store.state.counter.count },
      passType(){
        return this.passHidden ? 'password' : 'text';
      }
    },
    // 値が変わったときに処理を実行する
    watch:{
      passHidden(){
      }
    },



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
  },
  // 表示後
  mounted(){
    console.log('表示後');
  }
}