import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Banner } from './Banner';
import Resources from './pages/Resources';
import { AboutUs } from './pages/AboutUs';
import OurAlumni from './pages/OurAlumni';
import { Contact } from './pages/Contact';
import Undergraduate from './dropdown/undergraduate/Undergraduate';
import Masters from './dropdown/master/Masters';
import PhD from './dropdown/phd/PhD';
import Programmes from './dropdown/programmes/Programmes';
import Scholarships from './dropdown/scholarships/Scholarships';

function MyRoutes() {
  return (
       <Routes>
            <Route path={'/'} element={<Banner/>}/>
            <Route path={'/undergraduate'} element={<Undergraduate/>}/>
            <Route path={"/master's"} element={<Masters/>}/>
            <Route path={'/phd'} element={<PhD/>}/>
            <Route path={'/programmes'} element={<Programmes/>}/>
            <Route path={'/scholarships'} element={<Scholarships/>}/>
            <Route path={'/resources'} element={<Resources/>}/>
            <Route path={'/aboutus'} element={<AboutUs/>}/>
            <Route path={'/ouralumni'} element={<OurAlumni/>}/>
            <Route path={'/contacts'} element={<Contact/>}/>

        </Routes>
  )
}

export default MyRoutes;