var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n');
let i,instructions=[],IP=0,acc=0,visited=[],changed=-1;
for(i=0;i<datas.length;i++){
   let instruction=datas[i].split(" ");
   instructions.push(instruction);
}
for(i=0;i<instructions.length;i++){
      IP=0;
      visited=[];
      acc=0;
   if(changed!=-1){
      if(instructions[changed][0]=="nop")instructions[changed][0]="jmp";
      else if(instructions[changed][0]=="jmp")instructions[changed][0]="nop";
      changed=-1;
   }
   if(instructions[i][0]=="nop"){
      instructions[i][0]="jmp";
      changed=i;
      if(Run())console.log(acc);
   }else if(instructions[i][0]=="jmp"){
      instructions[i][0]="nop";
      changed=i;
      if(Run())console.log(acc);
   }
}
function Run(){
   while(1){
      if(IP>=instructions.length)return 1;
      if(visited.includes(IP))return 0;
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
}