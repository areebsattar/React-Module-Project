import React, { useState } from 'react';
import Search from "@/components/Search/Search";
import SearchResult from "../SearchResult/SearchResult";
import FakeBookings from '@/data/fakeBookings.json';

// import SearchResults from "@/componentsSearchResults.js";
// import FakeBookings from "@/data/fakeBookings.json";

const Bookings = () => {

  const [bookings, setBookings] = useSatet(FakeBookings);

  const search = (searchVal) => {
    console.info("TO DO!", searchVal);
  };

  return (
    <main className="bookings">
      <Search search={search} />
      <SearchResult bookings={bookings} />
    </main>
  );
};

export default Bookings;
