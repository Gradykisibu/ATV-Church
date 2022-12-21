export const handleNav = (router, event) => {
  console.log(event);

  let routerMethod = router.push

  let pageUrl = 'services/'

  switch (event.type) {
    case "Sunday Service":
      routerMethod({
        pathname: `${pageUrl}sermons`,
        query: { serviceName: event.type },
        asPath: `services/sermons`,
      });
      console.log('SUNDAY!!!')
      break;
    case "Active Youth":
      routerMethod({
        pathname: "services/active-youth",
        query: { serviceName: event.type },
        asPath: "services/active-youth",
      });
      console.log('YOUTH')
      break;
    case "Children's Church":
      routerMethod({
        pathname: "services/childrens-church",
        query: { serviceName: event.type },
        asPath: "services/childrens-church",
      });
      console.log('CHILDREN')
      break;
    default :
      consoel.log('Default',event)
  }
};
