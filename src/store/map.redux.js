import { getNearestTaxis } from '../utils/api';

const actions = {
  SET_DRIVERS: 'MAP/SET_DRIVERS',
  SET_ETA: 'MAP/SET_ETA',
  SET_FILTER: 'MAP/SET_FILTER',
};

const initialState = {
  apiKey: process.env.GOOGLE_API_KEY,
  count: 10,
  pickupEta: null,
  pickupLocation: {
    latitude: 51.5049375,
    longitude: -0.0964509,
  },
  defaultZoom: 13,
  drivers: [],
};

const setDrivers = drivers => ({
  type: actions.SET_DRIVERS,
  drivers,
});

const setEta = pickupEta => ({
  type: actions.SET_ETA,
  pickupEta,
});

const setFilter = count => ({
  type: actions.SET_FILTER,
  count,
});


const getNearest = () => (dispatch, getState) => {
  const {
    mapReducer: {
      count,
      pickupLocation: {
        latitude,
        longitude,
      },
    },
  } = getState();

  return getNearestTaxis({ count, latitude, longitude })
    .then(({ pickup_eta: pickupEta, drivers }) => {
      dispatch(setEta(pickupEta));
      dispatch(setDrivers(drivers));
    });
};

const mapReducer = (state = initialState, action) => {
  const { drivers, count, pickupEta } = action;
  switch (action.type) {
    case actions.SET_DRIVERS:
      return {
        ...state,
        drivers,
      };
    case actions.SET_ETA:
      return {
        ...state,
        pickupEta,
      };
    case actions.SET_FILTER:
      return {
        ...state,
        count,
      };
    default:
      return state;
  }
};

export {
  actions,
  getNearest,
  mapReducer,
  setFilter,
};
