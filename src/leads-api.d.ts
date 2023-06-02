export = LeadsAPI;
/**
 * A node class that acts as wrapper for Crawlbase Leads API.
 *
 * Read Crawlbase Leads API documentation https://crawlbase.com/docs/leads-api
 *
 * Copyright Crawlbase
 * Licensed under the Apache License 2.0
 */
declare class LeadsAPI extends BaseAPI {
    /**
     * Get leads from a specific domain.
     * @param {string} domain The domain to find leads from.
     * @param {object} [options={}] Additional parameters to pass to the API.
     * @returns {Promise}
     */
    getFromDomain(domain: string, options?: object): Promise<any>;
}
import BaseAPI = require("./base-api.js");
