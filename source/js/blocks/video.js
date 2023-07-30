const video = document.querySelector('.hero__video');
const button = document.querySelector('.hero__video-button');

const playVideo = () => {
  if (document.body.contains(document.querySelector('.hero__video'))) {
    button.addEventListener('click', () => {
      video.classList.add('hero__video-enabled');
      let iframe = createIframe();

      video.appendChild(iframe);
    });
  }
};

function createIframe() {
  let iframe = document.createElement('iframe');

  iframe.setAttribute('allowfullscreen', '');
  iframe.setAttribute('allow', 'autoplay');
  iframe.setAttribute('src', 'https://www.youtube.com/embed/9TZXsZItgdw?mute=0&amp;autoplay=1');
  iframe.classList.add('hero__video-frame');

  return iframe;
}

export {playVideo};
