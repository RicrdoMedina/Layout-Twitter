import htmlContetTweet from './htmlContetTweet.js'
import addHtmlTweet from './addHtmlTweet.js'
import addTweetLocalStorage from '../localStorage/addTweetLocalStorage.js'

function addTweet (e) {
  const $tweetBox = document.getElementById('tweetBox')
  const $contentTweet = document.getElementById('contentTweet')
  const text = $tweetBox.textContent
  if (text.length === 0) return
  const newTweet = htmlContetTweet(text, $contentTweet.children.length)
  // console.log($contentTweet.children.length)
  addTweetLocalStorage(text)
  addHtmlTweet('contentTweet', newTweet)
}

export default addTweet
