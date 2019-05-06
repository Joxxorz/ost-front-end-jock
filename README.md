# Ostmodern Frontend Code Test

The goal of this exercise is to show how well you know Javascript, testing your ability to work without a framework in a project as well as how well you can consume data from an API. 

The idea is to create a site which displays a list of episodes from Season 1 of the *Webflix* Original show, *Mick and Georgy*. The data is available to consume from the Skylark API. Skylark is our video platform that provides the ability to curate and ingest content. 

You are welcome to customize the boilerplate by installing any dependencies you need. We are primarily interested in how you structure your project and communicate with the API.

### Getting Started

The boilerplate works with [npm](https://docs.npmjs.com/). [Webpack](https://webpack.js.org/) is set up with a dev server. Also configured is a test suite using [Jest](https://facebook.github.io/jest/) and [Enzyme](https://github.com/airbnb/enzyme) for you to unit test your code.

- Get the boilerplate from this repo `https://github.com/ostmodern/ost-front-end-code-test` and copy the files into your newly created version controlled repo (preferably GitHub).
- The following commands can be used to get the site running:

```shell
# For the dev server
# You will be able to access the site on http://localhost:8400
npm run serve

# For unit testing
npm run test

# For unit testing with coverage
npm run coverage
```

### Your Task

- Create a page that lists Season one of *Mick and Georgy*, using the following URL to get the data, including images, episode data items and information about the season:

  http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000/api/seasons/seas_e85496eb48df4225b9d9f3fde1010398/

### Nice to haves

- If your solution is responsive
- If your solution handles API errors (like timeouts or 500s)
- Unit testing

### Submission 

Save your code as a Github repo and provide a link. Though the boilerplate is supplied, please still write a document on how to get your project running.
