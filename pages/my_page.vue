
<template>
 <div class="mypage_bl">
    <Navbar/>

    <h1 class="mypage_bl_title mt_10 mb_10">Profile</h1>
    
    <div class="mypage_bl_card mx_auto d_grid gap_15">
        <label class="d_grid" >
            メールアドレス
            <input class="el_input" type="text" v-model="user.email">
        </label>
        <label class="d_grid" >
            名前
            <input class="el_input" type="text" v-model="profile.name" >
        </label>

        <button type="button" v-on:click="update">保存</button>
    </div>
</div>

</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default {
    // コンポーネント呼び出し
    components: {
        Navbar: () => import('~/layouts/navbar')
    },

    data(){
        return{
            user:{
               email:"" 
            },
            profile:{
                name:"",
                userId:"",
            }
        }
    },
    methods:{
        update(){
            this.$updateAuthUser(this.user);
            this.$profilesUpdate(this.profile);
            this.$store.dispatch('flashMessage/showFlashMessage', '更新が完了しました。');
        },

    },
    async mounted(){
        this.user    = await this.$getAuthUser();
        this.profile = await this.$profilesGet();

    }
}
</script>


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