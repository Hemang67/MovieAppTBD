import React from 'react'
import { CirclesWithBar } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div style={{ height: "55vh", display: "grid", placeItems: "center" }}>

            <CirclesWithBar
                height="100"
                width="100"
                color="#ffad1e"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                outerCircleColor=""
                innerCircleColor=""
                barColor=""
                ariaLabel='circles-with-bar-loading'
            />
        </div>
    )
}

export default Loader