var fs= require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
datas=data.split('\r\n');
let i,j,ints=[];
for(i=0;i<datas.length;i++){
   ints.push(parseInt(datas[i]));
}
loop1:
for(i=0;i<ints.length;i++){
   for(j=0;j<ints.length;j++){
      if(i<=j)continue;
      if(ints[i]+ints[j]==2020){
         console.log(ints[i]*ints[j]);
         break loop1;
      }
   }
}