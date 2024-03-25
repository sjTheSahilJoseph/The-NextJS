// We can also make API [dynamicRoute].

import {NextResponse} from "next/server";


// We have request, response here as well.
// // We can put _ instead of some thing, which means ignore.
export function GET(_, response) {

    // id because our name of dynamic route is [id].
    console.log(response.params.id);

    return NextResponse.json({id: response.params.id});

}
