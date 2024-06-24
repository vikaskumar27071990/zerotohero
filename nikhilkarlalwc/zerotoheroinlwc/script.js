fetch('https://api.github.com/users/karkranikhil').then(function(result){
console.log('===========>'+result);    
return result.json()
}).then(function(response){
    console.log(response);
})

/*
fetch('https://api.github.com/users/karkranikhil')
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json(); // We parse the JSON only if the response was ok.
  })
  .then(data => console.log(data))
  .catch(error => console.error('There has been a problem with your fetch operation:', error));
*/