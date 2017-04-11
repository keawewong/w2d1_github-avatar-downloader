var request = require('request')
var fs = require('fs')
var db = require('dotenv')
db.load()

console.log('Welcome to the GitHub Avatar Downloader!')

var repoOwner = process.argv[2]
var repoName = process.argv[3]

getRepoContributors(repoOwner, repoName, (results) => {
  //get the json object
  results.forEach((result) => {
    //loop through each contributor
    var filename = `./images/${result.login}.jpg`
    downloadImageByURL(result.avatar_url, filename)
  })

})


function getRepoContributors(repoOwner, repoName, cb) {
  // verify command line input
  if (!repoOwner || !repoName) {
    console.log(`Please put in the owner and repo name`)
    return
  }
  // assemble the request options
  var uName = process.env.DB_USER
  var uToken = process.env.DB_PASS
  // var uToken = `a258d1f5c78475f82f0c64f8512b76d934999991`
  var url = `https://${uName}:${uToken}@api.github.com/repos/${repoOwner}/${repoName}/contributors`
  var options = {
      url: url,
      headers: {
        'User-Agent': 'request'
      }
    }
    //get the contributors from Github
  request(options, (err, res, body) => {
    if (err) {
      throw err
    }
    if (res.statusCode !== 200) {
      console.log(`Response Code: ${res.statusCode}`)
      return
    }
    var json = JSON.parse(body)
    cb(json)
  })

}

// download each contributor image
function downloadImageByURL(url, filePath) {

  request.get(url)
    .on('err', (err) => {
      throw err
    })
    .on('response', (res) => {
      if (res.statusCode !== 200) {
        console.log(`Response Code: ${res.statusCode}`)
        return
      }
    }).pipe(fs.createWriteStream(filePath))


}
