// In NextJS we have 2 types of components.
// 1. Server Components
// 2. Client Components
// Server Components are rendered from the server.
// Client components are native react components.
// For interactivity, we have to use Client components, like useState, useEffect, etc...
// And also, onclick, onchange, etc... on Client components.
// Also, we can use class components on client components. But not on server components.
// And also for custom hooks, browser api, etc... we use client component.
// By default, nextjs components are server components.
// If we console log, we'll get the message on server.
// But in order to make a client component, we use "use client" at the top.
// And then we'll see console.log on client.
export default function Home() {
  return (
    <>
    Home
    </>
  );
}
