import "./App.css";
import ButtonCustom from "./atoms/Button/ButtonCustom";
import SearchBar from "./atoms/search bar/search-bar";
import DropDown from './atoms/dropdown/dropdown.js';
import Logo from "./atoms/logo/Logo";
import InputText from './atoms/Input/input';
import Header from "./molecules/header/Header";
import Switchs from './atoms/switch/switch.js'
import Avatar from "./atoms/Avatar/avatar.js";
import Card from "./molecules/Card/card.js";
import Jeevan from "./pages/jeevan/jeevan";

const val = "Search for Jobs";
const width = 400;
const menu = ["1st menu item", "2nd menu item", "3rd menu item"];


function App() {
  return (
    <div className="App">
    {/* <Header />
      <ButtonCustom text={"Sign up"} />
      <SearchBar placeHolder={val} widthValue={width} />
      <DropDown options={menu} name="Place" widthValue={100}/>
      <Avatar link="https://picsum.photos/60" />
      <Card text={"I this is me "} />
      <ButtonCustom text={"Sign up"} variant="primary" />
      <Logo />
      <InputText placeholder = {"Enter Experience"}/>
      <Switchs prop1 = {"ON"} prop2={"OFF"}/> */}
      <Jeevan/>
    </div>
  );
}

export default App;
