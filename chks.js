function canFlow() {
	var cn = 1;
	for(i=0;i<b.length;i++) {
		var xx = b[i][0];
		var yy = b[i][1];
		if(l[xx+1][yy]!=0) {cn = 0;}
	}
	console.log('CNT FLOW');
	if(cn==1) {return true;}
	else {return false;}
}

function canMvL() {
	var cn = 1;
	for(i=0;i<b.length;i++) {
		var xx = b[i][0];
		var yy = b[i][1];
		if(l[xx][yy-1]!=0) {cn = 0;}
	}
	if(cn==1) {return true;}
	else {return false;}
}

function canMvR() {
	var cn = 1;
	for(i=0;i<b.length;i++) {
		var xx = b[i][0];
		var yy = b[i][1];
		if(l[xx][yy+1]!=0) {cn = 0;}
	}
	if(cn==1) {return true;}
	else {return false;}
}













function getLeftMax() {
	var m = 11;
	for(i=0;i<b.length;i++) {
		if(b[i][1]<m) {m = b[i][1];}
	}
	return m;
}

function getLowMax() {
	var m = 0;
	for(i=0;i<b.length;i++) {
		if(b[i][0]>m) {m = b[i][0];}
	}
	return m;
}

function getRightMax() {
	var m = 0;
	for(i=0;i<b.length;i++) {
		if(b[i][1]>m) {m = b[i][1];}
	}
	return m;
}









