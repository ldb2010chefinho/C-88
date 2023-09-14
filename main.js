
// Crie uma variável canvas
var canvas = new fabric.Canvas("myCanvas")
//Defina as posições iniciais da bola e do buraco.
var ball_X = 0;
var ball_Y = 0;
var hole_X = 800;
var hole_Y = 400;
block_image_width = 5;
block_image_height = 5;

function loadImg(){
	// Escreva o código para enviar a imagem da bola de golfe ao canvas
	fabric.Image.fromURL("golf-h.png",function(Img){
		holeObject = Img;
		holeObject.scaleToWidth(50);
		holeObject.scaleToHeight(50);
		holeObject.set({
		top: hole_Y,
		left:hole_X
		});
		canvas.add(holeObject); 
	 })
	newImage();
	
}

function newImage()
{
	// Escreva o código para enviar a imagem da bola ao canvas
	fabric.Image.fromURL("ball.png",function(Img){
		ballObject = Img;
		ballObject.scaleToWidth(50);
		ballObject.scaleToHeight(50);
		ballObject.set({
		top: ball_Y,
		left:ball_X
		});
		canvas.add(ballObject); 
	 })
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Verifique a condição das imagens da bola e do buraco para finalizar o jogo. 
	E se a id coordenadas coincidem, para remover a imagem da bola
	e exibir "Você atingiu o objetivo!!!" 
	além de tornar a borda do canvas vermelha 'red'. */
	if(ball_X == hole_X && ball_Y == hole_Y){
    canvas.remove(ballObject);
	console.log("Você atingiu o objetivo!!!");
	document.getElementById("hd3").innerHTML ="Você atingiu o objetivo!!!";
	document.getElementById("myCanvas").style.borderColor = "red";
	}


	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Escreva o código para mover a bola para cima.
		if (ball_Y >= 0){
			ball_Y = ball_Y - block_image_height;
			console.log("Altura do bloco =" + block_image_height);
			console.log("Quando a seta para cima e pressionada,x="+ ball_X + "| y =" + ball_Y);
			canvas.remove(ballObject);
			newImage();
			};
	}

	function down()
	{
		 // Escreva o código para mover a bola para baixo.
		 if (ball_Y <= 500){
			ball_Y = ball_Y + block_image_height;
			console.log("Altura do bloco =" + block_image_height);
			console.log("Quando a seta para baixo e pressionada,x="+ ball_X + "| y =" + ball_Y);
			canvas.remove(ballObject);
			newImage();
			};
	}

	function left()
	{
		if(ball_X >5)
		{
			// Escreva o código para mover a bola para a esquerda.
			ball_X = ball_X - block_image_width;
      console.log("Largura do bloco =" + block_image_width);
      console.log("Quando a seta para esquerda e pressionada,x="+ ball_X + "| y =" + ball_Y);
      canvas.remove(ballObject);
      newImage();
		}
	}

	function right()
	{
		if(ball_X <=1050)
		{
			// Escreva o código para mover a bola para a direita.
			
				ball_X = ball_X + block_image_width;
				console.log("Largura do bloco =" + block_image_width);
				console.log("Quando a seta para direita e pressionada,x="+ ball_X + "| y =" + ball_Y);
				canvas.remove(ballObject);
				newImage();
		}
	}
	
}

