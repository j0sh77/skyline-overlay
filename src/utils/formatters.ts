import cloneDeep from 'lodash/cloneDeep';
import OverlayAPI, { CombatantData, LimitBreakData } from 'ffxiv-overlay-api';
import { isLimitBreakData } from './type';

/**
 * format number
 */
export function fmtNumber(number: number, decimal = 1) {
  if (typeof number !== 'number') {
    number = Number(number);
  }

  let sign = '';
  if (number < 0) {
    sign = '-';
  }

  number = Math.abs(number);

  let numberString: string;
  switch (true) {
    case number < 1e4:
      numberString = number.toFixed(0);
      break;
    case number < 1e7:
      numberString = `${(number / 1e3).toFixed(decimal)}k`;
      break;
    case number < 1e10:
      numberString = `${(number / 1e6).toFixed(decimal)}m`;
      break;
    default:
      numberString = number.toFixed(decimal);
  }

  return `${sign}${numberString}`;
}

interface PetMergeTempMap {
  [key: string]: {
    player: CombatantData;
    pets: CombatantData[];
  };
}

/**
 * merge pet data into player
 */
export function fmtMergePet(combatant: Array<CombatantData | LimitBreakData> = [], yid = 'YOU') {
  const players = cloneDeep(combatant);
  const map: PetMergeTempMap = {};
  const lbIndexes: number[] = [];

  // init all players (record LimitBreak)
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (isLimitBreakData(player)) {
      lbIndexes.push(i);
      continue;
    }

    if (!/\([^)]+\)/gi.exec(player.name)) {
      if (player.name === 'YOU') {
        map[yid] = { player: player, pets: [] };
      } else {
        map[player.name] = { player: player, pets: [] };
      }
    }
  }

  // init all pets (ignore LimitBreak)
  for (let i = 0; i < players.length; i++) {
    const player = players[i];
    if (isLimitBreakData(player)) {
      continue;
    }

    const owner = /\(([^)]+)\)/gi.exec(player.name);
    if (owner && owner[1]) {
      let name = owner[1];
      name === 'YOU' && (name = yid);
      if (map[name] && map[name].pets) {
        map[name].pets.push(player);
      }
    }
  }

  // merge all players
  const ret: Array<CombatantData | LimitBreakData> = [];
  for (const name of Object.keys(map)) {
    const res = OverlayAPI.mergeCombatant(map[name].player, ...map[name].pets);
    res && ret.push(res);
  }

  // inject lbs
  for (const i of lbIndexes) {
    ret.push(players[i]);
  }
  return ret;
}