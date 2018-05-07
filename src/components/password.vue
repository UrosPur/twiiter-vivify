<template>
    <div>
        <label>password</label>
        <input v-model="password"/>
        <p>{{ status }}</p>


    </div>

</template>

<script>
    export default {
        name: "password",
        data() {

            return {

                password: '',
                isWeek: true
            }
        },

        computed: {
            status() {

                return this.isWeek ? 'Week' : 'Strong'
            }
        },

        watch: {

            password(newValue){

                if(newValue.length > 6 && /\d/.test(newValue)){

                    this.isWeek = false
                } else {

                    this.isWeek = true
                }

            }

        }
    }
</script>

<style scoped>

</style>