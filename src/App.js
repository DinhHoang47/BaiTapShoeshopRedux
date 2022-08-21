import logo from './logo.svg';
import './App.css';
import DemoClass from "./DemoComponent/DemoClass";
import Ex_Layout from './Ex_Layout/Ex_Layout';
import Data_Binding from './Data_Binding/Data_Binding';
import styles from "./ex_layout.module.css";
import Event_Binding from './Event_Binding/Event_Binding';
import Conditional_Rendering from './Conditional_Rendering/Conditional_Rendering';
import Demo_State from './Demo_State/Demo_State';
import RenderWithMap from './RenderWithMap/RenderWithMap';
import Demo_Prop from './Demo_Prop/Demo_Prop';
import User_Props from './Demo_Prop/User_Props';
import Ex_ShoeShop from './Ex_ShoeShop/Ex_ShoeShop';
import DemoRedux from './DemoReduxMini/DemoRedux';
function App() {
  return (
    <div className="mt-4 App">
        {/* <DemoClass/> */}
        {/* <Ex_Layout></Ex_Layout> */}
        {/* <Data_Binding/> */}
        {/* <Event_Binding/> */}
        {/* <Conditional_Rendering/> */}
        {/* <Demo_State/> */}
        {/* <RenderWithMap/> */}
        {/* <User_Props/> */}
        {/* <Ex_ShoeShop/> */}
        <DemoRedux/>
    </div>
  );
}

export default App;
