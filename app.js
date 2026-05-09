var AC='727277',SK='evo2026'+AC,GP='088989727277',WA='6288989727277';
var tg=window.Telegram?.WebApp;if(tg)tg.expand();

var PETS=[
{id:'sprout',name:'Sprout',emoji:'🌱',rarity:'common',atk:5,def:2,hp:30,stage:1},
{id:'bloom',name:'Bloom',emoji:'🌸',rarity:'common',atk:12,def:5,hp:50,stage:2},
{id:'cactus',name:'Cactus',emoji:'🌵',rarity:'common',atk:8,def:8,hp:40,stage:1},
{id:'mushy',name:'Mushy',emoji:'🍄',rarity:'common',atk:6,def:4,hp:35,stage:1},
{id:'shello',name:'Shello',emoji:'🐚',rarity:'common',atk:7,def:6,hp:38,stage:1},
{id:'pincer',name:'Pincer',emoji:'🦀',rarity:'common',atk:9,def:7,hp:42,stage:2},
{id:'buzz',name:'Buzz',emoji:'🐝',rarity:'common',atk:10,def:3,hp:32,stage:1},
{id:'dotty',name:'Dotty',emoji:'🐞',rarity:'common',atk:8,def:5,hp:36,stage:1},
{id:'slimo',name:'Slimo',emoji:'🐌',rarity:'common',atk:5,def:9,hp:45,stage:1},
{id:'finny',name:'Finny',emoji:'🐟',rarity:'common',atk:11,def:4,hp:34,stage:1},
{id:'ribbit',name:'Ribbit',emoji:'🐸',rarity:'common',atk:9,def:6,hp:40,stage:2},
{id:'peep',name:'Peep',emoji:'🐥',rarity:'common',atk:7,def:3,hp:30,stage:1},
{id:'hoppy',name:'Hoppy',emoji:'🐰',rarity:'common',atk:10,def:5,hp:38,stage:1},
{id:'nutty',name:'Nutty',emoji:'🐿️',rarity:'common',atk:8,def:4,hp:33,stage:1},
{id:'shelly',name:'Shelly',emoji:'🐢',rarity:'common',atk:6,def:10,hp:48,stage:2},
{id:'echo',name:'Echo',emoji:'🦇',rarity:'common',atk:12,def:4,hp:35,stage:2},
{id:'army',name:'Army',emoji:'🐜',rarity:'common',atk:7,def:7,hp:36,stage:1},
{id:'wiggle',name:'Wiggle',emoji:'🐛',rarity:'common',atk:5,def:5,hp:32,stage:1},
{id:'wolf',name:'Wolf',emoji:'🐺',rarity:'rare',atk:28,def:8,hp:70,stage:2},
{id:'treant',name:'Treant',emoji:'🌳',rarity:'rare',atk:22,def:12,hp:80,stage:3},
{id:'emberfox',name:'Emberfox',emoji:'🦊',rarity:'rare',atk:26,def:9,hp:68,stage:2},
{id:'nightowl',name:'Nightowl',emoji:'🦉',rarity:'rare',atk:24,def:10,hp:65,stage:2},
{id:'tusk',name:'Tusk',emoji:'🐗',rarity:'rare',atk:27,def:11,hp:72,stage:3},
{id:'skyhawk',name:'Skyhawk',emoji:'🦅',rarity:'rare',atk:29,def:8,hp:66,stage:2},
{id:'bamboo',name:'Bamboo',emoji:'🐼',rarity:'rare',atk:23,def:13,hp:78,stage:3},
{id:'eucali',name:'Eucali',emoji:'🐨',rarity:'rare',atk:21,def:12,hp:75,stage:2},
{id:'lynxie',name:'Lynxie',emoji:'🐱',rarity:'rare',atk:28,def:9,hp:69,stage:2},
{id:'river',name:'River',emoji:'🦦',rarity:'rare',atk:25,def:10,hp:70,stage:3},
{id:'antler',name:'Antler',emoji:'🦌',rarity:'rare',atk:24,def:11,hp:73,stage:2},
{id:'splash',name:'Splash',emoji:'🐬',rarity:'rare',atk:26,def:9,hp:67,stage:3},
{id:'reef',name:'Reef',emoji:'🦈',rarity:'rare',atk:30,def:10,hp:74,stage:3},
{id:'viper',name:'Viper',emoji:'🐍',rarity:'rare',atk:27,def:8,hp:68,stage:2},
{id:'sandcobra',name:'Sandcobra',emoji:'🐍',rarity:'rare',atk:29,def:9,hp:71,stage:3},
{id:'dragon',name:'Dragon',emoji:'🐉',rarity:'epic',atk:40,def:18,hp:120,stage:4},
{id:'phoenix',name:'Phoenix',emoji:'🔥',rarity:'epic',atk:45,def:15,hp:110,stage:3},
{id:'kraken',name:'Kraken',emoji:'🐙',rarity:'epic',atk:42,def:20,hp:125,stage:4},
{id:'unicorn',name:'Unicorn',emoji:'🦄',rarity:'epic',atk:38,def:17,hp:115,stage:3},
{id:'chimera',name:'Chimera',emoji:'🐯',rarity:'epic',atk:44,def:16,hp:118,stage:4},
{id:'stone',name:'Golem',emoji:'🗿',rarity:'epic',atk:35,def:22,hp:130,stage:4},
{id:'frosty',name:'Frosty',emoji:'❄️',rarity:'epic',atk:41,def:18,hp:122,stage:3},
{id:'storm',name:'Storm',emoji:'⚡',rarity:'epic',atk:46,def:15,hp:112,stage:4},
{id:'basilisk',name:'Basilisk',emoji:'🐲',rarity:'epic',atk:43,def:19,hp:124,stage:4},
{id:'leviath',name:'Leviath',emoji:'🐋',rarity:'epic',atk:39,def:21,hp:128,stage:4},
{id:'mantic',name:'Mantic',emoji:'🦁',rarity:'epic',atk:45,def:17,hp:119,stage:3},
{id:'cerby',name:'Cerby',emoji:'🐕‍🦺',rarity:'epic',atk:44,def:18,hp:121,stage:4},
{id:'zeus',name:'Zeus',emoji:'⚡',rarity:'legendary',atk:65,def:20,hp:140,stage:4},
{id:'odin',name:'Odin',emoji:'🪓',rarity:'legendary',atk:68,def:22,hp:145,stage:4},
{id:'amaterasu',name:'Amaterasu',emoji:'☀️',rarity:'legendary',atk:66,def:21,hp:142,stage:4},
{id:'anubis',name:'Anubis',emoji:'⚱️',rarity:'legendary',atk:64,def:23,hp:144,stage:4},
{id:'chronos',name:'Chronos',emoji:'⏳',rarity:'legendary',atk:70,def:20,hp:148,stage:4}
];

