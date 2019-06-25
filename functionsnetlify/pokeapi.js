import fetch from "node-fetch";

const API_ENDPOINT = "https://pokeapi.co/api/v2";

exports.handler = function(event, context, callback) {
  return fetch(API_ENDPOINT, { headers: { 'Accept': 'application/json'} })
    .then(response => response.json())
    .then(data => ({
      statusCode: 200,
      body: data
    }))
    .catch(error => ({ statusCode: 422, body: String(error)}));
}