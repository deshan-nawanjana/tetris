function chkLines() {
	for(i=23;i>-1;i--) {
		var s = 1;
		for(j=0;j<10;j++) {
			if(l[i][j]==0) {s = 0;}
		}
		if(s==1) {console.log("Scored !",i);removeLine(i);return;}
	}
}

function removeLine(n) {
	for(q=23;q>-1;q--) {
		for(t=0;t<10;t++) {
			if(q<=n && (q-1)>-1) {l[q][t] = l[q-1][t];}
		}
	}
	score += 10;
	id('s').innerHTML = score;
	chkLines();
}