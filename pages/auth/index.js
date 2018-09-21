import React from "react";
import Router from "next/router"

import User from "../../components/User"

const authIndexPage = (props) => (
    <div>
        <h1>{props.appName}</h1>
        <User name="Michael" age="22" />
        <button onClick={() => Router.push("/")}>Go to Main Page</button>
    </div>
);

authIndexPage.getInitialProps = context => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: "Super App Auth Page"})
        },1000);
    });
    return promise;
}

export default authIndexPage;