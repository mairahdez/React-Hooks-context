import { useContext } from "react";
import { MainSpace, ImageSpace, FormSpace } from "./styles";
import { Button } from "@mui/material";
import Form from "./Form";
import { CounterContext } from "./Context";
import Footer from "./Footer";

function App() {
  return (
    <div>
    <MainSpace>
      <ImageSpace />
      <FormSpace>
        <Form />
        <div>
      </div>
      </FormSpace>
    </MainSpace>
    <Footer />
    </div>
  );
}
export default App;
