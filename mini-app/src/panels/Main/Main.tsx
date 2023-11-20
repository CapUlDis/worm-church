import {Panel} from '@vkontakte/vkui';
import {memo} from 'react';

import {Header} from './parts/Header';

type Props = {
  id: string;
};

export const Main = memo<Props>(({id}) => {
  return (
    <Panel id={id}>
      <Header />
    </Panel>
  );
});

Main.displayName = 'Main';
