import getTweetLocalStorage from './getTweetLocalStorage.js'

function deleteTweetLocalStorage (tweetDelete) {
  let tweets
  tweets = getTweetLocalStorage()
  tweets.forEach(function (tweet, index) {
    if (tweetDelete === tweet) {
      tweets.splice(index, 1)
    }
  })
  window.localStorage.setItem('tweets', JSON.stringify(tweets))
}

export default deleteTweetLocalStorage
