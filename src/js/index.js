import '../css/style.css'
import tweetBox from './tweetBoxClick.js'

const $tweetAction = document.getElementById('tweetAction')

eventListener()

function eventListener () {
  document.body.addEventListener('click', tweetBox)
  document.addEventListener('DOMContentLoaded', getAllTweet)
  $tweetAction.addEventListener('click', addTweet)
}

function addTweet (e) {
  const $tweetBox = document.getElementById('tweetBox')
  const text = $tweetBox.textContent
  if (text.length === 0) return
  const newTweet = htmlContetTweet(text)
  // console.log($contentTweet.children.length)
  addTweetLocalStorage(text)
  addHtmlTweet('contentTweet', newTweet)
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
  tweets.forEach(function (tweet) {
    htmlTweet = htmlContetTweet(tweet)
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

function htmlContetTweet (text) {
  let htmlTweet = `<div class="tweet">
    <div class="content-avatar">
      <a class="profile-card-avatar-link" href="/RicrdoMedina" title="Ricardo Medina">
        <img class="avatar avatar--size48 profile-card-avatar-image" src="https://pbs.twimg.com/profile_images/871900981994418177/LYsSlqtJ_bigger.jpg" alt="">
      </a>
    </div>
    <div class="content-tweet">
      <div class="stream-item-header">
        <a class="link-fullname u-text-decoration-none" href="/la_patilla">
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
        <p class="tweet-text">
          ${text}
        </p>
      </div>
    </div>
  </div>`
  return htmlTweet
}
