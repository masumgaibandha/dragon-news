import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import LatestNews from '../components/LatestNews'
import Navbar from '../components/Navbar'
import LeftAside from '../components/HomeLayOut/LeftAside'
import RightAside from '../components/HomeLayOut/RightAside'

const HomeLayOut = () => {
  return (
    <div>
      <header>
        <Header></Header>
        {import.meta.env.VITE_name}
        <section className='container mx-auto my-3'>
          <LatestNews></LatestNews>
        </section>
        <nav className='container mx-auto my-3'>
          <Navbar></Navbar>
        </nav>
      </header>
      <main className='container mx-auto gap-5 grid grid-cols-12 mt-10 gap-5'>
        <aside className='col-span-3 sticky h-fit top-0'>
          <LeftAside></LeftAside>
        </aside>

        <section className='main col-span-6 '>
          <Outlet></Outlet>
        </section>

        <aside className='col-span-3 sticky h-fit top-0'>
          <RightAside></RightAside>
        </aside>
      </main>
    </div>
  )
}

export default HomeLayOut