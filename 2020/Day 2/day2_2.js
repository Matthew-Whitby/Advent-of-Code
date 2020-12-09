var fs= require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
datas=data.split('\r\n');
let i,valid=0;
for(i=0;i<datas.length;i++){
   let lineParts=datas[i].split(' ');
   let pos1=parseInt(lineParts[0].split('-')[0])-1,pos2=parseInt(lineParts[0].split('-')[1])-1;
   let letter=lineParts[1].substring(0,1);
   let password=lineParts[2];
   if(password.substring(pos1,pos1+1)==letter||password.substring(pos2,pos2+1)==letter){
      if(!(password.substring(pos1,pos1+1)==letter&&password.substring(pos2,pos2+1)==letter))valid++;
   }
}
console.log("Valid Passwords: "+valid);