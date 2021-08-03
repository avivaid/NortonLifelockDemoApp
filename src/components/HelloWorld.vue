<template>
  <div class="hello">
   <H1> FIRST COMPONENT </H1>
  </div>
</template>

<script>
import axios from 'axios'
const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";

export default {
  data () {
    return {
        response: null, 
        orphanPlanet: [],
    }
  }, 
  methods: {
    async getData () {
      this.response = (await(axios.get(url))).data; 
    },
    getHottestPlanet () {
      let i =0;
      for(i=0; i < this.response.lenght; i++) {
          console.log(this.response[i]); 
      }
    }, 
    getOrphanPlanet () {
      for (let res of this.response) {
        if (res.TypeFlag == 3) {
            this.orphanPlanet.push(res);
          }
        }
    }
  }
}
</script>

