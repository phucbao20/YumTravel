import React from 'react'
import './MenuDashboard.scss'
import { Routes, Route, Link } from 'react-router-dom'
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { FaTable } from "react-icons/fa6";
import { FaChartBar } from "react-icons/fa";
import { MdOutlinePeopleAlt } from "react-icons/md";

function MenuDashboard() {
    return (
        <>
                <nav className='sidebar w-1/6'>
                    <ul className=' mt-2 ms-1 me-1 *:mb-1'>
                        <li><Link to='#'>
                            <span className='flex items-center'><MdOutlineSpaceDashboard className='me-3' /> Dashboard</span>
                        </Link></li>
                        <li><Link to='#'>
                            <span className='flex items-center'><FaTable className='me-3' /> Table</span>
                        </Link></li>
                        <li><Link to='#'>
                            <span className='flex items-center'><FaChartBar className='me-3' /> Chart</span>
                        </Link></li>
                        <li><Link to='#'>
                            <span className='flex items-center'><MdOutlinePeopleAlt className='me-3' /> Users</span>
                        </Link></li>
                    </ul>
                </nav>

        </>
    )
}

export default MenuDashboard