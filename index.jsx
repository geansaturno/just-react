import App from './src/App.jsx'
import {createRoot} from 'react-dom/client'
import React from 'react'

const root = createRoot(document.getElementById('app'))

root.render(<App/>)