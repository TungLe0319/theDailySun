<template>
 <div >
   <div class="relative hero-image-container" >
    <!-- <img class="hero-image " src="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80" alt="hero image"> -->
    <video id="myVideo" src="../assets/video.mp4" autoplay muted   ></video>
    <div class="hero-text      ">
      <h1 class=" text-4xl text-shadow p-3  rounded-lg shadow-2xl shadow-teal-600  " >
        Invest in one-of-a-kind  quality pieces that will empower your personal style and  last a lifetime!
      </h1>


    </div>
  </div>

 </div>
</template>e>

<script  setup>
let captureInterval = null;
var myVideo = null;
 onMounted(()=>{
 setTimeout(() => {
     video()

      }, 0)

 })



 function video(){
        var myVideo = document.getElementById("myVideo");
      myVideo.playbackRate = 2.5;
  myVideo.addEventListener("timeupdate", function(){
      if (this.currentTime >= this.duration - 6) { // 5 seconds before the end
         myVideo.playbackRate = 2.5;

    }
        if (this.currentTime >= this.duration - 4) { // 5 seconds before the end
         myVideo.playbackRate = 2;

    }
        if (this.currentTime >= this.duration - 3) { // 5 seconds before the end
         myVideo.playbackRate = 1.5;

    }
    if (this.currentTime >= this.duration - 1) { // 5 seconds before the end
  myVideo.playbackRate = 0.5;
      this.pause();
    }
  });


}





const products = computed(()=> AppState.products)
</script>

<style scoped lang="scss">

 .hero-image-container{
height: 100vh;
 }
 .hero-image-container:before{
  content: '';
z-index: 1;
 height: 200px;
background: rgb(255,255,255);

background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%);
 }

#myVideo{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh ;
  object-fit: cover;
  mask-image: linear-gradient(to bottom, black 75%, transparent 100%);
}

.hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;

}


.hero-text {

  opacity: 0;
  animation: loaded 8s ease 4s forwards;
 top: 50%;
  left: 50%;
  position:absolute;
top: 25%  !important;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;

}


@keyframes loaded {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.text-shadow-overlay {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

.shadow-teal-600 {
  --tw-shadow-color: #0d94896e;
  --tw-shadow: var(--tw-shadow-colored);
}

</style>
