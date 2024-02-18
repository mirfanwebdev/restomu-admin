import ListMenu from "../ListMenu";
export default function FilterBeverage() {
  const filter = {
    type: "beverage",
  };
  return (
    <>
      <ListMenu filter={filter} />
    </>
  );
}
