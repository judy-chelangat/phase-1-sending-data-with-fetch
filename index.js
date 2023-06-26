// Add your code here

  
  // const configurationObject = {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //     Accept: "application/json",
  //   },
  //   body: JSON.stringify(formData),
  // };
  
  // fetch("http://localhost:3000/dogs", configurationObject)
  //   .then(function (response) {
  //     return response.json();
  //   })
  //   .then(function (object) {
  //     console.log(object);
  //   });

    function submitData(name,email){
      const formData = {
        name: "Steve",
        email: "steve@steve.com"
      }
     const configurationObject=
     {
      method:"POST",
      headers:{
      "Content-Type": "application/json",
      "Accept": "application/json",
      },
      body: JSON.stringify(formData)   // converting object to string
     }
    


     return fetch("http://localhost:3000/users" , configurationObject)
     .then(response => response.json())
     .then(data => 
      {const id = data.id;
        document.body.innerHTML += `<p>${id}</p>`})
     
     .catch(function (error) {
      document.body.innerHTML +=`<p> ${error.message}</p>`
    })
  };
     
