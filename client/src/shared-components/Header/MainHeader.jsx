import React from 'react';

import Navigation from './Navigation';

const MainHeader = () => {

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <p>Logo</p>
            <Navigation />
        </div>
    )
}

export default MainHeader;