// fabg, c#, js or py func, linq
// fgtrs lst
// +, -
const fgtrsLst = ["goku","vegeta","kirin","android17","android18","gohan","trunks","bills","majinboo","cell",
                             "naruto","sasuke","tsunade","orochimaru","pain","obito","itachi","jiraiya","gaara","sai",
                             "captain_marvel","captain_america","thor","ironman","blackwidow","ronin","spiderman","dr.strange","the_hulk","ant-man",
                             "luffy","rayleigh","usop","zoro","sanji","boa_hancock","kaidou","bigmom","shanks","blackbeard",
                             "ryu","ken","dhalsim","blanka","chun-li","guile","akuma","gen","oro","zangief",
                             "cyclops","cable","jean_grey","wolverine","gambit","prof_x","magneto","sabretooth","thanos","galactus",
                             "dr.doom","rocket_racoon","starlord","groot","dante","viewtiful_joe","mask_raider","shaider","robocop","beyonder",
                             "tikbalang","aswang","tiktik","tambaloslos","doppleganger","kapre","white_lady","mankukulam","sigbin","santelmo",
                             "odin","freya","osiris","horus","seth","isis","ra","loki","leprechaun","zeus",
                             "chronos","tyr","apollo","hercules","hades","cerberus","icarus","fawn","djinn","quetzalcotl"
                          ]

//shuffle
const shuffledfgtrsLs = _.shuffle(fgtrsLst);
document.getElementById("res").innerHTML = "Fighter's List: " + shuffledfgtrsLs + "<br><br><br>";
console.log("Fighters List: " + shuffledfgtrsLs);
var prctpnts = _.slice(shuffledfgtrsLs,0,52);
console.log("participants: " + prctpnts + " size: " + _.size(prctpnts));
document.getElementById("res2").innerHTML = "Participants: " + prctpnts + "<br><br><br>";

function fghtUp(prs){
	var hasWinner = false;
	var wnr;
	while(!hasWinner){
	  var f1 = _.random(1);
	  var f2  = _.random(1);
	  //console.log("f1: " + f1);
	  //console.log("f2: " + f2);
	  if(f1 > f2){
	    wnr = prs[0];
	    hasWinner = true;
	    
	   
	  }else if(f2 > f1){
	    wnr = prs[1];
	    hasWinner = true;
	    
	    
	  }else{
	    f1 = 0;
	    f2 = 0;
	    hasWinner = false;
	    
	  }  
	}
	console.log("wnr: " + wnr);
	//document.getElementById("wnr").innerHTML += "wnr: " + wnr + "<br>";
	return wnr;
}

//gt max, put to prtcpnts 'til 1 left 
while(_.size(prctpnts) > 1){
	//pair
	var pairs = _.pullAt(prctpnts,[0,1]);
	console.log(pairs[0] + " ~~vs~~ " + pairs[1]);
	
	
	//fghtUp or cmpr
	var pairWnr = fghtUp(pairs);
	document.getElementById("vs").innerHTML += "<li>" + pairs[0] + " vs. " + pairs[1] + ",  winner: <span id='wnr' class='wnr'>" + pairWnr + "</span></li>";

        //clean pairs	
	pairs = [];	
		
	//pairWnr push to prctpnts
	prctpnts.push(pairWnr);
	//console.log(prctpnts);
		
	//if 1 left declare champ
	if(_.size(prctpnts) == 1){
	
	//announce winner
	console.log("we have a winner");
	document.getElementById("res3").innerHTML = 
	        "*****************************************<br>" +
	       
		"*                                  <br>" + 
		"*&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; CHAMPION: <span id='heroo'>" + prctpnts[0]      +"</span><br>" +
		"*                                   <br>" +
		"*****************************************";
		 
	//then push to word record
	//table: Hero Type Year 
	break;	
	}
	
}
console.log(prctpnts[0]);


