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
        // validar($tweetBox.textContent);
      }else{
        $tweetBox.classList.remove('hide-placeholder');
      }
    }

    // $tweetBox.onkeydown = function () {
    //   if ($tweetBox.textContent.length > 0) {
    //     validar($tweetBox.textContent);
    //   }
    // }
    
  }else{
    if($tweetBox.getAttribute('contenteditable') && contntTweetBox.length === 0){
      console.log('else')
      $tweetBox.setAttribute('contenteditable', 'false');
      $tweetBox.classList.remove('is-actived');
      $TweetForm.classList.add('condensed');
    }
  }
}

// function validar(str){
//   console.log(str);
//   const max = 5;

//   if(str.length > max) {
//     let countStrMax = max - str.length;
//     let remove = str.slice(countStrMax);
//     console.log(str.slice(remove));

//     $tweetBox.innerHTML = remove;
//   }
// }