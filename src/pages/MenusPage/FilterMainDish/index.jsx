import ListMenu from "../ListMenu";

export default function FilterMainDish() {
  return (
    <>
      <ListMenu filter={{ type: "main-dish" }} />
    </>
  );
}
