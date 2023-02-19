import { balanceSelector } from "@app/store/selectors";
import { currencyFormatter } from "@app/utils";
import { useRecoilValue } from "recoil";

const Heading = () => {
  const balance = useRecoilValue(balanceSelector);
  return <h1>{currencyFormatter(balance)}</h1>;
};

Heading.defaultProps = {};
Heading.propTypes = {};

export default Heading;
