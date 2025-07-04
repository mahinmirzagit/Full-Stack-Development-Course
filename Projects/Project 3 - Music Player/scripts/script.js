// const mediaQuery = window.matchMedia("(max-width: 575px)");
// const fallbackPoster =
//   "data:image/svg+xml;base64," +
//   btoa(`
//   <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
//     <rect width="100%" height="100%" fill="#222"/>
//     <text x="50%" y="50%" fill="#fff" font-size="24" text-anchor="middle" alignment-baseline="central">
//     <p style="color:#fff;">No Cover</p>
//     </text>
//   </svg>
// `);
// const tracks = [
//   "36 - Raftaar ft. Karma",
//   "Banjo Bounce - Raftaar X EPR IYER",
//   "Dehshat Ho - Raftaar X Yashraj",
//   "ICE - Raftaar",
//   "Jashan-e-hiphop - Raftaar X Faris Shafi",
//   "Karta Kya Hai - Karma ft. Raftaar",
//   "Munde Hood De - Raftaar ft. Karma",
//   "No China - Raftaar X KR$NA",
//   "Raashah - Raftaar X Badshah",
//   "Rap-ta - Raftaar",
//   "Roke Na Ruke - Howl ft. Zayn",
// ];
// function extractArtistsFromTitle(fullTitle) {
//   const parts = fullTitle.split(" - ");
//   const artistPart = parts[1] || "Unknown Artist";

//   // Split by common separators
//   return artistPart.split(/[,;Xx-&|\/]+/).map((name) => name.trim());
// }

// function addMenuBtn() {
//   let logo = document.querySelector(".logo");
//   logo.style.display = "none";
//   let navlistul = document.querySelector(".navlist>ul");
//   navlistul.innerHTML = `<li></li>`;
//   let menu = document.createElement("li");
//   menu.innerHTML = `<button class="menubtn btn navbtn"><i style="font-size:18px;" class="fa fa-bars"></i></button>`;
//   menu.classList.add("menubtn");
//   navlistul.insertAdjacentElement("afterbegin", menu);
//   console.log("Done");
// }

// function playmusic(musicUrl, track) {
//   track.src = musicUrl;
//   track.play();

//   let poster = document.querySelector(".poster");
//   poster.style.backgroundImage = `url(${musicUrl})`;
//   loadposter(musicUrl, poster, true);
// }

// function loadposter(trackUrl, cardElement, applyToMainPoster = false) {
//   const loader = document.querySelector(".poster-loader");
//   if (applyToMainPoster && loader) loader.style.display = "block";

//   fetch(trackUrl)
//     .then((res) => res.blob())
//     .then((blob) => {
//       jsmediatags.read(blob, {
//         onSuccess: function (tag) {
//           let posterURL = fallbackPoster;

//           if (tag.tags.picture) {
//             const { data, format } = tag.tags.picture;
//             const byteArray = new Uint8Array(data);
//             const blob = new Blob([byteArray], { type: format });
//             posterURL = URL.createObjectURL(blob);
//           }

//           const img = cardElement?.querySelector("img");
//           if (img) img.src = posterURL;

//           if (applyToMainPoster) {
//             const poster = document.querySelector(".poster");
//             if (poster) {
//               poster.style.backgroundImage = `url(${posterURL})`;
//               poster.style.backgroundSize = "cover";
//               poster.style.backgroundPosition = "center";
//             }

//             if (loader) loader.style.display = "none";
//           }

//           const title = tag.tags.title || "Unknown Title";
//           const artist = tag.tags.artist || "Unknown Artist";

//           document.querySelector(".titletext").textContent = title;
//           document.querySelector(".titletext").title = title;
//           document.querySelector(".authortext").textContent = artist;
//           // Update artists list
//           const artistRaw = tag.tags.artist || "Unknown Artist";
//           const artists = artistRaw
//             .split(/[,;&|\/]+/)
//             .map((name) => name.trim());

//           const artistList = document.querySelector(".artists");
//           artistList.innerHTML = ""; // Clear old artists

//           artists.forEach((artist) => {
//             const li = document.createElement("li");
//             li.innerHTML = `
//     <a href="#">${artist}</a>
//     <button class="follow btn ctrlbtn">Follow</button>
//   `;
//             artistList.appendChild(li);
//           });
//         },
//         onError: function (error) {
//           console.warn("No metadata found. Using fallback.");
//           if (applyToMainPoster) {
//             document.querySelector(
//               ".poster"
//             ).style.backgroundImage = `url(${fallbackPoster})`;
//             if (loader) loader.style.display = "none";
//             document.querySelector(".titletext").textContent = "Unknown Title";
//             document.querySelector(".authortext").textContent =
//               "Unknown Artist";
//           }
//           const artistList = document.querySelector(".artists");
//           artistList.innerHTML = `
//   <li>
//     <a href="#">Unknown Artist</a>
//     <button class="follow btn ctrlbtn">Follow</button>
//   </li>
// `;
//         },
//       });
//     })
//     .catch((err) => {
//       console.error("Fetch error:", err);
//       if (applyToMainPoster && loader) loader.style.display = "none";
//     });
// }

