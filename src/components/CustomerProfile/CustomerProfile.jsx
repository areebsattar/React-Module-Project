import { useEffect } from "react";
import { useState } from "react";

function CustomerProfile({ id }) {
  const [customerProfileData, setCustomerProfileData] = useState(null);

  useEffect(() => {
    fetch(`https://cyf-hotel-api.netlify.app/customers/${id}`)
      .then((res) => res.json())
      .then((data) => setCustomerProfileData(data))
      .catch((error) =>
        console.error("Error fetching customer profile:", error)
      );
  }, [id]);

  if (!customerProfileData) {
    return (
      <tr className="customer-row">
        <td colSpan={2}>Loading...</td>
      </tr>
    );
  }
  return (
    <tr className="customer-row">
      <td colSpan={2}>{customerProfileData.phoneNumber}</td>
    </tr>
  );
}

export default CustomerProfile;
