<template>
  <div>
    <div class="relative hero-image-container">
      <video id="myVideo" src="../assets/video.mp4" autoplay muted></video>
      <div class="hero-text">
        <h1
          class="text-4xl text-shadow p-3   rounded-lg shadow-2xl shadow-teal-600"
        >
          Invest in one-of-a-kind quality pieces that will empower your personal
          style and last a lifetime!
        </h1>
      </div>
    </div>
  </div>
</template>

<script setup>
onMounted(() => {
  setTimeout(() => {
    video();
  }, 500);
});

function video() {
  var myVideo = document.getElementById("myVideo");
if (myVideo) {
  myVideo.playbackRate = 2.5;

  myVideo.addEventListener("timeupdate", function () {
    var currentTime = this.currentTime;
    var duration = this.duration;

    // Calculate the time remaining until the end of the video
    var timeRemaining = duration - currentTime;

    if (timeRemaining <= 6 && timeRemaining > 4) {
      this.playbackRate = 2.5;
    } else if (timeRemaining <= 4 && timeRemaining > 3) {
      this.playbackRate = 2;
    } else if (timeRemaining <= 3 && timeRemaining > 1) {
      this.playbackRate = 1.5;
    } else if (timeRemaining <= 1) {
      this.playbackRate = 0.5;
      this.pause();
    }
  });
}
}
</script>

<style scoped lang="scss">
.hero-image-container {
  height: 100vh;
}
.hero-image-container:before {
  content: "";
  z-index: 1;
  height: 200px;
  background: rgb(255, 255, 255);

  background: linear-gradient(
    180deg,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 1) 100%
  );
}

#myVideo {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100vw;
  object-fit: cover;
  mask-image: linear-gradient(to bottom, black 70%, transparent 100%);
}

.hero-text {
  opacity: 0;
  animation: loaded 8s ease 4s forwards;
  top: 50%;
  left: 50%;
  position: absolute;
  top: 25% !important;
  transform: translate(-50%, -50%);
  z-index: 1;
  text-align: center;
  color: #fff;
  h1 {
    @media only screen and (max-width: 768px) {
      @apply text-2xl w-72;
    }
  }
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
