

var back = 'back.png';
var tile = ['img0.png','img1.png','img2.png','img3.png','img4.png','img5.png',
'img6.png','img7.png','img8.png','img9.png','img10.png','img11.png'];

function randOrd(a, b){
	return (Math.round(Math.random())-0.5);
} 

var im = []; 
for (var i = 0; i < 12; i++) 
	{
		im[i] = new Image(); 
		im[i].src = tile[i]; 
		tile[i] = '<img src="'+tile[i]+'" width="120" height="120" alt="tile" \/>'; 
		tile[i+12] = tile[i];
		} 


function displayBack(i) {
	document.getElementById('t'+i).innerHTML = '<div onclick="disp('+i+');return false;"><img src="'+back+'" width="120" height="120" alt="back" \/><\/div>';
} 

var ch1, ch2, tmr, tno, tid, cid, cnt; 
window.onload=start; 

function start() {
	for (var i = 0; i <= 23 ;i++) 
		displayBack(i);clearInterval(tid);
		tmr = tno = cnt = 0;
		tile.sort( randOrd );
		cntr(); 
		tid = setInterval('cntr()', 1000);
} 

function cntr() {
	var min = Math.floor(tmr/60);
	var sec = tmr%60;
	document.getElementById('cnt').value = min+':'+ (sec<10 ? '0' : '') + sec;tmr++;
} 

function disp(sel) {
	if (tno>1) {
		clearTimeout(cid); 
		conceal();
	}

document.getElementById('t'+sel).innerHTML = tile[sel];
if (tno==0) 
	ch1 = sel;
else {
	ch2 = sel;  
	cid = setTimeout('conceal()', 900);}tno++;
	} 

function conceal() {
	tno = 0; 
	if (tile[ch1] != tile[ch2]) {
		displayBack(ch1);displayBack(ch2);
	} else cnt++; if (cnt >= 15) clearInterval(tid);
}
                    