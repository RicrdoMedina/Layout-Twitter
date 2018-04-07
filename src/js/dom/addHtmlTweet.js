function addHtmlTweet (id, htmlTweet) {
  let el = document.getElementById(id)
  if (el.children.length > 0) {
    el.insertAdjacentHTML('beforeend', htmlTweet)
    return
  }
  el.innerHTML = htmlTweet
}

export default addHtmlTweet
