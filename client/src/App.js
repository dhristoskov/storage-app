import React, { Fragment } from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import MainHeader from './shared-components/components/Header/MainHeader';
import NewListPage from './CreateNewList/pages/NewListPage';
import StoragePage from './StorageList/page/StoragePage';
import StorageListsPage from './SavedProductLists/pages/SavedListsPage';
import LandingPage from './LandingPage/pages/LandingPage';
import AuthPage from './Auth/pages/AuthPage';
import ResetPassPage from './Auth/pages/ResetPassPage';

function App() {
  return (
    <Fragment>
      <Router>
        <MainHeader />
          <Switch >
            <Route exact path='/' component={LandingPage} />
            <Route path='/auth' component={AuthPage} />
            <Route path='/reset-password' component={ResetPassPage} />
            <Route path='/storage/storage-list/:storageName' component={StorageListsPage} />
            <Route path='/storage/create-list/:storageName' component={NewListPage} />
            <Route path='/storages' component={StoragePage} />
          </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
