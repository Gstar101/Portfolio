
			var canvasWidth = 200; 
			var canvasHeight = 250;
			
			var spritesheetWidth = 864; 
			var spritesheetHeight = 280; 
			
			var rows = 2; 
			var cols = 8; 
			
			var trackRight = 0; 
			var trackLeft = 1; 
			
			var width = spritesheetWidth/cols; 
			var height = spritesheetHeight/rows; 
			
			var curFrame = 0; 
			var frameCount = 8; 
			
			var x=0;
			var y=20; 
			
			var srcX; 
			var srcY; 
			
			var left = false; 
			var right = true;
			
			var speed = 12; 
			
			var canvas = document.getElementById('canvas');
			canvas.width = canvasWidth;
			canvas.height = canvasHeight; 
			
			var ctx = canvas.getContext("2d");
			
			var character = new Image(); 
			character.src = "character.png";
			
			function updateFrame(){
				curFrame = ++curFrame % frameCount; 				
				srcX = curFrame * width; 
				ctx.clearRect(x,y,width,height);	
				
				if(left && x>0){
					srcY = trackLeft * height; 
					x-=speed; 
				}
				if(right && x<canvasWidth-width){
					srcY = trackRight * height; 
					x+=speed; 
				}
			}
			
			function draw(){
				updateFrame();
				ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
			}
			
			
			function moveLeft(){
				left = true; 
				right = false; 
			}
			
			function moveRight(){
				left = false;
				right = true; 
			}
			
			setInterval(draw,100);
			
			