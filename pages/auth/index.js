import React from "react";
import Router from "next/router"

import User from "../../components/User"

const authIndexPage = () => (
    <div>
        <h1>The Auth Index Page</h1>
        <User name="Michael" age="22" />
        <button onClick={() => Router.push("/")}>Go to Main Page</button>
    </div>
);

export default authIndexPage;