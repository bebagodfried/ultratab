/**
 * Quearch - The open source dashboard for chrome.***
 */

const _search = {
  title: '',
  icon: '',
  href: '',

  style: 'dark',
  height: '500px',
  width: '750px'
}

const engin = `https://www.bing.com/search/?q=`
const engin_icon = `https://www.bing.com/favicon.ico`

// Search
search.addEventListener('submit', (e) => {
  e.preventDefault()
  display('#search')

  let target = localStorage.getItem('target');

  let term = search.term.value
      term.replace(' ', '%20')

  _search.icon = `${term + '/favicon.ico'}`
  
  _search.title = `${term}`

  if (term.search('://') == -1) {
    if (localStorage.getItem('engin')) {
      let engin = localStorage.getItem('engin')
      
      _search.href = engin + term
      _search.icon = engin_icon
    } else {
      _search.href = engin + term
      _search.icon = engin_icon
    }
  } else if (term.search('://') != -1) {
    _search.href = `${term}`
  }

  if (term.search('https://youtu.be') == 0 || term.search('https://youtube.com') == 0 || term.search('https://www.youtube.com') == 0) {
    _search.icon = `includes/favicons/youtube`

    if (term.search('https://youtu.be') == 0 ) {
      _search.href = term.replace(`https://youtu.be`, `https://youtube.com/embed`)
    } else if (term.search('https://youtube.com') == 0) {
      _search.href = term.replace(`https://youtube.com`, `https://youtube.com/embed`)
    } else if (term.search('https://www.youtube.com') == 0) {
      _search.href = term.replace(`https://www.youtube.com`, `https://youtube.com/embed`)
    }
  }
  
  if (isset(target)) {
    window.open(_search.href)
  } else {
    modalbox(_search)
  }
})