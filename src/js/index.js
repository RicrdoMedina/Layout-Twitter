import '../css/style.css'
import eventListener from './eventListener/eventListener.js'
import createElementImg from './dom/createElementImg.js'
import avatar from '../images/avatar.jpg'
import gif from '../images/gif.png'
import charts from '../images/charts.png'
import ubication from '../images/ubication.png'
import avatarExample from '../images/bigger.jpg'

// Avatar en el Topbar
const avatarTopbar = createElementImg('', 'avatar avatar--size32', avatar, 'Ricardo Medina')
document.getElementById('contentTopbarAvatar').append(avatarTopbar)

// Avatar en el Dashboard
const avatarDashboard = createElementImg('', 'avatar avatar--size72 profile-card-avatar-image', avatar, 'Ricardo Medina')
document.getElementById('contentDashboardAvatar').append(avatarDashboard)

// Avatar en agregar tweet
const avatarTweetBox = createElementImg('homeTweetBoxAvatar', 'area-tweet-box top-timeline-tweet-box-user-image avatar avatar--size32', avatar, 'Ricardo Medina')
document.getElementById('contentTweetBoxAvatar').append(avatarTweetBox)

// Icon options para twittear
const iconGif = createElementImg('iconGif', 'area-tweet-box img-icon', gif, 'Gif animado')
document.getElementById('homeTweetBoxGif').append(iconGif)

const iconCharts = createElementImg('iconCharts', 'area-tweet-box img-icon', charts, 'Charts')
document.getElementById('homeTweetBoxCharts').append(iconCharts)

const iconUbication = createElementImg('iconUbication', 'area-tweet-box img-icon', ubication, 'Ubication')
document.getElementById('homeTweetBoxUbication').append(iconUbication)

// Avatar de ejemplo para la seccion de tendencias
const accountAvatarUno = createElementImg('', 'avatar avatar--size48', avatarExample, '')
document.getElementById('accountAvatarUno').append(accountAvatarUno)

const accountAvatarDos = createElementImg('', 'avatar avatar--size48', avatarExample, '')
document.getElementById('accountAvatarDos').append(accountAvatarDos)

const accountAvatarTres = createElementImg('', 'avatar avatar--size48', avatarExample, '')
document.getElementById('accountAvatarTres').append(accountAvatarTres)

eventListener()
