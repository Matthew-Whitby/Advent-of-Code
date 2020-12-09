var fs=require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n');
let i,j,count=0;
let bags=[];
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
      for(p=0;p<newList.length;p++){
         this.contains.push(newList[p]);
      }
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
      contents[j]=contents[j].replace('.',"");
      contents[j]=contents[j].trim();
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
let contains;
for(i=0;i<bags.length;i++){
   contains=false;
   if(bags[i].GetName()!="shiny gold")CheckBag(bags[i]);
   if(contains)count++;
}
console.log(count);
function CheckBag(bag){
   if(bag.GetName()=="shiny gold"){
      contains=true;
      return 1;
   }
   let currentContents=bag.GetContains(),o;
   if(!currentContents.length)return 0;
   for(o=0;o<currentContents.length;o++){
      if(CheckBag(currentContents[o]))return 1;
   }
   return 0;
}

function GetBagClass(nameStr){
   let y;
   for(y=0;y<bags.length;y++){
      if(bags[y].GetName()==nameStr)return bags[y];
   }
}