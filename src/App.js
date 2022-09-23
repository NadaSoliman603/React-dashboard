
import './App.css'

import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Ecommerce, Orders, Calendar, Employees, Stacked, Pyramid, Customers, Kanban, Line, Area, Bar, Pie, Financial, ColorPicker, ColorMapping, Editor } from './pages';
import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { useStateContext } from './context/ContextProvider';
import { useEffect } from 'react';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';

export default function App() {
  const { direction, currentMode, activeMenu, setThemeSettings, themeSettings, currentColor } = useStateContext()

  useEffect(() => {
    console.log(direction)
    document.body.setAttribute("dir", direction);
  }, [direction]);

  return (
    <BrowserRouter>
      <Routes>
        {/* dashboard  */}
        <Route path="/login" element={(<Login />)} />

        <Route path="/" element={(<Dashboard />)} >
          {/* dashboard  */}
          <Route path="/" element={(<Ecommerce />)} />
          <Route path="/ecommerce" element={(<Ecommerce />)} />
          {/* pages  */}
          <Route path="/orders" element={<Orders />} />
          <Route path="/employees" element={<Employees />} />
          <Route path="/customers" element={<Customers />} />

          {/* apps  */}
          <Route path="/kanban" element={<Kanban />} />
          <Route path="/editor" element={<Editor />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/color-picker" element={<ColorPicker />} />

          {/* charts  */}
          <Route path="/line" element={<Line />} />
          <Route path="/area" element={<Area />} />
          <Route path="/bar" element={<Bar />} />
          <Route path="/pie" element={<Pie />} />
          <Route path="/financial" element={<Financial />} />
          <Route path="/color-mapping" element={<ColorMapping />} />
          <Route path="/pyramid" element={<Pyramid />} />
          <Route path="/stacked" element={<Stacked />} />

          <Route path='التجارة الإلكترونية' element={(<Ecommerce />)} />

          {/* pages  */}
          <Route path="/طلبات" element={<Orders />} />
          <Route path="/الموظفين" element={<Employees />} />
          <Route path="/العملاء" element={<Customers />} />

          {/* apps  */}
          <Route path="/المهام" element={<Kanban />} />
          <Route path="/تحرير" element={<Editor />} />
          <Route path="/أداة انتقاء اللون" element={<Calendar />} />
          <Route path="/الرسوم البيانية" element={<ColorPicker />} />

          {/* charts  */}
          <Route path="/خطوط" element={<Line />} />
          <Route path="/مخطط المنطقة" element={<Area />} />
          <Route path="/منطقة" element={<Bar />} />
          <Route path="/مخطط دائري" element={<Pie />} />
          <Route path="/خط المخزون" element={<Financial />} />
          <Route path="/تعيين الألوان " element={<ColorMapping />} />
          <Route path="/مخطط هرمى" element={<Pyramid />} />
          <Route path="/مخطط مكدس" element={<Stacked />} />

          {/* </Routes> */}
        </Route>

      </Routes>
      {/* <Dashboard /> */}
    </BrowserRouter>
  )
}