// function formatTime(seconds) {
//   const mins = Math.floor(seconds / 60);
//   const secs = Math.floor(seconds % 60);
//   return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
// }

// function main() {
//   if (mediaQuery.matches) addMenuBtn();

//   const currentTimeEl = document.querySelector(".currenttime");
//   const totalTimeEl = document.querySelector(".tracktime");
//   const seekbar = document.querySelector(".seekbar");
//   const seekball = document.querySelector(".seekball");

//   const playPauseBtn = document.querySelector(".playnpause");
//   const nextBtn = document.querySelector(".nexttrack");
//   const prevBtn = document.querySelector(".previoustrack");
//   const downloadBtn = document.querySelector(".download");

//   let currentTrack = new Audio();
//   let trackIndex = 0;
//   const trackUrls = tracks.map((name) => `assets/tracks/${name}.mp3`);

//   for (let i = 0; i < songCards.length; i++) {
//     songCards[i].addEventListener("click", () => {
//       trackIndex = i;
//       loadTrack(trackIndex);
//       playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
//     });
//   }
//   function formatTime(seconds) {
//     const mins = Math.floor(seconds / 60);
//     const secs = Math.floor(seconds % 60);
//     return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
//   }

//   function loadTrack(index) {
//     const url = trackUrls[index];
//     currentTrack.src = url;
//     currentTrack.play();
//     loadposter(url, null, true);
//     updateTrackTimeUI();

//     // Update download button href
//     downloadBtn.onclick = () => {
//       const a = document.createElement("a");
//       a.href = url;
//       a.download = tracks[index] + ".mp3";
//       a.click();
//     };
//   }

//   function updateTrackTimeUI() {
//     currentTrack.addEventListener("loadedmetadata", () => {
//       totalTimeEl.textContent = formatTime(currentTrack.duration);
//     });

//     currentTrack.addEventListener("timeupdate", () => {
//       currentTimeEl.textContent = formatTime(currentTrack.currentTime);
//       seekbar.title = formatTime(currentTrack.currentTime);
//       const percent = (currentTrack.currentTime / currentTrack.duration) * 100;
//       seekball.style.left = `${percent}%`;
//     });
//   }

//   // Auto play next track
//   currentTrack.addEventListener("ended", () => {
//     trackIndex = (trackIndex + 1) % tracks.length;
//     loadTrack(trackIndex);
//   });

//   // Volume slider control
//   const volumeControl = document.querySelector(".volume-control");
//   const volumeSlider = document.querySelector(".volume-slider");
//   const volumeBtn = document.querySelector(".volume");

//   // Toggle slider popup on volume icon click
//   volumeBtn.addEventListener("click", () => {
//     volumeControl.classList.toggle("active");
//   });
//   volumeSlider.addEventListener("input", () => {
//     currentTrack.volume = volumeSlider.value;
//     currentTrack.muted = volumeSlider.value == 0;

//     volumeBtn.innerHTML = currentTrack.muted
//       ? `<i class="fa fa-volume-xmark"></i>`
//       : `<i class="fa fa-volume-high"></i>`;
//   });

//   // Play/Pause Toggle
//   playPauseBtn.addEventListener("click", () => {
//     if (currentTrack.paused) {
//       currentTrack.play();
//       playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
//     } else {
//       currentTrack.pause();
//       playPauseBtn.innerHTML = `<i class="fa fa-circle-play"></i>`;
//     }
//   });

//   // Next track
//   nextBtn.addEventListener("click", () => {
//     trackIndex = (trackIndex + 1) % tracks.length;
//     loadTrack(trackIndex);
//     playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
//   });

//   // Previous track
//   prevBtn.addEventListener("click", () => {
//     trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
//     loadTrack(trackIndex);
//     playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
//   });

//   // Seekbar click
//   seekbar.addEventListener("click", (e) => {
//     const rect = seekbar.getBoundingClientRect();
//     const clickX = e.clientX - rect.left;
//     const percent = clickX / rect.width;
//     currentTrack.currentTime = percent * currentTrack.duration;
//   });

//   // Load all cards and attach click handlers
//   for (const i of tracks) {
//     let ttitle = i.split(" - ");
//     let tracktitle = ttitle[0];
//     let artist = ttitle[1] || "Unknown";
//     let trackUrl = `assets/tracks/${i}.mp3`;

