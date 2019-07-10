/* eslint-disable import/prefer-default-export */
import { createSelector } from 'reselect';

const getState = ({ mapReducer }) => mapReducer;

const getFilteredDrivers = createSelector(
  getState, (state) => {
    const { drivers, count } = state;
    return drivers.slice(0, count);
  },
);

export {
  getFilteredDrivers,
};
