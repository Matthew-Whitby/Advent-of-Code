var fs= require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
datas=data.split('\r\n');
var map=[],i,j,trees=0,height,width;
for(i=0;i<datas.length;i++){
   let row=datas[i].split("");
   map.push(row);
}
console.log("ANSWER="+Calculate(1,1)*Calculate(1,3)*Calculate(1,5)*Calculate(1,7)*Calculate(2,1));

function Calculate(downTheStairs,alongTheCorridor){
   height=map.length;
   width=map[0].length;
   let x=0,y=0;
   while(y<height-downTheStairs){
      if(x+alongTheCorridor>=width)x-=width;
      x+=alongTheCorridor;
      y+=downTheStairs;
      if(map[y][x]=="#")trees++;
   }
   console.log("TREES: "+trees);
   let output=trees;
   trees=0;
   return output;
}

function WriteMap(){
   for(i=0;i<map.length;i++){
      let part="";
      for(j=0;j<map[i].length;j++){
         part+=map[i][j];
      }
      console.log(part);
   }
}