import { createRoot } from 'react-dom/client'
import bridge from '@vkontakte/vk-bridge'

import App from './App'

const root = createRoot(document.getElementById('root') as HTMLElement)

// Init VK  Mini App
bridge.send('VKWebAppInit')

root.render(<App />)
