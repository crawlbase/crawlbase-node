const BaseAPI = require('./base-api.js');

/**
 * A node class that acts as wrapper for Crawlbase Screenshots API.
 *
 * Read Crawlbase Screenshots API documentation https://crawlbase.com/docs/screenshots-api
 *
 * Copyright Crawlbase
 * Licensed under the Apache License 2.0
 */
class ScreenshotsAPI extends BaseAPI {
  /**
   * Returns the base path to use on the API calls. This is used internally in the class.
   * @type string
   * @private
   */
  get basePath() {
    return 'screenshots';
  }

  /**
   * The encoding use to decode the API responses. This is used internally in the class.
   * @type string
   * @default utf8
   * @private
   */
  get responseEncoding() {
    return 'binary';
  }

  /**
   * Gets a screenshot from the Crawlbase Screenshots API.
   * @param {string} url URL from the website to take a screenshot.
   * @param {object} options Any additional parameters you would like to send to the API.
   * @returns {Promise}
   */
  get(url, options = {}) {
    options.url = url;
    return this.request(this.basePath, options);
  }
}

module.exports = ScreenshotsAPI;
