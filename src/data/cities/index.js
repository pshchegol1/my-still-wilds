import { VANCOUVER } from './vancouver.js';
import { EDMONTON } from './edmonton.js';
import { CALGARY } from './calgary.js';
import { TORONTO } from './toronto.js';
import { VICTORIA } from './victoria.js';
import { KELOWNA } from './kelowna.js';
import { WHISTLER } from './whistler.js';
import { KAMLOOPS } from './kamloops.js';
import { SURREY } from './surrey.js';
import { ABBOTSFORD } from './abbotsford.js';
import { NANAIMO } from './nanaimo.js';
import { BANFF } from './banff.js';
import { JASPER } from './jasper.js';
import { CANMORE } from './canmore.js';
import { LETHBRIDGE } from './lethbridge.js';
import { RED_DEER } from './red-deer.js';
import { MEDICINE_HAT } from './medicine-hat.js';
import { OTTAWA } from './ottawa.js';
import { NIAGARA_FALLS } from './niagara-falls.js';
import { HAMILTON } from './hamilton.js';
import { KINGSTON } from './kingston.js';
import { LONDON } from './london.js';
import { THUNDER_BAY } from './thunder-bay.js';
import { WINDSOR } from './windsor.js';
import { MONTREAL } from './montreal.js';
import { QUEBEC_CITY } from './quebec-city.js';
import { LAVAL } from './laval.js';
import { GATINEAU } from './gatineau.js';
import { SHERBROOKE } from './sherbrooke.js';
import { SAGUENAY } from './saguenay.js';
import { TROIS_RIVIERES } from './trois-rivieres.js';
import { RIMOUSKI } from './rimouski.js';
import { WINNIPEG } from './winnipeg.js';
import { THOMPSON } from './thompson.js';
import { FLIN_FLON } from './flin-flon.js';
import { DAUPHIN } from './dauphin.js';
import { BRANDON } from './brandon.js';
import { PORTAGE_LA_PRAIRIE } from './portage-la-prairie.js';
import { STEINBACH } from './steinbach.js';
import { CHURCHILL } from './churchill.js';
import { SASKATOON } from './saskatoon.js';

const CITIES = {
  vancouver: VANCOUVER,
  edmonton: EDMONTON,
  calgary: CALGARY,
  toronto: TORONTO,
  victoria: VICTORIA,
  kelowna: KELOWNA,
  whistler: WHISTLER,
  kamloops: KAMLOOPS,
  surrey: SURREY,
  abbotsford: ABBOTSFORD,
  nanaimo: NANAIMO,
  banff: BANFF,
  jasper: JASPER,
  canmore: CANMORE,
  lethbridge: LETHBRIDGE,
  'red-deer': RED_DEER,
  'medicine-hat': MEDICINE_HAT,
  ottawa: OTTAWA,
  'niagara-falls': NIAGARA_FALLS,
  hamilton: HAMILTON,
  kingston: KINGSTON,
  london: LONDON,
  'thunder-bay': THUNDER_BAY,
  windsor: WINDSOR,
  montreal: MONTREAL,
  'quebec-city': QUEBEC_CITY,
  laval: LAVAL,
  gatineau: GATINEAU,
  sherbrooke: SHERBROOKE,
  saguenay: SAGUENAY,
  'trois-rivieres': TROIS_RIVIERES,
  rimouski: RIMOUSKI,
  winnipeg: WINNIPEG,
  thompson: THOMPSON,
  'flin-flon': FLIN_FLON,
  dauphin: DAUPHIN,
  brandon: BRANDON,
  'portage-la-prairie': PORTAGE_LA_PRAIRIE,
  steinbach: STEINBACH,
  churchill: CHURCHILL,
  saskatoon: SASKATOON,
};

export function getCityDetail(slug) {
  if (!slug) return null;
  return CITIES[slug.toLowerCase()] ?? null;
}

export default CITIES;
