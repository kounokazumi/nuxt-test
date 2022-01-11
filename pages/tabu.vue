
<style lang="scss">
#tab {
  $green: #007db9;
  $white: #fff;


  width: 100%;
  max-width: 500px;
  margin: 40px auto;
  
  .tabMenu {
    display: flex;
    
    li {
      width: auto;
      padding: 10px 20px;
      color: $white;
      border-right: 1px solid $white;
      background-color: $green;
      cursor: pointer;
            
      &:last-child {
        border-right: none;
      }
    }

  }

  .tabContents {
    width: 100%;
    padding: 20px;
    border: 1px solid $green;
    
    h2 {
      margin: 0 0 10px 0;
      font-size: 20px;
      font-weight: bolder;
    }

  }
}
</style>

<template>
<div id="tab">
    <ul class="tabMenu">
        <li v-on:click="isSelect('1')">All</li>
        <li v-on:click="isSelect('2')">News</li>
        <li v-on:click="isSelect('3')">Event</li>
    </ul>
    <div class="tabContents">
        <div v-if="isActive === '1'">Tab All</div>
        <div v-else-if="isActive === '2'">Tab News</div>
        <div v-else-if="isActive === '3'">Tab Event</div>
    </div>
</div>
</template>

<script>
export default {
  el:'#tab',
  data(){
    return{
      isActive:'1',
    }
  },
    methods: {
      isSelect:function(num){
        this.isActive = num
      }
    }
  }
</script>
