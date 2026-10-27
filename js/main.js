const root = document.documentElement;
let lang = "uz", typeTimer;
const save = (k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
const load = k=>{try{return localStorage.getItem(k)}catch(e){return null}};

// ---- Theme ----
const t0 = load("theme") || (matchMedia("(prefers-color-scheme:light)").matches ? "light" : "dark");
root.setAttribute("data-theme", t0);
document.getElementById("theme").onclick = ()=>{
  const n = root.getAttribute("data-theme")==="dark" ? "light" : "dark";
  root.setAttribute("data-theme", n); save("theme", n);
};

// ---- Language ----
function setLang(l){
  lang = l; root.lang = l; save("lang", l);
  document.getElementById("lang").textContent = l.toUpperCase();
  document.querySelectorAll("[data-i18n]").forEach(e=>e.textContent = I18N[l][e.dataset.i18n]);
  startTyping();
}
document.getElementById("lang").onclick = ()=>setLang(lang==="uz"?"en":"uz");

// ---- Typing effect ----
function startTyping(){
  clearTimeout(typeTimer);
  const el = document.getElementById("typed"), roles = I18N[lang].roles;
  let r=0, c=0, del=false;
  (function tick(){
    const w = roles[r];
    el.textContent = w.slice(0,c);
    if(!del && c===w.length){del=true; typeTimer=setTimeout(tick,1400); return;}
    if(del && c===0){del=false; r=(r+1)%roles.length;}
    c += del ? -1 : 1;
    typeTimer = setTimeout(tick, del?40:90);
  })();
}

// ---- Code card ----
const CODE = {
  cpp:`<span class="k">#include</span> <span class="s">&lt;iostream&gt;</span>

<span class="k">int</span> <span class="f">main</span>() {
  std::cout &lt;&lt; <span class="s">"Hello, World!"</span>;
  <span class="k">return</span> 0;
}`,
  py:`<span class="k">class</span> <span class="f">Developer</span>:
    name = <span class="s">"Suhrobjon Sodiqov"</span>
    skills = [<span class="s">"C++"</span>, <span class="s">"Python"</span>, <span class="s">"JS"</span>]

    <span class="k">def</span> <span class="f">code</span>(self):
        <span class="k">return</span> <span class="s">"Ready to build!"</span>`
};
const view = document.getElementById("codeview");
const show = k=>{view.innerHTML = CODE[k]};
document.querySelectorAll(".tabs button").forEach(b=>b.onclick=()=>{
  document.querySelectorAll(".tabs button").forEach(x=>x.classList.remove("on"));
  b.classList.add("on"); show(b.dataset.tab);
});
show("cpp");

// ---- Marquee, year ----
const words=["C++","Python","JavaScript","HTML","CSS","Algorithms","OOP","Git"];
let h=""; for(let i=0;i<2;i++) words.forEach(w=>h+=`<span>${w}</span><span>{ }</span>`);
document.getElementById("mq").innerHTML = h;
document.getElementById("y").textContent = new Date().getFullYear();

// ---- Cursor glow ----
const glow = document.getElementById("glow");
addEventListener("pointermove", e=>{glow.style.left=e.clientX+"px"; glow.style.top=e.clientY+"px"});

// ---- Reveal, skill bars, counters ----
const io = new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting) return;
  e.target.classList.add("on");
  e.target.querySelectorAll("[data-w]").forEach(b=>b.style.width=b.dataset.w+"%");
  e.target.querySelectorAll("[data-count]").forEach(n=>{
    const to=+n.dataset.count; let v=0;
    const id=setInterval(()=>{v+=Math.ceil(to/40); if(v>=to){v=to; clearInterval(id)} n.textContent=v},30);
  });
  io.unobserve(e.target);
}),{threshold:.2});
document.querySelectorAll(".rv").forEach(e=>io.observe(e));

// ---- Falling code symbols background ----
const cv=document.getElementById("bg"), ctx=cv.getContext("2d");
let cols=[], sy=["{","}","<",">","/","#",";","0","1","()","[]"];
function resize(){cv.width=innerWidth; cv.height=innerHeight; cols=Array(Math.floor(innerWidth/28)).fill(0).map(()=>Math.random()*innerHeight)}
resize(); addEventListener("resize",resize);
setInterval(()=>{
  ctx.clearRect(0,0,cv.width,cv.height);
  ctx.font="16px JetBrains Mono, monospace";
  ctx.fillStyle=getComputedStyle(root).getPropertyValue("--mut");
  cols.forEach((y,i)=>{
    ctx.fillText(sy[Math.floor(Math.random()*sy.length)], i*28, y);
    cols[i] = y>cv.height+Math.random()*2000 ? 0 : y+18;
  });
},120);

setLang(load("lang")||"uz");
