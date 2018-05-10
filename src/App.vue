<template>
    <div >
        <img class="image" src="./assets/deadpool-1.jpg">
        <!--<twitter-input/>-->
        <!--<password/>-->
        <app-test>

            <div slot-scope="slotProps">

                Color: {{ slotProps.color }}</br>
                City: {{ slotProps.city | allLowwer }}</br>
                Municipality: {{ slotProps.municipality | allCaps | allLowwer }}</br>
                Municipality/City/Color: {{ slotProps.municipality | join(slotProps.city,slotProps.color)}}</br>

            </div>
            <p> some other thenks</p>

            <template slot="header">Header from app vue</template>
            <template slot="footer">Footer from app vue</template>

        </app-test>
        <router-view></router-view>
    </div>
</template>

<script>
    import twitterInput from './components/twitterInput.vue'
    import password from './components/password.vue'
    import AppTest from './components/AppTest.vue'

    export default {
        name: 'app',
        components: {
            AppTest,
            twitterInput,
            password
        },
        filters: {
            allCaps(value) {

                if (!value) {
                    return ''
                }

                return value.toString().toUpperCase()
            },

            allLowwer(value){


                if (!value) {
                    return ''
                }

                return value.toString().toLowerCase()

            },


            join(value,arg1,arg2){


                return value  + '/' + arg1 + '/' +  arg2;

            }

        }
    }
</script>
<style>
   .image {

       width:500px;
       height:250px;
       border-radius: 0px 25px 0px 25px;

       -webkit-animation: fadein 5s; /* Safari, Chrome and Opera > 12.1 */
       -moz-animation: fadein 5s; /* Firefox < 16 */
       -ms-animation: fadein 5s; /* Internet Explorer */
       -o-animation: fadein 5s; /* Opera < 12.1 */
       animation: fadein 5s;


   }

   @keyframes fadein {
       from { opacity: 0; }
       to   { opacity: 1; }
   }

   /* Firefox < 16 */
   @-moz-keyframes fadein {
       from { opacity: 0; }
       to   { opacity: 1; }
   }

   /* Safari, Chrome and Opera > 12.1 */
   @-webkit-keyframes fadein {
       from { opacity: 0; }
       to   { opacity: 1; }
   }

   /* Internet Explorer */
   @-ms-keyframes fadein {
       from { opacity: 0; }
       to   { opacity: 1; }
   }

   /* Opera < 12.1 */
   @-o-keyframes fadein {
       from { opacity: 0; }
       to   { opacity: 1; }
   }
</style>
