/*
	GPD.JS - GamePad Controller
	Developed By Deshan Nawanjana (DnW)
	http://dn-w.blogspot.com/

*/

var lLoop = false;
var rLoop = false;
var fLoop = false;

function gpdPress(x) {
	if(x==6 || x==3) {rtObj();}


	if(x==1) {mvObjL();setTimeout(function(){if(gpdAXl){lLoop = true;}},200);}
	if(x==2) {mvObjR();setTimeout(function(){if(gpdAXr){rLoop = true;}},200);}
	if(x==4) {flowObj();setTimeout(function(){if(gpdAXd){fLoop = true;}},200);}
	
}

setInterval(function(){
	if(lLoop) {mvObjL();}
	if(rLoop) {mvObjR();}
	if(fLoop) {flowObj();}
},100);



	/*
		1  = AX_LEFT
		2  = AX_RIGHT
		3  = AX_UP
		4  = AX_DOWN
		
		5  = BT_1
		6  = BT_2
		7  = BT_3
		8  = BT_4
		
		9  = SH_L1
		10 = SH_R1
		11 = SH_L2
		12 = SH_R2
		
		13 = BT_SELECT
		14 = BT_START
		
		15 = AX_BT_1
		16 = AX_BT_2
	*/

var gpdRefreshInterval = 1;

var gpdAXu = false;
var gpdAXd = false;
var gpdAXl = false;
var gpdAXr = false;

var gpdBT1 = false;
var gpdBT2 = false;
var gpdBT3 = false;
var gpdBT4 = false;

var gpdSL1 = false;
var gpdSL2 = false;
var gpdSR1 = false;
var gpdSR2 = false;

var gpdSLCT = false;
var gpdSTRT = false;

var	gpdAXB1 = false;
var	gpdAXB2 = false;
	
var gamepads = [];

setInterval(function(){
	gamepads = navigator.getGamepads();
	updGPDStatus();
},gpdRefreshInterval);


function updGPDStatus() {

	if(gamepads.length > 0) {

		if(gamepads[0] === null) { return }
	
		var n_gpdAXl = gamepads[0]["axes"][0] == -1;
		var n_gpdAXr = gamepads[0]["axes"][0] ==  1;
		var n_gpdAXu = gamepads[0]["axes"][1] == -1;
		var n_gpdAXd = gamepads[0]["axes"][1] ==  1;
		
		var n_gpdBT1 = gamepads[0]["buttons"][0]["pressed"];
		var n_gpdBT2 = gamepads[0]["buttons"][1]["pressed"];
		var n_gpdBT3 = gamepads[0]["buttons"][2]["pressed"];
		var n_gpdBT4 = gamepads[0]["buttons"][3]["pressed"];
		
		var n_gpdSL1 = gamepads[0]["buttons"][4]["pressed"];
		var n_gpdSR1 = gamepads[0]["buttons"][5]["pressed"];
		var n_gpdSL2 = gamepads[0]["buttons"][6]["pressed"];
		var n_gpdSR2 = gamepads[0]["buttons"][7]["pressed"];
	
		var n_gpdSLCT = gamepads[0]["buttons"][8]["pressed"];
		var n_gpdSTRT = gamepads[0]["buttons"][9]["pressed"];
		
		var n_gpdAXB1 = gamepads[0]["buttons"][10]["pressed"];
		var n_gpdAXB2 = gamepads[0]["buttons"][11]["pressed"];
		
		if(n_gpdAXl && !gpdAXl)    {gpdPress(1);}
		if(n_gpdAXr && !gpdAXr)    {gpdPress(2);}
		if(n_gpdAXu && !gpdAXu)    {gpdPress(3);}
		if(n_gpdAXd && !gpdAXd)    {gpdPress(4);}
		
		if(n_gpdBT1 && !gpdBT1)    {gpdPress(5);}
		if(n_gpdBT2 && !gpdBT2)    {gpdPress(6);}
		if(n_gpdBT3 && !gpdBT3)    {gpdPress(7);}
		if(n_gpdBT4 && !gpdBT4)    {gpdPress(8);}
		
		if(n_gpdSL1 && !gpdSL1)    {gpdPress(9);}
		if(n_gpdSR1 && !gpdSR1)    {gpdPress(10);}
		if(n_gpdSL2 && !gpdSL2)    {gpdPress(11);}
		if(n_gpdSR2 && !gpdSR2)    {gpdPress(12);}
		
		if(n_gpdSLCT && !gpdSLCT)  {gpdPress(13);}
		if(n_gpdSTRT && !gpdSTRT)  {gpdPress(14);}
		
		if(n_gpdAXB1 && !gpdAXB1)  {gpdPress(15);}
		if(n_gpdAXB2 && !gpdAXB2)  {gpdPress(16);}
	
		if(n_gpdAXl)  {gpdAXl = true;}  else {gpdAXl = false;}
		if(n_gpdAXr)  {gpdAXr = true;}  else {gpdAXr = false;}
		if(n_gpdAXu)  {gpdAXu = true;}  else {gpdAXu = false;}
		if(n_gpdAXd)  {gpdAXd = true;}  else {gpdAXd = false;}
	
		if(n_gpdBT1)  {gpdBT1 = true;}  else {gpdBT1 = false;}
		if(n_gpdBT2)  {gpdBT2 = true;}  else {gpdBT2 = false;}
		if(n_gpdBT3)  {gpdBT3 = true;}  else {gpdBT3 = false;}
		if(n_gpdBT4)  {gpdBT4 = true;}  else {gpdBT4 = false;}
		
		if(n_gpdSL1)  {gpdSL1 = true;}  else {gpdSL1 = false;}
		if(n_gpdSR1)  {gpdSR1 = true;}  else {gpdSR1 = false;}
		if(n_gpdSL2)  {gpdSL2 = true;}  else {gpdSL2 = false;}
		if(n_gpdSR2)  {gpdSR2 = true;}  else {gpdSR2 = false;}
	
		if(n_gpdSLCT) {gpdSLCT = true;} else {gpdSLCT = false;}
		if(n_gpdSTRT) {gpdSTRT = true;} else {gpdSTRT = false;}
		
		if(n_gpdAXB1) {gpdAXB1 = true;} else {gpdAXB1 = false;}
		if(n_gpdAXB2) {gpdAXB2 = true;} else {gpdAXB2 = false;}
		
	if(!gpdAXl) {lLoop = false;}
	if(!gpdAXr) {rLoop = false;}
	if(!gpdAXd) {fLoop = false;}
	}
	
}