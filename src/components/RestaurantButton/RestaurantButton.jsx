function RestaurantButton({ onClick }) {
  return (
    <>
      <button
        type="button"
        className="button restaurant__button"
        onClick={onClick}
      >
        Add
      </button>
    </>
  );
}

export default RestaurantButton;
