import React, { Fragment } from 'react';

import MainHeader from './shared-components/Header/MainHeader';
import NewList from './CreateNewList/pages/NewListPage';

function App() {
  return (
    <Fragment>
      <MainHeader />
      <NewList />
    </Fragment>
  );
}

export default App;
