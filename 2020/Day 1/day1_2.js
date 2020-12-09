var fs= require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
datas=data.split('\r\n');
let ints=[];
let i,j,z;
for(i=0;i<datas.length;i++){
   ints.push(parseInt(datas[i]));
}
loop1:
for(i=0;i<ints.length;i++){
   for(j=0;j<ints.length;j++){
      for(z=0;z<datas.length;z++){
         if(i<=j||j<=z)continue;
         if(ints[i]+ints[j]+ints[z]==2020){
            console.log(ints[i]*ints[j]*ints[z]);
            break loop1;
         }
      }
   }
}