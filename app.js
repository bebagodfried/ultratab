fetch('db.json')
  .then(request => request.text())
  .then(answer => (function () {
    let array = JSON.parse(answer)

    // shortcuts
    let shortcut = selectId('shortcut')
    let content  = shortcut.innerHTML

    shortcut.innerHTML    = ''
    const shortcut_length = 5

    for (let i = 0; i < shortcut_length; i++) {
      let anchor = create('a')
          anchor.href = array[`${i}`].url
          anchor.target = '_blank'
          anchor.classList.add('border', 'bg-dark', 'size-72', 'rounded-full', 'ease-in', 'hover:scale-125', 'hover:box-shadow-out-primary')

      let image = create('img')
          image.src = array[`${i}`].favicon
          image.classList.add('size-32')

      anchor.appendChild(image)

      shortcut.appendChild(anchor)
    }

    shortcut.innerHTML += content

    // networks
    let network = selectId('network')
    for (let i = 0; i < array.length; i++) {
      let anchor = create('a')
          anchor.href = array[`${i}`].url
          anchor.target = '_blank'
          anchor.classList.add('border', 'p-3', 'rounded', 'relative', 'bg-dark-900', 'ease-in', 'hover:scale-125', 'hover:box-shadow-in-primary', 'hover:z-8')

      let image = create('img')
          image.src = array[`${i}`].favicon
          image.classList.add('size-48')

      let title = create('p')
          title.classList.add('absolute', 'bottom-0', 'left-0', 'center', 'w-full', 'px-1', 'text-light', 'line-clamp-1', 'line-clamp-sm-1')
          title.innerHTML = array[`${i}`].name

      anchor.appendChild(image)
      anchor.appendChild(title)

      network.appendChild(anchor)
    }
    
  })())