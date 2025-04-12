import { useContext } from "react";
import CartItems from "./components/CartItems/CartItems";
import Header from "./components/Header/Header";
import HeroImages from "./components/HeroImages/HeroImages";
import Summary from "./components/Summary/Summary";
import { UserContext } from "./components/context/UserContext";
import OrderCartButton from "./components/Header/OrderCartButton";
import OrderCartModal from "./components/OrderCartModal/OrderCartModal";

function App() {
  const {isOpen,setIsOpen}=useContext(UserContext)
  return (
    <>
      <Header/>
      <HeroImages/>
      <Summary/>
      <CartItems/>
      {
        isOpen && <OrderCartModal/>
      }

    </>
  );
}

export default App;
