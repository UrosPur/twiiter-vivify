<template>
    <div>
        <p>Some text from parent here</p>

        <slot :color="color" :city="city" :municipality="municipality"></slot>
        <slot name="header">dsds</slot>
        <slot name="footer">sdsddsd</slot>

    </div>
</template>

<script>
    export default {
        name: "AppTest",
        data() {
            return {

                color: 'red',
                city: 'Novi Sad',
                municipality: 'Vojvodina'
            }
        }
    }
</script>
