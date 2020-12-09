var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n');
let i,j,highest=0,minCol,maxCol,minRow,maxRow,seatIDs=[];
for(i=0;i<datas.length;i++){
   let instructions=datas[i].split("");
   minRow=0;
   maxRow=127;
   for(j=0;j<7;j++){
      let rowMid=Math.floor((minRow+maxRow)/2);
      if(instructions[j]=="F")maxRow=rowMid;
      else minRow=rowMid+1;
   }
   minCol=0;
   maxCol=7;
   for(j=7;j<10;j++){
      let colMid=Math.floor((minCol+maxCol)/2);
      if(instructions[j]=="L")maxCol=colMid;
      else minCol=colMid+1;
   }
   let seatID=minRow*8+minCol;
   if(seatID>highest)highest=seatID;
   seatIDs.push(parseInt(seatID));
}
seatIDs.sort((a,b)=>a-b);
/*let sorted = false;
while(!sorted){
   for(i=0;i<seatIDs.length-1;i++){
      if(seatIDs[i]>seatIDs[i+1])
      {
         let temp=seatIDs[i];
         seatIDs[i]=seatIDs[i+1];
         seatIDs[i+1]=temp;
         sorted=false;
      }
   }
   if(sorted)break;
   sorted=true;
   for(j=seatIDs.length-1;j>0;j--){
      if(seatIDs[j-1]>seatIDs[j])
      {
         let temp=seatIDs[j];
         seatIDs[j]=seatIDs[j-1];
         seatIDs[j-1]=temp;
         sorted=false;
      }
   }
}*/
for(i=9;i<seatIDs.length-9;i++){
   if(seatIDs[i+1]!=seatIDs[i]+1)console.log(seatIDs[i]+1);
}
console.log("HIGHEST: "+highest);