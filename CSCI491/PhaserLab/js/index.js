var box = function(options) {
	var bmd = game.add.bitmapData(options.length, options.width);
	bmd.ctx.beginPath();
	bmd.ctx.rect(0,0,options.length, options.width);
	bmd.ctx.fillStyle = options.color;
	bmd.ctx.fill();
	return bmd;
};

var game = new Phaser.Game(500,500);

var mainState = {
	create: function() {
        game.stage.backgroundColor = '#000000'; // set background color
        game.physics.startSystem(Phaser.Physics.ARCADE); // set up the physics system
        game.world.enableBody = true; // game objects can move and interact with one another
        this.player = game.add.sprite(32, 32, box({length: 32, width: 32, color: '#11171c'})
        );
        this.cursor = game.input.keyboard.createCursorKeys(); // create a cursor object, use this to detect which key was pressed and react
        this.player.body.collideWorldBounds = true;
    }
		/*this.walls = game.add.group(); // create a group of sprites
		this.walls.enableBody = true;
		var top = this.walls.create(0,0,box({length: game.world.width,
						width: 16,
						color:'#11171c'
					}) // create a top wall
		);
		top.body.immovable = true;

		var bottom = this.walls.create(0,game.world.height-16,box({length: game.world.width,
						width: 16,
						color:'#11171c'
					}) // create a bottom wall
		);

		bottom.body.immovable = true;

		var leftWall = this.walls.create(0,16,box({length: 16,
						width: game.world.height-32,
						color:'#11171c'
					}) // create a left wall
		);
		leftWall.body.immovable = true;
		
		var rightWall = this.walls.create(game.world.width-16,16,box({length: 16,
						width: game.world.height-32,
						color:'#11171c'
					}) // create a right wall
		);
		rightWall.body.immovable = true;
		var innerWall1 = this.walls.create(game.world.width/4,16,box({length: 16,
				width: game.world.height-game.world.height/4,
				color:'#11171c'
					}) // create an inner wall
		);
		innerWall1.body.immovable = true;
		
		var innerWall2 = this.walls.create(game.world.width/2,128,box({length: 16,
						width: game.world.height-game.world.height/4,
						color:'#11171c'
					}) // create an inner wall
		);
		innerWall2.body.immovable = true;
		
		this.enemy = game.add.sprite(200,32,
			box({
				length: 32,
				width: 32,
				color: '#11171c'
			})
		);
	},
	update: function(){
		game.physics.arcade.collide(this.player, this.walls);
		game.physics.arcade.overlap(this.player, this.enemy, this.handlePlayerDeath, null, this);
		var speed = 250;
		this.player.body.velocity.y  = 0;
		this.player.body.velocity.x = 0;
		if(this.cursor.up.isDown){
			this.player.body.velocity.y -= speed;
		}
		else if(this.cursor.down.isDown){
			this.player.body.velocity.y += speed;
		}
		else if(this.cursor.left.isDown){
			this.player.body.velocity.x -= speed;
		}
		else if(this.cursor.right.isDown){
			this.player.body.velocity.x += speed;
		}

	},
	handlePlayerDeath: function (player, enemy){
		player.kill(); // function to handle overlap with player and enemy
		game.state.start('gameOver'); // start the game over 
	}*/
};

/*gameOverState = {
	create: function(){
		this.spacebar = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR); // add the spacebar
		label = game.add.text(game.world.width/2, game.world.height/2,
		'GAME OVER\n Press SPACE to restart',
		{
			font: '22px Arial',
			fill: '#fff',
			align: 'center'
		});
		label.anchor.setTo(0.5,0.5);
	},
	update: function(){
		if(this.spacebar.isDown){
			game.state.start('main'); // handle when the spacebar is pressed
		}

	}
};*/

//game.state.add('gameOver', gameOverState); // add this new state

game.state.add('main', mainState);
game.state.start('main');
