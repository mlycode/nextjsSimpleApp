
import React from "react";
import Router from "next/router"

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <button onClick={() => Router.push("/")}>Go to Main Page</button>
    </div>
);

export default authIndexPage;