import tweetBox from '../dom/tweetBoxClick.js'
import addTweet from '../dom/addTweet.js'
import deleteTweet from '../dom/deleteTweet.js'
import getAllTweet from '../localStorage/getAllTweet.js'

function eventListener () {
  const $tweetAction = document.getElementById('tweetAction')
  const $contentTweet = document.getElementById('contentTweet')

  document.body.addEventListener('click', tweetBox)
  document.addEventListener('DOMContentLoaded', getAllTweet)
  $tweetAction.addEventListener('click', addTweet)
  $contentTweet.addEventListener('click', deleteTweet)
}

export default eventListener
