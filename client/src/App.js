import React, { Fragment } from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainHeader from './shared-components/Header/MainHeader';
import NewListPage from './CreateNewList/pages/NewListPage';
import StoragePage from './StorageList/page/StoragePage';

function App() {
  return (
    <Fragment>
      <Router>
        <MainHeader />
        <Route path='/list' component={NewListPage} />
        <Route path='/storage' component={StoragePage} />
      </Router>
    </Fragment>
  );
}

export default App;
