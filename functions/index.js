/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

const {onRequest} = require("firebase-functions/v1/https");
const logger = require("firebase-functions/logger");

exports.throwsError = onRequest((request, response) => {
  const innerError = new Error("Inner error");
  const outerError = new Error("Outer error", { cause: innerError });
  throw outerError;
});

exports.logsError = onRequest((request, response) => {
  const innerError = new Error("Inner error");
  const outerError = new Error("Outer error", { cause: innerError });
  logger.error(outerError);
});

// Create and deploy your first functions
// https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
