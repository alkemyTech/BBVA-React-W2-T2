import React from 'react';
import './App.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ActivitiesForm from './Components/Activities/ActivitiesForm';
import CategoriesForm from './Components/Categories/CategoriesForm';
import NewsForm from './Components/News/NewsForm';
import SlidesForm from './Components/Slides/SlidesForm';
import TestimonialForm from './Components/Testimonials/TestimonialsForm';
import UserForm from './Components/Users/UsersForm';
import SchoolCampaign from './Campaigns/School/SchoolCampaign';
import ToysCampaign from './Campaigns/Toys/ToysCampaign';
import MembersForm from './Components/Members/MembersForm';
import ProjectsForm from './Components/Projects/ProjectsForm';
import About from './Components/About/About'
import Login from './Components/Login/Login';
import RegisterForm from './Components/Auth/RegisterForm';
import Activities from './Components/Activities/Activities';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import OrganizationEditForm from './Components/Organization/OrganizationEditForm';
import EditHome from './Components/Organization/EditHome';
import Header from './Components/Header/Header';
import OrganizationData from './Components/Organization/OrganizationData';
import Footer from './Components/Footer/Footer';
import Index from './Components/Home/Index'
import Donacion from './Components/Donations/Donacion';
import Gracias from './Components/Donations/Gracias';
import Contact from './Components/Contact/Contact';
import FrontTestimonial from './Components/FrontTestimonial/FrontTestimonial';


function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Switch>
          <Route path="/" exact component={Index} />  
          <Route path="/login" component={Login} />
          <Route path="/us" component={About } /> 
          <Route path="/contact" component={Contact} />
          <Route path="/testimonials" component={FrontTestimonial} />
          <Route path="/create-activity" component={ActivitiesForm} />
          <Route path="/activities" component={Activities} />
          <Route path="/create-category" component={CategoriesForm} />
          <Route path="/news" component={NewsForm} />
          <Route path="/news/:id" component={NewsForm}/>
          <Route path="/backoffice/create-slide" component={SlidesForm} />
          <Route path="/create-testimonials" component={TestimonialForm} />
          <Route path="/create-user" component={UserForm} />
          <Route path="/create-member" component={MembersForm} />
          <Route path="/backoffice/members/edit" component={MembersForm} />
          <Route path="/create-project" component={ProjectsForm} />
          <Route path="/school-campaign" component={SchoolCampaign} />
          <Route path="/toys-campaign" component={ToysCampaign} /> 
          <Route path="/register-form" component={ RegisterForm } />
          <Route path="/backoffice/organization" component={ OrganizationData } /> 
          <Route path="/register-form" component={ RegisterForm } /> 
          <Route path="/backoffice/organization/edit" component={ OrganizationEditForm } />
          <Route path="/backoffice/Home/Edit" component={ EditHome } />
          <Route path="/donar" component={ Donacion } />
          <Route path="/gracias" component={ Gracias } />
        </Switch>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
