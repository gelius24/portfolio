const spotify = document.querySelector('#spotify')
const blog = document.querySelector('#mernblog')
const amazon = document.querySelector('#amazon')
const netflix = document.querySelector('#netflix')
const video = document.querySelector('video')
const vidController = document.querySelector('.video-controller')

spotify.addEventListener('click', () => {
  window.open('https://spotify-clone-wg.onrender.com/', '_blank');
})

blog.addEventListener('click', () => {
  window.open('https://mern-blog-7sqb.onrender.com/', '_blank');
})

amazon.addEventListener('click', () => {
  window.open('https://amazon-clone-gelius24.vercel.app/', '_blank');
})

netflix.addEventListener('click', () => {
  window.open('https://netflix-full-build-29831.web.app/', '_blank');
})

vidController.addEventListener('click', () => {
  if (video.paused) {
    video.play()
    vidController.innerHTML = '<i class="fa-solid fa-pause"></i>'
  } else {
    video.pause()
    vidController.innerHTML = '<i class="fa-solid fa-play"></i>'
  }
})

