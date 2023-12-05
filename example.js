function countVowels(str) {
    let result=0;
    let vowels = ['a','i','o','u','e'];
    str = str.toLowerCase().trim().replaceAll(' ','');

    for(let i=0; i<str.length;i++){
      if(vowels.indexOf(str[i])>-1){
        result++;
      }

    }
    return result;
}

  str = "Eva, can I see bees in a cave?"

  console.log(countVowels(str))