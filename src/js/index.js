console.log('hola mundito')
import '../css/style.css'

document.body.addEventListener('click', clicks);

function clicks (e) {
  // e.preventDefault();
  let $TweetForm = document.getElementById('TweetForm');
  let $tweetBox = document.getElementById('tweet-box-home-timeline');
  let contntTweetBox = $tweetBox.textContent;
  // console.log(contntTweetBox + ' ' + contntTweetBox.length);
  if(e.target.id === 'tweet-box-home-timeline') {
    console.log('if')
    $tweetBox.setAttribute('contenteditable', 'true');
    $tweetBox.classList.add('is-actived');
    $TweetForm.classList.remove('condensed');

    $tweetBox.focus();

    $tweetBox.onkeyup = function () {
      if ($tweetBox.textContent.length > 0) {
        $tweetBox.classList.add('hide-placeholder');
      }else{
        $tweetBox.classList.remove('hide-placeholder');
      }
    }
    
  }else{
    if($tweetBox.getAttribute('contenteditable') && contntTweetBox.length === 0){
      console.log('else')
      $tweetBox.setAttribute('contenteditable', 'false');
      $tweetBox.classList.remove('is-actived');
      $TweetForm.classList.add('condensed');
    }
  }
}