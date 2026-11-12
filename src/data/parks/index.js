import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';
import { YOHO } from './yoho.js';
import { ELK_ISLAND } from './elk-island.js';
import { GROS_MORNE } from './gros-morne.js';
import { PACIFIC_RIM } from './pacific-rim.js';
import { KLUANE } from './kluane.js';
import { KOOTENAY } from './kootenay.js';
import { GLACIER } from './glacier.js';
import { GWAII_HAANAS } from './gwaii-haanas.js';
import { MOUNT_REVELSTOKE } from './mount-revelstoke.js';
import { GULF_ISLANDS } from './gulf-islands.js';
import { WATERTON_LAKES } from './waterton-lakes.js';
import { WOOD_BUFFALO } from './wood-buffalo.js';
import { GEORGIAN_BAY_ISLANDS } from './georgian-bay-islands.js';
import { BRUCE_PENINSULA } from './bruce-peninsula.js';
import { THOUSAND_ISLANDS } from './thousand-islands.js';
import { POINT_PELEE } from './point-pelee.js';
import { PUKASKWA } from './pukaskwa.js';
import { FORILLON } from './forillon.js';
import { LA_MAURICIE } from './la-mauricie.js';
import { MINGAN_ARCHIPELAGO } from './mingan-archipelago.js';
import { FUNDY } from './fundy.js';
import { CAPE_BRETON_HIGHLANDS } from './cape-breton-highlands.js';
import { KEJIMKUJIK } from './kejimkujik.js';
import { TERRA_NOVA } from './terra-nova.js';
import { PRINCE_ALBERT } from './prince-albert.js';
import { GRASSLANDS } from './grasslands.js';
import { RIDING_MOUNTAIN } from './riding-mountain.js';
import { KOUCHIBOUGUAC } from './kouchibouguac.js';
import { PRINCE_EDWARD_ISLAND } from './prince-edward-island.js';
import { WAPUSK } from './wapusk.js';
import { IVVAVIK } from './ivvavik.js';
import { VUNTUT } from './vuntut.js';
import { NAHANNI } from './nahanni.js';
import { AULAVIK } from './aulavik.js';
import { TUKTUT_NOGAIT } from './tuktut-nogait.js';
import { AUYUITTUQ } from './auyuittuq.js';
import { SIRMILIK } from './sirmilik.js';
import { QUTTINIRPAAQ } from './quttinirpaaq.js';
import { TORNGAT_MOUNTAINS } from './torngat-mountains.js';
import { NAATSIHCHOH } from './naatsihchoh.js';

const PARKS = {
  banff: BANFF,
  jasper: JASPER,
  yoho: YOHO,
  'elk-island': ELK_ISLAND,
  'gros-morne': GROS_MORNE,
  'pacific-rim': PACIFIC_RIM,
  kluane: KLUANE,
  kootenay: KOOTENAY,
  glacier: GLACIER,
  'gwaii-haanas': GWAII_HAANAS,
  'mount-revelstoke': MOUNT_REVELSTOKE,
  'gulf-islands': GULF_ISLANDS,
  'waterton-lakes': WATERTON_LAKES,
  'wood-buffalo': WOOD_BUFFALO,
  'georgian-bay-islands': GEORGIAN_BAY_ISLANDS,
  'bruce-peninsula': BRUCE_PENINSULA,
  'thousand-islands': THOUSAND_ISLANDS,
  'point-pelee': POINT_PELEE,
  'pukaskwa': PUKASKWA,
  'forillon': FORILLON,
  'la-mauricie': LA_MAURICIE,
  'mingan-archipelago': MINGAN_ARCHIPELAGO,
  'fundy': FUNDY,
  'cape-breton-highlands': CAPE_BRETON_HIGHLANDS,
  'kejimkujik': KEJIMKUJIK,
  'terra-nova': TERRA_NOVA,
  'prince-albert': PRINCE_ALBERT,
  'grasslands': GRASSLANDS,
  'riding-mountain': RIDING_MOUNTAIN,
  'kouchibouguac': KOUCHIBOUGUAC,
  'prince-edward-island': PRINCE_EDWARD_ISLAND,
  'wapusk': WAPUSK,
  'ivvavik': IVVAVIK,
  'vuntut': VUNTUT,
  'nahanni': NAHANNI,
  'aulavik': AULAVIK,
  'tuktut-nogait': TUKTUT_NOGAIT,
  'auyuittuq': AUYUITTUQ,
  'sirmilik': SIRMILIK,
  'quttinirpaaq': QUTTINIRPAAQ,
  'torngat-mountains': TORNGAT_MOUNTAINS,
  'naatsihchoh': NAATSIHCHOH,
};

export function getParkDetail(slug) {
  if (!slug) return null;
  return PARKS[slug.toLowerCase()] ?? null;
}

export default PARKS;
