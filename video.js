
const videoLinks = [
  "https://mega.nz/file/OZ0mQZJL#2c7C_GRb6s2qMuyRZImRVi_GrkHZaCR5ILYHUOYgCg0",
  "https://mega.nz/file/XY0URIpJ#Kil9NRKtKq-gyJkgPUxBzHHx3TFtzxt3pxybeHsT2os",
  "https://mega.nz/file/jItynBKC#y4UFKz6l3toObrPSLdNmNv2w2nJ_oQwQR0WupspZIV4",
  "https://mega.nz/file/jJdAwYqS#hgFR3XSD8NmF-BSY-uvSbObS2qkAwQNv7B-58nNtkF8",
  "https://mega.nz/file/zd02QTjB#vw3BJ5fz-QWi-Pqww1tjqFrysizWTYWXcjocZKy6TzM"
];

const videoList = document.getElementById("video-list");
const playerContainer = document.getElementById("player-container");
const videoPlayer = document.getElementById("video-player");

videoLinks.forEach(link => {
  const div = document.createElement("div");
  div.className = "video-item";
  div.innerText = link.split("/").pop().split("#")[0];
  div.onclick = () => {
    videoPlayer.src = link.replace("/file/", "/embed/").replace("#", "#");
    playerContainer.style.display = "flex";
  };
  videoList.appendChild(div);
});

function closePlayer() {
  videoPlayer.src = "";
  playerContainer.style.display = "none";
}