var S=JSON.parse(localStorage.getItem('evo76')||'null')||{pf:80,dm:30,en:12,me:20,cd:[],sl:[],ml:[]};

function nC(t,lvl){lvl=lvl||1;var m=1+(lvl-1)*0.08;return{id:t.id,name:t.name,emoji:t.emoji,rarity:t.rarity,stage:t.stage,level:lvl,atk:Math.floor(t.atk*m),def:Math.floor(t.def*m),hp:Math.floor(t.hp*m),uid:Math.random().toString(36).slice(2,9),st:0,hu:100}}
function sv(){localStorage.setItem('evo76',JSON.stringify(S));upUI()}
function upUI(){document.getElementById('pf').textContent=S.pf;document.getElementById('dm').textContent=S.dm;document.getElementById('en').textContent=S.en;document.getElementById('me').textContent=S.me}
function ts(m){document.getElementById('lg').textContent=m}
function fx(){if(!S.cd||S.cd.length===0)S.cd=[nC(PETS[0],2),nC(PETS[1],1),nC(PETS[2],1),nC(PETS[3],1)];if(!S.me)S.me=20;if(S.en>S.me)S.en=S.me;if(!S.ml)S.ml=[];if(!S.sl)S.sl=[]}

setInterval(function(){for(var i=0;i<S.cd.length;i++)S.cd[i].hu=Math.max(0,(S.cd[i].hu||100)-3);sv()},600000);
setInterval(function(){if(S.en<S.me){S.en++;sv()}},300000);

