import React, { useCallback } from 'react';
import { CombatantData, LimitBreakData } from 'ffxiv-overlay-api';
import { observer } from 'mobx-react-lite';
import cloneDeep from 'lodash/cloneDeep';
import './Combatant.scss';
import CombatantGrid from './CombatantGrid';
import useStore from '../hooks/useStore';
import { fmtMergePet } from '../utils/formatters';

function Combatant() {
  // get data from store
  const {
    api: { combatant, lb },
    settings: { sortRule, playerLimit, showLB, petMergeID, toggleMinimalMode },
  } = useStore();
  let players: Array<CombatantData | LimitBreakData> = cloneDeep(combatant);

  // merge pet if enabled
  if (petMergeID) {
    players = fmtMergePet(players, petMergeID);
  }

  // sort combatant
  players.sort((a, b) => sortRule * (a.dps - b.dps));

  // limit combatants
  const temp = players;
  players = [];
  for (let i = 0; i < playerLimit; i++) {
    temp[i] && temp[i].name && players.push(temp[i]);
  }

  // add lb if enabled
  if (showLB && lb && lb.name === 'Limit Break') {
    players.push(cloneDeep(lb));
  }

  const handleSwitchMinimalMode = useCallback(
    (e) => {
      e.preventDefault();
      toggleMinimalMode();
    },
    [toggleMinimalMode]
  );

  return (
    <>
      {Boolean(combatant) && combatant.length > 0 && (
        <div className='combatant' onContextMenu={handleSwitchMinimalMode}>
          {players.map((player, index) => (
            <CombatantGrid player={player} index={index} key={player.name} />
          ))}
        </div>
      )}
    </>
  );
}

export default observer(Combatant);
