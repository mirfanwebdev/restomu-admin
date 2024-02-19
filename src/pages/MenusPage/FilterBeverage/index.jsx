import ListMenu from "../ListMenu";
export default function FilterBeverage() {
  const filter = {
    name: "",
    type: "beverage",
  };
  return (
    <>
      <ListMenu filter={filter} />
    </>
  );
}
