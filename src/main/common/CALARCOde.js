function Purell(x, t, a=9007199254740991, mi=-9007199254740991){

	if (x.length > 32767)
		x = x.substring(0, 32766);
			
	switch(t){
		case 'i':
			x = parseInt(x);
			if (x>a)
				x=a;
			if (x<mi)
				x=mi;
			return (x);
		case 's':
			if (x.length > a)
				x = x.substring(0, a);
			return (x);
		case 'f':
			x = parseFloat(x);
			if (x>a)
				x=a;
			if (x<mi)
				x=mi;
			return (x);}}
