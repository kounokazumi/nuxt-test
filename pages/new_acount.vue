

<template>
<section>
      <div class="new_acount_bl mt_10 mx_auto">
        <p>新規会員登録</p>
        <form class="new_acount_bl_card mt_50">
          <input class="new_acount_bl_card_input w_80 mb_10 " type="text" id="name" name="name" placeholder="名前" >
          <input class="new_acount_bl_card_input mb_10 w_100" type="text" id="mail" name="mail" placeholder="メールアドレス" >
          <input class="new_acount_bl_card_input mb_10 w_100" v-bind:type="passType" name="pass" placeholder="パスワード" >
          <label class="new_acount_bl_card_msk" >
            マスク解除
            <input class="new_acount_bl_card_input mb_10 w_100 w_2" type="checkbox" v-model="passHidden" v-bind:value="false"/>
          </label> 
          
          <input class="new_acount_bl_card_regist mb_10 w_20 mt_10 pt_10 pb_10  " type="submit" value="登録" formmethod="POST" >
          
          
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
