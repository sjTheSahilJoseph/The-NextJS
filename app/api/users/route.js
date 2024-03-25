// To make APIs in NextJS.
// We have to create a folder in app/api
// There we define our api.
// We name group/route.js where we store the routes of that api group.

import { NextResponse } from "next/server";
import data from "@/app/utils/data";

// We make UPPERCASE request name to that function and export that.

    // We use NextResponse.json for json data.
export function GET() {
    const users = data;
    return NextResponse.json({users});
}
