import {memo} from 'react';
import {Panel, PanelHeader} from '@vkontakte/vkui';

type Props = {
  id: string;
};

export const Main = memo<Props>(({id}) => {
  return (
    <Panel id={id}>
      <PanelHeader>TEST DHARMA</PanelHeader>
    </Panel>
  );
});

Main.displayName = 'Main';
