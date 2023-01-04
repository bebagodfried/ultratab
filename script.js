/**
 * Quearch - The open source dashboard for chrome.***
 */

let application   = selectId('application')

let fullscreen    = selectId('enableFullscreen')
let splash        = selectId('loader')
let options       = selectId('profileManager')
let search        = selectId('search')

// 
const USERNAME    = `${localStorage.getItem('u_firstname')}`
const USER_PIC    = `${localStorage.getItem('profile_link')}`
const PWD         = `${localStorage.getItem('u_password')}`

let loader        = `${localStorage.getItem('loader')}`
let layout        = `${localStorage.getItem('layout')}`
let align         = `${localStorage.getItem('shortcut-align')}`
let title         = `${localStorage.getItem('title')}`

// Profile
let profileRadius = `${localStorage.getItem('rounded-radius')}`
let profile_link = `${localStorage.getItem('profile_link')}`

const dashboard   = selectId('dashboard')

const LOGIN = {
  title: 'login',
  html: `<form id="login" method="POST" class="block bg-none" style="margin: 5vh 0 0 1vh">
          <div class="flex flex-row g-1">
            <img id="login_pic" src="img/user.png" alt="Avatar" class="mx-auto my-1 size-144">
            <div class="flex flex-column justify-center self-stretch px-1 py-2">
              <label id="login_user" for="pwd" class="fs-3"></label>
              <div class="flex">
                <input type="password" id="pwd" class="bg-none no-border fs-6 px-1" autocomplete="password" autofocus>
                <button type="submit" class="bg-dark bg-opacity-10 size-32 rounded-full p-0 hover:bg-none"><i class="fa-solid fa-angle-right"></i>
              </div>
              <span class="divider w-full opacity-50"></span>
              <span id="login_log" class="ease-in fg-danger small size-h-16"></span>
            </div>
          </div>
        </form>`,
  style: 'none',
  classList: ['absolute', 'fullscreen', 'bg-dark', 'bg-opacity-50', 'top-0', 'left-0', 'z-2', 'backdrop-blur-10', 'ease-in', 'animate-fadeIn', 'animated-500'],
  header: false,
  border: false
}

// loader
let spinner = localStorage.getItem('spinner')
if (spinner == 'true') {
  select('#loader img').classList.add('animate-pulse')
}

let hi = () => {
  if (USERNAME != '' && USERNAME != 'null') {
    const WELCOME = {
      title: 'welcome',
      html: `<p class="fg-dark-900">Welcome ${USERNAME}</p>`,

      style: 'none',
      bottom: '5vh',
      left: '1vw',
      classList: ['bg-light', 'bg-opacity-80', 'backdrop-10', 'border-light-100'],
      header: false
    }

    modalbox(WELCOME)

    setTimeout(() => {
      selectId('welcome').classList.add('animate-fadeOut')

      setTimeout(() => {
        drop(['#welcome'])
      }, 2000)
    }, 1000);
  }
}

