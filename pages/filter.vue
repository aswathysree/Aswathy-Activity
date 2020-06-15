<template>
  <v-card
    max-width="400"
    class="mx-auto"
  >
    <v-system-bar
      color="pink darken-2"
      dark
    >
      <v-spacer></v-spacer>

      
    </v-system-bar>

    <v-app-bar
      dark
      color="pink"
    >
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title>Task</v-toolbar-title>

      <v-spacer></v-spacer>

     <input type="text" v-model="search" placeholder="search" style="border:none">
    </v-app-bar>

    <v-container>
      <v-row dense>
        <v-col cols="12">
          <v-card
            color="#385F73"
            dark
          >
           
           
          </v-card>
        </v-col>

        <v-col
          v-for="(item, i) in filterditems"
          :key="i"
          cols="12"
        >
          <v-card
            :color="item.color"
            dark
          >
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="headline"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle v-text="item.artist"></v-card-subtitle>
              </div>

              <v-avatar
                class="ma-3"
                size="125"
                tile
              >
                <v-img :src="item.src"></v-img>
              </v-avatar>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>

import axios from 'axios'
  export default {
    
    asyncData ({ params, error }) {
    return axios.get(`https://api.github.com/search/repositories?q=hello`)
      .then((res) => {
        return { 
                  github: res.data.title
               }
      })
      .catch((e) => {
       console.log(e)
      })
  },
    data: () => ({
      items: [
        {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel',
          artist: 'Foster the People',
        },
         {
          color: '#1F7087',
          src: 'https://cdn.vuetifyjs.com/images/cards/foster.jpg',
          title: 'Supermodel3',
          artist: 'Foster the People3',
        },
        {
          color: '#952175',
          src: 'https://cdn.vuetifyjs.com/images/cards/halcyon.png',
          title: 'Halcyon Days',
          artist: 'Ellie Goulding',
        },
      ],
      search: '',
      github: []
    }),
  
     computed: {
      filterditems: function(){
        console.log(this.search)
        return this.items.filter((item)=> {
        return item.title.match(this.search);
      });
    }
  }
  } 

 
</script>
<style scoped>
input:focus{
    outline: none;   
}
</style>