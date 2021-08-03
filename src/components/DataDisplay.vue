<template>
  <b-container>

      <h1 class = "text-center"> NORTONLIFELOK DENO APPLICATION </h1>
      <b-row align-v = "center">
        <b-col >
        <b-card title="About" style = "max-width-20rem" class = "mb-2">
          <p> The application was built for the code demo for interview with norton lifelock. The links to dataset in json format and documation can be found below </p> 
           <div class = "text-center ">
            <b-button variant = "primary"  href =  "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets"> Dataset </b-button> 
            <b-button variant = "primary" href = this.url> Documation </b-button>
          </div>  
        </b-card>
        </b-col>
        </b-row>
        <b-row align-v = "center">
        <b-col>
        <b-card title="Orphan Planets"  class = "mb-2">
          <p> The number of Orphan planets is  <u> <b> {{this.orphanPlanet.length}} </b> </u></p> 
        </b-card>
        </b-col>
        <b-col>
       <b-card title="Hotest Star" class = "mb-2">
          <p> The name of the planet with the Hotest Star is <b> {{this.hotStarPlanet.PlanetIdentifier}} </b> </p> 
        </b-card>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import axios from 'axios'
const url = "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets";

export default {
  data () {
    return {
        response: [], 
        orphanPlanet: [],
        hotStarPlanet : []
    }
  }, 
  async created() {
         await(this.getData())
         this.getOrphanPlanet(this.response) 
         this.getHottestPlanet(this.response)
    },

  methods: {
    async getData () {
      this.response = (await(axios.get(url))).data; 
      console.log(this.response.length);
    },

    getHottestPlanet (response) {
      let maxTemp = 0; 
      for (let res of response) {
        if (res.HostStarTempK != undefined && res.HostStarTempK > maxTemp) {
            maxTemp = res.HostStarTempK
             this.hotStarPlanet = res;  
           }
        }
        console.log(this.hotStarPlanet); 
     }, 

    getOrphanPlanet (response) {
      for (let res of response) {
        if (res.TypeFlag == 3) {
            this.orphanPlanet.push(res);
          }
        }
    }
  }
}
</script>

