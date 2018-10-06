window.onload=function()
{
	var wrap=document.getElementsByClassName('wrap')[0];
	var imgs=wrap.getElementsByTagName('a');
	var prev=document.getElementById('prev');
	var next=document.getElementById('next');
	var i=0;
	var timer=setInterval(function(){
		imgs[i%9].style.display='none';
		i++;
		imgs[i%9].style.display='block';
	},1500);
	
	wrap.onmouseover=function(){
		clearInterval(timer);
	}
	wrap.onmouseout=function(){
		timer=setInterval(function(){
		imgs[i%9].style.display='none';
		i++;
		imgs[i%9].style.display='block';
	},1500);
	}
	last.onclick=function(){
		imgs[i%9].style.display='none';
		i=(i+8)%9;
		imgs[i%9].style.display='block';
	}
	next.onclick=function(){
		imgs[i%9].style.display='none';
		i++;
		imgs[i%9].style.display='block';
	}
}