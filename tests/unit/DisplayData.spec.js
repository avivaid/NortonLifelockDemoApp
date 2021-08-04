import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HW from '@/components/DataDisplay.vue'
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)



// Mock Data
const data = [
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 0,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 0.054,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2010,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584,
    "HostStarAgeGyr": ""
  },
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 0,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 0.054,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2010,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584,
    "HostStarAgeGyr": ""
  },
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 0,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 2,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2010,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584,
    "HostStarAgeGyr": ""
  },
   // 2010 2 small 1 large total 3 
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 0,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 0.054,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2011,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584,
    "HostStarAgeGyr": ""
  },
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 0,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 1.05,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2011,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584,
    "HostStarAgeGyr": ""
  },
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 0,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 0.054,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2011,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584,
    "HostStarAgeGyr": ""
  },
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 3,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 2,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2011,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  }, 
   // total 4  2 small 1 medium 1 large
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 1.001,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2012,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },

  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 5.4,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2012,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 1.001,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2012,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },

  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 5.4,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2012,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },
     // 2011 total  4 2 med 2 large 
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 5.4,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2013,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },

  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 5.4,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2013,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },

  
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 5.4,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2013,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },
    // 2013 3 large  total 3 
  
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 1.01,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2014,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },

  
  {
    "PlanetIdentifier": "KOI-1843.03",
    "TypeFlag": 1,
    "PlanetaryMassJpt": 0.0014,
    "RadiusJpt": 0.4,
    "PeriodDays": 0.1768913,
    "SemiMajorAxisAU": 0.0048,
    "Eccentricity": "",
    "PeriastronDeg": "",
    "LongitudeDeg": "",
    "AscendingNodeDeg": "",
    "InclinationDeg": 72,
    "SurfaceTempK": "",
    "AgeGyr": "",
    "DiscoveryMethod": "transit",
    "DiscoveryYear": 2014,
    "LastUpdated": "13/07/15",
    "RightAscension": "19 00 03.14",
    "Declination": "+40 13 14.7",
    "DistFromSunParsec": "",
    "HostStarMassSlrMass": 0.46,
    "HostStarRadiusSlrRad": 0.45,
    "HostStarMetallicity": 0,
    "HostStarTempK": 3584000,
    "HostStarAgeGyr": ""
  },
  // 2014 1 small 1 med total 2 
//Borken Data 
  
{
  "PlanetIdentifier": "KOI-1843.03",
  "TypeFlag": 1,
  "PlanetaryMassJpt": 0.0014,
  "RadiusJpt": "",
  "PeriodDays": 0.1768913,
  "SemiMajorAxisAU": 0.0048,
  "Eccentricity": "",
  "PeriastronDeg": "",
  "LongitudeDeg": "",
  "AscendingNodeDeg": "",
  "InclinationDeg": 72,
  "SurfaceTempK": "",
  "AgeGyr": "",
  "DiscoveryMethod": "transit",
  "DiscoveryYear": 2014,
  "LastUpdated": "13/07/15",
  "RightAscension": "19 00 03.14",
  "Declination": "+40 13 14.7",
  "DistFromSunParsec": "",
  "HostStarMassSlrMass": 0.46,
  "HostStarRadiusSlrRad": 0.45,
  "HostStarMetallicity": 0,
  "HostStarTempK": 3584000,
  "HostStarAgeGyr": ""
},  
{
  "PlanetIdentifier": "KOI-1843.03",
  "TypeFlag": 1,
  "PlanetaryMassJpt": 0.0014,
  "RadiusJpt": 0.4,
  "PeriodDays": 0.1768913,
  "SemiMajorAxisAU": 0.0048,
  "Eccentricity": "",
  "PeriastronDeg": "",
  "LongitudeDeg": "",
  "AscendingNodeDeg": "",
  "InclinationDeg": 72,
  "SurfaceTempK": "",
  "AgeGyr": "",
  "DiscoveryMethod": "transit",
  "DiscoveryYear": "",
  "LastUpdated": "13/07/15",
  "RightAscension": "19 00 03.14",
  "Declination": "+40 13 14.7",
  "DistFromSunParsec": "",
  "HostStarMassSlrMass": 0.46,
  "HostStarRadiusSlrRad": 0.45,
  "HostStarMetallicity": 0,
  "HostStarTempK": 3584000,
  "HostStarAgeGyr": ""
},

  
]

  
describe('Checking orphone planet ', () => {
  it('Checking if no of orphan planet are the same',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
     wrapper.vm.getOrphanPlanet();    
     assert.equal(1, wrapper.vm.orphanPlanet.length);
  })
})



describe('Checking orphone planet ', () => {
  it('Checking if the  planet with hotest start is found',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getHottestPlanet();
    assert.equal("KOI-1843.03", wrapper.vm.hotStarPlanet.PlanetIdentifier);
  })
})

describe('Checking timeline 1', () => {
  it('Checking if planets are groped correctly and no broken data is not included  ',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getYearRecoard();
    assert.equal(5, wrapper.vm.yearTable.length);
   
  })
})



describe('Checking timeline 2014', () => {
  it('Checking no new planets for 2014 ',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getYearRecoard();
    let val = wrapper.vm.yearTable.findIndex((year => year.Year == 2014));
    assert.equal(1, wrapper.vm.yearTable[val].small);
    assert.equal(1, wrapper.vm.yearTable[val].med);
    assert.equal(0, wrapper.vm.yearTable[val].large);
   
  })
})


describe('Checking timeline 2013', () => {
  it('Checking no new planets for 2013 ',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getYearRecoard();
    let val = wrapper.vm.yearTable.findIndex((year => year.Year == 2013));
    assert.equal(0, wrapper.vm.yearTable[val].small);
    assert.equal(0, wrapper.vm.yearTable[val].med);
    assert.equal(3, wrapper.vm.yearTable[val].large);
   
  })
})

describe('Checking timeline 2012', () => {
  it('Checking no new planets for 2012 ',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getYearRecoard();
    let val = wrapper.vm.yearTable.findIndex((year => year.Year == 2012));
    assert.equal(0, wrapper.vm.yearTable[val].small);
    assert.equal(2, wrapper.vm.yearTable[val].med);
    assert.equal(2, wrapper.vm.yearTable[val].large);
   
  })
})

describe('Checking timeline 2011', () => {
  it('Checking no new planets for 2011',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getYearRecoard();
    let val = wrapper.vm.yearTable.findIndex((year => year.Year == 2011));
    assert.equal(2, wrapper.vm.yearTable[val].small);
    assert.equal(1, wrapper.vm.yearTable[val].med);
    assert.equal(1, wrapper.vm.yearTable[val].large);
   
  })
})


describe('Checking timeline 2010', () => {
  it('Checking no new planets for 2010 ',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.response = data 
    wrapper.vm.getYearRecoard();
    let val = wrapper.vm.yearTable.findIndex((year => year.Year == 2010));
    assert.equal(2, wrapper.vm.yearTable[val].small);
    assert.equal(0, wrapper.vm.yearTable[val].med);
    assert.equal(1, wrapper.vm.yearTable[val].large);
  
  })
})


























