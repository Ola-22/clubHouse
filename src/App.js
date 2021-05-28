import { BrowserRouter, Route } from "react-router-dom";
import "./App.css";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <PlanLayout>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/invite" component={PhoneConfirmation} />
      </PlanLayout>
    </BrowserRouter>
  );
}

export default App;
