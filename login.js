const login_form = selectId('login')
      login_form.addEventListener('submit', (e) => {
        e.preventDefault()
        let entry = select('form #pwd')
        alert(entry.value)
      })