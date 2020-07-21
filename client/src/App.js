import React, { Fragment } from 'react';
import './styles/App.css'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import MainHeader from './shared-components/components/Header/MainHeader';
import NewListPage from './CreateNewList/pages/NewListPage';
import StoragePage from './StorageList/page/StoragePage';
import StorageListsPage from './SavedProductLists/pages/SavedListsPage';
import LandingPage from './LandingPage/pages/LandingPage';
import AuthPage from './Auth/pages/AuthPage';
import ResetPassPage from './Auth/pages/ResetPassPage';
import ProductsContextProcider from './shared-components/contexts/ProductsContext/ProductsContext';
import StorageContextProvider from './shared-components/contexts/StorageContext/StorageContext';
import AuthContextProvider from './shared-components/contexts/AuthContext/AuthContext';
import AllSavedLists from './SavedProductLists/pages/AllSavedLists';
import PrivateRoute from './shared-components/components/PrivateRoute/PrivateRoute';
import SingleListItem from './SavedProductLists/components/SingleListItem';
import ResetForm from './Auth/pages/ResetPassForm';

function App() {
  return (
    <Fragment>
      <Router>
        <AuthContextProvider>
          <ProductsContextProcider>
            <StorageContextProvider>
              <MainHeader />
                <Switch >
                  <Route exact path='/' component={LandingPage} />
                  <Route path='/auth' component={AuthPage} />
                  <Route path='/reset' component={ResetPassPage} />
                  <Route path='/reset/:token' component={ResetForm} />
                  <PrivateRoute path='/storage/storage-list/:id' component={StorageListsPage} />
                  <PrivateRoute path='/storage/storage-item/:id' component={SingleListItem} />
                  <PrivateRoute path='/storage/create-list/:id' component={NewListPage} />
                  <PrivateRoute path='/storages' component={StoragePage} />
                  <PrivateRoute path='/all-lists' component={AllSavedLists} />
                  <Redirect to='/'/>
                </Switch>
            </StorageContextProvider>
          </ProductsContextProcider>
        </AuthContextProvider>
      </Router>
    </Fragment>
  );
}

export default App;
