// function toggleMenu(){
//   const menu= document.querySelector('.menu') ;
//   const nav = document.querySelector('.nav');
//   menu.classList.toggle('active');
//   nav.classList.toggle('active');

// }









function toggleMenu() {
  const menu = document.querySelector('.menu');
  const nav = document.querySelector('.nav');

  menu.classList.toggle('active');
  nav.classList.toggle('active');
}



// chnage the background when u click images in gallery 
function changeVideo(name){
  const bgVideoList = document.querySelectorAll('.bg-video');
  const trailers = document.querySelector('.trailer');
  const models= document.querySelectorAll('.model');
//forach function
//for data mapping 
bgVideoList.forEach(video=>{
    video.classList.remove('active');
    if(video.classList.contains(name)){
      video.classList.add('active');
    }
  });
  
  models.forEach(model=>{
    model.classList.remove('active');
    if (model.classList.contains(name)){
      model.classList.add('active');
    }
  });

  trailers.forEach(video=>{
    video.classList.remove('active');
    if (video.classList.contains(name)){
      video.classList.add('active');
    }
  });
  
}

// Play video function
function playVideo() {
  const bgVideos = document.querySelectorAll('.bg-video');
  bgVideos.forEach(video => {
    video.play();
  });

  document.querySelector('.play').classList.remove('active');
  document.querySelector('.pause').classList.add('active');
}



//Video Play and PAuse 
function pauseVideo(){
  const bgVideoList= document.querySelectorAll('.bg-video');
  bgVideoList.forEach(video=>{
    video.pause();
  });
   document.querySelector('.pause').classList.remove('active');
  document.querySelector('.play').classList.add('active');

}




// function toggleMenu() {
//   const menu = document.querySelector('.menu');
//   const nav = document.querySelector('.nav');

//   menu.classList.toggle('active');
//   nav.classList.toggle('active');
// }

// // Change the background when you click images in gallery
// function changeVideo(name) {
//   const bgVideoList = document.querySelectorAll('.bg-video');
//   const trailers = document.querySelectorAll('.trailer');  // FIXED: trailers now correctly selected
//   const models = document.querySelectorAll('.model');

//   // Remove active class from all
//   bgVideoList.forEach(video => video.classList.remove('active'));
//   trailers.forEach(video => video.classList.remove('active'));
//   models.forEach(model => model.classList.remove('active'));

//   // Add active class to selected elements
//   document.querySelector(`.bg-video.${name}`)?.classList.add('active');
//   document.querySelector(`.trailer.${name}`)?.classList.add('active');
//   document.querySelector(`.model.${name}`)?.classList.add('active');
// }

// // Optional: Add auto-change every 5 seconds (carousel effect)
// let currentIndex = 0;
// const videoIds = ['mclaren-1', 'mclaren-2', 'mclaren-3', 'mclaren-4', 'mclaren-5'];

// setInterval(() => {
//   currentIndex = (currentIndex + 1) % videoIds.length;
//   changeVideo(videoIds[currentIndex]);
// }, 5000);