window.onload = function () {
  let profile = selectId('user-pic_1')
  let menu_profile = selectId('user-pic_2')

  setInterval(() => {
    application.classList.add('overflow-hidden', 'select-none')

    // Background
    let bg_image      = localStorage.getItem('background')

    if (isset(bg_image) != null) {
      application.style.backgroundImage = `url(${bg_image})`
    } else {
      application.style.backgroundImage = `url('img/wallpapers/background.jpeg')`
    }

    // Profile
    let profile_link = localStorage.getItem('profile_link')
    let rounded = `${localStorage.getItem('rounded-radius')}`
    let roundedClass = profile.classList.contains('rounded-full', 'border', 'box-shadow')

    if (isset(profile_link)) {
      if (isset(profile_link) != profile.src) {
        profile.src = profile_link
        menu_profile.src = profile_link
      }
    } else {
      profile.src = 'img/user.png'
      menu_profile.src = 'img/user.png'
    }
    
    if (isset(rounded) == 'true') {
      profile.classList.add('rounded-full', 'border', 'box-shadow')
      menu_profile.classList.add('rounded-full', 'border', 'box-shadow')
    } else if (isset(rounded) == 'false' && `${roundedClass}`) {
      profile.classList.remove('rounded-full', 'border', 'box-shadow')
      if (menu_profile.classList.contains('rounded-full', 'border', 'box-shadow')) {
        menu_profile.classList.remove('rounded-full', 'border', 'box-shadow')
      }
    } else { }

    if (isset(USERNAME)) {
      if (USERNAME != echo('#username')) {
        echo(USERNAME, '#username') 
      }
    }
  }, 100);

  if (title == 'null') {
    title = 'Dashboard'
  }

  let get_title = () => {
    if (title.search('H:i') == 0) {
      document.title = date(title)

      setInterval(() => {
        document.title = date(title)
      }, 500);
    } else {
      document.title = title
    }
  }

  if (isset(profile_link) != '' && isset(profile_link) != 'null') {
    profile.src = `${profile_link}`
    menu_profile.src = `${profile_link}`
  }
  
  try {
    let login = () => {
      const LOGIN_SUCCESS = {
        title: 'success',
        html: `<p class="fg-dark-900">Welcome ${USERNAME}</p>`,

        style: 'none',
        bottom: '5vh',
        left: '1vw',
        classList: ['bg-light', 'bg-opacity-80', 'backdrop-10', 'border-light-100'],
        header: false
      }

      let auto_pass = () => {
        try {
          let entry = document.forms['login']['pwd']

          if (entry.value == PWD) {
            selectId('login').classList.add('animate-fadeOut')

            setTimeout(() => {
              drop(['#login'])
              display('#dashboard')
            }, 500)

            if (USERNAME != '' && USERNAME != 'null') {
              setTimeout(() => {
                modalbox(LOGIN_SUCCESS)
                setTimeout(() => {
                  try {
                    selectId('success').classList.add('animate-fadeOut')
                  } catch (e) { }
                }, 1500)
              }, 500);
              
              get_title()
              setTimeout(() => {
                // display('#dashboard')
                drop(['#success'])
              }, 2000)
            }
          }
        } catch (e) { }
      }

      let chk_pass = () => {
        try {
          let entry = document.forms['login']['pwd']
          if (entry.length == PWD.length && entry.value == PWD) {
            selectId('login').classList.add('animate-fadeOut')

            setTimeout(() => {
              drop(['#login'])
            }, 500)

            if (USERNAME != '' && USERNAME != 'null') {
              setTimeout(() => {
                modalbox(LOGIN_SUCCESS)
                setTimeout(() => {
                  try {
                    selectId('success').classList.add('animate-fadeOut')
                  } catch (e) { }
                }, 1500)
              }, 500);

              setTimeout(() => {
                // display('#dashboard')
                drop(['#success'])
                get_title()
              }, 2000)
            }
          } else {
            selectId('login_log').innerHTML = '<i class="fa-solid fa-warning"></i> Wrong password.'
          }
        } catch (e) { }
      }

      if (PWD != '' && PWD != 'null') {
        $_('title', `Login | ${title}`)
        modalbox(LOGIN)

        let login_form = selectId('login')
        let entry = document.forms['login']['pwd']

        // Avatar
        if (USER_PIC != '' && USER_PIC != 'null') {
          login_pic.src = USER_PIC
        }

        if (isset(profileRadius) == 'true') {
          login_pic.classList.add('rounded-full', 'border', 'box-shadow')
        }

        if (USERNAME != '' && USERNAME != 'null') {
          selectId('login_user').innerHTML = USERNAME
        }

        // Password
        entry.oninput = () => { auto_pass() }

        login_form.addEventListener('submit', (e) => {
          e.preventDefault()
          setInterval(() => {
            chk_pass()
          }, 100)
        })
      } else {
        display('#dashboard')
        get_title()
        hi()
      }
    }

    if (splash && $_('readyState') == 'complete') {
      splash.classList.add('animate-ping')

      setTimeout(() => {
        splash.remove()
        try {
          login()
        } catch (ERR) {
          
        }
      }, 900)
    }
  } catch (e) { }

  if (splash && $_('readyState') == 'complete') {
    splash.classList.add('animate-ping')

    setTimeout(() => {
      splash.remove()
    }, 900)
  }

  switch (layout) {
    case 'dark':
      application.classList.add(`bg-${layout}-900`, `fg-light`)
      break;

    case 'light':
      application.classList.add(`bg-${layout}`, `fg-dark`)
      break;
  
    default:
      application.classList.add('bg-dark-900', 'fg-light')
      break;
  }

  switch (align) {
    case 'left':
      dashboard.classList.add(`items-start`)
      break;

    case 'center':
      dashboard.classList.add(`items-center`)
      break;

    case 'right':
      dashboard.classList.add(`items-end`)
      break;

    default:
      dashboard.classList.add(`items-center`)
      break;
  }
}

