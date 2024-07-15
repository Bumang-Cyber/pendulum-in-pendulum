let pendulum;
let curScene = 1;
let maxScene = 4;
let intervalAnimation = true;
let startDrop = null;

let bobExpendingV = 1.005;

const audioNature = document.getElementById("audioNature");
const audioDream = document.getElementById("audioDream");
const audioForgiveMe = document.getElementById("audioForgiveMe");

document.addEventListener("DOMContentLoaded", (event) => {
  const playButton = document.getElementById("playAudioButton");

  const audioNature = document.getElementById("audioNature");
  const audioDream = document.getElementById("audioDream");
  const audioForgiveMe = document.getElementById("audioForgiveMe");

  audioNature.volume = 0;
  audioDream.volume = 0;
  audioForgiveMe.volume = 0;

  // Function to play all audio files
  function playAllAudio() {
    audioNature.play().catch((error) => {
      console.error("Error playing audioNature:", error);
    });
    audioDream.play().catch((error) => {
      console.error("Error playing audioDream:", error);
    });
    audioForgiveMe.play().catch((error) => {
      console.error("Error playing audioForgiveMe:", error);
    });

    console.log("play");
  }

  // Add event listener to the play button
  playButton.addEventListener("click", () => {
    playAllAudio();
    playButton.style.display = "none"; // Hide the button after playing
  });

  navigator.mediaDevices
    .getUserMedia({ video: true })
    .then(function () {
      audioNature.volume = 1;
      audioDream.muted = false;
      audioNature.muted = false;
      audioForgiveMe.muted = false;
    })
    .catch(function (err) {
      console.log("The following error occurred: " + err.name);
    });
});

function setup() {
  createCanvas((innerHeight * IMGWIDTH) / IMGHEIGHT, innerHeight);

  imageMode(CENTER); // 이미지를 중앙에 위치시키기 위해 모드 설정
  // origin, angle, bob, len

  pendulum = new Pendulum();
  setlayerOuter();
  setlayerInner();
}

function draw() {
  const pendulumStatus = pendulum.getPendulumStatus();
  drawBlur(layerOuterImage, "DOWN");
  drawlayerInner();
  drawlayerOuter();

  useSceneController(curScene, { ...pendulumStatus });
}

function useSceneController(scene, { ...props }) {
  if (intervalAnimation) {
    const timeout = setTimeout(() => {
      // Initial Animation
      console.log("Interval Animation Played!");
      curScene = 3;
    }, 15000);
    intervalAnimation = false;
    return;
  }

  // console.log(curScene, "curScene");

  // pendulum의 세부 항목을 각 조건문 안에서 조작할 예정
  const { origin, angle, angleV, angleA, len, bob, gravity, r, way, scenes, round } = props;

  if (scene === 0) {
    setTimeout(() => (curScene = 1), 5000);
    return;
  } else if (scene === 1) {
    pendulum.swingPendulumDecremently();

    const currentMusic = scenes[round % 3].music;
    const nextMusic = scenes[(round + 1) % 3].music;
    intervalMusicPlayer(currentMusic, nextMusic, angle);
  } else if (scene === 2) {
    pendulum.swingPendulumIncremently(1.01, 0.4);
  } else if (scene === 3) {
    pendulum.swingPendulumDecremently();

    console.log(bobExpendingV, "bobExpendingV");
    bobExpendingV *= 1.001;
    if (r > 700) {
      bobExpendingV *= 1.006;
    }
    pendulum.setBobExpand(bobExpendingV);

    if (r > 1500) {
      pendulum.setPendulumSettings(
        createVector(width / 2, -1000), //
        way === "RtL" ? -PI / 2 : PI / 2,
        0,
        0.001,
        1400,
        1,
        400,
        switchWay(way)
      );

      const { color, music } = pendulum.convertScenes();

      colorSwitcher(color);
      musicSwitcher(music);

      curScene = 0;
      startDrop = false;
      intervalAnimation = true;
      bobExpendingV = 1.005;
    }
  }
}

function switchWay(way) {
  if (way === "RtL") {
    return "LtR";
  } else if (way === "LtR") {
    return "RtL";
  }
}

function colorSwitcher(color) {
  document.body.style.backgroundColor = color;
}

function musicSwitcher(music) {
  audioNature.currentTime = 0;
  audioDream.currentTime = 0;
  audioForgiveMe.currentTime = 0;

  switch (music) {
    case "NATURE":
      audioNature.volume = 1;
      audioDream.volume = 0;
      audioForgiveMe.volume = 0;
      return;
    case "DREAM":
      audioNature.volume = 0;
      audioDream.volume = 1;
      audioForgiveMe.volume = 0;
      return;
    case "FORGIVEME":
      audioNature.volume = 0;
      audioDream.volume = 0;
      audioForgiveMe.volume = 1;
      return;
  }
}

function intervalMusicPlayer(currentMusic, nextMusic, angle) {
  if (-0.15 < angle && angle < 0.15) {
    console.log(nextMusic);
    console.log(angle, "angle");

    if (nextMusic === "FORGIVEME") {
      audioForgiveMe.volume = 0.5;
    } else if (nextMusic === "DREAM") {
      audioDream.volume = 0.5;
    } else if (nextMusic === "NATURE") {
      audioNature.volume = 0.5;
    }
  } else {
    if (currentMusic === "FORGIVEME") {
      audioDream.volume = 0;
      audioNature.volume = 0;
    } else if (currentMusic === "DREAM") {
      audioForgiveMe.volume = 0;
      audioNature.volume = 0;
    } else if (currentMusic === "NATURE") {
      audioForgiveMe.volume = 0;
      audioDream.volume = 0;
    }
  }
}
