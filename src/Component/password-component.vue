<template>
    <div class="form-group">
        <!--<i class="fa fa-eye fa-2x" aria-hidden="true"></i>-->
        <span class="show-hide" v-on:click="toggleClass"><i class="fa fa-eye fa-2x" aria-hidden="true"></i></span>
        <input type="text" placeholder="password" class="form-control form-control-lg"></input>
        <div v-bind:class="{ 'active': isActive }">xx</div>
    </div>
    
</template>

<script>
export default{  
    name: 'Password',
    data() {
        return{
            isHidden: 'text',
            isActive: true
        }
       
    },
    methods:{
        toggleClass:function(event){
            this.isActive = false;
            alert('toggle');
            console.log(this);
        }
    }
}
</script>

<style lang="sass" scoped>
    .show-hide{
        position: absolute;
        left: 620px;
        top: 92px;
    }
    .active{
        color:red;
    }

</style>