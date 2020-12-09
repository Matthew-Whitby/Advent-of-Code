var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n\r\n');
let i,j,z,g,count=0;
for(i=0;i<datas.length;i++){
   let group=[];
   let people=datas[i].split('\r\n');
   for(j=0;j<people.length;j++){
      let questions=people[j].split('');
      for(z=0;z<questions.length;z++){
         if(!group.includes(questions[z])){
            group.push(questions[z]);
            group.push(1);
         }else group[group.indexOf(questions[z])+1]++;
      }
   }
   for(g=1;g<group.length;g+=2){
      if(group[g]==people.length)count++;
   }
}
console.log(count);