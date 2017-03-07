<template>
    <div class="form-group">
        <!--<i class="fa fa-eye fa-2x" aria-hidden="true"></i>-->
        <span class="show-hide" v-on:click="toggleClass"><i class="fa fa-2x" v-bind:class="{'fa-eye' : isActive, 'fa-eye-slash' : !isActive}" aria-hidden="true"></i></span>
        <input type="password" placeholder="password" class="form-control form-control-lg" id="passord-input" ></input>
    </div>
    
</template>

<script>
export default{  
    name: 'Password',
    data() {
        return{
            isHidden: 'text',
            isActive: true,
            _password:''
        }
       
    },
    methods:{
        toggleClass:function(event){
            if(this.isActive){
                this.isActive = false;
                document.getElementById('passord-input').type = 'text';
            }else{
                this.isActive = true;
                 document.getElementById('passord-input').type = 'password';
            }
        }
    },
    //property depends on another
    computed:{
        value(){
            console.log(this._password);
            return this._password;
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