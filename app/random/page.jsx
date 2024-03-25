import React from 'react'

// We can use .env.local file
// using process.env.name


const Random = () => {
    console.log(process.env.NODE_ENV);
  return (
    <div>Random</div>
  )
}

export default Random
