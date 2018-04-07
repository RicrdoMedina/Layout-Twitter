import getTweetLocalStorage from './getTweetLocalStorage.js'
import htmlContetTweet from '../dom/htmlContetTweet.js'
import addHtmlTweet from '../dom/addHtmlTweet.js'

function getAllTweet () {
  let tweets
  let htmlTweet
  tweets = getTweetLocalStorage()
  tweets.forEach(function (tweet, index) {
    htmlTweet = htmlContetTweet(tweet, index)
    addHtmlTweet('contentTweet', htmlTweet)
  })
}

export default getAllTweet
