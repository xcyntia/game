var game= new Phaser.Game(400,300);

var mainState= {
preload:function(){
	game.load.image('bird','bird.png');

	//wrzucanie plików z obrazkami i głosem


},

create: function(){
	game.stage.backgroundColor='#08a379';//zmieniliśmy kolor tła
	game.physics.startSystem(Phase.Physics.ARCADE);//włączamy fizykę arkadową

	this.bird= game.add.sprite(150,100,'bird');

	game.physics.arcade.enable(this.bird); //grawitacja dotyczy sprita bird

	this.bird.body.gravity.y = 900;

	

	//ustawianie na miejscu obiektów, które mają się pojawić po starcie gry


},

upload: function(){
	//co ma się zmieniać w czasie


},

};

game.state.add('main', mainState);
game.state.start('main');