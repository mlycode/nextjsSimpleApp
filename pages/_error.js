import React from "react";
import Link from "next/link"

const errorPage = () => (
    <div>
        <h1>Oops, Something went wrong :(</h1>
        <p><Link href="/">Try going back</Link></p>
    </div>
);

export default errorPage;