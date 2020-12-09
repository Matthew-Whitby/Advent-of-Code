var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
datas=data.split('\r\n');
let i, j, valid = 0;
for(i = 0; i < datas.length; i++){
   let lineParts = datas[i].split(' ');
   let min = lineParts[0].split('-')[0], max = lineParts[0].split('-')[1];
   let letter = lineParts[1].substring(0, 1);
   let password = lineParts[2];
   let count = 0;
   for(j=0; j<password.length; j++){
      if(password.substring(j, j + 1) == letter) count++;
   }
   if(count >= min && count <= max) valid++;
}
console.log("Valid Passwords: " + valid);