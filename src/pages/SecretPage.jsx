import { Helmet } from "react-helmet-async";

export function SecretPage(){
    return(
        <>
        <Helmet>
            <title>Secret</title>
            <meta name="robots" content="noindex" />
        </Helmet>
        <h1>Not indexed</h1>
        </>
    )
}