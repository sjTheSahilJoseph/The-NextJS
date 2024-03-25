import React from 'react'


// To fetch data on server component,
// we have to create a async function.

async function FetchData(url) {

    let data = await fetch(url);
    data = data.json();
    return data;

}

// We have to make this function async.
const Data =  async () => {
    let blogs = await FetchData('https://jsonplaceholder.typicode.com/posts');
    console.log(blogs);

  return (
      <>
    <div>page</div>

      <div>{
          blogs.map((b)=>{

              return (
              <div className="container" key={b.id}>

                    <h1>{b.title}</h1>
                  </div>
              )
              

          })
      }
</div>
      </>
  )
}

export default Data
