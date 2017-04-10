var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}

function getRepoContributors(repoOwner, repoName, cb) {
  var url = `https://api.github.com/repos/${repoOwner}/${repoName}/contributors`;

  request.get(url)
    .on('error', (err) => {
      throw err
    })
    .on('response', (response) => {
      var result = response.statusCode
      if (result !== 200) {
        console.log(`Response Code: ${result}`)
        console.log(`url: ${url}`)
        cb(`Response Code: ${result}`);
        return
      };
    })

}

getRepoContributors('jquery', 'jquery', (result) => {
  console.log(result);
})
