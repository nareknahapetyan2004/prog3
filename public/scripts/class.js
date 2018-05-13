class Grass
{
	constructor(x,y,ind)
	{
		this.index = ind;
		this.x = x;
		this.y = y;
		this.energy = 5;
		this.multiply = 0;
		
	}

	newDirections()
	{
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}
	chooseCell(ch) 
	{

    var found = [];
    for (var i in this.directions) 
	{
        var x = this.directions[i][0];
        var y = this.directions[i][1];
        if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length)
		{
            if (matrix[y][x] == ch) 
			{
                found.push(this.directions[i]);
            }
        }    
   }
   return found;
}


	getDirections(t)
	{
		this.newDirections();
		var found = [];

		for(var i in this.directions)
		{
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length)
			{
				if(matrix[y][x] == t)
				{
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	mul()
	{
		this.multiply++;
		if(this.multiply == 3)
		{
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			if(cord)
			{
				var x = cord[0];
				var y = cord[1];

				var norXot = new Grass(x,y,this.index);
				xotArr.push(norXot);

				matrix[y][x] = 1;
				this.multiply = 0;
			}
		}
	}

	

}
class Eatgrass
{
	constructor(x,y,ind)
	{
		this.index = ind;
		this.x = x;
		this.y = y;
		this.multiply = 0;
		this.eatCount = 0;
		this.energy = 3;
		
	}

	newDirections()
	{
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1]
		];
	}


	getDirections(t)
	{
		this.newDirections();
		var found = [];

		for(var i in this.directions)
		{
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length){
				if(matrix[y][x] == t)
				{
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	


	move()
	{
			var emptyCord = this.getDirections(0);

			var cord = random(emptyCord);
			

			if(cord)
			{
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 2;

				matrix[this.y][this.x] = 0;

				this.x = x;
				this.y = y;

			}
	}
	


	eat()
	{
		
		var emptyCord = this.getDirections(1);

		var cord = random(emptyCord);

		if(cord)
		{
			this.multiply++;
			
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 2;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
			

			for(var i in xotArr)
			{			
				if(x == xotArr[i].x && y == xotArr[i].y)
				{
      				xotArr.splice(i,1);
				}
			} 
			if(this.multiply == 10)
			{
				this.mul()
				this.multiply = 0;
			}

		}
		else 
		{
			this.move();
			this.energy--;
			if(this.energy < 3)
			{
				this.die();
				this.energy = 10;
			}
			//console.log(this.energy);
		}
	}
	
    mul()
    {
		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		if(cord)
		{
			var x = cord[0];
			var y = cord[1];

			this.multiply++;
			  
			var norXotaker = new Eatgrass(x,y,this.index);
			eatArr.push(norXotaker);

			matrix[y][x] = 1;
			this.multiply = 0;
		}
	}
	die()
	{
		matrix[this.y][this.x] = 0;
		for(var i in eatArr)
		{			
			if(this.x == eatArr[i].x && this.y == eatArr[i].y)
			{
				eatArr.splice(i,1);
			}
		} 	
	}
	
} 

class Gishatic
{
	constructor(x,y,ind)
	{
		this.index = ind;
		this.x = x;
		this.y = y;
		this.multiply = 0;
		this.eatCount = 0;
		this.energy1 = 25; 

	}

	newDirections()
	{
		this.directions = [
		    [this.x - 1, this.y - 1],
		    [this.x    , this.y - 1],
		    [this.x + 1, this.y - 1],
		    [this.x - 1, this.y    ],
		    [this.x + 1, this.y    ],
		    [this.x - 1, this.y + 1],
		    [this.x    , this.y + 1],
		    [this.x + 1, this.y + 1],

			[this.x    , this.y    ],
			
			[this.x - 2, this.y - 2],
			[this.x - 2, this.y - 1],
			[this.x - 2, this.y + 2],
			[this.x - 2, this.y + 1],
			[this.x - 2, this.y    ],
			[this.x + 2, this.y - 2],
			[this.x + 2, this.y - 1],
			[this.x + 2, this.y + 2],
			[this.x + 2, this.y + 1],
			[this.x + 2, this.y    ],
			[this.x - 1, this.y + 2],
			[this.x - 1, this.y - 2],
			[this.x + 1, this.y - 2],
			[this.x + 1, this.y + 2],
			[this.x    , this.y + 2],
			[this.x    , this.y - 2]
		];
	}

	getDirections(t)
	{
		this.newDirections();
		var found = [];

		for(var i in this.directions)
		{
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length)
			{
				if(matrix[y][x] == t)
				{
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	move()
	{
		var emptyCord = this.getDirections(0);
		var cord = random(emptyCord);
		

		if(cord)
		{
			var x = cord[0];
			var y = cord[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;

			this.x = x;
			this.y = y;
		} else {
			var xotCord = this.getDirections(1);
			var cord1 = random(xotCord);
			
			if(cord1)
			{
				var x = cord1[0];
				var y = cord1[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 1;

				this.x = x;
				this.y = y;
			}
		}


	}
	


	eat()
	{
		
		//mard utelu mas
		var mardCord = this.getDirections(4);
		var cord1 = random(mardCord);

		if(cord1)
		{
			this.multiply++;
			var x = cord1[0];
			var y = cord1[1];

			matrix[y][x] = 3;
			matrix[this.y][this.x] = 0;	

			this.x = x;
			this.y = y;

			for(var i in mardArr)
			{			
				if(x == mardArr[i].x && y == mardArr[i].y)
				{
      				mardArr.splice(i,1);
				}
			} 
			if(this.multiply == 3){
				this.mul();
			}			
		}
		else {
			//xotaker utelu mas
			var xotakerCord = this.getDirections(2);
			var cord = random(xotakerCord);

			if(cord)
			{
				
				var x = cord[0];
				var y = cord[1];

				matrix[y][x] = 3;
				matrix[this.y][this.x] = 0;	

				this.x = x;
				this.y = y;

				
			if(this.multiply == 3)
			{
				this.mul();
				this.multiply = 0;		
			}
		

		 
			}
			else 
			{
				this.move();
				this.energy1--;
				if(this.energy1 == 0)
				{
					this.die();
				}
						
			}	
		}
		

		
		
	}
	
    mul()
    {
		var emptyCord = this.getDirections(0);

		var cord = random(emptyCord);
		if(cord)
		{
			var x = cord[0];
			var y = cord[1];

			
			  
			var norgazan = new Gishatic(x,y,this.index);
			gazanArr	.push(norgazan);

			matrix[y][x] = 1;
			this.multiply = 0;

		}
	}

	die()
	{
		matrix[this.y][this.x] = 0;
		for(var i in gazanArr)
		{			
			if(this.x == gazanArr[i].x && this.y == gazanArr[i].y)
			{
				gazanArr.splice(i,1);
				
			}
		} 	
	}	
}	












class Mard
{
	constructor(x,y,ind)
	{
		this.index = ind;
		this.x = x;
		this.y = y;
		this.multiply = 0;
		this.eatCount = 0;
		this.energy1 = 10; 

	}

	newDirections()
	{
		this.directions = [
		    				[this.x + 1, this.y		],
							[this.x + 2, this.y     ],
							[this.x - 1, this.y		],
							[this.x - 2, this.y		],
							[this.x, 	 this.y - 1 ],
							[this.x, 	 this.y - 2 ],
							[this.x, 	 this.y + 1 ],
							[this.x, 	 this.y + 2 ],
						];
	}

	getDirections(t)
	{
		this.newDirections();
		var found = [];

		for(var i in this.directions)
		{
			var x = this.directions[i][0];
			var y = this.directions[i][1];
			if(x >= 0 && x < matrix[0].length && y >=0 && y < matrix.length)
			{
				if(matrix[y][x] == t)
				{
					found.push(this.directions[i]);
				}
			}
		}
		return found;
	}

	move()
	{
		console.log(this.energy1);
		var xotCord = this.getDirections(1);
		var cord1 = random(xotCord);
		
		if(cord1)
		{
			var x = cord1[0];
			var y = cord1[1];

			matrix[y][x] = 4;
			matrix[this.y][this.x] = 1;

			this.x = x;
			this.y = y;
		}
		else
		{
			var emptyCord = this.getDirections(0);	
			var cord = random(emptyCord);
			
				if(cord)
				{
					var x = cord[0];
					var y = cord[1];

					matrix[y][x] = 4;
					matrix[this.y][this.x] = 0;

					this.x = x;
					this.y = y;
				}
			}
		}
	


	eat()
	{		
	var xotakerCord = this.getDirections(2);
	var cord1 = random(xotakerCord);

	if(cord1)
	{
		
		var x = cord1[0];
		var y = cord1[1];

		matrix[this.y][this.x] = 0;	
		matrix[y][x] = 4;

		this.x = x;
		this.y = y;

		for(var i in eatArr)
		{			
			if(x == eatArr[i].x && y == eatArr[i].y)
			{
				eatArr.splice(i,1);
			}

		} 
	}


		/*else if(this.getDirections(0).length != 0)
			{
				this.move();
			}

		else if(this.getDirections(3).length != 0)
		{
			this.move();
		}*/

		else
		{
		this.move();
		this.energy1--;
			if(this.energy1 == 0)
			{
				var xotakerCord = this.getDirections(1);
				var cord = random(xotakerCord);

				if(cord)	
				{
					
					var x = cord[0];
					var y = cord[1];

					matrix[this.y][this.x] = 0;	
					matrix[y][x] = 4;

					this.x = x;
					this.y = y;
				}

				this.die();
			}
			}
		}
	
	
    mul()
    {
		
	}

	die()
	{
		console.log("merav");
		matrix[this.y][this.x] = 0;
			for(var i in mardArr)
			{			
				if(this.x == mardArr[i].x && this.y == mardArr[i].y)
				{
					mardArr.splice(i,1);
				}
			} 	
	}	
}
