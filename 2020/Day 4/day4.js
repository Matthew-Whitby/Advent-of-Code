var fs= require('fs');
var data=fs.readFileSync('data.txt',{encoding:'utf8'});
let datas=data.split('\r\n\r\n');
let i,j,valid=0;
for(i=0;i<datas.length;i++){
   let somedata=datas[i].split(/\r\n| /),validCats=0;
   for(j=0;j<somedata.length;j++){
      let categories=somedata[j].split(':')[0];
      let value=somedata[j].split(':')[1];
      switch(categories){
         case"byr":
            let byr=parseInt(value);
            if(byr>=1920&&byr<=2002)validCats++;
            break;
         case"iyr":
            let iyr=parseInt(value);
            if(iyr>=2010&&iyr<=2020)validCats++;
            break;
         case"eyr":
            let eyr=parseInt(value);
            if(eyr>=2020&&eyr<=2030)validCats++;
            break;
         case"hgt":
            if(value.includes("cm")){
               let heightcm=parseInt(value.substring(0,value.length-2));
               if(heightcm<=193&&heightcm>=150)validCats++;
            }else if(value.includes("in")){
               let heightin=parseInt(value.substring(0,value.length-2));
               if(heightin<=76&&heightin>=59)validCats++;
            }
            break;
         case"hcl":
            if(matchRegex(/#([0-9]|[a-f]){6}/,value))validCats++;
            break;
         case"ecl":
            if(value=="amb"||value=="blu"||value=="brn"||value=="gry"||value=="grn"||value=="hzl"||value=="oth")validCats++;
            break;
         case"pid":
            if(matchRegex(/[0-9]{9}/,value))validCats++;
            break;
         case"cid":
            break;
      }
   }
   if(validCats==7)valid++;
}
console.log(valid);
function matchRegex(regex,str) {
   var match=str.match(regex);
   return match&&str===match[0];
}