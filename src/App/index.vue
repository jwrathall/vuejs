

<template>
    <div class="row justify-content-md-center">
        <div class="col col-lg-6">
            <div class="jumbotron">
            <form v-on:submit.prevent="onSubmit">
                <password-input></password-input>
                <textbox :username="username"></textbox>
                <div class="form-group">
                     <div class="offset-sm-8 col-sm-4">
                        <button type="submit" class="btn btn-primary" style="float:right;">Sign in</button>
                    </div>
                </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import Password from '../Component/password-component.vue'
import Input from '../Component/textbox-component.vue'

export default{
    name: 'App',
    components:{
        'password-input': Password,
        'textbox': Input
    },
    data(){
        return{
            //  mutableCopy: this.immutableProp
            username:''
        }
    },
    methods:{
       onSubmit(event){
           console.log(this.username);
       }
    }
}
</script>

<style lang="sass" scoped>
    .jumbotron{
        margin-top:18px;
    }
</style>