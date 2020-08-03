
					var canvasWidth = 200; 
					var canvasHeight = 250;
					
					var spritesheetWidth = 224; 
					var spritesheetHeight = 448; 
					
					var rows = 8; 
					var cols = 4; 
					
					var trackRight = 2; 	
					var trackLeft = 1; 
					var trackUp = 3; 	
					var trackDown = 0; 
					var trackUpAtk = 7; 
					
					var width = spritesheetWidth/cols; 
					var height = spritesheetHeight/rows; 
					
					var curFrame = 0; 
					var frameCount = 4; 
					
					var x=0;
					var y=1; 
					
					var srcX; 
					var srcY; 
					
					var left = false; 
					var right = true;
					var up = false; 
					var down = false;
					var atkup= false;
					
					var speed = 5; 
					
					var canvas = document.getElementById('canvas');
					canvas.width = canvasWidth;
					canvas.height = canvasHeight; 
					
					var ctx = canvas.getContext("2d");
					
					var character = new Image(); 
					character.src = "arshes131.png";
					
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
						if(up && y>0){
							srcY = trackUp * height; 
							y-=speed; 
						}
						if(down && y<canvasHeight-height){
							srcY = trackDown * height; 
							y+=speed; 
						}
						if(atkup&& y>0){
							srcY = trackUpAtk * height; 
							y-=speed; 
						}
					}
					
					function draw(){
						updateFrame();
						ctx.drawImage(character,srcX,srcY,width,height,x,y,width,height);
					}
					
					
					function moveLeft(){
						left = true; 
						right = false;
						up  = false;
						down = false;	
                        atkup = false;						
					}
					
					function moveRight(){
						left = false;
						right = true; 
						  up  = false;
						down = false;
						atkup = false;
					}
					
					function moveUp(){
						left = false; 
						right = false;
						  up  = true;
						down = false;
						atkup = false;
							
					}
					function atkup(){
						left = false; 
						right = false;
						  up  = false;
						down = false;
						atkup = true;
						
							
					}
					function moveDown(){
						left = false; 
						right = false; 
						up  = false;
						down = true;
			
					}
					
					setInterval(draw,300);
					
					