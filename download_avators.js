var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  var uName = `keawewong`;
  var uToken = `a258d1f5c78475f82f0c64f8512b76d934999991`;
  var url = `https://${uName}:${uToken}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;
  var options = {
    url: url,
    headers: {
      'User-Agent': 'request'
    }
  };

  request(options, (err, res, body) => {
    console.log(`Response Code: ${res.statusCode}`)
    if (err) {
      throw err
    }
    if (res.statusCode !== 200) {
      console.log(`Response Code: res.statusCode`)
      return
    }
    var json = JSON.parse(body);
    cb(json);
  });

}

getRepoContributors('jquery', 'jquery', (results) => {

  results.forEach((result) => {
    console.log(result.avatar_url);
  })

    // console.log(results);
})
