
var tl = [1,2,3,4];

function putObj() {
	v = 1;
	t = tl[Math.floor(Math.random()*(tl.length))];
	if(t==1) {b = [[0,5],[1,5],[2,5],[2,4]];}
	if(t==2) {b = [[0,5],[1,5],[2,5],[3,5]];}
	if(t==3) {b = [[0,5],[1,5],[0,4],[1,4]];}
	if(t==4) {b = [[0,5],[1,5],[1,4],[2,4]];}
	
	if(!canPlaced(b)) {alert('GAME OVER !');}
}

function ObjToGround() {
	
	if(b.length>0) {
		for(i=0;i<b.length;i++) {
			var x = b[i][0];
			var y = b[i][1];
			l[x][y] = t;
		}
	}
	chkLines();
}


function flowObj() {
	if(b.length==0) {return;}
	if(getLowMax()==23 || !canFlow()) {console.log('GR');ObjToGround();putObj();return;}
	for(i=0;i<b.length;i++) {
		b[i][0]+=1;
	}
	draw();
}

function mvObjR() {
	if(getRightMax()==9) {return;}
	if(!canMvR() || b.length==0) {return;}
	for(i=0;i<b.length;i++) {
		b[i][1]+=1;
	}
	draw();
}

function mvObjL() {
	if(getLeftMax()==0) {return;}
	if(!canMvL() || b.length==0) {return;}
	for(i=0;i<b.length;i++) {
		b[i][1]-=1;
	}
	draw();
}




// ===========================


function rtObj() {
	if(b.length==0) {return;}

	if(t==1) {t_1();}
	if(t==2) {t_2();}
	if(t==4) {t_3();}
}



function canPlaced(h) {
	var cn = 1;
	console.log("R:",h);
	for(i=0;i<h.length;i++) {
		var xx = h[i][0];
		var yy = h[i][1];
		if(l[xx][yy]!=0 || yy<0 || yy>9) {console.log("NOT");cn = 0;}
	}

	if(cn==1) {return true;}
	else {return false;}
}























