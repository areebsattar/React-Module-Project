import { useState, useEffect } from "react";

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
          <td colSpan={2} className={customerProfileData.vip ? "vip-customer": ""}>
          {customerProfileData.vip ? `VIP Customer`: `Regular Customer`}
          </td>
          <td>ID: {customerProfileData.id}</td>
          <td colSpan={2}>More info</td>
    </tr>
  );
}

export default CustomerProfile;
