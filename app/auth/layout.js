"use client";
import { usePathname } from "next/navigation";


function Auth({children}) {
    // We can also make layout conditional.

    const pathname = usePathname();
    console.log(pathname);



    return (
        <>
         {pathname == '/auth/register' ? <h1> Register</h1> : <h1> Not Register Endpoint </h1>}
Auth Header

        {children}
        
        </>

    );

}
export default Auth;
