import './Combatant.scss';
import { useState } from 'react';
import { observer } from 'mobx-react-lite';
import cn, { Argument } from 'classnames';
import { CombatantData, LimitBreakData } from 'ffxiv-overlay-api';
import CombatantName from './CombatantName';
import CombatantDetail from './CombatantDetail';
import CombatantBottom from './CombatantBottom';
import CombatantContent from './CombatantContent';
import { useStore } from '../hooks';
import { STicker, STickerProps } from '../components';
import { isLimitBreakData, isCombatantData } from '../utils/type';

interface CombatantProps {
  player: CombatantData | LimitBreakData;
  index: number;
}

function Combatant({ player, index }: CombatantProps) {
  // get data
  const { name } = player;
  const gridClass: Argument[] = ['combatant']; // grid classnames
  const { settings } = useStore();
  const { hlYou, bottomDisp, ticker, tickerAlign } = settings;

  // class names related to job
  if (isLimitBreakData(player)) {
    gridClass.push('job-unknown');
  } else {
    gridClass.push({ 'job-self': hlYou && name === 'YOU' }); // highlight
    gridClass.push(`job-${player.job || 'unknown'}`); // job
    gridClass.push(`jobtype-${player.jobType || 'unknown'}`); // jobtype
  }

  // detail controls data
  const needDetail = name !== 'Limit Break';
  const [showDetail, setShowDetail] = useState(false);
  const [lockDetail, setLockDetail] = useState(false);

  // tickers
  let healerPcts: string[] = [];
  let dpsPcts: string[] = [];
  if (isCombatantData(player)) {
    dpsPcts = [player.directCritHitPct, player.critHitPct, player.directHitPct];
    healerPcts = [player.shieldPct, player.healsPct, player.overHealPct];
  }
  const topTickerProps: STickerProps = {
    pcts: ticker.top === 'healer' ? healerPcts : dpsPcts,
    type: ticker.top === 'healer' ? 'healer' : 'dps',
  };
  const bottomTickerProps: STickerProps = {
    pcts: ticker.bottom === 'healer' ? healerPcts : dpsPcts,
    type: ticker.bottom === 'healer' ? 'healer' : 'dps',
  };
  let tickerNum = 2;
  ticker.top === 'none' && tickerNum--;
  ticker.bottom === 'none' && tickerNum--;

  return (
    <div className={cn(...gridClass)}>
      <CombatantName player={player} index={index} />

      {ticker.top && ticker.top !== 'none' && (
        <STicker {...topTickerProps} align={tickerAlign.top} />
      )}

      <CombatantContent
        player={player}
        setShowDetail={setShowDetail}
        lockDetail={lockDetail}
        setLockDetail={setLockDetail}
      />

      {ticker.bottom && ticker.bottom !== 'none' && (
        <STicker {...bottomTickerProps} align={tickerAlign.bottom} />
      )}

      {!needDetail ||
        (!(lockDetail || showDetail) && (
          <CombatantBottom player={player} mode={bottomDisp} />
        ))}

      {needDetail && (lockDetail || showDetail) && (
        <CombatantDetail
          player={player}
          tickerNum={tickerNum}
          locked={lockDetail}
        />
      )}
    </div>
  );
}

export default observer(Combatant);
