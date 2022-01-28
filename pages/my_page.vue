
<template>
 <div class="mypage_bl">
    <h1 class="mypage_bl_title mt_10 mb_10">Profile</h1>
    <div class="mypage_bl_card mx_auto d_grid gap_15">
        <label class="d_grid" >
            メールアドレス
            <input class="el_input" type="text" v-model="user.email">
        </label>
        <label class="d_grid" >
            名前
            <input class="el_input" type="text" v-model="user.displayName" >
        </label>

        <button type="button">保存</button>
    </div>
</div>
</template>


<style lang="scss">
.mypage_bl{
  position: relative;
  &_title {
    font-size: 40px;
    text-align: center;
  }
  &_card {
    width: 80%;
    padding: 5%;
    background-color: white;
    &_mail {
    }
    &_save_label {
        display: flex;
    }
  }
}


</style>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    data(){
        return{
            user:{},
        }
    },
    methods:{
        updateAuthUser(){
            this.$updateAuthUser(this.user);
        }
    },
    async mounted(){
        this.user = await this.$getAuthUser();
    }
}
</script>
