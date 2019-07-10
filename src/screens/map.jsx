import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'rc-slider';
import propTypes from 'prop-types';

import MapComponent from '../components/map';

import { getNearest, setFilter } from '../store/map.redux';
import Panel from '../components/panel';

import 'rc-slider/assets/index.css';

class MapScreen extends Component {
  constructor(props) {
    super(props);
    props.getNearest();
  }

  render() {
    const { count, setFilter: setFilterOnChange, pickupEta } = this.props;

    return (
      <Fragment>
        <MapComponent />
        <Panel>
          <div className="label">Pickup location</div>
          <p>44-46 Southwark Street, London, SE1 1UN</p>
          <div className="label">Pickup ETA</div>
          <p>{ `approx. ${pickupEta} mins`}</p>
          <div className="label">Number of drivers</div>
          <Slider min={1} max={50} onAfterChange={setFilterOnChange} defaultValue={count} />
        </Panel>
      </Fragment>
    );
  }
}

MapScreen.defaultProps = {
  pickupEta: null,
};

MapScreen.propTypes = {
  count: propTypes.number.isRequired,
  getNearest: propTypes.func.isRequired,
  pickupEta: propTypes.number,
  setFilter: propTypes.func.isRequired,
};

const mapStateToProps = state => (state.mapReducer);
const mapDispatchToProps = dispatch => bindActionCreators({ getNearest, setFilter }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(MapScreen);
