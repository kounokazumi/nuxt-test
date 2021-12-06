
<template>
  <section class="container">
      <div>
        <h1>ログイン</h1>
        <form>
          <input type="text" id="mail" name="mail" placeholder="メールアドレス" >
          <input v-bind:type="passType" name="pass" placeholder="パスワード" >
          
          <div class="help-block">
            <label class="checkbox-inline" >
              マスク解除
              <input type="checkbox" v-model="passHidden" v-bind:value="false"/>
            </label> 
          </div>
          
          <input type="submit" value="ログイン" formmethod="POST" >
        </form> 

        <a href="#" >パスワードをお忘れの方はこちら</a>
        <p>アカウントをお持ちではありませんか？</p>
        <a href="#" id="new_users">新規会員登録</a>

      </div>
  </section>
</template>

<script>

export default {
  // 変数
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
  // 関数
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

</script>