//     let bigcard = document.createElement("div");
//     bigcard.classList.add("bigcard", "made-for-you-card", "songcard");
//     bigcard.title = tracktitle;
//     bigcard.innerHTML = `
//         <button class="playbtn" title="Play">
//           <svg style="display: block" viewBox="0 0 24 24" fill="black" width="20" height="20">
//             <polygon points="6,4 20,12 6,20" />
//           </svg>
//         </button>
//         <img src="default.jpg" alt="cover" />
//         <span class="bigcardtitle" title="${tracktitle} - ${artist}">${tracktitle} - ${artist}</span>
//       `;

//     document.querySelector(".made-for-you").appendChild(bigcard);
//     loadposter(trackUrl, bigcard);
//   }

//   let songCards = document.getElementsByClassName("songcard");

//   for (let i = 0; i < songCards.length; i++) {
//     songCards[i].addEventListener("click", () => {
//       trackIndex = i;
//       loadTrack(trackIndex);
//       playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
//     });
//   }

//   // Slider controls
//   document.querySelector(".leftbtn").addEventListener("click", () => {
//     document.querySelector(".made-for-you").scrollBy({
//       left: -200,
//       behavior: "smooth",
//     });
//   });

//   document.querySelector(".rightbtn").addEventListener("click", () => {
//     document.querySelector(".made-for-you").scrollBy({
//       left: 200,
//       behavior: "smooth",
//     });
//   });
// }
// main();

const mediaQuery = window.matchMedia("(max-width: 575px)");

const fallbackPoster =
  "data:image/svg+xml;base64," +
  btoa(`
  <svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
    <rect width="100%" height="100%" fill="#222"/>
    <text x="50%" y="50%" fill="#fff" font-size="24" text-anchor="middle" alignment-baseline="central">
      No Cover
    </text>
  </svg>
`);

const tracks = [
  "36 - Raftaar ft. Karma",
  "Banjo Bounce - Raftaar X EPR IYER",
  "Dehshat Ho - Raftaar X Yashraj",
  "ICE - Raftaar",
  "Jashan-e-hiphop - Raftaar X Faris Shafi",
  "Karta Kya Hai - Karma ft. Raftaar",
  "Munde Hood De - Raftaar ft. Karma",
  "No China - Raftaar X KR$NA",
  "Raashah - Raftaar X Badshah",
  "Rap-ta - Raftaar",
  "Roke Na Ruke - Howl ft. Zayn",
];

