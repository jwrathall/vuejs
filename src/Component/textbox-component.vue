<template>
    <div class="form-group">
        <input type="text" placeholder="username" class="form-control form-control-lg" v-model="_username" >{{_username}}</input>
    </div>
    
</template>

<script>
export default{
    name: 'Username',
    props:{
        username:{
            type:String,
            required:true
        }
    },
    data(){
        return{
            xusername:this._username
        }
    },
    computed:{
        _username(username){
            // var _username = this.username;
            // console.log(this.username);
            console.log(username);
            return username +"comp"
        }
    }
}
</script>

<style lang="sass" scoped>

</style>