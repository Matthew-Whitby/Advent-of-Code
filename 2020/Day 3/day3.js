var fs= require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
datas=data.split('\r\n');
var map=[],i,j,trees=0,height,width;
for(i=0;i<datas.length;i++){
   let row=datas[i].split("");
   map.push(row);
}
Calculate();

function Calculate(){
   height=map.length;
   width=map[0].length;
   let x=0,y=0;
   while(y<height-1){
      if(x+3>=width)x-=width;
      x+=3;
      y+=1;
      if(map[y][x]=="#")trees++;
   }
   console.log("TREES: "+trees);
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