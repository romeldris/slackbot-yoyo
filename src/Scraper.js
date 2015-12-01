import fs from 'fs'
import request from 'request'
import cheerio from 'cheerio'

export default class Scraper {
  scrape() {
    var tricks = [];
    request('http://yoyotricks.com/tag/first-50/', (error, response, html) => {
      if (!error) {
       var $ = cheerio.load(html);
        $('.trickCategoryLI').each((index, value) => {
          var trick = _buildTrickfromHtml($(value));
          tricks.push(trick);
        });

        fs.writeFile('tricks.json', JSON.stringify(tricks), function (err) {
          if (err) {
            throw err;
          }
        })
      }
    });
  }
}

function _buildTrickfromHtml(trickHtml) {
  var trick = {
    name: trickHtml.find('h1 a').text().replace(" YoYo Trick", ''),
    url: trickHtml.find('h1 a').attr('href')
  };
  return trick;
}
