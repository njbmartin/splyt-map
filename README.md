# splyt-map

Splyt Map shows the location of drivers near to your location. This project is a proof of concept.

## Getting started with development

You will first need to install all the dependencies by simply running `npm i`.

### Environment variables

You will also need to create a `.env` file which is used to keep sensitive data out of the repository.

The `.env` file should include:

- `GOOGLE_API_KEY`
- `ENDPOINT_URL`
- `SENTRY_DSN`

### Running the project in development

To quickly run the project, you can run `npm start` which will spin up `webpack-dev-server` and open directly in your browser.

By default, it should run on port `8080`.

ESlint has also been configured with `airbnb` standards, so you can run `npm run lint` to ensure the code is formatted and following best practice.

### Blockers

The API request is being blocked by Chrome. Even when setting `no-cors` in the request, it's blocked by Chrome [Cross-Origin Read Blocking](https://www.chromestatus.com/feature/5629709824032768).

I considered a few options:

- Creating a proxy to use locally using Node.js
- Wrapping it in GraphQL (there are only a few fields so a little overkill).
- Using AWS API Gateway.

For the sake of the proof of concept and to keep to the brief as much as possible, I decided to save a copy of the json result to use locally.

Note: CORS can be enabled server-side by adding `Access-Control-Allow-Origin`. API Gateway can also be configured as a caching layer.

## Further considerations

- For the sake of the proof of concept, the drivers are only fetched once when the Map component mounts.

- The slider simply filters the number of results, but it could in fact filter by distance (either provided by the API or calculated client-side using `Math.hypot`). For performance, the initial `count` could be set to a lower number, and as the slider increases, it could make make a subsequent request via the API.

## Testing

I have not included tests, but if I did I would use:

- `jest` (Great for unit testing React components, redux actions and reducers, and other functions. Also provides a fantastic `watch` ability, testing live as you make changes)
- `jest-fetch-mock` (Makes mocking `Fetch API` calls easier)
- `jest-puppeteer` (Great for integration testing, especially with API interception. This works great in CircleCI too.)
