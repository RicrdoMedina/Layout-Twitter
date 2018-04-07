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

export default getTweetLocalStorage
