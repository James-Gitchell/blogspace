

fetch("https://apis.scrimba.com/jsonplaceholder/posts", {method: "GET"})
     .then(res => res.json())
     .then(data => {
        const postArr = data.slice(0,5)
        console.log(postArr);
      })