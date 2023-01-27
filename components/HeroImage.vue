<template>
  <div class="relative hero-image-container">
    <!-- <img class="hero-image " src="https://images.unsplash.com/photo-1505535162959-9bbcb4ab22d6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80" alt="hero image"> -->
    <video id="myVideo" src="../assets/video.mp4" autoplay muted ></video>
    <div class="hero-text     ">
      <h1 class=" text-3xl text-shadow">
        Invest in one-of-a-kind  quality pieces that will empower your personal style and  last a lifetime
      </h1>
      <small>Learn more about us and our services</small>
     Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum maiores autem optio, inventore voluptate eveniet eligendi illo mollitia quas molestiae?
    </div>
  </div>
</template>e>

<script >
export default{

}
 onMounted(()=>{
  if (document && myVideo) {
      var myVideo = document.getElementById("myVideo");
  myVideo.addEventListener("timeupdate", function(){
    if (this.currentTime >= this.duration - 1) { // 5 seconds before the end
      this.pause();
    }
  });

  }

 })
</script>

<style>
.hero-image-container{

}

/*
#myVideo{
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh !important;
  object-fit: cover;

}*/

.hero-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
  position: relative;
}


.hero-text {
  position:absolute;
top: 25%  !important;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
}

.text-shadow-overlay {
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
}

</style>
