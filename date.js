
const CLOCK = {
  title     : '',
  html      : `<div class="p-6">

                <ul class="bg-dark absolute top-0 left-0 flex fs-6 opacity-20 rounded-full hover:opacity-100">
                  <li><button class="bg-none rounded-full size-32" id="time_en" onclick="setLang('En')">en</button></li>
                  <li><button class="bg-none rounded-full size-32" id="time_fr" onclick="setLang('Fr')">fr</button></li>
                  <li><button class="bg-none rounded-full size-32" id="time_fr" onclick="display('#modal_overlay')"><i class="i fa-solid fa-expand"></i></button></li>
                </ul>

                <date id="getTime" style='font-size: 5vw' date-format="H:i:s"></date>
                <span class="divider"></span>
                <div class="">
                  <date id="getDate"></date>
                </div>
                </div>`,
  
  style     : 'none',
  classList : ['animate-fadeIn', 'animated-500', 'bg-dark', 'bg-opacity-80', 'text-center'],
  border    : false,
  overlay   : true,
  level     : 7
}

// Time & Date
let D = {
  timeFormat: select('date#time').getAttribute('date-format'),
  copyright : select('date#copyright').getAttribute('date-format')
}

let setLang = function (language) {
  localStorage.setItem('lang', language)
}

setInterval(() => {
  echo(date(D.timeFormat), 'date#time')
  echo(date(D.copyright), 'date#copyright')
}, 100)

onDblClick('clock', () => {
  modalbox(CLOCK)

  setInterval(() => {
    const FORMAT = localStorage.getItem('lang')
    
    
    try {
      if (select('date#getTime')) {
        D.clock = select('date#getTime').getAttribute('date-format')

        // D.weekday = select('date#weekday').getAttribute('date-format')
        // D.day = select('date#day').getAttribute('date-format')
        // D.month = select('date#month').getAttribute('date-format')
      }

      echo(date(D.clock), 'date#getTime')

      let day = date(D.day)

      let active = (el) => {
        try {
          selectId(el).classList.add('bg-light', 'fg-dark-900')
          selectId(el).classList.remove('bg-none')
        } catch (Active__ERR) {
          return null
        }
      }

      let disable = (el) => {
        try {
          selectId(el).classList.add('bg-none')
          selectId(el).classList.remove('bg-light', 'fg-dark-900')
        } catch (Disable_ERR) {
          return null
        }
      }

      if (FORMAT == 'Fr') {
        echo(date(FORMAT), 'date#getDate')
        
        active('time_fr')
        disable('time_en')
      } else if (FORMAT == 'En') {
        echo(date(FORMAT), 'date#getDate')
        
        active('time_en')
        disable('time_fr')
      } else {
        echo(date('En'), 'date#getDate')
        
        active('time_en')
        disable('time_fr')
      }

    } catch (ERR) {
      console.log(ERR)
    }
  }, 100)
})
