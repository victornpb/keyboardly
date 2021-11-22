// JavaScript Document

export function enableDragAndResize(parent,createGrabber){
	
	if(typeof parent!="element"){ parent=document; }
	if(typeof createGrabber!="boolean"){ createGrabber=false; }
	
	var elms=parent.getElementsByTagName('*');
	for(var i=0;i<elms.length;i++){
		if(elms[i].className.indexOf('Draggable')!==-1) makeDraggable(elms[i],createGrabber);
		if(elms[i].className.indexOf('Resizable')!==-1) makeResizable(elms[i]);
	}
}

function makeResizable(element){
	var resizer = document.createElement("div");
	resizer.className="RESIZER";
	resizer.onmousedown=resizing;
	element.appendChild(resizer);
	
}

function makeDraggable(element,createGrabber){
	if(createGrabber){
		var grabber = document.createElement("div");
		grabber.className="GRABBER";
		element.appendChild(grabber);
		grabber.onmousedown=dragging;
	}
	else{
		element.onmousedown=dragging;
		element.style.cursor="move";
	}
}

function dragging(e){
	
	//IE fix
	if(!e) e=window.event;
	if(!e.target) e.target=e.srcElement;
	if(!e.preventDefault) e.preventDefault=function(){event.returnValue=false;}
	
	e.preventDefault();	
	var element = e.target;
	
	if(element.className=='GRABBER'){element=element.parentElement;}
	
	var collision = element.className.toUpperCase().indexOf('TRAVERSABLE')===-1;
	var draggable = element.className.toUpperCase().indexOf('DRAGGABLE')!==-1;
	
	//click offset
	var offX = e.clientX - element.offsetLeft;
	var offY = e.clientY - element.offsetTop;
	
	if(draggable)
	document.onmousemove = function(e){
		//IE fix
		if(!e) e=window.event;
		if(!e.preventDefault) e.preventDefault=function(){event.returnValue=false;}
		
		e.preventDefault();
		
		var x = e.clientX - offX;
		var y = e.clientY - offY;

		if(collision){ //obey boundiaries
			var maxX=element.parentElement.clientWidth - element.clientWidth;
			var maxY=element.parentElement.clientHeight - element.clientHeight;
			
			if(x<0) x=0;
			if(y<0) y=0;
			if(x>maxX) x=maxX;
			if(y>maxY) y=maxY;
		}

		element.style.top=y+"px";
		element.style.left=x+"px";
	}
	
	document.onmouseup = function(e){
		document.onmousemove=null;
	}
}

//////////////////////////////////////////////////////////////////////



function resizing(e){
	
	//IE fix
	if(!e) e=window.event;
	if(!e.target) e.target=e.srcElement;
	if(!e.preventDefault) e.preventDefault=function(){event.returnValue=false;}
	
	e.preventDefault();
	var resizer = e.target;	//resizer element
	var element = resizer.parentElement; //element being resized
	
	var collision = element.className.toUpperCase().indexOf('TRAVERSABLE')===-1;
	var resizable = element.className.toUpperCase().indexOf('RESIZABLE')!==-1;
	
	//click offset
	var offX = e.clientX - element.clientWidth;
	var offY = e.clientY - element.clientHeight;
	
	if(resizable)
	document.onmousemove = function(e){
		var element = resizer.parentElement; //element being resized
		var container = element.parentElement; 

		//IE fix
		if(!e) e=window.event;
		if(!e.preventDefault) e.preventDefault=function(){event.returnValue=false;}

		e.preventDefault();

		var x = e.clientX - offX - (resizer.offsetLeft-element.clientWidth);
		var y = e.clientY - offY - (resizer.offsetTop-element.clientHeight);

		if(collision){ //obey boundiaries
			var minX=10;
			var minY=10;
			var maxX=container.clientWidth - element.offsetLeft;
			var maxY=container.clientHeight - element.offsetTop;
			
			if(x<minX) x=minX;
			if(y<minY) y=minY;
			if(x>maxX) x=maxX;
			if(y>maxY) y=maxY;
		}

		element.style.height=y+"px";
		element.style.width=x+"px";
	}
	
	document.onmouseup = function(e){
		document.onmousemove=null;
	}
}