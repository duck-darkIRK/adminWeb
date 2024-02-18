import React from "react"

class Page404 extends React.Component {
    render() {
        return (
            <div style={{
                position: "absolute",
                top: '50vh',
                left: '50vw',
                transform: 'translate(-50%, -50%)'
            }}>
                <h1>404</h1>
                <p>NOT FOUND</p>
            </div>
        )
    }
}

export default Page404;