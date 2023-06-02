export = ScraperAPI;
/**
 * A node class that acts as wrapper for Crawlbase Scraper API.
 *
 * Read Crawlbase Scraper API documentation https://crawlbase.com/docs/scraper-api
 *
 * Copyright Crawlbase
 * Licensed under the Apache License 2.0
 */
declare class ScraperAPI extends CrawlingAPI {
    /**
     * POST is not allowed.
     * @throws {Error}
     */
    post(): void;
    /**
     * PUT is not allowed.
     * @throws {Error}
     */
    put(): void;
}
import CrawlingAPI = require("./crawling-api.js");
