"use strict";
/**
 * TypeScript
 * License(s): CC BY 4.0, MIT
 *
 */
/** AJAX */
// XHR: Create XMLHttpRequest object
let XHR_Object = () => {
  // XMLHttpRequest support (All modern browsers)
  if (window.XMLHttpRequest) {
    return new XMLHttpRequest;
  }
  else {
    try {
      return new ActiveXObject('Microsoft.XMLHTTP');
    }
    catch (_) {
      try {
        return new ActiveXObject('Msxml2.XMLHTTP');
      }
      catch (XMLHttpRequest_ERR) {
        console.error(XMLHttpRequest_ERR);
        return null;
      }
    }
  }
};
// $_: Return variables.
let $_ = (get, set = '') => {
  switch (get) {
    // DOM Objects
    case 'title':
      if (set) {
        document.title = `${set}`;
        break;
      }
      else {
        return document.title;
      }
    case 'charset':
      return document.characterSet;
    case 'baseURI':
      return document.baseURI;
    case 'links':
      return document.links;
    case 'scripts':
      return document.scripts;
    case 'embeds':
      return document.embeds;
    case 'images':
      return document.images;
    case 'readyState':
      return document.readyState;
    // BOM Objects
    case 'cookies':
      return navigator.cookieEnabled;
    case 'language':
      return navigator.language;
    case 'online':
      return navigator.onLine;
    case 'userAgent':
      return navigator.userAgent;
    // Server & location
    case 'host':
      if (set) {
        location.host = `${set}`;
        break;
      }
      else {
        return location.host;
      }
    case 'hostname':
      if (set) {
        location.hostname = `${set}`;
        break;
      }
      else {
        return location.hostname;
      }
    case 'href':
      if (set) {
        location.href = `${set}`;
        break;
      }
      else {
        return location.href;
      }
    case 'pathname':
      if (set) {
        location.pathname = `${set}`;
        break;
      }
      else {
        return location.pathname;
      }
    case 'port':
      if (set) {
        location.port = `${set}`;
        break;
      }
      else {
        return location.port;
      }
    case 'protocol':
      if (set) {
        location.protocol = `${set}`;
        break;
      }
      else {
        return location.protocol;
      }
    case 'search':
      if (set) {
        location.search = `${set}`;
        break;
      }
      else {
        return location.search;
      }
    case 'history':
      switch (set) {
        case -1: return history.back();
        case +1: return history.forward();
        case 0: return history.go();
        case 'back': return history.back();
        case 'forward': return history.forward();
        case 'reload': return history.go();
        default: return history.go();
      }
    case 'update':
      return document.lastModified;
    // Return https(SSl) state of current page
    case 'https':
      if (location.protocol = 'https') {
        return true;
      }
      else {
        return false;
      }
    default:
      console.error(`[404]: Reference '${get}' not found!`);
      return null;
  }
};
// 
let date = (format = '', type = '') => {
  // New date object
  var date = new Date();
  // return Alwayse two digits
  const digit = function (i) {
    if (i < 10)
      i = '0' + i;
    return i;
  };
  // =========================================
  // H: Hours
  const H = date.getHours();
  // i: Minutes
  const i = digit(date.getMinutes());
  // s: Seconds
  const s = digit(date.getSeconds());
  // ms: Seconds
  const ms = date.getMilliseconds();
  // t: Timezone
  const t = date.getTimezoneOffset();
  // ========================================
  // Y: Year
  const Y = date.getFullYear();
  // m: Month
  const m = date.getMonth();
  // d: Day
  const d = date.getDate();
  // f: Weekday
  const f = date.getDay();
  // ========================================
  switch (format) {
    case 'H': //=> Hours
      if (isset(type)) {
        if (type == 'En') {
          if (H >> 12) {
            return (H - 12);
          }
          else {
            return H;
          }
        }
        else if (type == 'Fr') {
          return H;
        }
      }
      else {
        return H;
      }
    case 'i': return i; //=> Minutes
    case 's': return s; //=> Seconds
    case 'ms': return s; //=> Seconds
    case 't': return t; //=> Timezone
    case 'Y': return Y; //=> Year
    case 'm': //=> Month
      if (isset(type)) {
        if (type == 'En') {
          return months_en[m];
        }
        else if (type == 'Fr') {
          return months_fr[m];
        }
      }
      else {
        return m;
      }
    case 'd': return (d); //=> Day
    case 'f': return f; //=> Weekday
    case 'En': return weekdays_en[f] + ', ' + digit(d) + ' ' + months_en[m] + ' ' + Y;
    case 'Fr': return weekdays_fr[f] + ' ' + digit(d) + ' ' + months_fr[m] + ' ' + Y;
    case 'DD/MM/YY': return digit(d) + '/' + digit(m) + '/' + Y;
    case 'MM/DD/YY': return digit(m) + '/' + digit(d) + '/' + Y;
    case 'DD-MM-YY': return digit(d) + '-' + digit(m) + '-' + Y;
    case 'MM-DD-YY': return digit(m) + '-' + digit(d) + '-' + Y;
    case 'DD/MM': return digit(d) + '/' + digit(m);
    case 'MM/DD': return digit(m) + '/' + digit(d);
    case 'DD-MM': return digit(d) + '-' + digit(m);
    case 'MM-DD': return digit(m) + '-' + digit(d);
    case 'H:i':
      if (isset(type)) {
        if (type == 'En') {
          if (H >> 12) {
            return (H - 12) + ':' + i;
          }
          else {
            return H + ':' + i;
          }
        }
        else if (type == 'Fr') {
          return H + ':' + i;
        }
      }
      else {
        return H + ':' + i;
      }
    case 'H:i:s':
      if (isset(type)) {
        if (type == 'En') {
          if (H >> 12) {
            return (H - 12) + ':' + i + ':' + s;
          }
          else {
            return H + ':' + i + ':' + s;
          }
        }
        else if (type == 'Fr') {
          return H + ':' + i + ':' + s;
        }
      }
      else {
        return H + ':' + i + ':' + s;
      }
    default: return date.toLocaleString();
  }
};
let weekdays_en = ['Sunday', 'Monday', 'Thuesday', 'Wednesday', 'Tursday', 'Friday', 'Saturday'];
let weekdays_fr = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'];
let months_en = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
let months_fr = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
// 
let create = (el) => {
  return document.createElement(el);
};
// Select: Node list selector
let select = (el, all = false) => {
  try {
    if (typeof (el) == 'string' && el != null)
      el = el.trim();
    if (all) {
      return [...document.querySelectorAll(el)];
    }
    else {
      return document.querySelector(el);
    }
  }
  catch (select_ERR) {
    console.error(select_ERR.name + `: select(elememt: object, all?: boolean) => '${el}' is not a valid selector.`);
    return null;
  }
};
// SelectTag: HTMLCollection selector
let selectTag = (el) => {
  try {
    if (typeof (el) == 'string' && el != null)
      el = el.trim();
    return document.getElementsByTagName(el);
  }
  catch (select_ERR) {
    console.error(`${select_ERR.name}: selectTag(tag: object) => '${el}' is not a valid selector.`);
    return null;
  }
};
// SelectId: HTMLCollection selector
let selectId = (el) => {
  try {
    if (typeof (el) == 'string' && el != null)
      el = el.trim();
    return document.getElementById(el);
  }
  catch (selectId_ERR) {
    console.error(`${selectId_ERR.name}: selectId(id: object) => '${el}' is not a valid selector.`);
    return null;
  }
};
// Drop: 
let drop = (list) => {
  list.forEach(el => {
    const x = select(el);
    try {
      x.remove();
    }
    catch (Drop_ERR) {
      return null;
    }
  });
};
// Echo: Get or replace the content of HTML elements
let echo = (text = '', el = '', all = false) => {
  // Select the innerHTML
  if (el == '') {
    let el = text;
    return document.querySelector(el).innerHTML;
  }
  else {
    try {
      const d = select(el, all);
      if (d) {
        if (all) {
          let element = d;
          for (let x of element) {
            x.innerHTML = text;
          }
        }
        else {
          return d.innerHTML = text;
        }
      }
    }
    catch (Echo_ERR) {
      console.error(`${Echo_ERR.name}: Error occured when trying to get/replace el content.`);
      return null;
    }
  }
};
// 
// Display: 
let display = (el, displayValue = 'block') => {
  const d = select(el);
  try {
    d.classList.toggle('hidden');
  }
  catch (Display_ERR) {
    if (d.classList.contains('hidden')) {
      d.classList.remove('hidden');
    }
    else {
      d.classList.add('hidden');
    }
  }
};
// Hide: 
let hide = (el) => {
  const d = selectId(el);
  d.classList.add('hidden');
  try {
    d.classList.remove('show');
  }
  catch (hide_ERR) {
    console.error(hide_ERR);
  }
};
// On: Events listner
let on = (event, listener) => {
  event = event.trim();
  document.addEventListener(event, listener);
};
// Onclick: Click listner
let onClick = (el, listener) => {
  const d = selectId(el);
  return d.onclick = listener;
};
// Ondlclick: Double click listner
let onDblClick = (el, listener) => {
  const d = selectId(el);
  return d.ondblclick = listener;
};
// 
let isset = (key) => {
  if (key != null) {
    switch (key) {
      // Boolean
      case true: return true;
      case false: return false;
      // empty
      case '': return false;
      case 'null': return false;
      default: return `${key}`;
    }
  }
  else {
  }
};
// Modalbox
let modalbox = function (modal = { title: ``, icon: ``, text: ``, html: ``, href: ``, header: true, classList: [], style: ``, border: true, overlay: false, height: ``, width: ``, top: ``, right: ``, bottom: ``, left: ``, level: 8 }) {
  const WINDOW = create('div');
  WINDOW.id = modal.title;
  WINDOW.classList.add('rounded', 'flex', 'flex-column');
  if (selectId(`${modal.title}`)) {
    let el = selectId(modal.title);
    el === null || el === void 0 ? void 0 : el.classList.add('animate-pulse');
    setTimeout(() => {
      el === null || el === void 0 ? void 0 : el.classList.remove('animate-pulse');
    }, 1000);
    return null;
  }
  if (modal.classList) {
    modal.classList.forEach(classItem => {
      WINDOW.classList.add(classItem);
    });
  }
  if (modal.level) {
    WINDOW.classList.add(`${'z-' + modal.level}`);
  }
  else {
    WINDOW.classList.add('z-8');
  }
  if (`${modal.style}` == 'dark') {
    WINDOW.classList.add('bg-dark-900', 'fg-light');
  }
  else if (`${modal.style}` == 'light') {
    WINDOW.classList.add('bg-light', 'fg-dark-900');
  }
  else if (`${modal.style}` == 'none') {
    WINDOW.style.color = 'inherit';
  }
  else {
    WINDOW.classList.add('bg-light', 'fg-dark-900');
  }
  if (modal.border == true) {
    WINDOW.classList.add('border');
  }
  else if (modal.border == false) {
    WINDOW.classList.add('no-border');
  }
  else {
    WINDOW.classList.add('border');
  }
  WINDOW.style.position = 'fixed';
  WINDOW.style.height = modal.height;
  WINDOW.style.width = modal.width;
  if (modal.top || modal.right || modal.bottom || modal.left) {
    WINDOW.style.top = modal.top;
    WINDOW.style.right = modal.right;
    WINDOW.style.bottom = modal.bottom;
    WINDOW.style.left = modal.left;
  }
  else {
    WINDOW.style.top = '50%';
    WINDOW.style.left = '50%';
    WINDOW.classList.add('translate--50');
  }
  // ========================
  const HEADER = create('div');
  HEADER.classList.add('flex', 'items-center', 'justify-between', 'full-width');
  HEADER.style.padding = '.2rem';
  const FAVICON = create('img');
  if (modal.icon) {
    FAVICON.src = modal.icon;
    FAVICON.classList.add('size-32');
  }
  const TITLE = create('span');
  TITLE.classList.add('pl-1', 'line-clamp-1', 'line-clamp-sm-1');
  TITLE.innerHTML = modal.title;
  const WIN_Move = create('button');
  WIN_Move.classList.add('bg-none', 'cursor-default', 'fa-solid', 'fa-up-down-left-right', 'p-0', 'rounded-full', 'size-32', 'muted');
  const WIN_Close = create('button');
  WIN_Close.classList.add('bg-none', 'fa-solid', 'fa-times', 'hover:bg-danger', 'p-0', 'rounded-full', 'size-32');
  if (modal.text) {
    var CONTENT = create('p');
    CONTENT.classList.add('border', 'border-t', 'm-0', 'px-2', 'py-1', 'w-full');
    CONTENT.innerHTML = modal.text;
  }
  else if (modal.html) {
    var CONTENT = create('div');
    CONTENT.classList.add('max-height', 'px-2', 'py-1', 'w-full');
    CONTENT.innerHTML = modal.html;
  }
  else if (modal.href) {
    var CONTENT = create('iframe');
    CONTENT.classList.add('no-border');
    CONTENT.height = '100%';
    CONTENT.width = '100%';
    CONTENT.src = modal.href;
    if (modal.header == true) {
      CONTENT.classList.add('border', 'border-t');
    }
  }
  // ======================
  HEADER.ondblclick = () => {
    let move = select('.js_focus');
    let modalGrab = move.getAttribute('aria-grabbed');
    HEADER.classList.toggle('cursor-grabbing');
    if (modalGrab == 'true') {
      WINDOW.setAttribute('aria-grabbed', 'false');
      WIN_Move.classList.add('muted');
    }
    else {
      WINDOW.setAttribute('aria-grabbed', 'true');
      WIN_Move.classList.remove('muted');
    }
  };
  WIN_Close.onclick = () => {
    drop(['.js_focus']);
    try {
      drop(['#modal_overlay']);
    }
    catch (error) {
      return null;
    }
  };
  // ======================
  WINDOW.addEventListener('mouseover', () => {
    WINDOW.classList.add('js_focus');
    if (!modal.level) {
      WINDOW.onclick = () => {
        let lostFocus = select('.z-8');
        if (lostFocus) {
          lostFocus.classList.add('z-7');
          lostFocus.classList.remove('z-8');
        }
        WINDOW.classList.add('z-8');
      };
    }
  });
  WINDOW.addEventListener('mouseleave', () => {
    WINDOW.classList.remove('js_focus');
  });
  // =====================
  let div_1 = create('div');
  div_1.classList.add('flex', 'items-center');
  if (modal.icon) {
    div_1.appendChild(FAVICON);
  }
  div_1.appendChild(TITLE);
  let div_2 = create('div');
  div_2.classList.add('flex', 'items-center', 'g-1');
  div_2.appendChild(WIN_Move);
  div_2.appendChild(WIN_Close);
  HEADER.appendChild(div_1);
  HEADER.appendChild(div_2);
  // ========================
  if (modal.header != false) {
    WINDOW.appendChild(HEADER);
  }
  // =========================
  WINDOW.appendChild(CONTENT);
  if (modal.overlay == true) {
    let overlay = create('div');
    overlay.id = 'modal_overlay';
    overlay.classList.add('absolute', 'fullscreen', 'top-0', 'left-0', 'backdrop-blur-10', 'ease-in', 'animate-fadeIn', 'animated-500');
    if (modal.level) {
      let i = modal.level;
      overlay.classList.add(`z-${i - 1}`);
    }
    else {
      overlay.classList.add('z-8');
    }
    document.body.appendChild(overlay);
    document.body.appendChild(WINDOW);
  }
  else {
    document.body.appendChild(WINDOW);
  }
};
// Toast Alert:
let toast = (type, msg, timeout = 1000, x = '50px', y = '50px') => {
  if (type == 'danger' || type == 'info' || type == 'success' || type == 'warn') {
    let toast = document.createElement('div');
    let toastOut = timeout + 1000;
    toast.classList.add('absolute', 'flex', 'g-1', 'p-1', 'bg-opacity-50', 'border', 'rounded', 'animate-fadeIn');
    toast.style.left = `${x}`;
    toast.style.bottom = `${y}`;
    switch (type) {
      case 'danger':
        toast.classList.add('bg-danger', 'border-danger');
        break;
      case 'info':
        toast.classList.add('bg-info', 'border-info');
        break;
      case 'success':
        toast.classList.add('bg-success', 'border-success');
        break;
      case 'warn':
        toast.classList.add('bg-warning', 'border-warning');
        break;
      case 'dark':
        toast.classList.add('bg-dark', 'text-light-900');
        break;
      case 'light':
        toast.classList.add('bg-light', 'text-dark-900');
        break;
      default:
        return;
    }
    let toastContent = document.createElement('p');
    toastContent.classList.add('m-0', 'text-success');
    toastContent = document.createTextNode(msg);
    toast.appendChild(toastContent);
    if (msg) {
      document.body.appendChild(toast);
    }
    setTimeout(() => {
      toast.classList.add('animate-fadeOut');
    }, timeout);
    setTimeout(() => {
      toast.remove();
    }, toastOut);
  }
  else {
    let _msg = `${type}`;
    let _timeout = msg;
    let toast = document.createElement('div');
    let toastOut = _timeout + 1000;
    toast.classList.add('absolute', 'p-1', 'border', 'rounded', 'animate-fadeIn');
    toast.style.left = `${x}`;
    toast.style.bottom = `${y}`;
    let toastContent = document.createElement('p');
    toastContent.classList.add('m-0');
    toastContent = document.createTextNode(_msg);
    toast.appendChild(toastContent);
    if (msg) {
      document.body.appendChild(toast);
    }
    setTimeout(() => {
      toast.classList.add('animate-fadeOut');
    }, _timeout);
    setTimeout(() => {
      toast.remove();
    }, toastOut);
  }
};
