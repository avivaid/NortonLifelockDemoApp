<template>
  <b-container>

      <h1 class = "text-center"> NORTONLIFELOK DENO APPLICATION </h1>
      <b-row align-v = "center">
        <b-col >
        <b-card title="About" style  class = "mb-1">
          <p> The application was built for the code demo for interview with norton lifelock. The links to dataset in json format and documation can be found below. The github page for the application
            is also linked below. </p> 
          <div class="text-center">
            <b-button-group class="mx-1">
            <b-button pill variant = "primary"  href =  "https://gist.githubusercontent.com/joelbirchler/66cf8045fcbb6515557347c05d789b4a/raw/9a196385b44d4288431eef74896c0512bad3defe/exoplanets"> Dataset </b-button> 
            </b-button-group>
            <b-button-group class="mx-1">
            <b-button pill variant = "primary" href = "https://www.kaggle.com/mrisdal/open-exoplanet-catalogue"> Documation </b-button>
            </b-button-group>
            <b-button-group class="mx-1">
            <b-button pill variant = "primary" href = "https://github.com/avivaid/NortonLifelockDemoApp"> GitHub  </b-button>
            </b-button-group>
        </div>
        </b-card>
        </b-col>
        </b-row>

        <b-row align-v = "center">
        <b-col>
        <b-card title="Orphan Planets"  class = "mb-2">
          <p> The number of orphan planets are  <u> <b> {{this.orphanPlanet.length}} </b> </u></p> 
        </b-card>
        </b-col>
        <b-col>
       <b-card title="Hotest Star" class = "mb-2">
          <p> The name of the planet with the hotest star is <b> {{this.hotStarPlanet.PlanetIdentifier}} </b> </p> 
        </b-card>
      </b-col>
    </b-row>
    <b-row align-v = "center">
        <b-col >
        <b-card title="Discovery Timeline Table" class = "text-center" v-if = "section ==1">
           <p class = "text-left"> The flowing tables shows the timeline of the discoverty of new Planets. The planets are grouped by size as 
          small (less than 1 Jupiter radii), medium (less than 2 Jupiter radii), and large (anything bigger than 2 Jupiter radi).  
          </p> 
            <b-table responsive sticky-header  striped hover class="mt-2" :items="yearTable" ></b-table>
          <b-button pill variant = "primary" v-on:click="click"> Chart </b-button> 
      
      </b-card>
        <b-card title="Discovery Timeline Chart" class = "text-center" v-else>
            <div>
           <apexchart width="1000" type="bar" :options="chartOptions" :series="series"></apexchart>
           </div>
        <b-button pill variant = "primary" v-on:click="click"> Table </b-button> 
    
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
        hotStarPlanet : [],
        yearTable:[],
        section:1, 
        chartOptions: null,
        series: [] 
        
    }
  }, 
  async created() {
         await(this.getData())
         this.getOrphanPlanet(this.response) 
         this.getHottestPlanet(this.response)
         this.getYearRecoard(this.response)
         this.yearTable.sort((a, b)=>{
            return a.Year > b.Year           
         })
        this.chartData()
    },

  methods: {
    async getData () {
      this.response = (await(axios.get(url))).data; 
    },

    getHottestPlanet () {
      let maxTemp = 0; 
      for (let res of this.response) {
        if (res.HostStarTempK != undefined && res.HostStarTempK > maxTemp) {
            maxTemp = res.HostStarTempK
             this.hotStarPlanet = res;  
           }
        }
     }, 
     click() {
       if (this.section == 1) {
         this.section =2; 
       }
       else {
         this.section =1;
       }
     },

    getOrphanPlanet () {
      for (let res of this.response) {
        if (res.TypeFlag == 3) {
            this.orphanPlanet.push(res);
          }
        }
    }, 
    getYearRecoard () {
        for (let res of this.response) {
        if (res.DiscoveryYear != "") {
          if(this.yearTable.some(year => year.Year == res.DiscoveryYear)){
              let val = this.yearTable.findIndex((year => year.Year == res.DiscoveryYear));
              if (res.RadiusJpt >= 2) {
                  this.yearTable[val].large++
              }
              else if (res.RadiusJpt >= 1) {
                 this.yearTable[val].med++
              }
              else if (res.RadiusJpt < 1&&res.RadiusJpt != ""){
                  this.yearTable[val].small++
              }
          }
          else {
              const element =   {
                Year:res.DiscoveryYear, 
                small:0,
                med:0, 
                large:0
              }
              if (res.RadiusJpt >= 2) {
                  element.large++
              }
              else if (res.RadiusJpt >= 1) {
                  element.med++
              }
              else if (res.RadiusJpt < 1&& res.RadiusJpt != ""){
                  element.small++;
                  
              }
              this.yearTable.push(element);
            }
          }
        }
    },
    chartData () {
        let year =[], small =[], med = [], large =[]
        for (let y of this.yearTable) {
            year.push(y.Year)
            small.push(y.small)
            med.push(y.med)
            large.push(y.large)
        }
      this.chartOptions = {
          chart: {
            id: 'timeline'
          },
          xaxis: {
            categories: year,
          }
        }

        this.series = [{
          name: 'Small',
          data: small
        },
        {
          name: 'Medium',
          data:med
        },{
          name: 'Large',
          data: large
        } ]

    }


  }
}
</script>

