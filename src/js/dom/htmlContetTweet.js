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

export default htmlContetTweet
