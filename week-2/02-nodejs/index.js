const object = {
    name: "John",
    age: 30
};

let todo = [{
    id: 1,
    title:"test title",
    description: "test description",
    completed : false
  }];

if (Object.values(todo[0]).includes(1)) {
    console.log("Value exists");
} else {
    console.log("Value does not exist");
}