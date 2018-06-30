import React from 'react';

const NavBar = () => {
    return (
        <nav className='navbar'>
            <div className='container-fluid'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <button className='btn-hamburger'>
                            <span className='btn-hamburger-line' />
                        </button>

                        <h1 className='title title--big'>
                            Teste Front
                        </h1>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;