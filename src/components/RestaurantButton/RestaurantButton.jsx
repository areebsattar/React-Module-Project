
function RestaurantButton({ OrderOne }) {
  return (
    <>
      <button type="button" className="button restaurant__button" onClick={OrderOne}>
        Add
      </button>
    </>
  );
}

export default RestaurantButton
