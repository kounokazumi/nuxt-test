<style lang="scss">
 @import "layouts/module.scss";
</style>

<template>
<section>
      <div class="new-acount_card">
        <p>新規会員登録</p>
        <form>
          <input type="text" id="name" name="name" placeholder="名前" >
          <input type="text" id="mail" name="mail" placeholder="メールアドレス" >
          <input v-bind:type="passType" id="pass" name="pass" placeholder="パスワード" >
          <label class="checkbox-inline" >
            マスク解除
            <input type="checkbox" id="passmk" v-model="passHidden" v-bind:value="false"/>
          </label> 
          
          <input type="submit" id="regist" value="登録" formmethod="POST" >
          
          
          <!-- まだできない -->
          <a>
            <router-link to="top" id="cancel">キャンセル</router-link>
          </a>
         </form> 
         

      </div>
  </section>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({

        watchQuery: ['page'],
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
})
</script>
