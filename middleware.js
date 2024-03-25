// Middleware is a function which will run between the request and response.
// After the request basically.
// It can read, update, the request and response.

// We can make middleware by a file on root middleware.js.

export default function middleware(request) {

    return console.log("middleware ran");


}

// Config for middleware.
// matcher means when this middleware should run.
export const config = {
    matcher: [
"/",
    ],
}
