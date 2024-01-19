import React from "react";

const LoaderComponent = ({ loading }) => {

    if (loading) {
        return (
            <div>
                <div className="d-flex justify-content-center">
                    <div className="spinner-grow text-light" style={{ width: '7rem', height: '7rem', marginTop: '6rem', marginBottom: '6rem' }} role="status">
                        <span className="sr-only"></span>
                    </div>
                </div>
            </div>
        );
    }
    return null;
}

export default LoaderComponent;
