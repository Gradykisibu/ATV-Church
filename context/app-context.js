import { createContext, useState, useEffect,useRef } from "react";
import axios from "axios";
const endpoint =
  "https://p6x7b95wcd.execute-api.us-east-2.amazonaws.com/Prod/get-events";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const [Events, setEvents] = useState([
    {
      startTime: "",
      Title: "",
      endTime: "",
      isUpcoming: false,
      ID: "",
      type: "",
      youtubeLink: "#",
    },
  ]);

  const mainEventsData = Events.filter((event, i) => !event.isUpcoming);
  const [carouselClass, setCarouselClass] = useState(true);

  let cc = mainEventsData.filter((item)=>item.type === "Children's Church")[0];
  let youth = mainEventsData.filter((item)=>item.type === "Active Youth")[0];
  let sermon = mainEventsData.filter((item)=>item.type === "Sunday Service")[0];
  const [mainEvents, setMainEvents] = useState([]);
  const eventsRef = useRef([sermon,youth,cc]);
  console.log('ref',eventsRef)
  const switchState = (currentState) => {
    console.log(currentState)
    switch (currentState) {
      case "Children's Church":
        console.log({cc})
        setMainEvents([cc, sermon, youth]);
        break;
      case "Sunday Service":
        setMainEvents([sermon, cc, youth]);
        break;
      case "Active Youth":
        setMainEvents([youth, sermon, cc]);
        break;
      default:
        setMainEvents([sermon, cc, youth]);
        console.log('default')
        break;
    }
  };

  
  const AppProps = {
    EventsData : Events,
    Events,
    setEvents,
    mainEvents,
    switchState,
    setMainEvents,
    mainEventsData,
    carouselClass,
    setCarouselClass,
    cc,youth,sermon
  };
  return <AppContext.Provider value={AppProps}>{children}</AppContext.Provider>;
};
