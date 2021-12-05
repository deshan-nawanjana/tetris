function t_2() {
		nb = [];
		for(i=0;i<b.length;i++){nb.push([b[i][0],b[i][1]]);}
		if(v==1) {
			nb[0][0] = nb[0][0] +1;
			nb[0][1] = nb[0][1] -2;

			nb[1][0] = nb[1][0] +0;
			nb[1][1] = nb[1][1] -1;

			nb[2][0] = nb[2][0] -1;
			nb[2][1] = nb[2][1] +0;

			nb[3][0] = nb[3][0] -2;
			nb[3][1] = nb[3][1] +1;
			
			console.log("TRY ROTATE : ",b,nb);
			if(canPlaced(nb)) {b = nb;v = 2;draw();}
			return;
		}
		if(v==2) {
			nb[0][0] = nb[0][0] -1;
			nb[0][1] = nb[0][1] +2;

			nb[1][0] = nb[1][0] +0;
			nb[1][1] = nb[1][1] +1;

			nb[2][0] = nb[2][0] +1;
			nb[2][1] = nb[2][1] +0;

			nb[3][0] = nb[3][0] +2;
			nb[3][1] = nb[3][1] -1;
			
			console.log("TRY ROTATE : ",b,nb);
			if(canPlaced(nb)) {b = nb;v = 3;draw();}
			return;
		}
		if(v==3) {
			nb[0][0] = nb[0][0] +1;
			nb[0][1] = nb[0][1] -2;

			nb[1][0] = nb[1][0] +0;
			nb[1][1] = nb[1][1] -1;

			nb[2][0] = nb[2][0] -1;
			nb[2][1] = nb[2][1] +0;

			nb[3][0] = nb[3][0] -2;
			nb[3][1] = nb[3][1] +1;
			
			console.log("TRY ROTATE : ",b,nb);
			if(canPlaced(nb)) {b = nb;v = 4;draw();}
			return;
		}
		if(v==4) {
			nb[0][0] = nb[0][0] -1;
			nb[0][1] = nb[0][1] +2;

			nb[1][0] = nb[1][0] +0;
			nb[1][1] = nb[1][1] +1;

			nb[2][0] = nb[2][0] +1;
			nb[2][1] = nb[2][1] +0;

			nb[3][0] = nb[3][0] +2;
			nb[3][1] = nb[3][1] -1;
			
			console.log("TRY ROTATE : ",b,nb);
			if(canPlaced(nb)) {b = nb;v = 1;draw();}
			return;
		}
}