function change(el){
	mx = el.querySelector("progress").max;
	vl = el.querySelector("progress").value;
	p = el.querySelector("p");
	p.style.opacity = "1";
	p.innerHTML = vl + "/" + mx;
	var ob = el.querySelector("div");
	tot = 100*vl/mx;
	ob.style.width = tot + "%";
}
function unchange(el){
	var ob = el.querySelector("div");
	ob.style.width = "100%";
	p = el.querySelector("p");
	p.style.opacity = "0";
	p.innerHTML = "";
}
function dt(){
	var t = new Date();
	var f = new Date(2020, 11, 1);
	document.getElementById('date').innerHTML = Math.floor((f-t)/(1000*60*60*24)) + " Days Left";
}