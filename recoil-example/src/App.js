import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "./App.css";
import TextInput from "./components/TextInput";
import User from "./components/User";
import PostsPage from "./pages/PostsPage";

function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <nav></nav>
        <Router>
          <div>
            <Switch>
              <Route path="/posts">
                <Suspense fallback="loading data...">
                  <PostsPage />
                </Suspense>
              </Route>
              <Route path="/">
                <User />
                <TextInput label="Username" />
              </Route>
            </Switch>
          </div>
        </Router>
      </RecoilRoot>
    </div>
  );
}

export default App;
