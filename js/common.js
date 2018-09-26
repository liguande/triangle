function triangle(a,b,c){
	var top = ""
	a = parseInt(a)
	b = parseInt(b)
	c = parseInt(c)
	if(a+b>c && b+c>a && a+c>b){
		top = "a";
		if((a!=b)&&(b!=c)&&(a!=c)){
			top = "ac";
			// alert("普通三角形")
		}else{
			top = "ad";
			if(((a==b)&&(b!=c))||((b==c)&&(c!=a))||((c==a)&&(a!=b))){
				top = "ade";
				// alert("等腰三角形")
			}else{
				top = "adf";
				// alert("等边三角形")
			}
		}
	}else{
		top = "b";
		// alert("不是三角形")
	}
	return top;
}