import React from 'react';
import { Provider } from 'react-redux'
import { BrowserRouter as Router} from 'react-router-dom'

import store from './redux/store'

import Header from './Component/Header'
import AppRoutes from './Routes'



function App() {
  return (
    
    <Provider store={store}>
      <Router>
         <Header/>
         <AppRoutes/>
      </Router>
    </Provider>
    
  );
}

export default App;
