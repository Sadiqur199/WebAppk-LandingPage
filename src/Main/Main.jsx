import React from 'react';
import Navbar from '../Component/Navbar/Navbar';
import Banner from '../Component/Banner/Banner';
import TrustedMore from '../Component/TrustedMore/TrustedMore';
import SubcribeCourse from '../Component/SubcribeCourse/SubcribeCourse';
import Exist from '../Component/Exist/Exist';
import Footer from '../Component/Footer/Footer';
import PopularCourses from '../PopularCourses/PopularCourses';
import SkillShoot from '../Component/SkillShoot/SkillShoot';

const Main = () => {
  return (
    <div className=''>
      <Navbar></Navbar>
      <Banner></Banner>
      <TrustedMore></TrustedMore>
      <SubcribeCourse></SubcribeCourse>
      <Exist></Exist>
      <PopularCourses></PopularCourses>
      <SkillShoot></SkillShoot>
      <Footer></Footer>
    </div>
  );
};

export default Main;