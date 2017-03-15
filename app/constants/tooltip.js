import React from 'react';

export default class TestNewCompo extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			top:0,
			left:0,
		};
	}
	getOffset(el){
		/*var _x = 0;
		var _y = 0;
		console.log(el)
		while( el && !isNaN( el.offsetLeft ) && !isNaN( el.offsetTop ) ) {
		    _x += el.offsetLeft - el.scrollLeft;
		    _y += el.offsetTop - el.scrollTop;
		    el = el.offsetParent;
		}
		console.log(_x,_y)
		return { top: _y, left: _x };*/
		/*console.log('22',el.clientWidth,el.clientHeight)*/
		let elementWidth = el.clientWidth;
		let elementHeight = el.clientHeight;
		let windowWidth = window.innerWidth;
		let windowHeight = window.innerHeight;
		/*console.log('25',windowWidth,windowHeight)*/
		let p = {};
        p.x = el.offsetLeft;
        p.y = el.offsetTop;
        while (el.offsetParent) {
            p.x = p.x + el.offsetParent.offsetLeft;
            p.y = p.y + el.offsetParent.offsetTop;
            if (el == document.getElementsByTagName("body")[0]) {
                break;
            }
            else {
                el = el.offsetParent;
            }
        }
        /*console.log(windowHeight,elementHeight,p.y)*/
        p.bottom = windowHeight - (p.y + elementHeight) ;
        p.right = p.x + elementWidth;
        if(this.props.style && this.props.style.width){
        	console.log(parseInt(this.props.style.width))
        	p.left = p.x - parseInt(this.props.style.width);
        }else{
        	p.left = p.x - 120;
        }
        return p;
	}
	componentDidMount(){
		let allClass = document.getElementsByClassName(this.props.datafor);
		for(let i=0; i< allClass.length; i++){
			document.getElementsByClassName(this.props.datafor)[i].onmouseover = ()=>{
				//let  el = document.getElementById(this.props.datafor);
				let el = document.getElementsByClassName(this.props.datafor)[i];
				let position = this.getOffset(el);
				console.log('60',position)
				let tooltipElement = document.getElementsByClassName('tooltiptext')[0];
				if(this.props.style && Object.keys(this.props.style).length !== 0){
					for(let key in this.props.style){
						tooltipElement.style[key] = this.props.style[key];	
					}
				}
				//,`${position.x}px`
				tooltipElement.style.position = "absolute";
				if((this.props.position && this.props.position == 'bottom') || !this.props.position){
					tooltipElement.style.top = `${position.y - 60}px`;
					tooltipElement.style.left = `${position.x}px`;
					tooltipElement.style.bottom = 'auto'
					tooltipElement.classList.add('top-arrow');
					tooltipElement.classList.remove('bottom-arrow');
					tooltipElement.classList.remove('left-arrow');
					tooltipElement.classList.remove('right-arrow');
				}
				else if(this.props.position && this.props.position == 'top'){
					tooltipElement.classList.remove('right-arrow');
					tooltipElement.classList.add('bottom-arrow');
					tooltipElement.classList.remove('top-arrow');
					tooltipElement.classList.remove('left-arrow');
					tooltipElement.style.bottom = `${position.bottom + 30}px`;
					tooltipElement.style.left = `${position.x}px`	
				}
				else if(this.props.position && this.props.position == 'right'){
					tooltipElement.classList.remove('right-arrow');
					tooltipElement.classList.remove('top-arrow');
					tooltipElement.classList.remove('bottom-arrow');
					tooltipElement.classList.add('left-arrow');
					tooltipElement.style.top = `${position.y - 100}px`;
					tooltipElement.style.left = `${position.right + 60}px`	
				}
				else if(this.props.position && this.props.position == 'left'){
					tooltipElement.classList.remove('left-arrow');
					tooltipElement.classList.remove('top-arrow');
					tooltipElement.classList.remove('bottom-arrow');
					tooltipElement.classList.add('right-arrow');
					tooltipElement.style.top = `${position.y - tooltipElement.offsetHeight - 80}px`;
					tooltipElement.style.left = `${position.left - 30}px`	
				}
				tooltipElement.innerHTML = (this.props.data)?
				this.props.data:'';
		    	tooltipElement.style.visibility = 'visible';
		    }
		    document.getElementsByClassName(this.props.datafor)[i].onmouseout = ()=>{
		    	let tooltipElement = document.getElementsByClassName('tooltiptext')[0];
		    	tooltipElement.style.visibility = 'hidden';	
		    	tooltipElement.style.width = `${120}px`;
		    	tooltipElement.style.backgroundColor = 'black';
		    	tooltipElement.style.color = '#fff';
		    	tooltipElement.style.textAlign = 'center'
		    	tooltipElement.style.padding = `${5}px ${0}`;
			    tooltipElement.style.borderRadius = `${6}px`;
			    tooltipElement.style.position = 'absolute';
			    tooltipElement.style.zIndex = 1;
			    tooltipElement.style.top = `auto`;
				tooltipElement.style.left = `auto`;
				tooltipElement.style.bottom = `auto`;
				tooltipElement.style.right = `auto`;
		    }
    	}
	}

	render(){
		let tooltipStyle = {
			fontSize:14,
			fontFamily:'Roboto-Regular',
			backgroundColor:'black',
			color:'#fff',
		}

		return(
			  	<span className="tooltiptext" style={tooltipStyle}></span>	
		)
	}
}