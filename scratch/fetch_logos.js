const https = require('https');

function fetchLogos(url) {
  https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
    let data = '';
    res.on('data', chunk => data += chunk);
    res.on('end', () => {
      const hrefs = data.match(/href="([^"]*(?:logo|lkpp|indosat)[^"]*\.(?:png|svg|jpg))"/gi) || [];
      const srcs = data.match(/src="([^"]*(?:logo|lkpp|indosat)[^"]*\.(?:png|svg|jpg))"/gi) || [];
      console.log('Results for', url, [...new Set([...hrefs, ...srcs])]);
    });
  }).on('error', e => console.error(url, e));
}

fetchLogos('https://lkpp.go.id/');
fetchLogos('https://ioh.co.id/');
