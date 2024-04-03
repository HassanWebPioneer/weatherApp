import React from 'react';
import {Navigation} from './src/navigation/Navigation';

if (__DEV__) {
  import('./ReactotronConfig').then(() => console.log('Reactotron Configured'));
}

export default function App() {
  return <Navigation />;
}
