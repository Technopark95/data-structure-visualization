
/*

Copyright 2020 Anoop Singh, Graphical Structure

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.



*/


var _lines = new Array(); //This array will store all lines (option)
var _canvas = document.createElement('canvas');
var _ctx;
var ele1 , ele2, f=0;
var lineindex =0;
var linemap = {};
var _left = new Object(); //This will store _left elements offset  
var _right = new Object(); //This will store _right elements offset	
var _color="coral";
var _dash;
var _id;

var clientrectleft
var clientrectright 
var leftnodeoffsetx
var leftnodeoffsety
var rightnodeoffsetx 
var rightnodeoffsety 
var dax 
var day 
var dangle
var rightx 
var righty  
var leftx 
var lefty  

var _error =false;


	var connect = function() {

		
		
		var _me = this;
	

		//Initialize Canvas object

		_canvas.id = "cav1";
		_canvas.width = document.body.clientWidth;
		_canvas.height = document.body.clientHeight; 
		document.body.appendChild(_canvas)


		_ctx = _canvas.getContext('2d');
			 

		this.drawLine = function(option) {
			//It will push line to array.
			linemap[`${option.left_node}${option.right_node}`] = _lines.length;
			_lines.push(option);
			this.connect(option);
			
		};
		

this.kruskalize =function (_cl = "rgb(0,0,0,0.08)")  {


	for ( line of _lines) {

		line.col = _cl;

	}

}

		this.changecolor = function (starting , ending , assignedcolor) {

	if (linemap[`${starting}${ending}`] != undefined)  {

	   let  targg = parseInt(linemap[`${starting}${ending}`]);
	   
	   console.log(targg , starting , ending  , assignedcolor)
		_lines[targg].col =assignedcolor;

		
	}

	else {

		let targg = parseInt(linemap[`${ending}${starting}`]);

		console.log(targg , starting , ending  , assignedcolor)
		_lines[targg].col =assignedcolor;
		
	}

		



		this.redrawLines();

		}


		this.dl = function(one , two) {
		
		
			for (var y = 0 ; y < _lines.length ; ++y) {

 if ((_lines[y].left_node) == one &&  (_lines[y].right_node) == two) {

	_lines.splice(y,1);

 }
			}
			
		
		};
		


		//This Function is used to connect two different div with a dotted line.
	 this.connect = async function(option) {
			
			
			
		
			
				
		if ( option.left_node == undefined || option.left_node == "null" || option.right_node == undefined || option.right_node == "null"  ) {
			return;
		}
					//To decide colour of the line
				
							_color = option.col || "coral";
							
							_ctx.font = "30px Segoe UI";

					//To decide style of the line. dotted or solid
					switch (option.style) {
						case 'dashed':
							_dash = [4, 2];
							break;

						case 'solid':
							_dash = [0, 0];
							break;

						case 'dotted':
							_dash = [2, 2];
							break;

						default:
							_dash = [0, 0];
							break;
					}

					//If left_node is actually right side, following code will switch elements.
				
						 _left_node = document.getElementById(option.left_node);
						 _right_node = document.getElementById(option.right_node);
						 if (_left_node == null || _right_node == null) {return;}
						 clientrectleft = _left_node.getBoundingClientRect();
						 clientrectright = _right_node.getBoundingClientRect();
						 leftnodeoffsetx = clientrectleft.left +document.documentElement.scrollLeft;
						 leftnodeoffsety = clientrectleft.top +document.documentElement.scrollTop;
						 rightnodeoffsetx = clientrectright.left +document.documentElement.scrollLeft;
						 rightnodeoffsety = clientrectright.top +document.documentElement.scrollTop;

						 dax = (rightnodeoffsetx+ _right_node.offsetHeight/2) - (leftnodeoffsetx+ _left_node.offsetWidth/2);
						 day = (rightnodeoffsety+ _right_node.offsetHeight/2) - (leftnodeoffsety+ _left_node.offsetHeight/2);
						 dangle = Math.atan2(day ,dax);

						 rightx = (_right_node.offsetWidth/2) * Math.cos(135+dangle) + (rightnodeoffsetx+ _right_node.offsetWidth/2) ;
						 righty  = (_right_node.offsetHeight/2) * Math.sin(135+dangle) + (rightnodeoffsety + (_right_node.offsetHeight / 2)) ;

						 leftx = (_left_node.offsetWidth/2) * Math.cos(.05+dangle) + (leftnodeoffsetx+ _left_node.offsetWidth/2) ;
						 lefty  = (_left_node.offsetHeight/2) * Math.sin(.05+dangle) + (leftnodeoffsety + (_left_node.offsetHeight / 2)) ;

						//Get Left point and Right Point
						_left.x = leftx
						_left.y = lefty
						_right.x = rightx
						_right.y = righty

							ele1_x = _left.x;
							ele1_y = _left.y;
							ele2_x = _right.x;
							ele2_y = _right.y;

							if (option._text == undefined) {
								option._text = ""
							}

							_ctx.beginPath();
						
						_ctx.moveTo(_left.x, _left.y );
					
						_ctx.lineTo((_right.x), (_right.y));
						
						_ctx.lineWidth = option.width || 2;
						_ctx.strokeStyle = _color;


   if (option.gtype == "D") {
						let headlen = 16; // length of head in pixels
						var dx = Number(ele2_x) - Number(ele1_x);
						let dy = ele2_y - ele1_y;
						let angle = Math.atan2(dy, dx);
						_ctx.moveTo( ele1_x,  ele1_y);
						_ctx.lineTo(ele2_x, ele2_y);
						_ctx.lineTo(ele2_x - headlen * Math.cos(angle - Math.PI / 6),  ele2_y - headlen * Math.sin(angle - Math.PI / 6));
						_ctx.moveTo(ele2_x,  ele2_y);
						_ctx.lineTo(ele2_x - headlen * Math.cos(angle + Math.PI / 6),  ele2_y - headlen * Math.sin(angle + Math.PI / 6));
  
					}
					

						_ctx.stroke();

						
f = 0;

						_ctx.font = "20px Segoe ui";
						_ctx.fillText(option._text,(_right.x +_left.x)/2 ,( _right.y + _left.y)/2);

				

				

					//option.resize = option.resize || false;
				
			} 
	

		window.addEventListener("resize",function()  {
           
        	_me.redrawLines();
			//_me.Blines();
		 //  _me.Listlines();


		})

		this.redrawLines = async function() {
			if (_lines.length == 0) return;
			
			_ctx.clearRect(0, 0,  10000, 4300);

				for (let li = 0 ; li < _lines.length ;li++) {
				
					_me.connect(_lines[li])
	
				  }
				  
		};


		this.Splaylines = async function() {
			if (tree.length == 0) return;

			_ctx.clearRect(0, 0,  10000, 4300);

			for (let source in tree) {

				let destination = tree[source];
				if(destination != "null")
				_me.connect({left_node:source , right_node:destination+"treetop"})

			  }


		};


		this.Listlines = function() {
			if (next.length == 0) return;

			_ctx.clearRect(0, 0,  10000, 4300);

			for (let source in next) {

				let destination = next[source];
				if(destination != "null")
				_me.connect({left_node:source , right_node:destination , col:"black" ,style:"dashed"})

			  }


		};


		this.Blines = function() {
			if (BTree.length == 0) return;

			_ctx.clearRect(0, 0,  10000, 4300);

			for (let source in BTree) {

				let destination = BTree[source];
				if(destination != "null")
				_me.connect({left_node:source , right_node:destination+"top",gtype:"UD" })

			  }


		};

		return this;
	};