var tc=0;
function tapLogo(){tc++;if(tc>=5){document.getElementById('gameApp').classList.add('hidden');document.getElementById('adminApp').classList.remove('hidden');tc=0;loadWD();loadFees()}setTimeout(function(){tc=0},2000)}
function closeAdmin(){document.getElementById('adminApp').classList.add('hidden');document.getElementById('gameApp').classList.remove('hidden');upUI()}

document.getElementById('tabBar').addEventListener('click',function(e){if(e.target.classList.contains('tab'))sT(e.target.dataset.tab,e.target)});
function sT(tab,el){var tabs=document.querySelectorAll('.tab');for(var i=0;i<tabs.length;i++)tabs[i].classList.remove('active');if(el)el.classList.add('active');var c=document.getElementById('ct');if(tab==='cards')rCd(c);else if(tab==='feed')rFd(c);else if(tab==='breed')c.innerHTML='<p style="color:#94a3b8;font-size:10px;">Pilih 2 kartu di tab Kartu</p><button class="btn btn-primary" onclick="brC()">🧬 Breed (⚡2)</button>';else if(tab==='battle')rBt(c);else if(tab==='market')rMk(c);else if(tab==='shop')rSp(c);}

function rCd(c,page){page=page||0;var per=30,start=page*per,end=Math.min(start+per,S.cd.length);var h='<p style="font-size:9px;color:#94a3b8;">Total: '+S.cd.length+' | Hal '+(page+1)+' | Klik max 2</p><div class="grid">';for(var i=start;i<end;i++){var cd=S.cd[i],sel=S.sl.indexOf(i)>=0?' selected':'',sh='';for(var s=0;s<5;s++)sh+='<span class="'+(s<(cd.st||0)?'on':'off')+'">'+(s<(cd.st||0)?'⭐':'☆')+'</span>';var hu=cd.hu||100,hc=hu>=70?'#22c55e':hu>=30?'#f59e0b':'#ef4444';h+='<div class="card rarity-'+cd.rarity+sel+'" onclick="tC('+i+')"><div class="lvl">Lv'+cd.level+'</div><div class="emoji">'+cd.emoji+'</div><div class="name">'+cd.name+'</div><div class="stars">'+sh+'</div><div class="stats-row">⚔'+cd.atk+' 🛡'+cd.def+'</div><div class="hunger-bar"><div class="hunger-fill" style="width:'+hu+'%;background:'+hc+'"></div></div><span style="font-size:6px;color:#94a3b8;">🍖'+hu+'%</span></div>'}h+='</div>';if(end<S.cd.length)h+='<button class="btn" onclick="rCd(document.getElementById('ct'),'+(page+1)+')">Load more</button>';h+='<button class="btn btn-green" onclick="evC()">✨ Evolve (⭐5)</button><button class="btn btn-red" onclick="seC()">💵 Sell</button>';c.innerHTML=h}

