const media = [
  // ==================== МУЗЫКА ====================
  {id:1,type:"music",label:"Музыка",title:"Christmas Classics",icon:"♫",
   desc:"Большая праздничная подборка классических рождественских хитов в Spotify.",
   moods:["party","family"],
   spotify:"37i9dQZF1DX6R7QUWePReA", spotifyType:"playlist"},

  {id:2,type:"music",label:"Музыка",title:"Relaxing Christmas",icon:"♬",
   desc:"Спокойные инструментальные композиции для тихого зимнего вечера.",
   moods:["cozy","magic"],
   spotify:"37i9dQZF1DX6pJ4E78jhBi", spotifyType:"playlist"},

  {id:3,type:"music",label:"Музыка",title:"Christmas Jazz",icon:"☾",
   desc:"Тёплый рождественский джаз — музыка для свечей, гирлянд и разговоров.",
   moods:["cozy","magic"],
   spotify:"37i9dQZF1DX5D4gDh3HAsM", spotifyType:"playlist"},

  {id:4,type:"music",label:"Музыка",title:"Winter Evenings",icon:"❄",
   desc:"Атмосферная инструментальная подборка для снега и зимних вечеров.",
   moods:["cozy","nostalgia"],
   spotify:"0M5eZh1QaTLSZGpJEKe82J", spotifyType:"playlist"},

  {id:5,type:"music",label:"Музыка",title:"Cozy Christmas Jazz",icon:"✦",
   desc:"Мягкий праздничный джаз для уютного вечера дома.",
   moods:["cozy","family"],
   spotify:"37i9dQZF1DWU0r6G8OGirN", spotifyType:"playlist"},

  {id:6,type:"music",label:"Музыка",title:"Праздничные хиты 2026",icon:"✧",
   desc:"Современные рождественские песни — когда хочется больше энергии.",
   moods:["party"],
   spotify:"0cy6DJ0CIg050McHHtRldr", spotifyType:"playlist"},

  // ==================== КИНО ====================
  {id:7,type:"film",label:"Кино",title:"Один дома — видео",icon:"◉",
   desc:"Новогодняя классика: видео о фильме и его атмосфере на YouTube.",
   moods:["nostalgia","family"],
   yt:"jEDaVHmw7r4"},

  {id:8,type:"film",label:"Кино",title:"Гарри Поттер",icon:"▣",
   desc:"Волшебство, снег и Хогвартс — трейлер первого фильма на YouTube.",
   moods:["family","cozy","magic"],
   yt:"VyHV0BRtdxo"},

  {id:9,type:"film",label:"Кино",title:"Хроники Нарнии",icon:"✧",
   desc:"Зимняя сказка и вечная зима Нарнии — трейлер на YouTube.",
   moods:["magic"],
   yt:"5djO1XX4zxY"},

  {id:10,type:"film",label:"Кино",title:"Рождественское кино",icon:"❅",
   desc:"Подборка праздничных трейлеров и фильмов на YouTube.",
   moods:["party","family"],
   yt:"pNo-Q0IDJi0"},

  // ==================== КНИГИ ====================
  {id:11,type:"book",label:"Книга",title:"Рождественская песнь",icon:"✎",
   desc:"Чарльз Диккенс. Полный текст бесплатно в Project Gutenberg.",
   moods:["magic","nostalgia","study"],
   link:"https://www.gutenberg.org/ebooks/46"},

  {id:12,type:"book",label:"Книга",title:"Дары волхвов",icon:"❧",
   desc:"О. Генри. Короткий рождественский рассказ, доступный бесплатно онлайн.",
   moods:["family","nostalgia"],
   link:"https://www.gutenberg.org/ebooks/22440"},

  {id:13,type:"book",label:"Книга",title:"Ночь перед Рождеством",icon:"✉",
   desc:"Классическое рождественское стихотворение Клемента Кларка Мура.",
   moods:["family","magic"],
   link:"https://www.gutenberg.org/ebooks/17135"},

  {id:14,type:"book",label:"Книга",title:"Сказки Андерсена",icon:"❄",
   desc:"Сборник сказок, в котором есть «Снежная королева» и «Девочка со спичками».",
   moods:["magic","cozy","nostalgia"],
   link:"https://www.gutenberg.org/ebooks/1597"},

  // ==================== ТРАДИЦИИ ====================
  {id:15,type:"tradition",label:"Традиция",title:"Откуда взялась ёлка?",icon:"✦",
   desc:"История новогодней ёлки и её превращения в главный символ праздника.",
   moods:["study","nostalgia"],
   link:"https://ru.wikipedia.org/wiki/Новогодняя_ёлка"},

  {id:16,type:"tradition",label:"Традиция",title:"Белорусские колядные традиции",icon:"❄",
   desc:"Зимние обряды, колядование и народные праздничные традиции Беларуси.",
   moods:["study","family"],
   link:"https://ru.wikipedia.org/wiki/Коляды"},

  {id:17,type:"tradition",label:"Традиция",title:"Новогодний стол",icon:"◇",
   desc:"История праздничного стола и семейных ритуалов вокруг него.",
   moods:["family","study"],
   link:"https://ru.wikipedia.org/wiki/Новогодний_стол"},

  {id:18,type:"tradition",label:"Традиция",title:"Зимняя ёлочная игрушка",icon:"❋",
   desc:"Как менялись украшения ёлки и почему игрушки стали частью семейной памяти.",
   moods:["nostalgia","study"],
   link:"https://ru.wikipedia.org/wiki/Ёлочная_игрушка"}
];

