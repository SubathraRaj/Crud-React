import React from 'react'
import Navbar from './Navigate';
import { Outlet } from 'react-router';
export default function WithoutNav() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    </>
  )
}