const getNearestTaxis = ({ count, latitude, longitude }) => {
  // const url = new URL(process.env.ENDPOINT_URL);
  const url = new URL('http://localhost:8080/fixtures.json');

  const params = {
    count,
    latitude,
    longitude,
  };

  url.search = new URLSearchParams(params);

  return fetch(url)
    .then(res => res.json());
};

export {
  // eslint-disable-next-line import/prefer-default-export
  getNearestTaxis,
};
