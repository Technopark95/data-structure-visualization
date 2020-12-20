
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

// Jquery Plugin
// Plugin to Draw a line between to elements
var _lines = new Array(); //This array will store all lines (option)
var _canvas;
var _ctx;
var ele1 , ele2, f=0;
var lineindex =0;
var linemap = {};

(function($) {
	$.fn.connect = function(param) {

		
		
		var _me = this;
		var _parent = param || document;

		//Initialize Canvas object
		_canvas = $('<canvas id="cav1"/>')
			.attr('width', $(_parent).width())
			.attr('height', $(_parent).height());
		$('body').append(_canvas);

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

        let targg = Number(linemap[`${starting}${ending}`]);
		_lines[targg].col =assignedcolor;
	}

	else {

		let targg = Number(linemap[`${ending}${starting}`]);
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
		

		// this.drawAllLine = function(option) {

		// 	/*Mandatory Fields------------------
		// 	left_selector = '.class',
		// 	data_attribute = 'data-right',
		// 	*/

		// 	if (option.left_selector != '' && typeof option.left_selector !== 'undefined' && $(option.left_selector).length > 0) {
		// 		$(option.left_selector).each(function(index) {
		// 			var option2 = new Object();
		// 			$.extend(option2, option);
		// 			option2.left_node = $(this).attr('id');
					
		// 			option2.right_node = $(this).data(option.data_attribute);
		// 			if (option2.right_node != '' && typeof option2.right_node !== 'undefined') {
		// 				_me.drawLine(option2);

		// 			}
		// 		});
		// 	}
		// };

		//This Function is used to connect two different div with a dotted line.
		this.connect = function(option) {
			_ctx = _canvas[0].getContext('2d');
			 
			
			_ctx.beginPath();
			try {
				var _color="coral";
				var _dash;
				var _id;
				var _left = new Object(); //This will store _left elements offset  
				var _right = new Object(); //This will store _right elements offset	
				var _error = (option.error == 'show') || false;
				/*
				option = {
					left_node - Left Element by ID - Mandatory
					right_node - Right Element ID - Mandatory
					status - accepted, rejected, modified, (none) - Optional
					style - (dashed), solid, dotted - Optional	
					horizantal_gap - (0), Horizantal Gap from original point
					error - show, (hide) - To show error or not
					width - (2) - Width of the line
				}
				*/

				if (option.left_node != '' && typeof option.left_node !== 'undefined' && option.right_node != '' && typeof option.right_node !== 'undefined' && $(option.left_node).length > 0 && $(option.right_node).length > 0) {

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
				
						_left_node = $(option.left_node);
						_right_node = $(option.right_node);



						let dax = (_right_node.offset().left+ _right_node.width()/2) - (_left_node.offset().left+ _left_node.width()/2);
						let day = (_right_node.offset().top+ _right_node.height()/2) - (_left_node.offset().top+ _left_node.height()/2);
						let dangle = Math.atan2(day ,dax);

						let rightx = (_right_node.width()/2) * Math.cos(135+dangle) + (_right_node.offset().left+ _right_node.width()/2) ;
						let righty  = (_right_node.height()/2) * Math.sin(135+dangle) + (_right_node.offset().top + (_right_node.height() / 2)) ;

						let leftx = (_left_node.width()/2) * Math.cos(.05+dangle) + (_left_node.offset().left+ _left_node.width()/2) ;
						let lefty  = (_left_node.height()/2) * Math.sin(.05+dangle) + (_left_node.offset().top + (_left_node.height() / 2)) ;

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

							/*
						if (option.gtype == "D" && f == 1) {


							ele2_x = _left.x;
							ele2_y = _left.y;
							ele1_x = _right.x;
							ele1_y = _right.y;
							
						}

						*/

						//Create a group
						//var g = _canvas.group({strokeWidth: 2, strokeDashArray:_dash}); 	

						//Draw Line
						var _gap = option.horizantal_gap || 0;


						_ctx.moveTo(_left.x, _left.y );
						if (_gap != 0) {
							_ctx.lineTo(_left.x + _gap, _left.y);
							_ctx.lineTo(_right.x - _gap, _right.y);
							
						}
						_ctx.lineTo((_right.x), (_right.y));
						

						if (!_ctx.setLineDash) {
							_ctx.setLineDash = function() {}
						} else {
							_ctx.setLineDash(_dash);
						}
						_ctx.lineWidth = option.width || 2;
						_ctx.strokeStyle = _color;


   if (option.gtype == "D") {
						let headlen = 25; // length of head in pixels
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
				} else {
					if (_error) alert('Mandatory Fields are missing or incorrect');
				}
			} catch (err) {
				if (_error) alert('Mandatory Fields are missing or incorrect');
			}
		};

		//It will redraw all line when screen resizes
		$(window).resize(function() {
			_me.redrawLines();
			_me.Splaylines();
			_me.Blines();
			//_me.Listlines();
		});

		this.redrawLines = function() {
			if (_lines.length == 0) return;

			
			_ctx.clearRect(0, 0, $(_parent).width(), $(_parent).height());
			_lines.forEach(function(entry) {
				entry.resize = true;
				_me.connect(entry);
			});
		};


		this.Splaylines = function() {
			if (tree.length == 0) return;

			_ctx.clearRect(0, 0, $(_parent).width(), $(_parent).height());

			for (let source in tree) {

				let destination = tree[source];
				if(destination != "null")
				_me.connect({left_node:"#"+source , right_node:"#"+destination+"treetop"})

			  }


		};


		this.Listlines = function() {
			if (next.length == 0) return;

			_ctx.clearRect(0, 0, $(_parent).width(), $(_parent).height());

			for (let source in next) {

				let destination = next[source];
				if(destination != "null")
				_me.connect({left_node:"#"+source , right_node:"#"+destination , col:"black" ,style:"dashed"})

			  }


		};


		this.Blines = function() {
			if (BTree.length == 0) return;

			_ctx.clearRect(0, 0, $(_parent).width(), $(_parent).height());

			for (let source in BTree) {

				let destination = BTree[source];
				if(destination != "null")
				_me.connect({left_node:"#"+source , right_node:"#"+destination+"top",gtype:"D" })

			  }


		};

		return this;
	};
}(jQuery));


