
let spinner         = selectId('spinner')
let toggle_spinner  = selectId('toggle_spinner')

let loader          = selectId('loader')
let background      = selectId('background')
let engin           = selectId('engin')
let title           = selectId('title')

on('submit', (e) => {
  e.preventDefault()

  // Title
  let title      = document.forms[0]['title'].value
  if (title == '') {
    localStorage.setItem('title', 'Dashboard')
  } else {
    localStorage.setItem('title', title)
  }

  // Spinner
  let spinner      = document.forms[0]['spinner'].checked
      localStorage.setItem('spinner', spinner)

  // Loader
  let loader      = document.forms[0]['loader'].value
      localStorage.setItem('loader', loader)

  // Background
  let background  = document.forms[0]['background'].value
        if (background.search('/') != -1 || background.search('://') != -1) {
          localStorage.setItem('background', background)
        } else if (background != '') {
          localStorage.setItem('background', `${'img/wallpapers/' + background}`)
        } else {
          localStorage.setItem('background', `${'img/wallpapers/background.jpeg'}`)
        }

  // Search engin
  let engin       = document.forms[0]['engin'].value
  if (engin == '') {
    let _default = `https://www.bing.com/search/?q=`
    localStorage.setItem('engin', _default)
  } else {
    localStorage.setItem('engin', engin)
  }

  // Target
  let target  = document.forms[0]['target']
      if (target.checked == true) {
        localStorage.setItem('target', target.value)
      } else {
        localStorage.setItem('target', '')
      }

  // Layouts
  let shortcutAlign      = document.forms[0]['shortcut-align'].value
  if (shortcutAlign) {
    localStorage.setItem('shortcut-align', shortcutAlign)
  } else {
    localStorage.setItem('shortcut-align', 'center')
  }

  let msg = 'Saved'
  toast('success', msg, 2000, '75%', '1%')
})

on('reset', (e) => {
  localStorage.clear()
})

window.onload = () => {
  if (localStorage.getItem('spinner') == 'true') {
    let spinner = document.forms[0]['spinner']
        spinner.checked = true
        
    try {
      toggle_spinner.classList.remove('fa-toggle-off')
      toggle_spinner.classList.add('fa-toggle-on', 'fg-primary')
    } catch (e) {
      console.error(e)
    }

  }

  if (!localStorage.getItem('shortcut-align')) {
    localStorage.setItem('shortcut-align', 'center')
  }

  // Target
  let target = document.forms[0]['target']
  if (localStorage.getItem('target') == '_blank') {
    target.checked = true
  }

  let shortcutAlign = localStorage.getItem('shortcut-align')
  let alignLeft   = selectId('ico-left-label')
  let alignCenter = selectId('ico-center-label')
  let alignRight  = selectId('ico-right-label')

  if (shortcutAlign) {
    switch (shortcutAlign) {
      case 'left':
        alignLeft.classList.add('bg-dark-900', 'fg-light')
        break;

      case 'center':
        alignCenter.classList.add('bg-dark-900', 'fg-light')
        break;

      case 'right':
        alignRight.classList.add('bg-dark-900', 'fg-light')
        break;
    
      default:
        alignCenter.classList.add('bg-dark-900', 'fg-light')
        break;
    }
  }

  alignLeft.addEventListener('click', () => {
    alignLeft.classList.add('bg-dark-900', 'fg-light')
    
    if (alignCenter.classList.contains('bg-dark-900', 'fg-light') || alignRight.classList.contains('bg-dark-900', 'fg-light')) {
      try {
        alignCenter.classList.remove('bg-dark-900', 'fg-light')
      } catch (ERR) {
        return
      }

      try {
        alignRight.classList.remove('bg-dark-900', 'fg-light')
      } catch (ERR) {
        return
      }
    }
  })

  alignCenter.addEventListener('click', () => {
    alignCenter.classList.add('bg-dark-900', 'fg-light')
    
    if (alignLeft.classList.contains('bg-dark-900', 'fg-light') || alignRight.classList.contains('bg-dark-900', 'fg-light')) {
      try {
        alignLeft.classList.remove('bg-dark-900', 'fg-light')
      } catch (ERR) {
        return
      } 
      
      try {
        alignRight.classList.remove('bg-dark-900', 'fg-light')
      } catch (ERR) {
        return
      }
    }
  })

  alignRight.addEventListener('click', () => {
    alignRight.classList.add('bg-dark-900', 'fg-light')
    
    if (alignCenter.classList.contains('bg-dark-900', 'fg-light') || alignLeft.classList.contains('bg-dark-900', 'fg-light')) {
      try {
        alignLeft.classList.remove('bg-dark-900', 'fg-light')
      } catch (ERR) {
        return
      }

      try {
        alignCenter.classList.remove('bg-dark-900', 'fg-light')
      } catch (ERR) {
        return
      }
    }    
  })

  loader.value      = localStorage.getItem('loader')
  background.value  = localStorage.getItem('background')
  engin.value       = localStorage.getItem('engin')
  title.value       = localStorage.getItem('title')
  
  setTimeout(() => {
    selectId('loader').remove()
  }, 500)
}

toggle_spinner.addEventListener('click', () => {
  if (toggle_spinner.classList.contains('fa-toggle-off')) {
    toggle_spinner.classList.remove('fa-toggle-off')
    toggle_spinner.classList.add('fa-toggle-on', 'fg-primary')

  } else if (toggle_spinner.classList.contains('fa-toggle-on')) {
    toggle_spinner.classList.remove('fa-toggle-on', 'fg-primary')
    toggle_spinner.classList.add('fa-toggle-off')

  }
})

on('contextmenu', (e) => {
  e.preventDefault()
})
