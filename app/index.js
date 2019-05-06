import _ from 'lodash';
import './index.global.scss';
import axios from 'axios';

const component = () => {
  const element = document.createElement('div');
  // Use CORS anywhere as short term fix for CORS related issues
  var corsAnywhere = 'https://cors-anywhere.herokuapp.com/';
  // Set up standard URL pieces
  var baseUrl = 'http://feature-code-test.skylark-cms.qa.aws.ostmodern.co.uk:8000';
  var seasonUrl = '/api/seasons/seas_e85496eb48df4225b9d9f3fde1010398/';
  // Create blank string for the HTML we are setting
  var returnHtml = '';

  var episodeResults = new Promise(function(resolve,reject) {
    axios({ method: 'get', url: corsAnywhere + baseUrl + seasonUrl })
    .then(function(response) {
      var episodeDetails = new Promise(function(resolve, reject) {
        var promiseList = response.data.items.map(function(episode) {
          return new Promise(function(resolve,reject) {
            axios({ method:'get', url: corsAnywhere + baseUrl + episode })
            .then(function(response) {
              // API Call to Get Image
              var episodeImage = new Promise(function(resolve,reject) {
                axios({ method: 'GET', url: corsAnywhere + baseUrl + response.data.image_urls[0]})
                .then(function(response) {
                  resolve(response.data.url);
                });
              });

              episodeImage.then(function(value) {
                var details = {
                  title: response.data.title,
                  synopsis: response.data.synopsis,
                  image: value
                };
                resolve(details);
              });
            })
          });
        });

        Promise.all(promiseList).then(function(value) {
          resolve(value);
        });
      });

      episodeDetails.then(function(value) {
        console.log(value);
        var returnHtml = '<ul class="ep-list">';
        value.forEach(episode => {
          returnHtml += '<li>';
          returnHtml += `<div class="ep-title">${episode.title}</div>`;
          returnHtml += `<img src="${episode.image}" />`;
          returnHtml += `<div class="ep-synopsis">${episode.synopsis}</div>`;
          returnHtml += '</li>';
        });
        returnHtml += '</ul>';

        element.innerHTML = returnHtml;
      });
    });
  });

  return element;
}

document.body.appendChild(component());
