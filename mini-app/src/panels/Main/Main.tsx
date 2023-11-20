import {memo} from 'react';
import {Panel, PanelHeader} from '@vkontakte/vkui';

import WormChurchIcon from '../../assets/icons/worm_church.svg?react';

type Props = {
  id: string;
};

export const Main = memo<Props>(({id}) => {
  return (
    <Panel id={id}>
      <PanelHeader className="title-1">Тест Дхармы</PanelHeader>
      <span className="title-1" style={{color: 'black'}}>
        Тест Дхармы
      </span>
      <WormChurchIcon />
    </Panel>
  );
});

Main.displayName = 'Main';