function rFd(c){var fo='<option value="">Pilih...</option>';for(var i=0;i<S.cd.length;i++)fo+='<option value="'+i+'">'+S.cd[i].emoji+' '+S.cd[i].name+' 🍖'+(S.cd[i].hu||100)+'%</option>';c.innerHTML='<div class="feeding-info">🍖 Kartu lapar -3/10 menit | <30% tidak bisa breed</div><h4>🍖 Feeding</h4><select id="ft">'+fo+'</select><div class="feed-opt"><button class="btn" onclick="dF('b')">🍞 💰5</button><button class="btn btn-primary" onclick="dF('m')">🥩 💰15</button><button class="btn btn-blue" onclick="dF('p')">🍰 💎1</button></div>'}
function rBt(c){var bo='<option value="">Pilih...</option>';for(var i=0;i<S.cd.length;i++)bo+='<option value="'+i+'">'+S.cd[i].emoji+' '+S.cd[i].name+'</option>';c.innerHTML='<h4>⚔️ Battle</h4><select id="bc">'+bo+'</select><button class="btn btn-green" onclick="sB()">Battle (⚡3)</button><p style="font-size:9px;">Menang +15💰 +2💎 +2⭐</p>'}
function rMk(c){c.innerHTML='<h4>🏪 Pasar</h4><button class="btn btn-primary" onclick="lsMk()">📤 Jual</button><input id="mp" type="number" value="10"><div id="mk">'+gMk()+'</div>'}
function rSp(c){c.innerHTML='<div class="pack-title">🎁 BOOSTER</div><button class="btn btn-primary" onclick="bP(1,10)">🥉 Silver (1) - 10💎</button><button class="btn btn-gold" onclick="bP(3,25)">🥈 Gold (3) - 25💎</button><button class="btn btn-purple" onclick="bP(5,50)">🥇 Platinum (5+1) - 50💎</button><div id="pr" style="text-align:center;margin:6px;font-size:20px"></div><hr><button class="btn btn-blue" onclick="bD()">💰 120💎 (Rp15K)</button><button class="btn btn-green" onclick="bE()">⚡ 10 Energi (5💎)</button><button class="btn btn-gold" onclick="bG()">🪙 500 Profit (10💎)</button><button class="btn" onclick="rd()">🎟️ Redeem</button><hr><button class="btn btn-red" onclick="wD()">💸 WD 💎→Rp<br><small>100💎=Rp10K</small></button>'}

