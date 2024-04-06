import "./SearchResult.scss";

import CustomerProfile from "../CustomerProfile/CustomerProfile";
import Table from "./Table";



function SearchResult(props) {
  const Bookings = props.results;

  return (
    <>
      <Table />
      <CustomerProfile />
    </>
  );
}
export default SearchResult;
