/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if(str1.length!=str2.length){
    return false;
  }

  let map = [];
    for(let i=0;i<str1.length;i++){
        
        if(map[str1[i]]){
            map[str1[i]][0]++;
        }
        else{
            map[str1[i]]=1;
        }
    }
    for(let i=0;i<str2.length;i++){
        
        if(map[str2[i]]){
            map[str1[i]][0]--;
        }
        else{
            return false;
        }
    }

    if(map.length==0){
        return true;
    }
    return false;
  


}

module.exports = isAnagram;
