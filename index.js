// Add your code here

function submitData(uName, uEmail){
  let formData = {
  dogName: "Byron",
  dogBreed: "Poodle"
};
 
// method: "POST" is missing from the object below
let configObj = {
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
  },
  body: JSON.stringify(formData)
};
 
return fetch("http://localhost:3000/users", configObj)
  .then(function(response) {
    return response.json();
  })
  .then(function(object) {
    console.log(object);
  })
}