function extractArtistsFromTitle(fullTitle) {
  const parts = fullTitle.split(" - ");
  const artistPart = parts[1] || "Unknown Artist";
  return artistPart
    .split(/[,;&Xx|\/\-]|\s*ft\.\s*/i)
    .map((name) => name.trim())
    .filter((name) => name.length); // optional: remove blanks
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function loadposter(trackUrl, cardElement, applyToMainPoster = false) {
  fetch(trackUrl)
    .then((res) => res.blob())
    .then((blob) => {
      jsmediatags.read(blob, {
        onSuccess: function (tag) {
          let posterURL = fallbackPoster;

          if (tag.tags.picture) {
            const { data, format } = tag.tags.picture;
            const byteArray = new Uint8Array(data);
            const blob = new Blob([byteArray], { type: format });
            posterURL = URL.createObjectURL(blob);
          }

          if (cardElement) {
            const img = cardElement.querySelector("img");
            if (img) img.src = posterURL;
          }

          if (applyToMainPoster) {
            const poster = document.querySelector(".poster");
            poster.style.backgroundImage = `url(${posterURL})`;
            poster.style.backgroundSize = "cover";
            poster.style.backgroundPosition = "center";

            const title = tag.tags.title || "Unknown Title";
            const artist = tag.tags.artist || "Unknown Artist";

            document.querySelector(".titletext").textContent = title;
            document.querySelector(".titletext").title = title;
            document.querySelector(".authortext").textContent = artist;
          }
        },
        onError: function () {
          if (applyToMainPoster) {
            document.querySelector(
              ".poster"
            ).style.backgroundImage = `url(${fallbackPoster})`;
            document.querySelector(".titletext").textContent = "Unknown Title";
            document.querySelector(".authortext").textContent =
              "Unknown Artist";
          }
        },
      });
    });
}

function main() {
  if (mediaQuery.matches) addMenuBtn();

  const playPauseBtn = document.querySelector(".playnpause");
  const nextBtn = document.querySelector(".nexttrack");
  const prevBtn = document.querySelector(".previoustrack");
  const downloadBtn = document.querySelector(".download");

  const currentTimeEl = document.querySelector(".currenttime");
  const totalTimeEl = document.querySelector(".tracktime");
  const seekbar = document.querySelector(".seekbar");
  const seekball = document.querySelector(".seekball");

  const volumeControl = document.querySelector(".volume-control");
  const volumeSlider = document.querySelector(".volume-slider");
  const volumeBtn = document.querySelector(".volume");

  const artistList = document.querySelector(".artists");

  let currentTrack = new Audio();
  let trackIndex = 0;
  const trackUrls = tracks.map((name) => `assets/tracks/${name}.mp3`);

  function loadTrack(index) {
    const trackUrl = trackUrls[index];
    currentTrack.src = trackUrl;
    currentTrack.play();
    loadposter(trackUrl, null, true);
    updateCredits(index);
    updateDownload(index, trackUrl);
    updateTimeUI();
  }

  function updateCredits(index) {
    const artists = extractArtistsFromTitle(tracks[index]);
    artistList.innerHTML = "";
    artists.forEach((artist) => {
      const li = document.createElement("li");
      li.innerHTML = `
        <a href="#">${artist}</a>
        <button class="follow btn ctrlbtn">Follow</button>
      `;
      artistList.appendChild(li);
    });
  }

  function updateDownload(index, url) {
    downloadBtn.onclick = () => {
      const a = document.createElement("a");
      a.href = url;
      a.download = tracks[index] + ".mp3";
      a.click();
    };
  }

  function updateTimeUI() {
    currentTrack.addEventListener("loadedmetadata", () => {
      totalTimeEl.textContent = formatTime(currentTrack.duration);
    });

    currentTrack.addEventListener("timeupdate", () => {
      currentTimeEl.textContent = formatTime(currentTrack.currentTime);
      seekbar.title = formatTime(currentTrack.currentTime);
      const percent = (currentTrack.currentTime / currentTrack.duration) * 100;
      seekball.style.left = `${percent}%`;
    });
  }

  currentTrack.addEventListener("ended", () => {
    trackIndex = (trackIndex + 1) % tracks.length;
    loadTrack(trackIndex);
  });

  playPauseBtn.addEventListener("click", () => {
    if (currentTrack.paused) {
      currentTrack.play();
      playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
    } else {
      currentTrack.pause();
      playPauseBtn.innerHTML = `<i class="fa fa-circle-play"></i>`;
    }
  });

  nextBtn.addEventListener("click", () => {
    trackIndex = (trackIndex + 1) % tracks.length;
    loadTrack(trackIndex);
    playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
  });

  prevBtn.addEventListener("click", () => {
    trackIndex = (trackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(trackIndex);
    playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
  });

  seekbar.addEventListener("click", (e) => {
    const rect = seekbar.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    currentTrack.currentTime = percent * currentTrack.duration;
  });

  volumeBtn.addEventListener("click", () => {
    volumeControl.classList.toggle("active");
  });

  volumeSlider.addEventListener("input", () => {
    currentTrack.volume = volumeSlider.value;
    currentTrack.muted = volumeSlider.value == 0;
    volumeBtn.innerHTML = currentTrack.muted
      ? `<i class="fa fa-volume-xmark"></i>`
      : `<i class="fa fa-volume-high"></i>`;
  });

  // Render track cards
  const container = document.querySelector(".made-for-you");
  tracks.forEach((track, i) => {
    const [title, artist = "Unknown"] = track.split(" - ");
    const card = document.createElement("div");
    card.classList.add("bigcard", "made-for-you-card", "songcard");
    card.title = title;
    card.innerHTML = `
      <button class="playbtn" title="Play">
        <svg style="display: block" viewBox="0 0 24 24" fill="black" width="20" height="20">
          <polygon points="6,4 20,12 6,20" />
        </svg>
      </button>
      <img src="default.jpg" alt="cover" />
      <span class="bigcardtitle" title="${track}">${title} - ${artist}</span>
    `;
    card.addEventListener("click", () => {
      trackIndex = i;
      loadTrack(trackIndex);
      playPauseBtn.innerHTML = `<i class="fa fa-circle-pause"></i>`;
    });
    container.appendChild(card);
    loadposter(trackUrls[i], card);
  });

  // Scroll slider buttons
  document.querySelector(".leftbtn").addEventListener("click", () => {
    container.scrollBy({ left: -200, behavior: "smooth" });
  });

  document.querySelector(".rightbtn").addEventListener("click", () => {
    container.scrollBy({ left: 200, behavior: "smooth" });
  });
}

function addMenuBtn() {
  let logo = document.querySelector(".logo");
  logo.style.display = "none";
  let navlistul = document.querySelector(".navlist>ul");
  navlistul.innerHTML = `<li></li>`;
  let menu = document.createElement("li");
  menu.innerHTML = `<button class="menubtn btn navbtn"><i style="font-size:18px;" class="fa fa-bars"></i></button>`;
  navlistul.insertAdjacentElement("afterbegin", menu);
}

main();