// full Screen
fullscreen.onclick = () => {
  fullscreen.classList.toggle('muted')

  switch (fullscreen.getAttribute('aria-expanded')) {
    case 'true':
      try {
        document.exitFullscreen()
        fullscreen.setAttribute('aria-expanded', 'false')
        return;
      } catch (exitFullscreen_ERR) {
        if (document.exitRequestFullscreen) {
          document.exitRequestFullscreen()
          fullscreen.setAttribute('aria-expanded', 'false')
          return;
        } else if (document.exitRequestFullscreen) {
          document.exitRequestFullscreen()
          fullscreen.setAttribute('aria-expanded', 'false')
          return;
        } else {
          console.error(exitFullscreen_ERR)
          return;
        }
      }
 
    case 'false':
      try {
        application.requestFullscreen()
        fullscreen.setAttribute('aria-expanded', 'true')
        return;
      } catch (requestFullscreen_ERR) {
        if (application.webkitRequestFullscreen) {
          application.webkitRequestFullscreen()
          fullscreen.setAttribute('aria-expanded', 'true')
          return;
        } else if (application.msRequestFullscreen) {
          application.msRequestFullscreen()
          fullscreen.setAttribute('aria-expanded', 'true')
          return;
        } else {
          console.error(requestFullscreen_ERR)
          return;
        }
      }

    default: break;
  }
}

let esc = () => {
  selectId('apps').classList.remove('animate-fadeIn')
  selectId('apps').classList.add('animate-fadeOut')

  setTimeout(() => {
    selectId('apps').classList.add('animate-fadeIn')
    selectId('apps').classList.remove('animate-fadeOut')
    hide('apps')
  }, 500)
}

on('contextmenu', (e) => {
  e.preventDefault()
})

on('keydown', (e) => {
  if (e.key === 'Escape') {
    esc()
  }
})

on('mousemove', (e) => {
  if (select('[aria-grabbed=true]')) {
    select('[aria-grabbed=true]').style.top = `${e.clientY}px`
    select('[aria-grabbed=true]').style.left = `${e.clientX}px`

    select('[aria-grabbed=true]').style.transform = `translate(-50%, -16px)`
  }
})

// ============================

const ACCOUNT = {
  title : `Settings | Configure your profile`,
  icon  : `includes/icons/user-edit.png`,
  href  : `includes/user.html`,

  style : 'dark',
  height: `320px`,
  width : '500px'
}

const AVATAR = {
  title : `Settings | Customize your avatar`,
  icon  : `includes/icons/user-edit.png`,
  href  : `includes/avatar.html`,

  style : 'dark',
  height: `320px`,
  width : '500px'
}

const SETTINGS = {
  title : `Settings | Customize your desktop`,
  icon  : `includes/icons/setting.png`,
  href  : `includes/settings.html`,

  style : 'dark',
  height: `600px`,
  width : '360px'
}

const REBOOT = {
  style: 'dark',
  header: false,
  overlay: true,
}

onClick('btn-reload_1', () => {
  let warning = function () {
    switch (title.search('H:i')) {
      case 0: return `Dashboard reboot`
      default: return `Reboot ` + title + '?'
    }
  }
  
  REBOOT.html = `
      <p class='m-0'>${warning()}</p>
      <hr>
      <div class="flex g-1 justify-center">
        <button onclick="drop(['.js_focus', '#modal_overlay']); selectId('btn-reload_1').classList.remove('animate-spin')" class="bg-none outline outline-danger currentColor">cancel</button>
        <button onclick="$_('history', 0); drop(['.js_focus'])" >Reboot</button>
      </div>`

  selectId('btn-reload_1').classList.add('animate-spin')
  modalbox(REBOOT)
})

onClick('btn-reload_2', () => {
  let warning = function () {
    switch (title.search('H:i')) {
      case 0: return `Dashboard reboot`
      default: return `Reboot ` + title + '?'
    }
  }

  REBOOT.html = `
      <p class='m-0'>${warning()}</p>
      <hr>
      <div class="flex g-1 justify-center">
        <button onclick="drop(['.js_focus', '#modal_overlay']), selectId('btn-reload_2').classList.remove('animate-spin')" class="bg-none outline outline-danger currentColor">cancel</button>
        <button onclick="$_('history', 0); drop(['.js_focus'])" >Reboot</button>
      </div>`

  selectId('btn-reload_2').classList.add('animate-spin')
  modalbox(REBOOT)
})

onClick('user-pic_1', () => {
  modalbox(AVATAR)
})

onClick('user-pic_2', () => {
  modalbox(AVATAR)
})

onClick('btn-settings_1', () => {
  modalbox (SETTINGS)
})

onClick('btn-settings_2', () => {
  modalbox (SETTINGS)
})

onClick('btn-search', () => {
  let x = matchMedia("(min-width: 700px)").matches;
  switch (x) {
    case true:
      display('#search')
      break;
  
    default: open(engin)
      break;
  }
})

onClick('profileManager', () => {
  modalbox(ACCOUNT)
})

onClick('username', () => {
  modalbox(ACCOUNT)
})
