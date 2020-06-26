import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import MainHeader from './shared-components/Header/MainHeader';
import NewList from './CreateNewList/pages/NewListPage';

function App() {
  return (
    <Fragment>
      <Router>
        <MainHeader />
        <Route path='/list' component={NewList} />
      </Router>
    </Fragment>
  );
}

export default App;
