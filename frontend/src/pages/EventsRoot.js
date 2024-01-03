import { Outlet } from 'react-router-dom';
import EventsNavigation from '../components/EventsNavigation';

function EventsRootlayout(){
    return <>
     <EventsNavigation/>
     <Outlet/>
    </>
};

export default EventsRootlayout;