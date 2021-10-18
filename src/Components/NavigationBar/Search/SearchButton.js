import Button from "@mui/material/Button";

function SearchButton({ searchInput }) {
  const onSearchClick = (cityName) =>
    (window.location.href = `/city/${cityName}`);

  return (
    <Button size="large" onClick={() => onSearchClick(searchInput)}>
      Search
    </Button>
  );
}

export default SearchButton;
