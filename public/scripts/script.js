var matrix = []
var x1 = 40;
var y1 = 30
var side = 20;
var xotArr = [];
var eatArr = [];
var gazanArr = [];
var mardArr = []

var datark = [];
var maxCountGrass = Math.floor(x1*y1*70/100);
var maxCountEater = Math.floor(x1*y1*22/100);
var maxCountGishatich = Math.floor(x1*y1*1/100);
var maxCountMard = Math.floor(x1*y1*1/100);


for(var i = 0; i<y1; i++)
{
    matrix[i] = [];
  for(var j = 0; j<x1; j++)
  {
    matrix[i][j]=0;
  }
}

for(var i =0; i<y1; i++)
{
  for(var j = 0; j<x1; j++)
  {
    datark.push([i,j]);
  }
}

function setup() 
{
    for(var i = 0; i<maxCountGrass; i++)
    {
    var norcord = Math.floor(Math.random() * datark.length);
    var x = datark[norcord][0];
    var y = datark[norcord][1];

    matrix[x][y] = 1;
    datark.splice(norcord, 1);
  }
  for(var j =0; j<maxCountEater; j++ )
  {
    var norcord = Math.floor(Math.random() * datark.length);
    var x = datark[norcord][0];
    var y = datark[norcord][1];

    matrix[x][y] = 2;
    datark.splice(norcord, 1);
  }
  for(var j =0; j<maxCountGishatich; j++ )
  {
    var norcord = Math.floor(Math.random() * datark.length);
    var x = datark[norcord][0];
    var y = datark[norcord][1];

    matrix[x][y] = 3;
    datark.splice(norcord, 1);
  }
  for(var j =0; j<maxCountMard; j++ )
  {
    var norcord = Math.floor(Math.random() * datark.length);
    var x = datark[norcord][0];
    var y = datark[norcord][1];

    matrix[x][y] = 4;
    datark.splice(norcord, 1);
  }
    noStroke()
    frameRate(999);
    createCanvas(x1 * side, y1 * side);
    background('#acacac');


    for(var i = 0; i < matrix.length; i++)
    {
      for(var j = 0; j < matrix[i].length; j++)
      {
        if(matrix[i][j] == 2)
        {
          var eatgrass = new Eatgrass(j,i,2);
          eatArr.push(eatgrass);
        }
        else if(matrix[i][j] == 1)
        {
          var grass = new Grass(j,i,1);
          xotArr.push(grass);
        }
        else if(matrix[i][j] == 3)
        {
            var xotaker = new Gishatic(j,i,3);
            gazanArr.push(xotaker);
        }
        else if(matrix[i][j] == 4)
        {
          var mard = new Mard(j,i,4);
          mardArr.push(mard);

          
        }
      }
    }
        console.log(mardArr); 
        console.log(matrix);
    


}
function draw() 
{
  background('#acacac');
  for(var i in xotArr)
  {
    xotArr[i].mul();
  }

   for(var i in eatArr)
   {
    eatArr[i].eat();
  }

  for(var i in gazanArr)
  {
    gazanArr[i].eat();
  }

for(var i in mardArr)
{
  mardArr[i].eat();
}

  for(var i = 0; i < matrix.length; i++)
  {
    for(var j = 0; j < matrix[i].length; j++)
    {
      if(matrix[i][j] == 1)
      {
        fill("green");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 2)
      {
        fill("orange");
        rect(j * side, i * side, side, side);
      } 
       else if(matrix[i][j] == 3)
      {
        fill("brown");
        rect(j * side, i * side, side, side);
      }
      else if(matrix[i][j] == 4)
      {
        fill("black");
        rect(j * side, i * side, side, side);
      }
       else if(matrix[i][j] == 0)
       {
        fill('#acacac');
        rect(j * side, i * side, side, side);
       }

      }
    }
  }
