import MainDish from "./MainDish";
import Beverage from "./Beverage";
import propTypes from "prop-types";
export default function MenuType({ type }) {
  if (type == "main-dish") {
    return <MainDish />;
  } else if (type == "beverage") {
    return <Beverage />;
  }
}

MenuType.propTypes = {
  type: propTypes.string,
};
