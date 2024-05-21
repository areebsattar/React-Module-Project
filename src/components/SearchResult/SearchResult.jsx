import "./SearchResult.scss";

import CustomerProfile from "../CustomerProfile/CustomerProfile";
import Table from "./Table";

function SearchResult({ results }) {
  return (
    <>
      <Table bookings={results} />
      <CustomerProfile />
    </>
  );
}
export default SearchResult;
