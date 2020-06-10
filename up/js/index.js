
//tab返回顶部
function GoTop(){
    $('body,html').animate({ scrollTop: 0 }, 500);
}
/*切换*/
function playtab(tag,content,stylea,styleb,curr,n){
	for(i=1; i <=n; i++) {
		if (i==curr){
			document.getElementById(tag+i).className=stylea;  
			document.getElementById(content+i).style.display="block";
			}else{ 
			document.getElementById(tag+i).className=styleb;
			document.getElementById(content+i).style.display="none";
			}
	}
}

