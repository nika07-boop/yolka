const media = [
  // ==================== МУЗЫКА ====================
  {id:1,type:"music",label:"Музыка",title:"Christmas Classics",icon:"♫",desc:"Классические рождественские хиты для праздничного вечера.",moods:["party","family"],spotify:"37i9dQZF1DX6R7QUWePReA",spotifyType:"playlist"},
  {id:2,type:"music",label:"Музыка",title:"Relaxing Christmas",icon:"♬",desc:"Спокойный рождественский плейлист для уютного вечера.",moods:["cozy","nostalgia"],spotify:"37i9dQZF1DX6pJ4E78jhBi",spotifyType:"playlist"},
  {id:3,type:"music",label:"Музыка",title:"Christmas Jazz",icon:"☾",desc:"Рождественский джаз — свечи, огоньки и мягкий свет.",moods:["cozy","magic"],spotify:"37i9dQZF1DX5D4gDh3HAsM",spotifyType:"playlist"},
  {id:4,type:"music",label:"Музыка",title:"Winter Evenings",icon:"❄",desc:"Инструментальная музыка для зимнего вечера.",moods:["cozy","magic"],spotify:"0M5eZh1QaTLSZGpJEKe82J",spotifyType:"playlist"},
  {id:5,type:"music",label:"Музыка",title:"Cozy Christmas Jazz",icon:"✦",desc:"Тёплый джазовый фон для компании и разговоров.",moods:["cozy","family"],spotify:"37i9dQZF1DWU0r6G8OGirN",spotifyType:"playlist"},
  {id:6,type:"music",label:"Музыка",title:"Праздничные хиты 2026",icon:"★",desc:"Свежая праздничная подборка Spotify.",moods:["party"],spotify:"0cy6DJ0CIg050McHHtRldr",spotifyType:"playlist"},
  {id:48,type:"music",label:"Музыка · русская новогодняя",title:"Русские новогодние песни",icon:"🎄",desc:"Русскоязычные новогодние хиты и знакомые зимние песни — от «Новогодней» до ностальгической классики.",moods:["party","nostalgia","family"],spotify:"32l1oPBt4w6GNCZOghhGgQ",spotifyType:"playlist"},
  {id:49,type:"music",label:"Музыка · Беларусь",title:"Зімова-калядны плэйліст",icon:"✶",desc:"Беларускія калядныя песні, народныя абрадавыя мелодыі і сучасныя зімовыя кампазіцыі.",moods:["cozy","magic","family","study"],spotify:"39oXpLz2bttkoVxqnRIMdI",spotifyType:"playlist"},

  // ==================== КИНО: ИЗБРАННАЯ КЛАССИКА ====================
  {id:7,type:"film",label:"Кино",title:"Один дома",icon:"◉",desc:"Та самая рождественская классика с Кевином.",moods:["nostalgia","family"],link:"https://www.youtube.com/watch?v=Vf0-K3v7J58"},
  {id:8,type:"film",label:"Кино",title:"Один дома 2",icon:"◉",desc:"Кевин снова один — только теперь в Нью-Йорке.",moods:["nostalgia","family"],link:"https://www.kinopoisk.ru/film/8125/"},
  {id:9,type:"film",label:"Кино",title:"Гринч — похититель Рождества",icon:"✦",desc:"Яркая рождественская комедия с Джимом Керри.",moods:["magic","family"],link:"https://www.kinopoisk.ru/film/5056/"},
  {id:10,type:"film",label:"Кино",title:"Реальная любовь",icon:"♥",desc:"Несколько историй любви в Лондоне накануне Рождества.",moods:["cozy","nostalgia"],link:"https://www.kinopoisk.ru/film/6144/"},
  {id:11,type:"film",label:"Кино",title:"Эльф",icon:"❄",desc:"Добрая рождественская комедия про Бадди, который вырос на Северном полюсе.",moods:["family","party"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%AD%D0%BB%D1%8C%D1%84+2003"},
  {id:12,type:"film",label:"Кино",title:"Рождественская история",icon:"✧",desc:"Экранизация классической истории Чарльза Диккенса.",moods:["magic","nostalgia"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%A0%D0%BE%D0%B6%D0%B4%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F+%D0%B8%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F"},
  {id:13,type:"film",label:"Кино",title:"Полярный экспресс",icon:"▣",desc:"Зимнее путешествие на поезде к Северному полюсу.",moods:["magic","family"],link:"https://www.kinopoisk.ru/film/3755/"},
  {id:14,type:"film",label:"Кино",title:"Хроники Нарнии",icon:"✧",desc:"Снег, волшебство и рождественская атмосфера Нарнии.",moods:["magic"],link:"https://www.kinopoisk.ru/film/48162/"},
  {id:15,type:"film",label:"Кино",title:"Гарри Поттер и философский камень",icon:"▣",desc:"Зимняя атмосфера Хогвартса и первая часть любимой серии.",moods:["magic","family"],link:"https://www.kinopoisk.ru/film/689/"},
  {id:16,type:"film",label:"Кино",title:"Клаус",icon:"★",desc:"Современная анимационная рождественская история.",moods:["magic","cozy"],link:"https://www.kinopoisk.ru/film/957887/"},
  {id:17,type:"film",label:"Кино",title:"Рождественские хроники",icon:"🎁",desc:"Приключенческое рождественское кино для компании.",moods:["family","party"],link:"https://www.kinopoisk.ru/film/772380/"},

  // ==================== РУССКИЕ И СОВЕТСКИЕ ====================
  {id:18,type:"film",label:"Кино · СССР",title:"Ирония судьбы, или С лёгким паром!",icon:"❄",desc:"Главная новогодняя классика советского кино.",moods:["nostalgia","family"],link:"https://www.kinopoisk.ru/film/77331/"},
  {id:19,type:"film",label:"Кино · СССР",title:"Карнавальная ночь",icon:"♫",desc:"Праздничная комедия, музыка и пять минут до Нового года.",moods:["party","nostalgia"],link:"https://www.kinopoisk.ru/film/44720/"},
  {id:20,type:"film",label:"Кино · СССР",title:"Морозко",icon:"✦",desc:"Советская сказка. Полный фильм доступен на официальном YouTube-канале Киностудии Горького.",moods:["magic","family"],yt:"TESoWRfVPCc",link:"https://www.youtube.com/watch?v=TESoWRfVPCc"},
  {id:21,type:"film",label:"Кино · СССР",title:"Вечера на хуторе близ Диканьки",icon:"✧",desc:"Рождественская сказка по Гоголю. Полный фильм — на официальном канале Киностудии Горького.",moods:["magic","nostalgia"],yt:"YrsqKUD3Be8",link:"https://www.youtube.com/watch?v=YrsqKUD3Be8"},
  {id:22,type:"film",label:"Кино · СССР",title:"Чародеи",icon:"★",desc:"Новогодний музыкальный фильм о чудесах и любви.",moods:["magic","party"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%A7%D0%B0%D1%80%D0%BE%D0%B4%D0%B5%D0%B8+1982"},
  {id:23,type:"film",label:"Кино · СССР",title:"Снегурочка",icon:"❄",desc:"Музыкальная сказка по пьесе Островского.",moods:["magic","family"],link:"https://www.kinopoisk.ru/film/46555/"},
  {id:24,type:"film",label:"Кино · Россия",title:"Ёлки",icon:"🎄",desc:"Современная российская новогодняя комедия с несколькими историями.",moods:["party","family"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%81%D0%BB%D0%BA%D0%B8+2010"},
  {id:25,type:"film",label:"Кино · Россия",title:"Тариф Новогодний",icon:"☎",desc:"Романтическая история, которая начинается с необычного звонка в Новый год.",moods:["cozy","magic"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%A2%D0%B0%D1%80%D0%B8%D1%84+%D0%9D%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9"},
  {id:26,type:"film",label:"Кино · Россия",title:"Приходи на меня посмотреть",icon:"♥",desc:"Тёплая камерная новогодняя история.",moods:["cozy","family"],link:"https://www.kinopoisk.ru/film/40955/"},

  {id:44,type:"film",label:"Кино · Россия",title:"Новогодний шеф",icon:"★",desc:"Современная российская новогодняя комедия.",moods:["party","family"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%9D%D0%BE%D0%B2%D0%BE%D0%B3%D0%BE%D0%B4%D0%BD%D0%B8%D0%B9+%D1%88%D0%B5%D1%84"},
  {id:45,type:"film",label:"Кино · Россия",title:"Бедная Саша",icon:"♥",desc:"Ностальгическая российская новогодняя комедия.",moods:["nostalgia","family"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%91%D0%B5%D0%B4%D0%BD%D0%B0%D1%8F+%D0%A1%D0%B0%D1%88%D0%B0"},
  {id:46,type:"film",label:"Кино · Россия",title:"СамоИрония судьбы",icon:"❄",desc:"Современная пародийная версия знакомой новогодней истории.",moods:["party","nostalgia"],link:"https://www.kinopoisk.ru/index.php?kp_query=%D0%A1%D0%B0%D0%BC%D0%BE%D0%98%D1%80%D0%BE%D0%BD%D0%B8%D1%8F+%D1%81%D1%83%D0%B4%D1%8C%D0%B1%D1%8B"},
  {id:47,type:"film",label:"Кино · Россия",title:"32 декабря",icon:"✧",desc:"Фантазийная новогодняя комедия с атмосферой праздника.",moods:["magic","nostalgia"],link:"https://www.kinopoisk.ru/index.php?kp_query=32+%D0%B4%D0%B5%D0%BA%D0%B0%D0%B1%D1%80%D1%8F"},

  // ==================== КНИГИ: РУССКАЯ ЛИТЕРАТУРА ====================
  {id:27,type:"book",label:"Книга · русская классика",title:"Мальчик у Христа на ёлке — Достоевский",icon:"✎",desc:"Короткий рождественский рассказ Фёдора Достоевского.",moods:["nostalgia","magic"],link:"https://ilibrary.ru/text/4206/index.html"},
  {id:28,type:"book",label:"Книга · русская классика",title:"Рождественские рассказы — Лейкин",icon:"❧",desc:"Сборник святочных рассказов: «Перед Рождеством», «В Рождество», «На святках» и другие.",moods:["family","nostalgia"],link:"https://mybook.ru/author/nikolaj-lejkin/rozhdestvenskie-rasskazy-6/read/"},
  {id:29,type:"book",label:"Книга · русская классика",title:"Ночь перед Рождеством — Гоголь",icon:"✧",desc:"Рождественская повесть с Вакулой, Оксаной и чертом.",moods:["magic","family"],link:"https://ilibrary.ru/text/1088/p.24/index.html"},
  {id:30,type:"book",label:"Книга · русская классика",title:"Рождественская ночь — русская классика",icon:"☾",desc:"Подборка классических русских текстов о зиме и Рождестве.",moods:["cozy","nostalgia"],link:"https://www.culture.ru/literature/poems/tag-o-zime"},
  {id:31,type:"book",label:"Книга · русская классика",title:"Рождественские рассказы Чехова",icon:"❄",desc:"Идея для чтения вслух: зимняя и святочная проза Чехова и его современников.",moods:["cozy","nostalgia"],link:"https://classica-online.ru/catalog/svyatochnye-rozhdestvenskie-rasskazy-chekhov/"},
  {id:32,type:"book",label:"Книга · русская классика",title:"Рождественская история — Куприн",icon:"✦",desc:"Подборка произведений Александра Куприна для зимнего чтения.",moods:["cozy","family"],link:"https://classica-online.ru/catalog/svyatochnye-rozhdestvenskie-rasskazy-kuprin/"},
  {id:33,type:"book",label:"Книга · русская классика",title:"Дары волхвов — О. Генри",icon:"🎁",desc:"Короткий рассказ о подарке, любви и настоящем смысле Рождества.",moods:["family","nostalgia"],link:"https://ilibrary.ru/text/4317/p.1/index.html"},
  {id:34,type:"book",label:"Книга · мировая классика",title:"Рождественская песнь — Диккенс",icon:"📖",desc:"Одна из самых известных рождественских историй в бесплатной электронной версии.",moods:["magic","nostalgia"],link:"https://nukadeti.ru/skazki/rozhdestvenskaya-pesn-v-proze"},
  {id:35,type:"book",label:"Книга · мировая классика",title:"Сказки Андерсена",icon:"❄",desc:"Зимние истории, включая «Снежную королеву» и «Девочку со спичками».",moods:["magic","family"],link:"https://deti-online.com/skazki/skazki-andersena/"},

  // ==================== БЕЛОРУССКАЯ ЛИТЕРАТУРА ====================
  {id:36,type:"book",label:"Книга · Беларусь",title:"Якуб Колас — Новая зямля",icon:"✧",desc:"Классика белорусской литературы. Электронная версия в библиотеке «Беларуская Палічка». ",moods:["study","nostalgia"],link:"https://knihi.com/Jakub_Kolas/index.html"},
  {id:37,type:"book",label:"Книга · Беларусь",title:"Янка Купала — Два браты",icon:"❧",desc:"Произведение Янки Купалы в электронной белорусской библиотеке.",moods:["study","magic"],link:"https://knihi.com/Janka_Kupala/"},
  {id:38,type:"book",label:"Книга · Беларусь",title:"Максим Богданович — зимняя лирика",icon:"☾",desc:"Белорусская поэзия для тихого зимнего вечера.",moods:["cozy","study"],link:"https://knihi.com/Maksim_Bahdanovic/Zimoj.html"},
  {id:39,type:"book",label:"Книга · Беларусь",title:"Беларуская Палічка — электронная библиотека",icon:"📚",desc:"Большая подборка белорусской классики: Колас, Купала, Богданович и другие авторы.",moods:["study","family"],link:"https://knihi.com/"},

  // ==================== ТРАДИЦИИ ====================
  {id:40,type:"tradition",label:"Традиция",title:"Откуда взялась ёлка?",icon:"✦",desc:"История символа Нового года и рождественских традиций.",moods:["study","nostalgia"],link:"https://ru.wikipedia.org/wiki/Новогодняя_ёлка"},
  {id:41,type:"tradition",label:"Традиция",title:"Белорусские колядные традиции",icon:"❄",desc:"Зимние обряды и колядная традиция Беларуси.",moods:["study","family"],link:"https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BB%D1%8F%D0%B4%D0%BA%D0%B8"},
  {id:42,type:"tradition",label:"Традиция",title:"Новогодний стол",icon:"◇",desc:"Истории блюд и маленькие семейные ритуалы.",moods:["family","study"],link:"https://ru.wikipedia.org/wiki/Новогодний_стол"},
  {id:43,type:"tradition",label:"Традиция",title:"Ёлочная игрушка",icon:"○",desc:"Как менялась традиция украшать ёлку.",moods:["study","nostalgia"],link:"https://ru.wikipedia.org/wiki/Ёлочная_игрушка"}
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
let currentEveningIndex = -1;

(function loadFromUrl(){
  const params = new URLSearchParams(location.search);
  const code = params.get("list");
  if (!code) return;
  try {
    const ids = atob(code.replace(/-/g, "+").replace(/_/g, "/")).split(",").map(Number);
    playlist = ids.map(id => media.find(m => m.id === id)).filter(Boolean);
    localStorage.setItem("yolkaPlaylist", JSON.stringify(playlist));
    setTimeout(() => showToast(`Загружен общий вечер: ${playlist.length} пунктов 🎄`), 500);
  } catch { setTimeout(() => showToast("Ссылка повреждена"), 500); }
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
  el.onclick=()=>openMedia(media[i%media.length].id);
  ornaments.appendChild(el);
});

function renderGrid(){
  const q=document.getElementById("search").value.trim().toLowerCase();
  const list=media.filter(x=>(activeFilter==="all"||x.type===activeFilter)&&(!q||`${x.title} ${x.label} ${x.desc}`.toLowerCase().includes(q)));
  grid.innerHTML=list.map(x=>`<article class="media-card"><div class="media-visual">${x.icon}</div><div class="media-info"><div class="tag">${x.label}</div><h3>${x.title}</h3><p>${x.desc}</p><div class="card-actions"><button class="add-btn" onclick="addToPlaylist(${x.id})">+ В мой вечер</button><button class="open-btn" onclick="openMedia(${x.id})">Открыть</button></div></div></article>`).join("");
}
renderGrid();
document.getElementById("search").addEventListener("input",renderGrid);
document.querySelectorAll(".filter").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".filter").forEach(b=>b.classList.remove("active"));btn.classList.add("active");activeFilter=btn.dataset.filter;renderGrid();});

function save(){localStorage.setItem("yolkaPlaylist",JSON.stringify(playlist));renderPlaylist();}
function addToPlaylist(id){const x=media.find(m=>m.id===id);if(!x)return;if(!playlist.some(p=>p.id===id)){if(playlist.length>=12)return showToast("В плейлисте максимум 12 объектов");playlist.push(x);save();showToast("Добавлено в «Мой вечер» ✨");}else showToast("Уже добавлено");}
function removeFromPlaylist(id){playlist=playlist.filter(x=>x.id!==id);save();}
function renderPlaylist(){
  count.textContent=`${playlist.length} / 12`;
  if(!playlist.length){playlistItems.innerHTML='<div class="empty-playlist">Здесь появятся твои любимые игрушки.<br><span>Добавь их кнопкой «+ в мой вечер».</span></div>';return;}
  playlistItems.innerHTML=playlist.map((x,i)=>`<div class="playlist-row" onclick="openEveningItem(${i})" title="Открыть пункт ${i+1}"><span class="num">${String(i+1).padStart(2,"0")}</span><span class="p-icon">${x.icon}</span><span class="p-name">${x.title}</span><small>${x.label}</small><button class="remove" onclick="event.stopPropagation();removeFromPlaylist(${x.id})">×</button></div>`).join("");
}
renderPlaylist();

function setEveningIndex(index){
  if(!playlist.length)return;
  currentEveningIndex=(index+playlist.length)%playlist.length;
  const x=playlist[currentEveningIndex];
  openMedia(x.id,false);
  updateEveningControls();
}
function openEveningItem(index){setEveningIndex(index);}
function nextEveningItem(){if(playlist.length)setEveningIndex(currentEveningIndex+1);}
function prevEveningItem(){if(playlist.length)setEveningIndex(currentEveningIndex-1);}
function updateEveningControls(){
  const step=document.getElementById("eveningStep");
  const prev=document.getElementById("prevEvening");
  const next=document.getElementById("nextEvening");
  if(!step)return;
  const active=currentEveningIndex>=0 && currentEveningIndex<playlist.length;
  step.textContent=active?`ПУНКТ ${currentEveningIndex+1} ИЗ ${playlist.length}`:"МОЙ ВЕЧЕР";
  prev.disabled=!active||playlist.length<2;next.disabled=!active||playlist.length<2;
}

function igniteTree(){
  const treeWrap=document.querySelector(".hero-tree-wrap");
  if(!treeWrap)return;
  treeWrap.classList.add("tree-lit");
  treeWrap.setAttribute("data-lit","true");
  const caption=treeWrap.querySelector(".tree-caption");
  if(caption)caption.innerHTML='<span class="live-dot"></span> Ёлка сияет · счастливого праздника!';
}
const lightButton=document.querySelector('.hero-actions a[href="#tree"], a.primary-btn[href="#tree"]');
if(lightButton){lightButton.addEventListener("click",()=>{igniteTree();showToast("Ёлка зажглась! ✨🎄");});}

function openMedia(id,keepEvening=true){
  const x=typeof id==="object"?id:media.find(m=>m.id===id);if(!x)return;igniteTree();currentMedia=x;
  if(keepEvening){const idx=playlist.findIndex(p=>p.id===x.id);if(idx>=0){currentEveningIndex=idx;updateEveningControls();}}
  document.getElementById("modalVisual").textContent=x.icon;
  document.getElementById("modalType").textContent=x.label.toUpperCase();
  document.getElementById("modalTitle").textContent=x.title;
  document.getElementById("modalDescription").textContent=x.desc;
  document.getElementById("modalPlaylistBtn").textContent=playlist.some(p=>p.id===x.id)?"✓ В моём вечере":"+ В мой вечер";
  const link=document.getElementById("externalLink");
if(x.type==="film"){
  link.href="https://www.google.com/search?q="+encodeURIComponent(x.title+" смотреть онлайн");
  link.style.display="inline-flex";
  link.textContent="Найти, где смотреть ↗";
}
else if(x.link){
  link.href=x.link;
  link.style.display="inline-flex";
  link.textContent="Открыть источник ↗";
}
else if(x.spotify){
  const kind=x.spotifyType||"track";
  link.href=`https://open.spotify.com/${kind}/${x.spotify}`;
  link.style.display="inline-flex";
  link.textContent="Открыть Spotify ↗";
}
else{
  link.style.display="none";
}
  const player=document.getElementById("player");player.innerHTML="";
  if(x.spotify){const kind=x.spotifyType||"track";const h=kind==="track"?152:352;player.innerHTML=`<iframe src="https://open.spotify.com/embed/${kind}/${x.spotify}?utm_source=generator&theme=0" width="100%" height="${h}" frameborder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" style="border-radius:12px"></iframe>`;}
  else if(x.yt){player.innerHTML=`<iframe src="https://www.youtube.com/embed/${x.yt}?rel=0" title="${x.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;}
  else if(x.audio){player.innerHTML=`<audio controls src="${x.audio}" style="width:100%"></audio>`;}
  document.getElementById("mediaModal").classList.add("open");document.getElementById("mediaModal").setAttribute("aria-hidden","false");document.body.classList.add("modal-open");
}

document.querySelectorAll("[data-close]").forEach(x=>x.onclick=closeModal);
function closeModal(){document.getElementById("mediaModal").classList.remove("open");document.getElementById("mediaModal").setAttribute("aria-hidden","true");document.getElementById("player").innerHTML="";document.body.classList.remove("modal-open");}
document.getElementById("modalPlaylistBtn").onclick=()=>{if(!currentMedia)return;addToPlaylist(currentMedia.id);document.getElementById("modalPlaylistBtn").textContent="✓ В моём вечере";};
document.getElementById("prevEvening").onclick=prevEveningItem;
document.getElementById("nextEvening").onclick=nextEveningItem;
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeModal();if(e.key==="ArrowRight"&&!document.getElementById("mediaModal").classList.contains("open"))return;if(e.key==="ArrowRight")nextEveningItem();if(e.key==="ArrowLeft")prevEveningItem();});

document.querySelectorAll(".mood").forEach(btn=>btn.onclick=()=>{document.querySelectorAll(".mood").forEach(b=>b.classList.remove("selected"));btn.classList.add("selected");activeMood=btn.dataset.mood;const picks=media.filter(x=>x.moods.includes(activeMood)).slice(0,4);const rec=document.getElementById("recommendation");rec.classList.remove("hidden");rec.innerHTML=`<div class="tag">ПОДБОРКА ДЛЯ ТЕБЯ</div><h3 style="font-family:'Cormorant Garamond';font-size:34px;margin:7px 0">Ёлка выбрала ${picks.length} варианта</h3><div class="rec-items">${picks.map(x=>`<div class="rec-item" onclick="openMedia(${x.id})"><span class="rec-icon">${x.icon}</span><span><b>${x.title}</b><small style="display:block;color:var(--muted)">${x.label}</small></span></div>`).join("")}</div>`;rec.scrollIntoView({behavior:"smooth",block:"center"});});
document.getElementById("surpriseBtn").onclick=()=>{const x=media[Math.floor(Math.random()*media.length)];showToast(`Сегодня ёлка советует: ${x.title}`);setTimeout(()=>openMedia(x.id),450);};
document.getElementById("clearPlaylist").onclick=()=>{playlist=[];currentEveningIndex=-1;save();updateEveningControls();showToast("Плейлист очищен");};
document.getElementById("playAll").onclick=()=>{if(!playlist.length){showToast("Сначала добавь несколько игрушек");return;}setEveningIndex(0);};

document.getElementById("shareBtn").onclick=async()=>{
  if(!playlist.length)return showToast("Сначала добавь игрушки в плейлист");
  const ids=playlist.map(x=>x.id).join(",");
  const code=btoa(ids).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/g,"");
  const isLocal=location.protocol==="file:";
  const url=isLocal?`${location.href.split("?")[0]}?list=${code}`:`${location.origin}${location.pathname}?list=${code}`;
  if(isLocal){
    try{await navigator.clipboard.writeText(code);showToast("Код вечера скопирован. После публикации сайта ссылка станет общей 🎄");}
    catch{prompt("Скопируй код вечера:",code);}return;
  }
  try{
    if(navigator.share){await navigator.share({title:"Мой новогодний вечер",text:"Я собрала вечер в «Ёлке-медиатеке» 🎄",url});}
    else{await navigator.clipboard.writeText(url);showToast("Ссылка на вечер скопирована 🎄");}
  }catch(e){if(e?.name!=="AbortError"){try{await navigator.clipboard.writeText(url);showToast("Ссылка на вечер скопирована 🎄");}catch{prompt("Скопируй ссылку и отправь друзьям:",url);}}}
};
document.getElementById("themeBtn").onclick=()=>document.body.classList.toggle("light");
function showToast(t){toast.textContent=t;toast.classList.add("show");clearTimeout(showToast.t);showToast.t=setTimeout(()=>toast.classList.remove("show"),2500);}
updateEveningControls();
