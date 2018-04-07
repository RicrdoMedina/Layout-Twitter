import getTweetLocalStorage from './getTweetLocalStorage.js'

function addTweetLocalStorage (tweet) {
  let tweets
  tweets = getTweetLocalStorage()
  // Agregar nuevo tweet
  tweets.push(tweet)
  // Convertir de string a arreglo para local storage
  window.localStorage.setItem('tweets', JSON.stringify(tweets))
}

export default addTweetLocalStorage
