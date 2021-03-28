fetch(`https://jsonplaceholder.typicode.com/posts`)
    .then(data => data.json())
    .then(data => console.log(data))