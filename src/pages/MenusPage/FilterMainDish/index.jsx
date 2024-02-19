import ListMenu from "../ListMenu";

export default function FilterMainDish() {
  return (
    <>
      <ListMenu filter={{ name: "", type: "main-dish" }} />
    </>
  );
}
