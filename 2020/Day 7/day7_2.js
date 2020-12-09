var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n');
let i,j,bags=[];
class Bag{
   constructor(name,contains){
      this.name=name;
      this.contains=[];
      this.tempContains=contains;
   }
   GetName(){return this.name;}
   GetContains(){return this.contains;}
   GetTempContains(){return this.tempContains;}
   ReplaceContains(newList){
      let p;
      for(p=0;p<newList.length;p++)this.contains.push(newList[p]);
   }
}
for(i=0;i<datas.length;i++){
   let data=datas[i].split('contain');
   let name=data[0];
   name=name.replace("bags","");
   name=name.trim();
   let contents=data[1].split(',');
   let contains=[];
   for(j=0;j<contents.length;j++){
      if(contents[j].includes("bags"))contents[j]=contents[j].replace("bags","");
      else contents[j]=contents[j].replace("bag","");
      contents[j]=contents[j].replace('.',"").trim();
      if(!contents[j].includes("other")){
         let content=contents[j].substring(2,contents[j].length).trim()+"|"+contents[j].substring(0,1).trim();
         contains.push(content);
      }
   }
   let bag=new Bag(name,contains);
   bags.push(bag);
}
for(i=0;i<bags.length;i++){
   let list=bags[i].GetTempContains();
   let newList=[];
   for(j=0;j<list.length;j++){
      newList.push(GetBagClass(list[j].split('|')[0]));
   }
   bags[i].ReplaceContains(newList);
}
let start=GetBagClass("shiny gold");
var count=CountBags(start);
function CountBags(bag){
   let currentContents=bag.GetTempContains(),o;
   let tempcount=1;
   if(!currentContents.length)return tempcount;
   for(o=0;o<currentContents.length;o++){
      tempcount+=CountBags(GetBagClass(currentContents[o].split('|')[0]))*parseInt(currentContents[o].split('|')[1]);
   }
   return tempcount;
}
console.log(count-1);
function GetBagClass(nameStr){
   let y;
   for(y=0;y<bags.length;y++){
      if(bags[y].GetName()==nameStr)return bags[y];
   }
}