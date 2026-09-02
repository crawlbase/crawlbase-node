# Crawlbase node

Dependency free module for scraping and crawling websites using [Crawlbase](https://crawlbase.com) API

## Installation

Install using npm

```javascript
npm i crawlbase
```

Require the necessary API class in your project.  
You can get your [Crawlbase free token from here](https://crawlbase.com/signup).

```javascript
const { CrawlingAPI, ScraperAPI, LeadsAPI, ScreenshotsAPI } = require('crawlbase');
```

## Crawling API usage

Initialize with one of your account tokens, either normal or javascript token. Then make get or post requests accordingly.

```javascript
const api = new CrawlingAPI({ token: 'YOUR_TOKEN' });
```

### GET requests

Pass the url that you want to scrape plus any options from the ones available in the [API documentation](https://crawlbase.com/dashboard/docs).

```javascript
api.get(url, options);
```

Example:

```javascript
api.get('https://www.facebook.com/britneyspears').then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

You can pass any options from Crawlbase API.

Example:

```javascript
api.get('https://www.reddit.com/r/pics/comments/5bx4bx/thanks_obama/', {
  userAgent: 'Mozilla/5.0 (Windows NT 6.2; rv:20.0) Gecko/20121202 Firefox/30.0',
  format: 'json'
}).then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

### POST requests

Pass the url that you want to scrape, the data that you want to send which can be either a json or a string, plus any options from the ones available in the [API documentation](https://crawlbase.com/dashboard/docs).

```javascript
api.post(url, data, options);
```

Example:

```javascript
api.post('https://producthunt.com/search', { text: 'example search' }).then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

You can send the data as application/json instead of x-www-form-urlencoded by setting options `postType` as json.

```javascript
api.post('https://httpbin.org/post', { some_json: 'with some value' }, { postType: 'json' }).then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

### PUT requests

Pass the url that you want to scrape, the data that you want to send which can be either a json or a string, plus any options from the ones available in the [API documentation](https://crawlbase.com/dashboard/docs).

```javascript
api.put(url, data, options);
```

Example:

```javascript
api.put('https://producthunt.com/search', { text: 'example search' }).then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

### Javascript requests

If you need to scrape any website built with Javascript like React, Angular, Vue, etc. You just need to pass your javascript token and use the same calls. Note that only `.get` is available for javascript and not `.post`.

```javascript
const api = new CrawlingAPI({ token: 'YOUR_JAVASCRIPT_TOKEN' });
```

```javascript
api.get('https://www.nfl.com').then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

Same way you can pass javascript additional options.

```javascript
api.get('https://www.freelancer.com', { page_wait: 5000 }).then(response => {
  if (response.statusCode === 200) {
    console.log(response.body);
  }
}).catch(error => console.error);
```

### Original status and PC status

You can always get the original status and crawlbase status from the response. Read the [Crawlbase documentation](https://crawlbase.com/dashboard/docs) to learn more about those status.

```javascript
api.get('https://craiglist.com').then(response => {
  console.log(response.originalStatus, response.cbStatus);
}).catch(error => console.error);
```

## Scraper API usage

> ⚠️ **Deprecated.** The standalone Scraper API has been closed to new sign-ups since October 1, 2024. Existing integrations continue to work and no shutdown is scheduled, but new code should use the Crawling API with the `scraper` parameter instead (same scrapers, simpler endpoint, more parameters). The class below stays available for backward compatibility. See the [scrapers documentation](https://crawlbase.com/docs/scrapers).

Initialize the Scraper API and use it in the same way as the Crawling API (see above). Use it with your normal token.

```javascript
const api = new ScraperAPI({ token: 'YOUR_TOKEN' });

api.get('https://www.amazon.com/Halo-SleepSack-Swaddle-Triangle-Neutral/dp/B01LAG1TOS').then(response => {
  if (response.statusCode === 200) {
    console.log(response.json);
  }
}).catch(error => console.error);
```

## Leads API usage

> ⚠️ **Deprecated.** The Leads API has been closed to new sign-ups since October 1, 2024. Existing integrations continue to work and no shutdown is scheduled. There is no direct replacement; for similar workflows use the Crawling API with the [`email-extractor`](https://crawlbase.com/docs/scrapers/email-extractor) scraper (any URL → emails) or the [`google-serp`](https://crawlbase.com/docs/scrapers/google-serp) scraper for domain-scoped contact discovery. The class below stays available for backward compatibility.

Initialize with your Leads API token and call the `getFromDomain` method.

```javascript
const api = new LeadsAPI({ token: 'YOUR_TOKEN' });

api.getFromDomain('somesite.com').then(response => {
  console.log(response.leads);
});
```

## Screenshots API usage

> ⚠️ **Deprecated.** The standalone Screenshots API has been closed to new sign-ups since November 1, 2024. Existing integrations continue to work and no shutdown is scheduled, but new code should use the Crawling API with the `screenshot=true` parameter — same JS-rendering pipeline, screenshot parameters on the standard endpoint. The class below stays available for backward compatibility. See the [Crawling API screenshots section](https://crawlbase.com/docs/crawling-api#screenshots).

Initialize with your Screenshots API token and call the `get` method, then do whatever you need with the binary content. For example save it in a file.

You can pass any of the [available parameters](https://crawlbase.com/docs/screenshots-api/parameters/)

```javascript
const api = new ScreenshotsAPI({ token: 'YOUR_TOKEN' });

api.get('https://www.amazon.com').then(response => {
  fs.writeFileSync('amazon.jpg', response.body, { encoding: 'binary' });
});

// Example with parameters
api.get('https://www.amazon.com', { device: 'mobile' }).then(response => {
  fs.writeFileSync('amazon-mobile.jpg', response.body, { encoding: 'binary' });
});
```

## Smart AI Proxy usage

The [Smart AI Proxy](https://crawlbase.com/docs/smart-proxy) is a standard rotating HTTP(S) proxy endpoint, so it needs no SDK: point any HTTP client at `smartproxy.crawlbase.com:8012` (HTTP) or `smartproxy.crawlbase.com:8013` (HTTPS) with your token as the proxy username and an empty password. Crawlbase handles proxy rotation, retries and anti-bot bypass on its side.

```javascript
const { HttpsProxyAgent } = require('https-proxy-agent');

const agent = new HttpsProxyAgent('https://YOUR_TOKEN:@smartproxy.crawlbase.com:8013', { rejectUnauthorized: false });

fetch('https://httpbin.org/ip', { agent }).then(res => res.text()).then(console.log);
```

Note: the proxy re-signs HTTPS traffic, so certificate verification must be disabled on the client (as in the example). See the [Smart AI Proxy documentation](https://crawlbase.com/docs/smart-proxy) for all options.

If you have questions or need help using the library, please open an issue or [contact us](https://crawlbase.com/contact).

---

Copyright 2026 Crawlbase
