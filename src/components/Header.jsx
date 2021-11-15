import React from "react";
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';

function Header() {
    return (
    <div className="row">
        <div className="col-8">
            <header>
                <nav className="navbar navbar-light">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#root">
                        <PhotoCameraBackIcon className="icon"/>
                            PhotoGallery
                        </a>
                    </div>
                </nav>
            </header>
        
        </div>
        <div className="col-4">
            <h1 className="title">find your creativity</h1>
        </div>
    </div>
)
}

export default Header