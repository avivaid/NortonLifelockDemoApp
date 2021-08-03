import { assert } from 'chai'
import { shallowMount } from '@vue/test-utils'
import HW from '@/components/DataDisplay.vue'




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
    "DiscoveryYear": 2012,
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
    "DiscoveryYear": 2013,
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
    "DiscoveryYear": 2014,
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
    "DiscoveryYear": 2012,
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
]

  



describe('Checking orphone planet ', () => {
  it('Checking if no of orphan planet are the same',  () => {
    const wrapper = shallowMount(HW, {
    });
     wrapper.vm.getOrphanPlanet(data);    
     assert.equal(1, wrapper.vm.orphanPlanet.length);
  })
})




describe('Checking orphone planet ', () => {
  it('Checking if the  planet with hotest start is found',  () => {
    const wrapper = shallowMount(HW, {
    });
    wrapper.vm.getHottestPlanet(data);
    assert.equal("KOI-1843.03", wrapper.vm.hotStarPlanet.PlanetIdentifier);
  })
})














