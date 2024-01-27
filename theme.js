document.querySelector("meta[name='apple-mobile-web-app-status-bar-style']").setAttribute("content", "#252525");

window.onload = function() {
    const savedTheme = localStorage.getItem('theme');
    const isSwitchOn = localStorage.getItem('theme1');
    console.log("is", isSwitchOn);
    console.log(savedTheme);
    if (savedTheme == 'light') {
      document.body.setAttribute('light', '');
      let switchElement = document.getElementById('checkboxswitcher');
      switchElement.checked = true;
    } else {
      document.body.removeAttribute('light');
      switchElement.checked = false;
    }
  }
const handleChange = (isChecked) => {
    if (isChecked) {
      localStorage.setItem('theme', 'light');
      localStorage.setItem('theme1', true);
      document.body.setAttribute('light', '');
      //var switchElement = document.getElementById('checkboxswitcher');
      localStorage.setItem('isON', 'true');
    } else {
      localStorage.removeItem('theme');
      document.body.removeAttribute('light');
      localStorage.setItem('theme1', false);
      //var switchElement = document.getElementById('checkboxswitcher');
    
    }
  }


  window.onload = function() {
    const isFullscreenOn = localStorage.getItem('fullscreenState');
    if (isFullscreenOn === 'true') {
        const element = document.documentElement;
        if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
        }
    }
}

const toggleFullScreen = () => {
    const element = document.documentElement;
    if (!document.webkitIsFullScreen) {
        if (element.webkitRequestFullScreen) {
            element.webkitRequestFullScreen();
            localStorage.setItem('fullscreenState', 'true');
        }
    } else {
        if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
            localStorage.setItem('fullscreenState', 'false');
        }
    }
}