import deleteTweetLocalStorage from '../localStorage/deleteTweetLocalStorage.js'

function deleteTweet (e) {
  let tweet
  let id = document.getElementById(e.target.id).getAttribute('data-tweet')
  // console.log(id)
  if (id === null) return
  tweet = document.getElementById('tweetText' + id).innerText
  // console.log(tweet)
  if (e.target.className === 'delete-tweet') {
    e.target.parentElement.parentElement.remove()
    deleteTweetLocalStorage(tweet)
  }
}

export default deleteTweet
