import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import CodeConfirm from "./pages/CodeConfirm";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
        <Route exact path="/code_confirm" component={CodeConfirm} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