const ornaments = document.getElementById("ornaments");
const grid = document.getElementById("mediaGrid");
const playlistItems = document.getElementById("playlistItems");
const count = document.getElementById("playlistCount");
const toast = document.getElementById("toast");
let playlist = JSON.parse(localStorage.getItem("yolkaPlaylist") || "[]");
let activeFilter = "all";
let activeMood = null;
let currentMedia = null;

// Загрузка плейлиста из ссылки (?list=...)
(function loadFromUrl(){
  const params = new URLSearchParams(location.search);
  const code = params.get("list");
  if (!code) return;
  try {
    const ids = atob(code.replace(/-/g, "+").replace(/_/g, "/"))
      .split(",").map(Number);
    playlist = ids.map(id => media.find(m => m.id === id)).filter(Boolean);
    localStorage.setItem("yolkaPlaylist", JSON.stringify(playlist));
    setTimeout(() => showToast(`Загружен общий вечер: ${playlist.length} шт. 🎄`), 500);
  } catch {
    setTimeout(() => showToast("Ссылка повреждена"), 500);
  }
})();

const positions = [
  [43,10,"gold"],[30,25,"red"],[59,23,"blue"],[20,39,"cream"],[48,39,"gold"],[72,40,"red"],
  [34,54,"blue"],[62,54,"cream"],[13,61,"gold"],[49,66,"red"],[79,65,"blue"],[31,77,"cream"],
  [56,80,"gold"],[20,84,"red"],[70,84,"cream"]
];
positions.forEach((p,i)=>{
  const el=document.createElement("button");
  el.className=`ornament ${p[2]}`;
  el.style.left=p[0]+"%";el.style.top=p[1]+"%";
  el.title=media[i%media.length].title;
  el.onclick=()=>openMedia(media[i%media.length]);
  ornaments.appendChild(el);
});

function renderGrid(){
  const q=document.getElementById("search").value.trim().toLowerCase();
  const list=media.filter(x=>(activeFilter==="all"||x.type===activeFilter)&&
    (!q || `${x.title} ${x.label} ${x.desc}`.toLowerCase().includes(q)));
  grid.innerHTML=list.map(x=>`
    <article class="media-card">
      <div class="media-visual">${x.icon}</div>
      <div class="media-info">
        <div class="tag">${x.label}</div>
        <h3>${x.title}</h3>
        <p>${x.desc}</p>
        <div class="card-actions">
          <button class="add-btn" onclick="addToPlaylist(${x.id})">+ В мой вечер</button>
          <button class="open-btn" onclick="openMedia(${x.id})">Открыть</button>
        </div>
      </div>
    </article>`).join("");
}
renderGrid();
document.getElementById("search").addEventListener("input",renderGrid);

document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));
  btn.classList.add("active");activeFilter=btn.dataset.filter;renderGrid();
});

function save(){localStorage.setItem("yolkaPlaylist",JSON.stringify(playlist));renderPlaylist();}
function addToPlaylist(id){
  const x=media.find(m=>m.id===id);
  if(!playlist.some(p=>p.id===id)){
    if(playlist.length>=12)return showToast("В плейлисте максимум 12 объектов");
    playlist.push(x);save();showToast("Добавлено в «Мой вечер» ✨");
  }else showToast("Уже добавлено");
}
function removeFromPlaylist(id){playlist=playlist.filter(x=>x.id!==id);save();}
function renderPlaylist(){
  count.textContent=`${playlist.length} / 12`;
  if(!playlist.length){playlistItems.innerHTML='<div class="empty-playlist">Здесь появятся твои любимые игрушки.<br><span>Добавь их кнопкой «+ в мой вечер».</span></div>';return}
  playlistItems.innerHTML=playlist.map((x,i)=>`
    <div class="playlist-row"><span class="num">${String(i+1).padStart(2,"0")}</span><span class="p-icon">${x.icon}</span>
    <span class="p-name">${x.title}</span><small>${x.label}</small>
    <button class="remove" onclick="removeFromPlaylist(${x.id})">×</button></div>`).join("");
}
renderPlaylist();

