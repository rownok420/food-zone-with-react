import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div>
            <header>
                <section className="container">
                <nav className="navbar navbar-expand-lg navbar-light ">
                    <div className="container-fluid">
                        <a className="navbar-brand fs-3 text-success" href="/img"> <i className="bi bi-shop me-2"></i>Food zone</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto fs-6">
                                <li className="nav-item">
                                    <a className="nav-link active text-success" aria-current="page" href="/home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-success" href="/item">Items</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link text-success" href="/pricing">Pricing</a>
                                </li>
                                <li style={{cursor: "pointer"}} className="nav-item" data-bs-toggle="modal" data-bs-target="#cart-items">
                                    <p className="nav-link text-success">
                                        <i className="block bi bi-cart-plus"></i>
                                    </p>
                                </li>
                                
                            </ul>
                    </div>
                    </div>
                </nav>
                </section>
            </header>
        </div>
    );
};

export default Header;