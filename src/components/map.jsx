import React from 'react';
import GoogleMap from 'google-map-react';
import { connect } from 'react-redux';
import propTypes from 'prop-types';

import Marker from './marker';
import { getFilteredDrivers } from '../store/map.selector';

const renderDrivers = (drivers) => {
  if (!drivers) return null;

  return drivers.map(({ driver_id: driverId, location: { bearing, latitude, longitude } }) => (
    <Marker key={driverId} lat={latitude} lng={longitude} bearing={bearing} />
  ));
};

const MapComponent = (props) => {
  const {
    apiKey, pickupLocation: { latitude, longitude }, defaultZoom, drivers,
  } = props;

  const center = {
    lng: longitude,
    lat: latitude,
  };

  return (
    <div className="map">
      <GoogleMap
        bootstrapURLKeys={{ key: apiKey }}
        center={center}
        defaultZoom={defaultZoom}
      >
        { renderDrivers(drivers) }
      </GoogleMap>
    </div>
  );
};

MapComponent.defaultProps = {
  drivers: [],
};

MapComponent.propTypes = {
  apiKey: propTypes.string.isRequired,
  pickupLocation: propTypes.shape({
    latitude: propTypes.number.isRequired,
    longitude: propTypes.number.isRequired,
  }).isRequired,
  defaultZoom: propTypes.number.isRequired,
  drivers: propTypes.arrayOf(propTypes.shape({
    driver_id: propTypes.string.isRequired,
    location: propTypes.shape({
      latitude: propTypes.number.isRequired,
      longitude: propTypes.number.isRequired,
    }).isRequired,
  })),
};

const mapStateToProps = state => ({
  ...state.mapReducer,
  drivers: getFilteredDrivers(state),
});

export default connect(mapStateToProps)(MapComponent);
