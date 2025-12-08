import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import './index.css';

// Polyfill for crypto.randomUUID in environments that don't support it
if (typeof window !== 'undefined') {
  try {
    // Check if crypto exists and if it has randomUUID method
    if (window.crypto && !window.crypto.randomUUID) {
      // Add randomUUID method if crypto exists but randomUUID doesn't
      // We need to be careful not to redefine the entire crypto object
      // @ts-ignore: Suppress TypeScript error for read-only property
      window.crypto.randomUUID = (): `${string}-${string}-${string}-${string}-${string}` => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
          const r = Math.random() * 16 | 0;
          const v = c == 'x' ? r : (r & 0x3 | 0x8);
          return v.toString(16);
        }) as `${string}-${string}-${string}-${string}-${string}`;
      };
    } else if (!window.crypto) {
      // Only define crypto if it doesn't exist at all (older browsers)
      // Define crypto property if it doesn't exist
      Object.defineProperty(window, 'crypto', {
        value: {
          getRandomValues: (array: Uint8Array) => {
            for (let i = 0; i < array.length; i++) {
              array[i] = Math.floor(Math.random() * 256);
            }
            return array;
          },
          randomUUID: (): `${string}-${string}-${string}-${string}-${string}` => {
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
              const r = Math.random() * 16 | 0;
              const v = c == 'x' ? r : (r & 0x3 | 0x8);
              return v.toString(16);
            }) as `${string}-${string}-${string}-${string}-${string}`;
          }
        },
        writable: false,
        configurable: false
      });
    }
  } catch (e) {
    // If we can't define the property, that's okay - the browser likely already has it
    console.debug('Could not polyfill crypto.randomUUID, using native implementation if available');
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);