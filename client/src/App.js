import React, { Fragment } from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainHeader from './shared-components/Header/MainHeader';
import NewListPage from './CreateNewList/pages/NewListPage';
import StoragePage from './StorageList/page/StoragePage';
import StorageListsPage from './StorageList/page/StorageListsPage';

function App() {
  return (
    <Fragment>
      <Router>
        <MainHeader />
        <Route path='/storage' component={StoragePage} />
        <Route path='/storage-list/:name' component={StorageListsPage} />
        <Route path='/create-list/:storageName' component={NewListPage} />
      </Router>
    </Fragment>
  );
}

export default App;
