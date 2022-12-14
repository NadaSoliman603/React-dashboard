

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './';
import { Navbar, Footer, Sidebar, ThemeSettings } from '../components';
import { useStateContext } from '../context/ContextProvider';
import { useEffect } from 'react';

export default function Dashboard() {
  const {direction ,currentMode ,activeMenu , setThemeSettings , themeSettings , currentColor} = useStateContext()
  
  useEffect(() => {
    console.log(direction)
    document.body.setAttribute("dir", direction);
  }, [direction]);

  return (
    <>
    <div className={currentMode === "Dark" ?'dark' : ''}>
    {/* <BrowserRouter> */}
      <div className="flex relative dark:bg-main-dark-bg ">
        <div className={`fixed bottom-4  ${direction === "rtl" ? 'left-4' : 'right-4'} `} style={{ zIndex: '1000' }}>
          <TooltipComponent
            content="Settings"
            position="Top"
          >
            <button
              type="button"
              onClick={() => setThemeSettings(true)}
              style={{ backgroundColor:  currentColor, borderRadius: '50%' }}
              className="text-3xl text-white p-3 hover:drop-shadow-xl hover:bg-light-gray"
            >
              <FiSettings />
            </button>

          </TooltipComponent>
        </div>

        {activeMenu ? (
          <div className={`w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white right-0  ${direction === "rtl" ? "right-0" : "left-0"}`}>
            <Sidebar />
          </div>
        ) : (
          <div className="w-0 dark:bg-secondary-dark-bg">
            <Sidebar />
          </div>
        )}

        <div
          className={
            activeMenu
              ? `dark:bg-main-dark-bg bg-light-gray  min-h-screen   w-full ${direction === "rtl" ? "md:mr-72" :"md:ml-72"} `
              : ' dark:bg-main-dark-bg bg-light-gray  w-full min-h-screen flex-2 '
          }
        >
          <div className="fixed md:static  bg-light-gray dark:bg-main-dark-bg navbar w-full ">
            <Navbar />
          </div>
          
          <div >
            {themeSettings && (<ThemeSettings />)}

          <Outlet/>
          </div>
          {/* <Footer /> */}
        </div>
        
      </div>
    {/* </BrowserRouter> */}
  </div>
    </>
  )
}


