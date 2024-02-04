import {Panel} from '@vkontakte/vkui';
import {memo} from 'react';

type Props = {
  id: string;
};

export const Loader = memo<Props>(({id}) => {
  return <Panel id={id} />;
});

Loader.displayName = 'Loader';
