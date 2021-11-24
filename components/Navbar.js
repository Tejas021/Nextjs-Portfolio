import Link from 'next/link';
import { useState } from 'react';
import Button from './Button';
export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='fixed top-0 z-5 flex items-center flex-wrap bg-black p-3 bg-opacity-0'>
       
        {/* <button
          className=' inline-flex p-3 hover:bg-black-600 rounded lg:hidden text-white-600 mr-auto hover:text-black-600 outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-6 h-6'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button> */}
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
        
        >
          <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
           
{/*             
              <a href="#projects" className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-600 font-bold items-center justify-center '>
                PROJECTS
              </a>
           
            <Link href='#about'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-600 font-bold items-center justify-center '>
                ABOUT
              </a>
            </Link>
            <Link href='#contact'>
              <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-red-600 font-bold items-center justify-center '>
                CONTACT
              </a>
            </Link> */}
            
              <a className='lg:inline-flex lg:w-auto w-full  rounded text-red-600 font-bold items-center justify-center '>
              <Button/>
              </a>
            
         
          </div>
        </div>
      </nav>
    </>
  );
};