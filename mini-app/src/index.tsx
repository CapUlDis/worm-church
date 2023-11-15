import {createRoot} from 'react-dom/client';
import bridge from '@vkontakte/vk-bridge';

import {App} from './App';

import './styles/colors.css';
import './styles/typography.css';
import './styles/colors.css';

const root = createRoot(document.getElementById('root') as HTMLElement);

bridge.send('VKWebAppInit');

root.render(<App />);
