var l = [];
var m = [];
var b = [];
var t;
var score = 0;
var v = 1;
function id(x) {return document.getElementById(x);}

function setup() {
	for(i=0;i<24;i++) {
		l.push([0,0,0,0,0,0,0,0,0,0]);
		m.push([0,0,0,0,0,0,0,0,0,0]);
	}
}

function draw() {

	for(i=0;i<24;i++) {for(j=0;j<10;j++) {m[i][j] = l[i][j];}}

	if(b.length>0) {
		for(i=0;i<b.length;i++) {
			var x = b[i][0];
			var y = b[i][1];
			m[x][y] = t;
		}
	}

	var x = '';
	for(i=4;i<24;i++) {
		x += '<div class="r">';
		for(j=0;j<10;j++) {
			var typ = m[i][j];
			if(typ==0) {x += '<div class="t_0"></div>';}
			else {x += '<div class="t_x"></div>';}
			
		}
		x += '</div>';
	}

	id('bx').innerHTML = x;
}