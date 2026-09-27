export const PARK_REGIONS = {
  mustVisit: {
    label: 'Must Visit',
    tag: "Canada's Most Iconic Parks",
    parks: [
      { name: 'Banff National Park', province: 'Alberta', area: '6,641 km²', established: '1885', rating: '4.9', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/banff.jpg', slug: 'banff' },
      { name: 'Jasper National Park', province: 'Alberta', area: '10,878 km²', established: '1907', rating: '4.8', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/jasper.jpg', imagePosition: 'top', slug: 'jasper' },
      { name: 'Gros Morne National Park', province: 'Newfoundland', area: '1,805 km²', established: '1973', rating: '4.9', seasons: ['Summer', 'Spring', 'Fall'], image: '/parks/gros-morne.jpg', imagePosition: 'top' },
      { name: 'Pacific Rim National Park', province: 'British Columbia', area: '511 km²', established: '1970', rating: '4.8', seasons: ['Summer', 'Winter'], image: '/bc/parks/pacific-rim.png' },
      { name: 'Kluane National Park', province: 'Yukon', area: '22,013 km²', established: '1972', rating: '4.7', seasons: ['Summer'], image: '/yt/parks/kluane.png' },
      { name: 'Cape Breton Highlands', province: 'Nova Scotia', area: '949 km²', established: '1936', rating: '4.8', seasons: ['Summer', 'Fall'], image: '/ns/parks/cape-breton-highlands.png' },
    ],
  },
  britishColumbia: {
    label: 'British Columbia',
    parks: [
      { name: 'Yoho National Park', province: 'British Columbia', area: '1,313 km²', established: '1886', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/parks/yoho.jpg', slug: 'yoho' },
      { name: 'Kootenay National Park', province: 'British Columbia', area: '1,406 km²', established: '1920', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/bc/parks/Kootenay National Park.png' },
      { name: 'Glacier National Park', province: 'British Columbia', area: '1,349 km²', established: '1886', rating: '4.7', seasons: ['Summer', 'Winter'], image: '/bc/parks/Glacier National Park.png' },
      { name: 'Gwaii Haanas', province: 'British Columbia', area: '1,470 km²', established: '1988', rating: '4.8', seasons: ['Summer'], image: '/bc/parks/Gwaii Haanas.png' },
      { name: 'Mount Revelstoke', province: 'British Columbia', area: '260 km²', established: '1914', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/bc/parks/Mount Revelstoke.png' },
      { name: 'Gulf Islands', province: 'British Columbia', area: '36 km²', established: '2003', rating: '4.5', seasons: ['Summer', 'Spring'], image: '/bc/parks/gulf-islands.png' },
      { name: 'Pacific Rim', province: 'British Columbia', area: '511 km²', established: '1970', rating: '4.8', seasons: ['Summer', 'Winter'], image: '/bc/parks/pacific-rim.png' },
    ],
  },
  alberta: {
    label: 'Alberta',
    parks: [
      { name: 'Banff National Park', province: 'Alberta', area: '6,641 km²', established: '1885', rating: '4.9', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/banff.jpg', slug: 'banff' },
      { name: 'Jasper National Park', province: 'Alberta', area: '10,878 km²', established: '1907', rating: '4.8', seasons: ['Summer', 'Winter', 'Fall'], image: '/parks/jasper.jpg', imagePosition: 'top', slug: 'jasper' },
      { name: 'Waterton Lakes', province: 'Alberta', area: '505 km²', established: '1895', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/ab/parks/waterton-lakes.png' },
      { name: 'Elk Island National Park', province: 'Alberta', area: '194 km²', established: '1906', rating: '4.5', seasons: ['Summer', 'Winter'], image: '/ab/parks/Elk Island National Park.png' },
      { name: 'Wood Buffalo', province: 'Alberta', area: '44,807 km²', established: '1922', rating: '4.6', seasons: ['Summer'], image: '/ab/parks/Wood Buffalo.png' },
    ],
  },
  ontario: {
    label: 'Ontario',
    parks: [
      { name: 'Georgian Bay Islands', province: 'Ontario', area: '14 km²', established: '1929', rating: '4.5', seasons: ['Summer'], image: '/on/parks/georgian-bay-islands.png' },
      { name: 'Bruce Peninsula', province: 'Ontario', area: '156 km²', established: '1987', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/on/parks/bruce-peninsula.png' },
      { name: 'Thousand Islands', province: 'Ontario', area: '24 km²', established: '1904', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/on/parks/thousand-islands.png' },
      { name: 'Point Pelee', province: 'Ontario', area: '15 km²', established: '1918', rating: '4.5', seasons: ['Spring', 'Fall'], image: '/on/parks/Point Pelee.png' },
      { name: 'Pukaskwa National Park', province: 'Ontario', area: '1,878 km²', established: '1978', rating: '4.6', seasons: ['Summer'], image: '/on/parks/Pukaskwa National Park.png' },
      { name: 'St. Lawrence Islands', province: 'Ontario', area: '9 km²', established: '1904', rating: '4.4', seasons: ['Summer', 'Fall'], image: '/on/parks/St. Lawrence Islands.png' },
    ],
  },
  quebec: {
    label: 'Quebec',
    parks: [
      { name: 'Forillon National Park', province: 'Quebec', area: '244 km²', established: '1970', rating: '4.7', seasons: ['Summer', 'Fall'], image: '/qc/parks/forillon.png' },
      { name: 'La Mauricie National Park', province: 'Quebec', area: '536 km²', established: '1970', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/qc/parks/la-mauricie.png' },
      { name: 'Mingan Archipelago', province: 'Quebec', area: '151 km²', established: '1984', rating: '4.7', seasons: ['Summer'], image: '/qc/parks/mingan-archipelago.png' },
    ],
  },
  atlanticCanada: {
    label: 'Atlantic Canada',
    parks: [
      { name: 'Fundy National Park', province: 'New Brunswick', area: '206 km²', established: '1948', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/parks/fundy.jpg' },
      { name: 'Cape Breton Highlands', province: 'Nova Scotia', area: '949 km²', established: '1936', rating: '4.8', seasons: ['Summer', 'Fall'], image: '/ns/parks/cape-breton-highlands.png' },
      { name: 'Kejimkujik National Park', province: 'Nova Scotia', area: '404 km²', established: '1974', rating: '4.6', seasons: ['Summer', 'Fall'], image: '/ns/parks/kejimkujik.png' },
      { name: 'Terra Nova', province: 'Newfoundland', area: '400 km²', established: '1957', rating: '4.5', seasons: ['Summer', 'Fall'], image: '/nl/parks/Terra Nova.png' },
      { name: 'Gros Morne National Park', province: 'Newfoundland', area: '1,805 km²', established: '1973', rating: '4.9', seasons: ['Summer', 'Spring', 'Fall'], image: '/parks/gros-morne.jpg', imagePosition: 'top' },
      { name: 'Kouchibouguac', province: 'New Brunswick', area: '238 km²', established: '1969', rating: '4.5', seasons: ['Summer'], image: '/nb/parks/kouchibouguac.png' },
      { name: 'Prince Edward Island National Park', province: 'Prince Edward Island', area: '27 km²', established: '1937', rating: '4.6', seasons: ['Summer'], image: '/pe/parks/pei-national-park.png' },
    ],
  },
  prairieProvinces: {
    label: 'Prairie Provinces',
    parks: [
      { name: 'Prince Albert National Park', province: 'Saskatchewan', area: '3,875 km²', established: '1927', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/sk/parks/prince-albert.png' },
      { name: 'Grasslands National Park', province: 'Saskatchewan', area: '731 km²', established: '1981', rating: '4.5', seasons: ['Summer', 'Fall'], image: '/sk/parks/grasslands.png' },
      { name: 'Riding Mountain', province: 'Manitoba', area: '2,973 km²', established: '1933', rating: '4.6', seasons: ['Summer', 'Winter'], image: '/mb/parks/riding-mountain.png' },
      { name: 'Wapusk National Park', province: 'Manitoba', area: '11,475 km²', established: '1996', rating: '4.7', seasons: ['Fall', 'Winter'], image: '/mb/parks/wapusk.png' },
      { name: 'Elk Island', province: 'Alberta', area: '194 km²', established: '1906', rating: '4.5', seasons: ['Summer', 'Winter'], image: '/ab/parks/Elk Island National Park.png' },
    ],
  },
  northernCanada: {
    label: 'Northern Canada',
    parks: [
      { name: 'Kluane National Park', province: 'Yukon', area: '22,013 km²', established: '1972', rating: '4.7', seasons: ['Summer'], image: '/yt/parks/kluane.png' },
      { name: 'Ivvavik National Park', province: 'Yukon', area: '10,168 km²', established: '1984', rating: '4.6', seasons: ['Summer'], image: '/yt/parks/ivvavik.png' },
      { name: 'Vuntut National Park', province: 'Yukon', area: '4,345 km²', established: '1995', rating: '4.5', seasons: ['Summer'], image: '/yt/parks/vuntut.png' },
      { name: 'Nahanni National Park', province: 'Northwest Territories', area: '30,050 km²', established: '1976', rating: '4.8', seasons: ['Summer'], image: '/nt/parks/naianni.png' },
      { name: 'Aulavik National Park', province: 'Northwest Territories', area: '12,274 km²', established: '1992', rating: '4.5', seasons: ['Summer'], image: '/nt/parks/Aulavik National Park.png' },
      { name: 'Tuktut Nogait', province: 'Northwest Territories', area: '16,340 km²', established: '1996', rating: '4.4', seasons: ['Summer'], image: '/nt/parks/tuktut-nogait.png' },
      { name: 'Auyuittuq National Park', province: 'Nunavut', area: '19,089 km²', established: '1976', rating: '4.6', seasons: ['Summer'], image: '/nu/parks/auyuittuq.png' },
      { name: 'Sirmilik National Park', province: 'Nunavut', area: '22,200 km²', established: '2001', rating: '4.5', seasons: ['Summer'], image: '/nu/parks/sirmilik.png' },
      { name: 'Quttinirpaaq', province: 'Nunavut', area: '37,775 km²', established: '1988', rating: '4.6', seasons: ['Summer'], image: '/nu/parks/quttirpaaq.png' },
      { name: 'Torngat Mountains', province: 'Newfoundland', area: '9,700 km²', established: '2005', rating: '4.7', seasons: ['Summer'], image: '/nl/parks/torngat-mountains.png' },
      { name: 'Wood Buffalo National Park', province: 'Northwest Territories', area: '44,807 km²', established: '1922', rating: '4.6', seasons: ['Summer'], image: '/nt/parks/wood-buffalo.png' },
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
