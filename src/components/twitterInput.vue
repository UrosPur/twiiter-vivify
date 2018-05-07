<template>
    <div>
        <textarea v-model="text" @input="handleChange"> </textarea>

        <p>{{ numberOfCaracters }}/{{ maxNumberOfCaracters }}</p>
    </div>
</template>

<script>

    const MAX_NUMBER_OF_CARACTERS = 120

    export default {
        name: "TwitterInput",
        data() {
            return {

                text: '',
                maxNumberOfCaracters: MAX_NUMBER_OF_CARACTERS
            }

        },
        computed: {
            numberOfCaracters() {

                return this.text.length
            }

        },
        methods: {

            handleChange(event) {


                if (this.numberOfCaracters >= this.maxNumberOfCaracters) {



                this.text = this.text.slice(0,this.maxNumberOfCaracters)


                }

            }
        }
    }
</script>

<style scoped>

</style>