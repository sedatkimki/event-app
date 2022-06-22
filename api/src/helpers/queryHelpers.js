const EventQueryHelper = async function (req, res, events) {
  //initial query
  let query;
  //get by categories
  if (req.query.category) {
    query = events.filter((event) => {
      return event.category.toLowerCase() === req.query.category.toLowerCase();
    });
  } else {
    query = events;
  }
  //get by dates
  //query date format = YYYY-MM-DD
  if (req.query.startingDate && req.query.endDate) {
    query = query.filter((event) => {
      const eventStartingDate = new Date(event.date.startingDate);
      const eventEndDate = new Date(event.date.endDate);
      const queryStartingDate = new Date(req.query.startingDate);
      const queryEndDate = new Date(req.query.endDate);
      return (
        eventStartingDate <= queryEndDate && eventEndDate >= queryStartingDate
      );
    });
  }

  // get by city
  if (req.query.city) {
    query = query.filter((event) => {
      const eventAddress = event.location.address.toLowerCase().split(" ");
      const eventCity = eventAddress[eventAddress.length - 1].split("/")[1];
      const queryCity = req.query.city.toLowerCase(); // queries first letter must be upper case
      return eventCity === queryCity;
    });
  }
  if (req.query.isExpired) {
    if (req.query.isExpired == "true") {
      isExpired = true;
    } else {
      isExpired = false;
    }

    query = query.filter((event) => {
      console.log(event.isExpired);
      return event.isExpired === isExpired;
    });
  }

  // get by place
  if (req.query.place) {
    query = query.filter((event) => {
      const eventPlace = event.location.placeName
        .replace(" ", "-")
        .toLowerCase();
      const queryPlace = req.query.place.toLowerCase(); // queries first letter must be upper case
      return eventPlace === queryPlace;
    });
  }

  // search
  if (req.query.search) {
    const querySearch = req.query.search.toLowerCase();
    query = query.filter((event) => {
      const eventTitle = event.title.toLowerCase();
      const eventPerformer = event.performer.toLowerCase();

      return (
        eventTitle.includes(querySearch) || eventPerformer.includes(querySearch)
      );
    });
  }
  return query;
};

module.exports = {
  EventQueryHelper,
};
