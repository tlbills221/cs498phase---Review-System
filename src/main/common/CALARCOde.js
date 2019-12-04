const User = require('../models/User')
const user_lib = require('../../../main/lib/user') 

function Purell(x, t, a=9007199254740991, mi=-9007199254740991){
	
	if (typeof(x)!="String")
		x = x.toString() 
	
	if (x.length > 32767)
		x = x.substring(0, 32766)
			
	switch(t){
		case 'i':
			x = parseInt(x)
			if (x>a)
				x=a
			if (x<mi)
				x=mi
			return (x)
		case 's':
			if (x.length > a)
				x = x.substring(0, a)
			return (x)
		case 'f':
			x = parseFloat(x);
			if (x>a)
				x=a
			if (x<mi)
				x=mi
			return (x)}}

const AddUser = async (username) => {
	if (await user_lib.is_whitelisted(username))
		return(1)
	await User.query().insert({ linkblue_username: username })
	return(0)}
	
function randoms() {
  var x = document.getElementById("frm1");
  var i = x.elements[0].value;
  var j = i<100? 10: (i/10); 
  var li = new Array();
  var tmp;
  var tmp2;
  var l;
  for(k=0; k<j; k++){
   tmp2=1;
   tmp = Math.floor((Math.random() * i) + 1);
   for(l = 0; l<k; l++){
    if(tmp == li[l])
     tmp2 = 1;}
   if(tmp2)
    li.push(tmp)
  }
  document.getElementById("out").innerHTML = li;
}
