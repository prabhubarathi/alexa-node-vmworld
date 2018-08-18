/* eslint-disable  func-names */
/* eslint-disable  no-console */

const Alexa = require('ask-sdk');
const https = require(`https`);

const GetNewFactHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'LaunchRequest'
      || (request.type === 'IntentRequest'
        && request.intent.name === 'insightsIntent');
  },
  handle(handlerInput) {
    const factArr = data;
    const factIndex = Math.floor(Math.random() * factArr.length);
    const randomFact = factArr[factIndex];
    // const speechOutput = GET_FACT_MESSAGE + randomFact;
    const auth_token = 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ2bXdhcmUuY29tOjRlYTE0N2ExLWVkNWQtNGE1OC05MjBlLThhNDMyZmFhMTA4YSIsImF6cCI6ImNzcF9wcmRfZ2F6X2ludGVybmFsX2NsaWVudF9pZCIsImRvbWFpbiI6InZtd2FyZS5jb20iLCJjb250ZXh0IjoiZjZjZmY1MjgtMTNjMC00ODBlLTgzOTctMDQ0NDk5ZjU2ZDI4IiwiaXNzIjoiaHR0cHM6Ly9nYXouY3NwLXZpZG0tcHJvZC5jb20iLCJwZXJtcyI6WyJleHRlcm5hbC9aRjh1YU5yY3dtdmtSX1l6Q2hQSmpOZ3dLTjhfL25zeDpjbG91ZF9zZXJ2aWNlX2FkbWluIiwiZXh0ZXJuYWwvWkY4dWFOcmN3bXZrUl9ZekNoUEpqTmd3S044Xy9uc3g6Y2xvdWRfc2VydmljZV9hdWRpdG9yIiwiZXh0ZXJuYWwvbzNlY2JzQXZqcHc2bG1MM2FsaUpYMjl6VmhFXy92a2U6c2VydmljZS11c2VyIiwiZXh0ZXJuYWwvN2NKMm5nU19oUkNZX2JJYld1Y000S1dRd09vXy9sb2ctaW50ZWxsaWdlbmNlOnVzZXIiLCJleHRlcm5hbC9Zdy1IeUJlUXpqQ1hrTDJ3UVNlR3dhdUotbUFfL2NhdGFsb2c6dXNlciIsImNzcDpvcmdfbWVtYmVyIiwiZXh0ZXJuYWwvWnk5MjRtRTNkd24yQVN5VlpSME5uN2x1cGVBXy9hdXRvbWF0aW9uc2VydmljZTp1c2VyIiwiZXh0ZXJuYWwvOXFqb05hZkRwOVhreXlRTGNMQ0tXUHNBaXIwXy92cm5pOmFkbWluIiwiZXh0ZXJuYWwvN2NKMm5nU19oUkNZX2JJYld1Y000S1dRd09vXy9sb2ctaW50ZWxsaWdlbmNlOmFkbWluIiwiZXh0ZXJuYWwvdWx2cXRONDE0MWJlQ1Qyb09uYmotd2xrekdnXy9Db2RlU3RyZWFtOmRldmVsb3BlciIsImV4dGVybmFsL1NvQ0QzMjZkWS10R0JzTGFKZjRBSEVzbmFXMF8vZGlzY292ZXJ5OnVzZXIiLCJleHRlcm5hbC9sR29ucl9sbkJIeXdxS1BuMzJROFVmMjJuallfL2Rpc2NvdmVyeTp1c2VyIl0sImNvbnRleHRfbmFtZSI6ImJmZDdhNzUxLWIyZjUtNDNhMy1iMmIzLTBjODJkNjg5NmFlZSIsImV4cCI6MTUzNDQ1OTg2NywiaWF0IjoxNTM0NDU4MDY3LCJqdGkiOiI5Yjk4MjBlZi00N2E3LTQ1YzMtYWIxYS03ZDVmZGFiZWU3NmIiLCJ1c2VybmFtZSI6InBiYXJhdGhpIn0.TySp8t2zRgj7CSfCO3VNNd3iUKEkjh9_phXLYjSeF662DOm3iyuRou6ar-DNcp3HOGThRW-_89APsKiXJyGw48lPJcCLiLRJzUNtJAJYDfvGQ4HzxOXI3H5eIV2Vf3DQ_FRNSTJlfTR3YAOCj92HIU6lon1iA6-jLamlUPnyufimL-jQz2dhFhsxtID72EJF3Dc1oyJdeXEquBNikl5I-f4FoviARPDKKGwmvxOFeNHKEIY_aVPi6al1fJoyM6dLtXiwNwyOZTe22mrNCrcO0JdThAbqatnXwFxe8GfrZIknh43_wXpb6-TZKZuL8BR515iQdsV7wuOEHWc2XZFOkw'

    var options = {
        host: `www.mgmt.cloud.vmware.com`,
        method: `GET`,
        port: 443,
        path: `/ni/api/ni/groups/applications`,
        headers: {
          'User-Agent': 'request',
          'csp-auth-token': auth_token
        }
      };      
      async function buildResponse(options){
        console.log(`\t~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`\t build response`);
        console.log(`\t~~~~~~~~~~~~~~~~~~~~~~~`);
        let response = await httpRequestPromise(options);
        console.log(`\t\t~~~~~~~~~~~~~~~~~~~~~~~`);
        console.log(`\t\t`+JSON.stringify(response));
        console.log(`\t\t~~~~~~~~~~~~~~~~~~~~~~~`);
        const json = JSON.parse(response)
        const speechOutput = "The total count is " + json.total_count;
        return handlerInput.responseBuilder
        .speak(speechOutput)
        .getResponse();
    }
    return buildResponse(options);
  },
};

const HelpHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && request.intent.name === 'AMAZON.HelpIntent';
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(HELP_MESSAGE)
      .reprompt(HELP_REPROMPT)
      .getResponse();
  },
};

function generateSpeech(){

}

const ExitHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'IntentRequest'
      && (request.intent.name === 'AMAZON.CancelIntent'
        || request.intent.name === 'AMAZON.StopIntent');
  },
  handle(handlerInput) {
    return handlerInput.responseBuilder
      .speak(STOP_MESSAGE)
      .getResponse();
  },
};

const SessionEndedRequestHandler = {
  canHandle(handlerInput) {
    const request = handlerInput.requestEnvelope.request;
    return request.type === 'SessionEndedRequest';
  },
  handle(handlerInput) {
    console.log(`Session ended with reason: ${handlerInput.requestEnvelope.request.reason}`);

    return handlerInput.responseBuilder.getResponse();
  },
};

const ErrorHandler = {
  canHandle() {
    return true;
  },
  handle(handlerInput, error) {
    console.log(`Error handled: ${error.message}`);

    return handlerInput.responseBuilder
      .speak('Sorry, an error occurred.')
      .reprompt('Sorry, an error occurred.')
      .getResponse();
  },
};

const SKILL_NAME = 'Space Facts';
const GET_FACT_MESSAGE = 'Here\'s your fact: ';
const HELP_MESSAGE = 'You can say tell me a space fact, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const STOP_MESSAGE = 'Goodbye!';

const data = [
  'A year on Mercury is just 88 days long.',
  'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
  'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
  'On Mars, the Sun appears about half the size as it does on Earth.',
  'Earth is the only planet not named after a god.',
  'Jupiter has the shortest day of all the planets.',
  'The Milky Way galaxy will collide with the Andromeda Galaxy in about 5 billion years.',
  'The Sun contains 99.86% of the mass in the Solar System.',
  'The Sun is an almost perfect sphere.',
  'A total solar eclipse can happen once every 1 to 2 years. This makes them a rare event.',
  'Saturn radiates two and a half times more energy into space than it receives from the sun.',
  'The temperature inside the Sun can reach 15 million degrees Celsius.',
  'The Moon is moving approximately 3.8 cm away from our planet every year.',
];

const skillBuilder = Alexa.SkillBuilders.standard();

exports.handler = skillBuilder
  .addRequestHandlers(
    GetNewFactHandler,
    HelpHandler,
    ExitHandler,
    SessionEndedRequestHandler
  )
  // .addErrorHandlers(ErrorHandler)
  .lambda();
  
  //Here be dragons--------------------------------
  
async function httpRequestPromise(options) {
  // return new pending promise
  console.log(`~~~~~~~~~~~~~~~httpsRequestPromise~~~~~~~~~~~~~`);
  console.log(`~~~~~~~~~~~~~~~${JSON.stringify(options)}~~~~~~~~~~~~~`);
  return new Promise((resolve, reject) => {
    const request = https.request(options, (response) => {
      // handle http errors
      if (response.statusCode < 200 || response.statusCode > 299) {
        reject(new Error('Failed to load page, status code: ' + response.statusCode));
      }
      // temporary data holder
      const body = [];
      // on every content chunk, push it to the data array
      response.on('data', (chunk) => body.push(chunk));
      // we are done, resolve promise with those joined chunks
      response.on('end', () => resolve(body.join('')));
    });
    // handle connection errors of the request
    request.on('error', (err) => reject(err));
    request.end();
  });
}