import React from 'react'
import { Link } from 'react-router-dom'
import { FaSistrix, FaBars  } from "react-icons/fa6";
import logo from '../assets/sociama.png'

const navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-2">
                <div className="container-fluid justify-content-between">
                    <div className="d-flex">
                        <img className='nav-brand navbar-brand me-2 mb-1 d-flex align-items-center' src={logo} height="35" alt="Sociama Logo" loading="lazy" />
                        <form className="input-group w-auto my-auto d-none d-sm-flex" method="get" action="">
                            <input name="q" type="text" className="form-control rounded" placeholder="Search" />
                            <span className="input-group-text border-0 d-none d-lg-flex"><FaSistrix /></span>
                        </form>
                    </div>

                    <ul className="navbar-nav humburger-icon">
                        <FaBars />
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default navbar