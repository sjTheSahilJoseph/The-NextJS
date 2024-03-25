import {NextResponse} from 'next/server';

export async function POST(req, res) {

    // The data in req.body.
    // let data = await req.json();

    // Destructuring
    let {username, email, password} = await req.json();

    if (!username || !email || !password) {
        return NextResponse.json({error: "Data not sent"});
    }

    console.log(username, email, password);

    return NextResponse.json({success: "Data sent"});

}
