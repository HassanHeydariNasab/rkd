document.addEventListener('deviceready', function() {
  navigator.splashscreen.hide();
});
function renkontoj() {
window.location.href = "renkontoj.html";
}
function renkonto(n) {
window.location.href = "renkonto.html?n="+n;
}
function agordoj() {
window.location.href = "agordoj.html";
}
var fontSize = window.localStorage.getItem("fontSize");
var lingvo = window.localStorage.getItem("lingvo");
var url=window.location.href;
if (url.indexOf('?n=') > -1){
    n = url.split('?')[1].replace('n=','');
    if (lingvo=='fa'){
	document.body.innerHTML = document.body.innerHTML.replace('Reveno', 'بازگشت')
    }
    if (n == '99'){
	function eliri(){
	    window.location.href = "index.html";
	}
    }
    var faView = document.getElementById("fa")
    var eoView = document.getElementById("eo")
    $.get('fa/renkontoFa'+n+'.html', function(dataFa){
	faView.innerHTML=dataFa+"<br><br>";
    }
	 );
    $.get('eo/renkontoEo'+n+'.html', function(dataEo){
	eoView.innerHTML=dataEo;
    }
	 );
    var audio = $(".player");
    audio.attr("src", "audio/"+n+".mp3")
    var fontSize = window.localStorage.getItem("fontSize");
    eoView.style.fontSize = fontSize+'px';
    faView.style.fontSize = fontSize+'px';

    $(document).ready(function() {
	var settings = {
            progressbarWidth: '50vw',
            progressbarHeight: '8px',
            progressbarColor: 'green',
            progressbarBGColor: '#eeeeee',
            defaultVolume: 1
	};
	$(".player").player(settings);
    });
}

function eliri(){
    window.location.href = "renkontoj.html";
}
function eliri2(){
    window.location.href = "index.html";
}
function eliri3(){
navigator.app.exitApp();
}
function exitAppPopup() {
    if(lingvo=='fa'){
	navigator.notification.confirm(
            'Ĉu vi vere volas eliri?'
            , function(button) {
		if (button == 2) {
                    navigator.app.exitApp();
		} 
            }
            , 'Eliri'
            , 'Ne,Jes'
	);
    }
    else {
	navigator.notification.confirm(
            'آیا واقعاً می‌خواهید خارج شوید؟'
            , function(button) {
		if (button == 2) {
                    navigator.app.exitApp();
		} 
            }
            , 'خروج'
            , 'خیر,بله'
	);
    }	
    return false;
}
document.addEventListener("backbutton", function() {
    if ( $('html').attr('id') == 'main') {
        exitAppPopup();
    } else {
        history.back();             
    }
}, false);


//$(document).ready(function() {


//});

function changeLingvo(){
var l = document.querySelector('input[name="lingvo"]:checked').value;
window.localStorage.setItem("lingvo", l);
}

function changeFontSize(){
var s = document.querySelector('input[id="fonttextbox"]').value;
window.localStorage.setItem("fontSize", s);
}



if ((url.indexOf('agordoj') > -1) && (lingvo=='fa')){
document.body.innerHTML = document.body.innerHTML.replace('Reveno', 'بازگشت').replace('Grandeco de tiparo','اندازه‌ی فونت')
}

if (url.indexOf('agordoj') > -1){
    $("#fonttextbox").val(fontSize);
    var radios = $('input:radio[name=lingvo]');
    if (lingvo == 'fa'){
	radios.filter('[value=fa]').prop('checked', true);
    }
    if (lingvo == 'eo'){
	radios.filter('[value=eo]').prop('checked', true);
    }
}
if ((url.indexOf('index') > -1) && (lingvo=='fa')){
document.body.innerHTML = document.body.innerHTML.replace('Pri ni', 'درباره‌ی ما').replace('Agordoj', 'تنظیمات').replace('Eliri', 'خروج').replace('Legaĵo','مطالعه');
}
if ((url.indexOf('renkontoj') > -1) && (lingvo=='fa')){
document.body.innerHTML = document.body.innerHTML.replace('Reveno', 'بازگشت').replace('Unua renkonto','دیدار اول').replace('Dua renkonto','دیدار دوم').replace('Tria renkonto','دیدار سوم').replace('Kvara renkonto','دیدار چهارم').replace('Kvina renkonto','دیدار پنجم').replace('Sesa renkonto','دیدار ششم').replace('Sepa renkonto','دیدار هفتم').replace('Oka renkonto','دیدار هشتم').replace('Naŭa renkonto','دیدار نهم').replace('Deka renkonto','دیدار دهم').replace('Dekunua renkonto','دیدار یازدهم').replace('Dekdua renkonto','دیدار دوازدهم').replace('Dektria renkonto','دیدار سیزدهم').replace('Dekkvara renkonto','دیدار چهاردهم').replace('Dekkvina renkonto','دیدار پانزدهم').replace('Antaŭ parolo','پیش‌گفتار')
}

