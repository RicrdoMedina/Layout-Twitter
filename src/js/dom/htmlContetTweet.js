
import createElementImg from './createElementImg.js'
import nodeToString from './nodeToString.js'
import avatar from '../../images/avatar.jpg'

function htmlContetTweet (text, id) {
  const img = createElementImg('', 'avatar avatar--size48 profile-card-avatar-image', avatar, 'Ricardo Medina')
  const str = nodeToString(img)
  let htmlTweet = `<div class="tweet">
    <div class="content-avatar">
      <a class="profile-card-avatar-link" href="/RicrdoMedina" title="Ricardo Medina">
        ${str}
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
