<template>
  <v-card>
    <v-card-title>
      Search
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
      <v-data-table
      :headers="headers"
    :items="rows"
    :search="search"
    item-key="id"
    show-select
    class="elevation-1"
  >
  </v-data-table> 
   </v-card>   
</template>

<script>

import axios from 'axios'
import { mapState } from 'vuex'
  export default ({
  
    methods: {
      async getData(params) {
          const response = await axios.get(`https://api.github.com/search/repositories`, params)
          this.rows = response.data.items

          return this.rows
      }
    },
    watch: {
      search: function (value) {
     if (this.timer) {
        clearTimeout(this.timer);
        this.timer = null;
    }
    this.timer = setTimeout(() => {
      const params = {
              params: {
                q: value
              }
            }
            this.getData(params)
            
            this.$store.commit('params', params)
    }, 600);
        },
      
    },
    
   
    data() {
      return {
        headers: [
          { text: 'Name', value: 'name' },
          { text: 'Full Name', value: 'full_name' },
          {text:'name',value:'name'}
        ],
        rows: [],
       awaitingSearch: false,
        search: '',
        
      }
    } , 
  
 
  } )

 
</script>
<style scoped>
input:focus{
    outline: none;   
}
</style>