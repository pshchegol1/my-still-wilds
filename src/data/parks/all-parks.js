export const PARK_REGIONS = {
  mustVisit: {
    label: 'Must Visit',
    tag: "Canada's Most Iconic Parks",
    parks: [
      { name: 'Banff National Park', province: 'Alberta', area: '6,641 km²', established: '1885', rating: '4.9', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/banff.jpg' },
      { name: 'Jasper National Park', province: 'Alberta', area: '10,878 km²', established: '1907', rating: '4.8', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/jasper.jpg' },
      { name: 'Gros Morne National Park', province: 'Newfoundland', area: '1,805 km²', established: '1973', rating: '4.9', seasons: ['Summer', 'Spring', 'Fall'], image: '/parks/gros-morne.jpg' },
      { name: 'Pacific Rim National Park', province: 'British Columbia', area: '511 km²', established: '1970', rating: '4.8', seasons: ['Summer', 'Winter'], image: '/parks/pacific-rim.jpg' },
      { name: 'Kluane National Park', province: 'Yukon', area: '22,013 km²', established: '1972', rating: '4.7', seasons: ['Summer'], image: '/parks/kluane.jpg' },
      { name: 'Cape Breton Highlands', province: 'Nova Scotia', area: '949 km²', established: '1936', rating: '4.8', seasons: ['Summer', 'Fall'], image: '/parks/cape-breton.jpg' },
    ],
  },
  britishColumbia: {
    label: 'British Columbia',
    parks: [
      { name: 'Yoho National Park', province: 'British Columbia', rating: '4.7', image: '/parks/yoho.jpg' },
      { name: 'Kootenay National Park', province: 'British Columbia', rating: '4.6', image: '/parks/kootenay.jpg' },
      { name: 'Glacier National Park', province: 'British Columbia', rating: '4.7', image: '/parks/glacier-bc.jpg' },
      { name: 'Gwaii Haanas', province: 'British Columbia', rating: '4.8', image: '/parks/gwaii-haanas.jpg' },
      { name: 'Mount Revelstoke', province: 'British Columbia', rating: '4.6', image: '/parks/mount-revelstoke.jpg' },
      { name: 'Gulf Islands', province: 'British Columbia', rating: '4.5', image: '/parks/gulf-islands.jpg' },
      { name: 'Pacific Rim', province: 'British Columbia', rating: '4.8', image: '/parks/pacific-rim.jpg' },
    ],
  },
  alberta: {
    label: 'Alberta',
    parks: [
      { name: 'Banff National Park', province: 'Alberta', rating: '4.9', image: '/parks/banff.jpg' },
      { name: 'Jasper National Park', province: 'Alberta', rating: '4.8', image: '/parks/jasper.jpg' },
      { name: 'Waterton Lakes', province: 'Alberta', rating: '4.7', image: '/parks/waterton-lakes.jpg' },
      { name: 'Elk Island National Park', province: 'Alberta', rating: '4.5', image: '/parks/elk-island.jpg' },
      { name: 'Wood Buffalo', province: 'Alberta', rating: '4.6', image: '/parks/wood-buffalo.jpg' },
    ],
  },
  ontario: {
    label: 'Ontario',
    parks: [
      { name: 'Georgian Bay Islands', province: 'Ontario', rating: '4.5', image: '/parks/georgian-bay.jpg' },
      { name: 'Bruce Peninsula', province: 'Ontario', rating: '4.7', image: '/parks/bruce-peninsula.jpg' },
      { name: 'Thousand Islands', province: 'Ontario', rating: '4.6', image: '/parks/thousand-islands.jpg' },
      { name: 'Point Pelee', province: 'Ontario', rating: '4.5', image: '/parks/point-pelee.jpg' },
      { name: 'Pukaskwa National Park', province: 'Ontario', rating: '4.6', image: '/parks/pukaskwa.jpg' },
      { name: 'St. Lawrence Islands', province: 'Ontario', rating: '4.4', image: '/parks/st-lawrence-islands.jpg' },
    ],
  },
  quebec: {
    label: 'Quebec',
    parks: [
      { name: 'Forillon National Park', province: 'Quebec', rating: '4.7', image: '/parks/forillon.jpg' },
      { name: 'La Mauricie National Park', province: 'Quebec', rating: '4.6', image: '/parks/la-mauricie.jpg' },
      { name: 'Mingan Archipelago', province: 'Quebec', rating: '4.7', image: '/parks/mingan-archipelago.jpg' },
    ],
  },
  atlanticCanada: {
    label: 'Atlantic Canada',
    parks: [
      { name: 'Fundy National Park', province: 'New Brunswick', rating: '4.6', image: '/parks/fundy.jpg' },
      { name: 'Cape Breton Highlands', province: 'Nova Scotia', rating: '4.8', image: '/parks/cape-breton.jpg' },
      { name: 'Kejimkujik National Park', province: 'Nova Scotia', rating: '4.6', image: '/parks/kejimkujik.jpg' },
      { name: 'Terra Nova', province: 'Newfoundland', rating: '4.5', image: '/parks/terra-nova.jpg' },
      { name: 'Gros Morne National Park', province: 'Newfoundland', rating: '4.9', image: '/parks/gros-morne.jpg' },
      { name: 'Kouchibouguac', province: 'New Brunswick', rating: '4.5', image: '/parks/kouchibouguac.jpg' },
      { name: 'Prince Edward Island National Park', province: 'Prince Edward Island', rating: '4.6', image: '/parks/pei.jpg' },
    ],
  },
  prairieProvinces: {
    label: 'Prairie Provinces',
    parks: [
      { name: 'Prince Albert National Park', province: 'Saskatchewan', rating: '4.6', image: '/parks/prince-albert.jpg' },
      { name: 'Grasslands National Park', province: 'Saskatchewan', rating: '4.5', image: '/parks/grasslands.jpg' },
      { name: 'Riding Mountain', province: 'Manitoba', rating: '4.6', image: '/parks/riding-mountain.jpg' },
      { name: 'Wapusk National Park', province: 'Manitoba', rating: '4.7', image: '/parks/wapusk.jpg' },
      { name: 'Elk Island', province: 'Alberta', rating: '4.5', image: '/parks/elk-island.jpg' },
    ],
  },
  northernCanada: {
    label: 'Northern Canada',
    parks: [
      { name: 'Kluane National Park', province: 'Yukon', rating: '4.7', image: '/parks/kluane.jpg' },
      { name: 'Ivvavik National Park', province: 'Yukon', rating: '4.6', image: '/parks/ivvavik.jpg' },
      { name: 'Vuntut National Park', province: 'Yukon', rating: '4.5', image: '/parks/vuntut.jpg' },
      { name: 'Nahanni National Park', province: 'Northwest Territories', rating: '4.8', image: '/parks/nahanni.jpg' },
      { name: 'Aulavik National Park', province: 'Northwest Territories', rating: '4.5', image: '/parks/aulavik.jpg' },
      { name: 'Tuktut Nogait', province: 'Northwest Territories', rating: '4.4', image: '/parks/tuktut-nogait.jpg' },
      { name: 'Auyuittuq National Park', province: 'Nunavut', rating: '4.6', image: '/parks/auyuittuq.jpg' },
      { name: 'Sirmilik National Park', province: 'Nunavut', rating: '4.5', image: '/parks/sirmilik.jpg' },
      { name: 'Quttinirpaaq', province: 'Nunavut', rating: '4.6', image: '/parks/quttinirpaaq.jpg' },
      { name: 'Torngat Mountains', province: 'Newfoundland', rating: '4.7', image: '/parks/torngat-mountains.jpg' },
      { name: 'Wood Buffalo National Park', province: 'Northwest Territories', rating: '4.6', image: '/parks/wood-buffalo.jpg' },
      { name: 'Ukkusiksalik National Park', province: 'Nunavut', rating: '4.4', image: '/parks/ukkusiksalik.jpg' },
    ],
  },
};

export const PARK_STATS = {
  totalParks: '48',
  provinces: '13',
  protectedArea: '340K',
  visitors: '25M',
  oldestYear: '1885',
};

export default PARK_REGIONS;
