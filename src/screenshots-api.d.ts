export = ScreenshotsAPI;
/**
 * A node class that acts as wrapper for Crawlbase Screenshots API.
 *
 * Read Crawlbase Screenshots API documentation https://crawlbase.com/docs/screenshots-api
 *
 * Copyright Crawlbase
 * Licensed under the Apache License 2.0
 */
declare class ScreenshotsAPI extends BaseAPI {
    /**
     * Gets a screenshot from the Crawlbase Screenshots API.
     * @param {string} url URL from the website to take a screenshot.
     * @param {object} options Any additional parameters you would like to send to the API.
     * @returns {Promise}
     */
    get(url: string, options?: object): Promise<any>;
}
import BaseAPI = require("./base-api.js");
