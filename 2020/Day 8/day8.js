var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n');
let i,instructions=[],IP=0,acc=0,visited=[];
for(i=0;i<datas.length;i++){
   let instruction=datas[i].split(" ");
   instructions.push(instruction);
}
while(true){
   if(CheckVisited(IP))break;
   visited.push(IP);
   switch(instructions[IP][0]){
      case"acc":
         acc+=parseInt(instructions[IP][1]);
         IP++;
         break;
      case"jmp":
         IP+=parseInt(instructions[IP][1]);
         break;
      case"nop":
         IP++;
         break;
   }
}
console.log(acc);
function CheckVisited(IP){
   if(visited.includes(IP))return true;
   return false;
}