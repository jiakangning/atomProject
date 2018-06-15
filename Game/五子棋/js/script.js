var chess = document.getElementById('chess');
var context = chess.getContext('2d');
var me = true;
var chessBoard = [];
//赢法数组
var wins = [];
var myWin = [];
var computerWin = [];
var over = false;

for (var i = 0; i < 15; i++) {
  chessBoard[i] = [];
  for (var j = 0; j < 15; j++) {
    chessBoard[i][j] = 0;
  }
}
for (var i = 0; i < 15; i++) {
  wins[i] = [];
  for (var j = 0; j < 15; j++) {
    wins[i][j] = [];
  }
}
var count = 0;//统计赢法总数
// 横线类
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[i][j+k][count] = true;
    }
    count ++;
  }
}
// 竖线类
for (var i = 0; i < 15; i++) {
  for (var j = 0; j < 11; j++) {
    for (var k = 0; k < 5; k++) {
      wins[j+k][i][count] = true;
    }
    count ++;
  }
}
//斜线类
// for (var i = 0; i < 15; i++) {
//   for (var j = 0; j < 11; j++) {
//     for (var k = 0; k < 5; k++) {
//       wins[k+i][j+k][count] = true;
//     }
//     count ++;
//   }
// }
for(var i = 0; i < 11; i++) {
	for (var j = 0; j < 11; j++) {
		for (var k = 0; k < 5; k++) {
			wins[k+i][j+k][count] = true;
		}
		count++;
	}
}
// 反斜线
for(var i = 0; i < 11; i++) {
	for (var j = 14; j > 3; j--) {
		for (var k = 0; k < 5; k++) {
			wins[i+k][j-k][count] = true;
		}
		count++;
	}
}
// count end
console.log(count);
//我方赢法
for (var i = 0; i < count; i++) {
  myWin[i] = 0;
  computerWin[i] = 0;
}




context.strokeStyle = '#bfbfbf';
for (var i = 0; i < 15; i++) {
  context.moveTo(15 + i*30,15);
  context.lineTo(15 + i*30,435);
  context.moveTo(15,15 + i*30);
  context.lineTo(435,15 + i*30);
  context.stroke();
}



var oneStep = function (i,j,me){
  context.beginPath();
  context.arc(15+i*30,15+j*30,13,0,2*Math.PI);
  context.closePath();
  var color = context.createRadialGradient(15+i*30 + 2,15+j*30 - 2,13,15+i*30 + 2,15+j*30 - 2,0);
  if (me) {
    color.addColorStop(0,'#0a0a0a');
    color.addColorStop(1,'#636766');
  }
  else{
    color.addColorStop(0,'#D1D1D1');
    color.addColorStop(1,'#F9F9F9');
  }
  context.fillStyle = color;
  context.fill();
}
chess.onclick = function (ev){
  if(over){
    return ;
  }
  if(!me){
    return ;
  }
  var ev = ev || window.event;
  var i = Math.floor(ev.offsetX / 30);
  var j = Math.floor(ev.offsetY / 30);
  if (chessBoard[i][j] == 0) {
    oneStep(i,j,me);
      chessBoard[i][j]=1;
    for (var k = 0; k < count; k++) {
      if (wins[i][j][k]) {
        myWin[k] ++;
        computerWin[k] = 6;
        if (myWin[k] == 5) {
          window.alert('你赢了！')
          over = true;
        }
      }
    }
    if (!over) {
      me = !me;
      computerAI();
    }
  }
}
var computerAI = function (){
  var myScore = [];
  var computerScore = [];
  var max = 0;//保存最高分数
  var u = 0,v = 0;//最高分数点的坐标
  for (var i = 0; i < 15; i++) {
    myScore[i] = [];
    computerScore[i] = [];
    for (var j = 0; j < 15; j++) {
      myScore[i][j] = 0;
      computerScore[i][j] = 0;
    }
  }
  for (var i = 0; i < 15; i++) {
    for (var j = 0; j < 15; j++) {
      if (chessBoard[i][j] == 0) {
        for (var k = 0; k < count; k++) {
          if (wins[i][j][k] == true) {
            if (myWin[k] == 1) {
              myScore[i][j] += 200;
            }
            else if (myWin[k] == 2) {
              myScore[i][j] += 400;
            }
            else if (myWin[k] == 3) {
              myScore[i][j] += 2000;
            }
            else if (myWin[k] == 4) {
              myScore[i][j] +=10000;
            }
            if (computerWin[k] == 1) {
              computerScore[i][j] += 220;
            }
            else if (computerWin[k] == 2) {
              computerScore[i][j] += 420;
            }
            else if (computerWin[k] == 3) {
              computerScore[i][j] += 2100;
            }
            else if (computerWin[k] == 4) {
              computerScore[i][j] += 20000;
            }
          }
        }
        if (myScore[i][j] > max) {
          max = myScore[i][j];
          u = i;
          v = j;
        }
        else if (myScore[i][j] == max) {
          if (computerScore[i][j] > computerScore[u][v]) {
            u = i;
            v = j;
          }
        }
        if (computerScore[i][j] > max) {
          max = computerScore[i][j];
          u = i;
          v = j;
        }
        else if (computerScore[i][j] === max) {
          if (myScore[i][j] > myScore[u][v]) {
            u = i;
            v = j;
          }
        }
      }
    }
  }
  oneStep(u,v,false);
  chessBoard[u][v] = 2;
  for (var k = 0; k < count; k++) {
    if (wins[u][v][k]) {

      computerWin[k] ++;
      myWin[k] = 6;
      if (computerWin[k] == 5) {
        window.alert('计算机赢了！')
        over = true;
      }
    }
  }
  if (!over) {
    me = !me;
  }
}
