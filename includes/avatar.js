
let preview   = selectId('preview_profile')
let profile_link = selectId('profile_link')

let radius = selectId('rounded-radius')
    radius.addEventListener('click', (e) => {
      preview.classList.toggle('rounded-full')

      if (toggle_radius.classList.contains('fa-toggle-off')) {
        toggle_radius.classList.remove('fa-toggle-off')
        toggle_radius.classList.add('fa-toggle-on', 'fg-primary')

      } else if (toggle_radius.classList.contains('fa-toggle-on')) {
        toggle_radius.classList.remove('fa-toggle-on', 'fg-primary')
        toggle_radius.classList.add('fa-toggle-off')

      }
    })

window.onload = () => {
  const savedValue  = localStorage.getItem('profile_link')

  if (isset(savedValue)) {
    if (savedValue.search('://') != -1) {
      profile_link.value = savedValue
      preview.src = savedValue
    } else {
      if (savedValue.search('img/') == 0) {
        profile_link.value = savedValue.replace('img/', '')
        preview.src = `../${savedValue}`
      } else {
        profile_link.value = savedValue
        preview.src = savedValue
      }
    }
  } else {
    preview.src = '../img/user.png'
  }

  if (localStorage.getItem('rounded-radius') == 'true') {
    preview.classList.add('rounded-full')

    try {
      toggle_radius.classList.remove('fa-toggle-off')
      toggle_radius.classList.add('fa-toggle-on', 'fg-primary')
    } catch (e) {
      console.error(e)
    }

    radius.checked = true
  }

  setTimeout(() => {
    selectId('loader').remove()
  }, 500)  
}

on('submit',(e) => {
  e.preventDefault()

  let radius    = document.forms[0]['rounded-radius'].checked
  let profile_link = document.forms[0]['profile_link'].value
  
  localStorage.setItem('rounded-radius', radius)

  if (isset(profile_link)) {
    if (profile_link.search('/') != -1 || profile_link.search('://') != -1) {
      preview.src = profile_link
      localStorage.setItem('profile_link', profile_link)
    } else if (profile_link != '') {
      preview.src = `${'../img/' + profile_link}`
      localStorage.setItem('profile_link', `${'img/' + profile_link}`)
    } else {
      preview.src = '../img/user.png'
    }
  } else if (profile_link == '') {
    preview.src = '../img/user.png'
    localStorage.setItem('profile_link', `${'img/user.png'}`)
  }

  let msg = 'Profile updated.'

  toast('success', msg, 2000, '69%', '1%')
})

on('contextmenu', (e) => {
  e.preventDefault()
})
