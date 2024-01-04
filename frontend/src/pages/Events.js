import { useLoaderData } from "react-router-dom";

import EventsList from "../components/EventsList";

function EventsPage() {
  const data = useLoaderData();

  // if(data.isError){
  //   return <p>{data.message}</p>
  // }

  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {
  const response = await fetch("http://localhost:8080/eventsggg");

  if (!response.ok) {
    //return { isError: true, message: "Could not fetch events." };
   throw new Response(JSON.stringify({ message: "Coud not fetch events." }),{status:500,});
   // throw new Error ("Coud not fetch events.");
  } else {
    return response;
  }
}
