<template>
    <div >
         <h1>History</h1>
         <ol>
             <li v-for="(param, index) in params" :key=index>
                {{ param.q }}
            </li>
         </ol>
    </div>   
</template>
<script>
import { mapState } from 'vuex'
export default({
    

 computed: {
     params() {
         return this.$store.state.params
     }
 }
})
</script>