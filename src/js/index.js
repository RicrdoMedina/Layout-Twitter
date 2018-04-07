import '../css/style.css'
import tweetBox from './tweetBoxClick.js'

const $tweetAction = document.getElementById('tweetAction')
const $contentTweet = document.getElementById('contentTweet')

eventListener()

function eventListener () {
  document.body.addEventListener('click', tweetBox)
  document.addEventListener('DOMContentLoaded', getAllTweet)
  $tweetAction.addEventListener('click', addTweet)
  $contentTweet.addEventListener('click', deleteTweet)
}

function addTweet (e) {
  const $tweetBox = document.getElementById('tweetBox')
  const text = $tweetBox.textContent
  if (text.length === 0) return
  const newTweet = htmlContetTweet(text, $contentTweet.children.length)
  // console.log($contentTweet.children.length)
  addTweetLocalStorage(text)
  addHtmlTweet('contentTweet', newTweet)
  $tweetBox.textContent = ''
}

function deleteTweet (e) {
  let id = document.getElementById(e.target.id).getAttribute('data-tweet')
  console.log(id)
  let tweet = document.getElementById('tweetText' + id).innerText
  console.log(tweet)
  if (e.target.className === 'delete-tweet') {
    e.target.parentElement.parentElement.remove()
    deleteTweetLocalStorage(tweet)
  }
}

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

function addTweetLocalStorage (tweet) {
  let tweets
  tweets = getTweetLocalStorage()
  // Agregar nuevo tweet
  tweets.push(tweet)
  // Convertir de string a arreglo para local storage
  window.localStorage.setItem('tweets', JSON.stringify(tweets))
}

function getTweetLocalStorage () {
  let tweets
  // Verificar tweet en localstorage
  if (window.localStorage.getItem('tweets') === null) {
    tweets = []
  } else {
    // Leer string como json y convertir a un array
    tweets = JSON.parse(window.localStorage.getItem('tweets'))
  }
  return tweets
}

function getAllTweet () {
  let tweets
  let htmlTweet
  tweets = getTweetLocalStorage()
  tweets.forEach(function (tweet, index) {
    htmlTweet = htmlContetTweet(tweet, index)
    addHtmlTweet('contentTweet', htmlTweet)
  })
}

function addHtmlTweet (id, htmlTweet) {
  let el = document.getElementById(id)
  if (el.children.length > 0) {
    el.insertAdjacentHTML('beforeend', htmlTweet)
    return
  }
  el.innerHTML = htmlTweet
}

function htmlContetTweet (text, id) {
  let htmlTweet = `<div class="tweet">
    <div class="content-avatar">
      <a class="profile-card-avatar-link" href="/RicrdoMedina" title="Ricardo Medina">
        <img class="avatar avatar--size48 profile-card-avatar-image" src="https://pbs.twimg.com/profile_images/871900981994418177/LYsSlqtJ_bigger.jpg" alt="">
      </a>
    </div>
    <div class="content-tweet">
      <div class="stream-item-header">
        <a class="link-fullname u-text-decoration-none" href="">
          <span class="FullNameGroup">
            <strong class="u-fullname">
              Ricardo Medina
            </strong>
          </span>
          <span class="u-username u-dir">
            @
            <b class="u-font-weight-normal">RicrdoMedina</b>
          </span>
        </a>
        <small class="time" style="display:none">
          Hace 30 minutos
        </small>
      </div>
      <div class="tweet-text-container">
        <p id="tweetText${id}" class="tweet-text">
          ${text}
        </p>
      </div>
      <div id="deleteTweet${id}" title="Delete tweet" class="delete-tweet" data-tweet="${id}">X</div>
    </div>
  </div>`
  return htmlTweet
}
