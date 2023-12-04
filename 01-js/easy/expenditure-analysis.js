/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let result = new Map();
  let ans = [];
  for(let i=0; i<transactions.length;i++){
    
    if(result.has(transactions[i]["category"])){
      result.set(transactions[i]["category"],result.get(transactions[i]["category"])+transactions[i]["price"]);
    }
    else{
      result.set(transactions[i]["category"],transactions[i]["price"]);
    }
  }


 result.forEach((value,key) => {
  ans.push({category:key, totalSpent:value});
 });

  return ans;
}

module.exports = calculateTotalSpentByCategory;
