import "./App.css";
import LoadMoreData from "./components/LoadMore-Data";
import Star from "./components/Star";
import Todo from "./components/TodoList";
import Accordian from "./components/accordian";
import LightDarkMode from "./components/light-dark-mode";
import QRCodeGenerator from "./components/qr-code-generator";
import RandomColor from "./components/random-color";
import ScrollIndicator from "./components/scroll-indicator";
import UseWindowResizeTest from "./components/window-resize/test";

function App() {
  return (
    <div className="App">
      {/* Accordian component */}
      <Accordian />
      {/* Random Color Component */}
      {/* <RandomColor /> */}
      {/* star component */}
      <Star />
      {/* Todo List */}
      <Todo />
      {/* loadmore--data */}
      <LoadMoreData />
      {/* QR CODE GENERATOR */}
      <QRCodeGenerator />
      {/* Dark Light Mode */}
      {/* <LightDarkMode />     un Complete */}
      {/* Scroll indicator component */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      {/* Window Resize  */}
      <UseWindowResizeTest />
    </div>
  );
}

export default App;
