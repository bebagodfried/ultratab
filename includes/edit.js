on('submit',(e) => {
  e.preventDefault()
  let u_firstname = document.forms[0]['u_firstname'].value
  let u_lastname = document.forms[0]['u_lastname'].value
  let u_mail = document.forms[0]['u_mail'].value
  let u_pass = document.forms[0]['u_pass'].value

  localStorage.setItem('u_firstname', u_firstname)
  localStorage.setItem('u_lastname', u_lastname)
  localStorage.setItem('u_mail', u_mail)
  localStorage.setItem('u_password', u_pass)

  let msg = 'Profile updated.'

  toast('success', msg, 2000, '69%', '1%')
})

window.onload = () => {
  let u_firstname = selectId('u_firstname')
  let u_lastname = selectId('u_lastname')
  let u_mail = selectId('u_mail')
  let u_pass = selectId('u_pass')

  u_firstname.value = localStorage.getItem('u_firstname')
  u_lastname.value = localStorage.getItem('u_lastname')
  u_mail.value = localStorage.getItem('u_mail')
  u_pass.value = localStorage.getItem('u_password')

  setTimeout(() => {
    selectId('loader').remove()
  }, 500)
}

on('contextmenu', (e) => {
  e.preventDefault()
})
