import React from 'react'


function About (){
  return (
    <div>About</div>
  )
}

export default About;

// Export this function, to generateMetadata for each page or layout.
// Now, this will take description form the layout, outside. which is in that case home page.
// We can make our own description for this page as well. In that.
export const generateMetadata = ()=> {
    return {
        title: "Hi",
        description: "This is the description for About",
    }
}