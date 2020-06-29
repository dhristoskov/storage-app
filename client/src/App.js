import React, { Fragment } from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainHeader from './shared-components/Header/MainHeader';
import NewListPage from './CreateNewList/pages/NewListPage';
import StoragePage from './StorageList/page/StoragePage';
import StorageListsPage from './StorageList/page/StorageListsPage';

function App() {
  return (
    <Fragment>
      <Router>
        <MainHeader />
        <Switch >
          <Route path='/storage/storage-list/:name' component={StorageListsPage} />
          <Route path='/storage/create-list/:storageName' component={NewListPage} />
          <Route path='/storage' component={StoragePage} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
