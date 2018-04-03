function clicks (e) {
  // e.preventDefault();

  let $TweetForm = document.getElementById('TweetForm')
  let $tweetBox = document.getElementById('tweet-box-home-timeline')
  let contntTweetBox = $tweetBox.textContent
  if (e.target.id === 'tweet-box-home-timeline') {
    $tweetBox.setAttribute('contenteditable', 'true')
    $tweetBox.classList.add('is-actived')
    $TweetForm.classList.remove('condensed')
    $tweetBox.focus()
    $tweetBox.onkeyup = function () {
      if ($tweetBox.textContent.length > 0) {
        $tweetBox.classList.add('hide-placeholder')
      } else {
        $tweetBox.classList.remove('hide-placeholder')
      }
    }
  } else {
    if ($tweetBox.getAttribute('contenteditable') && contntTweetBox.length === 0) {
      $tweetBox.setAttribute('contenteditable', 'false')
      $tweetBox.classList.remove('is-actived')
      $TweetForm.classList.add('condensed')
    }
  }
}

export default clicks
