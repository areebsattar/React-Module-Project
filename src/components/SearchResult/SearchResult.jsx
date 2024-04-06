import "./SearchResult.scss";

import CustomerProfile from "../CustomerProfile/CustomerProfile";
import Table from "./Table";


function SearchResult() {

import TableBody from "./TableBody";
import TableHead from "./TableHead";
import dayjs from "dayjs";

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
