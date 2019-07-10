import React from 'react';
import { Link } from 'react-router-dom';

import Splash from '../components/splash';

const HomeComponent = () => (
  <Splash>
    <h1>
        Welcome to the demo.
    </h1>
    <p>
      This page is purely to demonstrate the usage of React Router.
      Hit the button below to head to the map.
    </p>
    <Link to="/map" className="button">
        Find me a ride
    </Link>
  </Splash>
);

export default HomeComponent;