function tC(i){var p=S.sl.indexOf(i);if(p>=0)S.sl.splice(p,1);else if(S.sl.length<2)S.sl.push(i);rCd(document.getElementById('ct'))}
function brC(){if(S.sl.length!==2)return ts('⚠️ Pilih 2!');if(S.en<2)return ts('⚡ Kurang!');var s=S.sl.slice().sort(function(a,b){return b-a}),p1=S.cd[s[0]],p2=S.cd[s[1]];if((p1.hu||100)<30||(p2.hu||100)<30)return ts('😰 Lapar!');S.cd.splice(s[0],1);S.cd.splice(s[1],1);var ns=Math.floor((p1.level+p2.level)/2)+1;if(ns>4)ns=4;var cand=PETS.filter(function(c){return c.stage===ns});if(!cand.length)cand=PETS;var b=nC(cand[Math.floor(Math.random()*cand.length)],ns);S.cd.push(b);S.en-=2;S.sl=[];sv();ts('🧬 '+b.emoji+' '+b.name)}
function evC(){if(S.sl.length!==1)return ts('⚠️ Pilih 1!');var i=S.sl[0],c=S.cd[i];if((c.st||0)<5)return ts('⭐ '+(c.st||0)+'/5');if(S.pf<10)return ts('💰 Kurang!');S.pf-=10;c.level=Math.min(4,c.level+1);c.atk=Math.floor(c.atk*1.15);c.def=Math.floor(c.def*1.15);c.hp=Math.floor(c.hp*1.15);c.st=0;c.hu=100;S.sl=[];sv();ts('✨ Lv'+c.level+'!')}
function seC(){if(!S.sl.length)return ts('⚠️ Pilih!');var s=S.sl.slice().sort(function(a,b){return b-a}),tot=0;s.forEach(function(i){tot+=S.cd[i].atk+S.cd[i].def;S.cd.splice(i,1)});S.pf+=tot;S.sl=[];sv();ts('💵 +'+tot)}
function dF(tp){var i=parseInt(document.getElementById('ft').value);if(isNaN(i)||!S.cd[i])return ts('⚠️ Pilih!');var c=S.cd[i],cost,hg,sc;if(tp==='b'){cost=5;hg=30;sc=0.25;if(S.pf<cost)return ts('💰');S.pf-=cost}else if(tp==='m'){cost=15;hg=60;sc=0.45;if(S.pf<cost)return ts('💰');S.pf-=cost}else{cost=1;hg=100;sc=0.7;if(S.dm<cost)return ts('💎');S.dm-=cost}c.hu=Math.min(100,(c.hu||50)+hg);if(Math.random()<sc&&(c.st||0)<5){c.st=(c.st||0)+1;ts('⭐+1')}if(S.en>0)S.en-=1;sv();sT('feed')}
function sB(){var i=parseInt(document.getElementById('bc').value);if(isNaN(i)||!S.cd[i])return;if(S.en<3)return ts('⚡ Kurang!');S.en-=3;S.pf+=15;S.dm+=2;var c=S.cd[i];if((c.st||0)<5)c.st=Math.min(5,(c.st||0)+2);sv();ts('🏆 +15💰 +2💎')}
function gMk(){if(!S.ml.length)return'<p style="font-size:9px;color:#94a3b8;">Kosong</p>';return S.ml.map(function(l,i){return'<div class="battle-card"><div>'+l.emoji+' '+l.name+' Lv'+l.level+'</div><div>💎'+l.price+' <button class="btn btn-green" style="padding:3px 6px;font-size:9px;width:auto" onclick="bMk('+i+')">Beli</button></div></div>'}).join('')}
function lsMk(){if(!S.sl.length)return;var p=parseInt(document.getElementById('mp').value)||10;var s=S.sl.slice().sort(function(a,b){return b-a});s.forEach(function(i){S.ml.push({...S.cd[i],price:p});S.cd.splice(i,1)});S.sl=[];sv();sT('market');ts('📤 Listed!')}
function bMk(i){var l=S.ml[i];if(!l||S.dm<l.price)return ts('💎 Kurang!');S.dm-=l.price;S.cd.push({...l});S.ml.splice(i,1);sv();sT('market')}
function bP(n,cost){if(S.dm<cost)return ts('💎 Butuh '+cost);S.dm-=cost;var res='';for(var i=0;i<n;i++){var r=Math.random(),cand;if(r<0.4)cand=PETS.filter(function(c){return c.rarity==='common'});else if(r<0.7)cand=PETS.filter(function(c){return c.rarity==='rare'});else if(r<0.9)cand=PETS.filter(function(c){return c.rarity==='epic'});else cand=PETS.filter(function(c){return c.rarity==='legendary'});if(!cand.length)cand=PETS;var nc=nC(cand[Math.floor(Math.random()*cand.length)]);S.cd.push(nc);res+='<span style="font-size:22px">'+nc.emoji+'</span> '}if(n>=5){var rare=PETS.filter(function(c){return c.rarity==='rare'||c.rarity==='epic'});var gc=nC(rare[Math.floor(Math.random()*rare.length)]);S.cd.push(gc);res+='<br><b>🎁 Bonus:</b> '+gc.emoji+' '+gc.name+' ('+gc.rarity+')'}document.getElementById('pr').innerHTML=res;sv();ts('🎁 '+n+' pet!')}
function bD(){var code='EVO'+Math.floor(Math.random()*9000+1000);var modal=document.createElement('div');modal.innerHTML='<div style="position:fixed;inset:0;background:rgba(0,0,0,0.85);display:flex;align-items:center;justify-content:center;z-index:2000"><div style="background:#1e293b;border:2px solid #475569;border-radius:14px;padding:14px;max-width:320px;text-align:center"><b>💰 Rp15.000</b><br>GoPay: '+GP+'<br>Ref: '+code+'<br><button class="btn btn-primary" onclick="window.open('https://wa.me/'+WA+'?text=Bayar%20'+code+'')">WA Admin</button><button class="btn" onclick="this.parentElement.parentElement.remove()">Close</button></div></div>';document.body.appendChild(modal.firstChild)}
function bE(){if(S.dm<5)return ts('💎 Butuh 5');S.dm-=5;S.en=Math.min(S.me,S.en+10);sv();ts('⚡ +10')}
function bG(){if(S.dm<10)return ts('💎 Butuh 10');S.dm-=10;S.pf+=500;sv();ts('🪙 +500')}
function rd(){var code=prompt('Kode:');if(!code)return;try{var raw=atob(code),p=raw.split('|'),d=p[0],ts2=p[1];if(btoa(d+'|'+ts2+'|'+SK).replace(/=/g,'')!==code)return ts('❌');var used=JSON.parse(localStorage.getItem('evoU')||'[]');if(used.indexOf(code)>=0)return ts('⚠️ Sudah');S.dm+=parseInt(d);used.push(code);localStorage.setItem('evoU',JSON.stringify(used));sv();ts('🎉 +'+d+'💎')}catch(e){ts('❌')}}
function wD(){if(S.dm<100)return ts('💎 Min 100!');var amt=Math.floor(S.dm/100)*100;var rp=Math.floor(amt/100)*10000;var rek=prompt('No GoPay/BCA:\n\nTukar '+amt+'💎 = Rp'+rp.toLocaleString());if(!rek)return;if(confirm('Konfirmasi?')){S.dm-=amt;sv();var w=JSON.parse(localStorage.getItem('evoWD')||'[]');w.push({amt:amt,rp:rp,rek:rek,time:new Date().toLocaleString(),status:'Pending'});localStorage.setItem('evoWD',JSON.stringify(w));ts('✅ WD dikirim!')}}

function adminLogin(){if(document.getElementById('adminPass').value===AC){document.getElementById('adminLogin').classList.add('hidden');document.getElementById('adminPanel').classList.remove('hidden');loadAd();loadWD();loadFees()}}
function genCode(){var d=document.getElementById('genDia').value||120,n=document.getElementById('genNote').value||'',ts2=Date.now(),code=btoa(d+'|'+ts2+'|'+SK).replace(/=/g,'');document.getElementById('genOut').innerHTML='<div class="codebox">'+code+'</div><button class="btn" onclick="navigator.clipboard.writeText(''+code+'')">📋 Copy</button>';var h=JSON.parse(localStorage.getItem('evoH')||'[]');h.unshift({code,d,note:n,time:new Date().toLocaleString()});localStorage.setItem('evoH',JSON.stringify(h.slice(0,50)));loadAd()}
function loadAd(){document.getElementById('histList').innerHTML=JSON.parse(localStorage.getItem('evoH')||'[]').map(function(h){return'<div style="padding:3px;border-bottom:1px solid #334155">'+h.time+' - '+h.d+'💎<br><span style="font-size:8px">'+h.code+'</span></div>'}).join('')}
function loadWD(){var w=JSON.parse(localStorage.getItem('evoWD')||'[]');document.getElementById('wdList').innerHTML=w.map(function(x,i){var c=x.status==='Done'?'#22c55e':'#facc15';return'<div style="padding:4px;border-bottom:1px solid #334155">'+x.time+'<br>'+x.amt+'💎 = Rp'+x.rp.toLocaleString()+'<br>Rek: '+x.rek+'<br><span style="color:'+c+'">'+x.status+'</span> '+(x.status==='Pending'?'<button class="btn btn-green" style="padding:2px 5px;font-size:8px;width:auto" onclick="dnW('+i+')">✅</button>':'')+'</div>'}).join('')||'<span style="color:#94a3b8">Tidak ada</span>'}
function dnW(i){var w=JSON.parse(localStorage.getItem('evoWD')||'[]');if(w[i]){w[i].status='Done';localStorage.setItem('evoWD',JSON.stringify(w));loadWD()}}
function loadFees(){document.getElementById('feeDisplay').textContent=(parseInt(localStorage.getItem('evoFees')||'0'))+' 💎'}

fx();sv();sT('cards',document.querySelector('[data-tab="cards"]'));
