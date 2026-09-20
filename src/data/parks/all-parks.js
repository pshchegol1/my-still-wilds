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
      { name: 'Yoho National Park', province: 'British Columbia', area: '1,313 km²', established: '1886', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/parks/yoho.jpg' },
      { name: 'Kootenay National Park', province: 'British Columbia', area: '1,406 km²', established: '1920', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/parks/kootenay.jpg' },
      { name: 'Glacier National Park', province: 'British Columbia', area: '1,349 km²', established: '1886', rating: '4.7', seasons: ['Summer', 'Winter'], image: '/parks/glacier-bc.jpg' },
      { name: 'Gwaii Haanas', province: 'British Columbia', area: '1,470 km²', established: '1988', rating: '4.8', seasons: ['Summer'], image: '/parks/gwaii-haanas.jpg' },
      { name: 'Mount Revelstoke', province: 'British Columbia', area: '260 km²', established: '1914', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/parks/mount-revelstoke.jpg' },
      { name: 'Gulf Islands', province: 'British Columbia', area: '36 km²', established: '2003', rating: '4.5', seasons: ['Summer', 'Spring'], image: '/parks/gulf-islands.jpg' },
      { name: 'Pacific Rim', province: 'British Columbia', area: '511 km²', established: '1970', rating: '4.8', seasons: ['Summer', 'Winter'], image: '/parks/pacific-rim.jpg' },
    ],
  },
  alberta: {
    label: 'Alberta',
    parks: [
      { name: 'Banff National Park', province: 'Alberta', area: '6,641 km²', established: '1885', rating: '4.9', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/banff.jpg' },
      { name: 'Jasper National Park', province: 'Alberta', area: '10,878 km²', established: '1907', rating: '4.8', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/jasper.jpg' },
      { name: 'Waterton Lakes', province: 'Alberta', area: '505 km²', established: '1895', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/parks/waterton-lakes.jpg' },
      { name: 'Elk Island National Park', province: 'Alberta', area: '194 km²', established: '1906', rating: '4.5', seasons: ['Summer', 'Winter'], image: '/parks/elk-island.jpg' },
      { name: 'Wood Buffalo', province: 'Alberta', area: '44,807 km²', established: '1922', rating: '4.6', seasons: ['Summer'], image: '/parks/wood-buffalo.jpg' },
    ],
  },
  ontario: {
    label: 'Ontario',
    parks: [
      { name: 'Georgian Bay Islands', province: 'Ontario', area: '14 km²', established: '1929', rating: '4.5', seasons: ['Summer'], image: '/parks/georgian-bay.jpg' },
      { name: 'Bruce Peninsula', province: 'Ontario', area: '156 km²', established: '1987', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/parks/bruce-peninsula.jpg' },
      { name: 'Thousand Islands', province: 'Ontario', area: '24 km²', established: '1904', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/parks/thousand-islands.jpg' },
      { name: 'Point Pelee', province: 'Ontario', area: '15 km²', established: '1918', rating: '4.5', seasons: ['Spring', 'Fall'], image: '/parks/point-pelee.jpg' },
      { name: 'Pukaskwa National Park', province: 'Ontario', area: '1,878 km²', established: '1978', rating: '4.6', seasons: ['Summer'], image: '/parks/pukaskwa.jpg' },
      { name: 'St. Lawrence Islands', province: 'Ontario', area: '9 km²', established: '1904', rating: '4.4', seasons: ['Summer', 'Fall'], image: '/parks/st-lawrence-islands.jpg' },
    ],
  },
  quebec: {
    label: 'Quebec',
    parks: [
      { name: 'Forillon National Park', province: 'Quebec', area: '244 km²', established: '1970', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/parks/forillon.jpg' },
      { name: 'La Mauricie National Park', province: 'Quebec', area: '536 km²', established: '1970', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/parks/la-mauricie.jpg' },
      { name: 'Mingan Archipelago', province: 'Quebec', area: '151 km²', established: '1984', rating: '4.7', seasons: ['Summer'], image: '/parks/mingan-archipelago.jpg' },
    ],
  },
  atlanticCanada: {
    label: 'Atlantic Canada',
    parks: [
      { name: 'Fundy National Park', province: 'New Brunswick', area: '206 km²', established: '1948', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/parks/fundy.jpg' },
      { name: 'Cape Breton Highlands', province: 'Nova Scotia', area: '949 km²', established: '1936', rating: '4.8', seasons: ['Summer', 'Fall'], image: '/parks/cape-breton.jpg' },
      { name: 'Kejimkujik National Park', province: 'Nova Scotia', area: '404 km²', established: '1974', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/parks/kejimkujik.jpg' },
      { name: 'Terra Nova', province: 'Newfoundland', area: '400 km²', established: '1957', rating: '4.5', seasons: ['Summer', 'Fall'], image: '/parks/terra-nova.jpg' },
      { name: 'Gros Morne National Park', province: 'Newfoundland', area: '1,805 km²', established: '1973', rating: '4.9', seasons: ['Summer', 'Spring', 'Fall'], image: '/parks/gros-morne.jpg' },
      { name: 'Kouchibouguac', province: 'New Brunswick', area: '238 km²', established: '1969', rating: '4.5', seasons: ['Summer'], image: '/parks/kouchibouguac.jpg' },
      { name: 'Prince Edward Island National Park', province: 'Prince Edward Island', area: '27 km²', established: '1937', rating: '4.6', seasons: ['Summer'], image: '/parks/pei.jpg' },
    ],
  },
  prairieProvinces: {
    label: 'Prairie Provinces',
    parks: [
      { name: 'Prince Albert National Park', province: 'Saskatchewan', area: '3,875 km²', established: '1927', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/parks/prince-albert.jpg' },
      { name: 'Grasslands National Park', province: 'Saskatchewan', area: '731 km²', established: '1981', rating: '4.5', seasons: ['Summer', 'Fall'], image: '/parks/grasslands.jpg' },
      { name: 'Riding Mountain', province: 'Manitoba', area: '2,973 km²', established: '1933', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/parks/riding-mountain.jpg' },
      { name: 'Wapusk National Park', province: 'Manitoba', area: '11,475 km²', established: '1996', rating: '4.7', seasons: ['Fall', 'Winter'], image: '/parks/wapusk.jpg' },
      { name: 'Elk Island', province: 'Alberta', area: '194 km²', established: '1906', rating: '4.5', seasons: ['Summer', 'Winter'], image: '/parks/elk-island.jpg' },
    ],
  },
  northernCanada: {
    label: 'Northern Canada',
    parks: [
      { name: 'Kluane National Park', province: 'Yukon', area: '22,013 km²', established: '1972', rating: '4.7', seasons: ['Summer'], image: '/parks/kluane.jpg' },
      { name: 'Ivvavik National Park', province: 'Yukon', area: '10,168 km²', established: '1984', rating: '4.6', seasons: ['Summer'], image: '/parks/ivvavik.jpg' },
      { name: 'Vuntut National Park', province: 'Yukon', area: '4,345 km²', established: '1995', rating: '4.5', seasons: ['Summer'], image: '/parks/vuntut.jpg' },
      { name: 'Nahanni National Park', province: 'Northwest Territories', area: '30,050 km²', established: '1976', rating: '4.8', seasons: ['Summer'], image: '/parks/nahanni.jpg' },
      { name: 'Aulavik National Park', province: 'Northwest Territories', area: '12,274 km²', established: '1992', rating: '4.5', seasons: ['Summer'], image: '/parks/aulavik.jpg' },
      { name: 'Tuktut Nogait', province: 'Northwest Territories', area: '16,340 km²', established: '1996', rating: '4.4', seasons: ['Summer'], image: '/parks/tuktut-nogait.jpg' },
      { name: 'Auyuittuq National Park', province: 'Nunavut', area: '19,089 km²', established: '1976', rating: '4.6', seasons: ['Summer'], image: '/parks/auyuittuq.jpg' },
      { name: 'Sirmilik National Park', province: 'Nunavut', area: '22,200 km²', established: '2001', rating: '4.5', seasons: ['Summer'], image: '/parks/sirmilik.jpg' },
      { name: 'Quttinirpaaq', province: 'Nunavut', area: '37,775 km²', established: '1988', rating: '4.6', seasons: ['Summer'], image: '/parks/quttinirpaaq.jpg' },
      { name: 'Torngat Mountains', province: 'Newfoundland', area: '9,700 km²', established: '2005', rating: '4.7', seasons: ['Summer'], image: '/parks/torngat-mountains.jpg' },
      { name: 'Wood Buffalo National Park', province: 'Northwest Territories', area: '44,807 km²', established: '1922', rating: '4.6', seasons: ['Summer'], image: '/parks/wood-buffalo.jpg' },
      { name: 'Ukkusiksalik National Park', province: 'Nunavut', area: '20,880 km²', established: '2003', rating: '4.4', seasons: ['Summer'], image: '/parks/ukkusiksalik.jpg' },
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
