import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import AllowNotification from "./pages/AllowNotification";
import CodeConfirm from "./pages/CodeConfirm";
import Home from "./pages/Home";
import AppLayout from "./pages/Layouts/AppLayout";
import PlanLayout from "./pages/Layouts/PlanLayout";
import PhoneConfirmation from "./pages/PhoneConfirmation";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Route
        exact
        path={["/", "/invite", "/code_confirm", "/allow_notification"]}
      >
        <Switch>
          <PlanLayout>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/invite" component={PhoneConfirmation} />
            <Route exact path="/code_confirm" component={CodeConfirm} />
            <Route
              exact
              path="/allow_notification"
              component={AllowNotification}
            />
          </PlanLayout>
        </Switch>
      </Route>
      <Route exact path={["/home"]}>
        <AppLayout>
          <Switch>
            <Route exact path="/home" component={() => <Home />} />
          </Switch>
        </AppLayout>
      </Route>
    </BrowserRouter>
  );
}

export default App;
