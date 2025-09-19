export const packageDetails = {
  "goa-beach-holiday": {
    description: "Enjoy a sunny beach holiday in Goa with fun water activities and nightlife.",
    itinerary: [
      { day: "Day 1", details: "Arrival, check-in, beach visit." },
      { day: "Day 2", details: "Water sports and local sightseeing." },
      { day: "Day 3", details: "Relax and departure." },
    ],
    includes: ["Hotel Stay", "Breakfast", "Airport Pickup"],
    excludes: ["Flight Tickets", "Personal Expenses"],
    contact: { phone1: "+91 8237996407",phone2: " +91 9407830506",phone3: " +91 9131095875", email: " info.pathfy@gmail.com" },
    similarPackages: ["manali-snow-adventure"],
  },

  "manali-snow-adventure": {
    description: "Snow adventure in Manali with skiing, snowboarding and scenic mountains.",
    itinerary: [
      { day: "Day 1", details: "Arrival in Manali and local sightseeing." },
      { day: "Day 2", details: "Skiing and snow activities." },
      { day: "Day 3", details: "Rohtang Pass excursion." },
      { day: "Day 4", details: "Departure." },
    ],
    includes: ["Hotel Stay", "Breakfast", "Travel Insurance"],
    excludes: ["Flight Tickets", "Lunch/Dinner"],
    contact: { phone: "+91 98765 43210", email: "info@travel.com" },
    similarPackages: ["goa-beach-holiday"],
  },
};