function openMedia(id){
  const x = typeof id === "object" ? id : media.find(m => m.id === id);
  currentMedia = x;

  document.getElementById("modalVisual").textContent = x.icon;
  document.getElementById("modalType").textContent = x.label.toUpperCase();
  document.getElementById("modalTitle").textContent = x.title;
  document.getElementById("modalDescription").textContent = x.desc;
  document.getElementById("modalPlaylistBtn").textContent =
    playlist.some(p => p.id === x.id) ? "✓ В моём вечере" : "+ В мой вечер";

  const link = document.getElementById("externalLink");
  if (x.link) {
    link.href = x.link;
    link.style.display = "inline-flex";
  } else if (x.yt) {
    link.href = `https://www.youtube.com/watch?v=${x.yt}`;
    link.style.display = "inline-flex";
  } else if (x.spotify) {
    const kind = x.spotifyType || "track";
    link.href = `https://open.spotify.com/${kind}/${x.spotify}`;
    link.style.display = "inline-flex";
  } else {
    link.style.display = "none";
  }

  const player = document.getElementById("player");
  player.innerHTML = "";

  if (x.spotify) {
    const kind = x.spotifyType || "track";
    const h = kind === "track" ? 152 : 352;
    player.innerHTML = `<iframe
      src="https://open.spotify.com/embed/${kind}/${x.spotify}?utm_source=generator&theme=0"
      width="100%" height="${h}" frameborder="0"
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      loading="lazy" style="border-radius:12px"></iframe>`;
  }
  else if (x.yt) {
    player.innerHTML = `<iframe
      src="https://www.youtube.com/embed/${x.yt}?enablejsapi=1&origin=${encodeURIComponent(location.origin)}"
      title="${x.title}"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen></iframe>`;
  }
  else if (x.audio) {
    player.innerHTML = `<audio controls src="${x.audio}" style="width:100%"></audio>`;
  }

  document.getElementById("mediaModal").classList.add("open");
  document.getElementById("mediaModal").setAttribute("aria-hidden","false");
  document.body.style.overflow="hidden";
}

document.querySelectorAll("[data-close]").forEach(x=>x.onclick=closeModal);
function closeModal(){
  document.getElementById("mediaModal").classList.remove("open");
  document.getElementById("player").innerHTML="";
  document.body.style.overflow="";
}
document.getElementById("modalPlaylistBtn").onclick=()=>{addToPlaylist(currentMedia.id);document.getElementById("modalPlaylistBtn").textContent="✓ В моём вечере"};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal()});

document.querySelectorAll(".mood").forEach(btn=>btn.onclick=()=>{
  document.querySelectorAll(".mood").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");
  activeMood=btn.dataset.mood;
  const picks=media.filter(x=>x.moods.includes(activeMood)).slice(0,3);
  const rec=document.getElementById("recommendation");
  rec.classList.remove("hidden");
  rec.innerHTML=`<div class="tag">ПОДБОРКА ДЛЯ ТЕБЯ</div><h3 style="font-family:'Cormorant Garamond';font-size:34px;margin:7px 0">Ёлка выбрала ${picks.length} варианта</h3>
  <div class="rec-items">${picks.map(x=>`<div class="rec-item" onclick="openMedia(${x.id})"><span class="rec-icon">${x.icon}</span><span><b>${x.title}</b><small style="display:block;color:var(--muted)">${x.label}</small></span></div>`).join("")}</div>`;
  rec.scrollIntoView({behavior:"smooth",block:"center"});
});

document.getElementById("surpriseBtn").onclick=()=>{
  const x=media[Math.floor(Math.random()*media.length)];
  showToast(`Сегодня ёлка советует: ${x.title}`);
  setTimeout(()=>openMedia(x.id),450);
};
document.getElementById("clearPlaylist").onclick=()=>{playlist=[];save();showToast("Плейлист очищен")};
document.getElementById("playAll").onclick=()=>{
  if(!playlist.length){showToast("Сначала добавь несколько игрушек");return}
  openMedia(playlist[0].id);
};

document.getElementById("shareBtn").onclick = async () => {
  if (!playlist.length) return showToast("Сначала добавь игрушки в плейлист");

  const ids = playlist.map(x => x.id).join(",");
  const code = btoa(ids).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  const isLocal = location.protocol === "file:";
  const url = isLocal ? "?list=" + code : `${location.origin}${location.pathname}?list=${code}`;
  const shareText = `Мой новогодний вечер в «Ёлке-медиатеке» 🎄\n${isLocal ? "Открой сайт через хостинг и отправь эту ссылку друзьям:" : "Присоединяйся к моему новогоднему вечеру:"}`;

  // На телефоне/планшете используем системное меню «Поделиться».
  if (!isLocal && navigator.share) {
    try {
      await navigator.share({title:"Мой вечер · Ёлка-медиатека", text:shareText, url});
      showToast("Готово — можно отправить друзьям 🎄");
      return;
    } catch (err) {
      if (err && err.name === "AbortError") return;
    }
  }

  // Универсальный вариант: копируем ссылку в буфер обмена.
  try {
    await navigator.clipboard.writeText(isLocal ? code : url);
    showToast(isLocal ? "Код вечера скопирован — сайт нужно разместить онлайн 🎄" : "Ссылка на вечер скопирована 🎄");
  } catch {
    prompt(isLocal ? "Скопируй код вечера:" : "Скопируй ссылку и отправь друзьям:", isLocal ? code : url);
  }
};

document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("light");
function showToast(t){toast.textContent=t;toast.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove("show"),2200)}