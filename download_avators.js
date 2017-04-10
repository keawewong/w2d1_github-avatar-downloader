var request = require('request');

console.log('Welcome to the GitHub Avatar Downloader!');

function getRepoContributors(repoOwner, repoName, cb) {
  // ...
}

function getRepoContributors(repoOwner, repoName, cb) {
  var uName = `keawewong`;
  var uToken = `a459aac5f07d8680c8b493df89bc435f9977ad43`;
  var url = `https://${uName}:${uToken}@api.github.com/repos/${repoOwner}/${repoName}/contributors`;

  request.get(url)
    .on('error', (err) => {
      throw err
    })
    .on('response', (response) => {
      var result = response.statusCode
      // if (result !== 200) {
      // };
        console.log(`Response Code: ${result}`)
        console.log(`url: ${url}`)
        cb(`Response Code: ${result}`);
        return
    })

}

getRepoContributors('jquery', 'jquery', (result) => {
  console.log(result);
})
