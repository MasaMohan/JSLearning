


function stringHandOn(){
    var givenString = "     Hey you are doing good, keep it up  ";

   console.log(`Step 01. Given String is :-${givenString} `);
   
   var beforeTrim = givenString.length;
   console.log(`Step 02. Total string length is :- ${givenString.length}`);
   var result = givenString.trim();
   var afterTrim = result.length;
   var character = result;
   var indexWord = result;
   var startWith = result;
   var subs = result;
   console.log(`Step 03. After trim length is :- ${result.length}`);
   var result = beforeTrim - afterTrim;


   console.log(`Step 04. Total number of extra spaces is:- ${result}`);
   console.log(`Step 05. first and last of "Hey you are doing good, keep it up" is :- ${character[0]} "and" ${character[character.length-1]}`)
   
   var words = character.split(" ");
   console.log(`Step 06. Total number of words available string after step 03 is :- ${words.length}`);
   
   var result = indexWord.slice(18,22);
   console.log(`Step 07. Index of "good" in the trim string is:- ${result}`);
 
   console.log(`Step 08. (A) substring starting from index 22 is:- "${subs.substring(22)}"`);
   console.log(`Step 08. (B) slice starting from index 22 is:- "${subs.slice(22)}" `);
   var endWith = subs.endsWith("up")
   console.log(`Step 09. String end with "up":- ${endWith}`);
   var sWith = startWith.startsWith("Hey")
   console.log(`Step 10. String stat with "Hey":- ${sWith} `);
   
   



}
stringHandOn();
