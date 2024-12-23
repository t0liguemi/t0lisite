import { NavLink } from "react-router";
import Button from "./ui/button";
import Header2 from "./ui/header2";
import Paragraph1 from "./ui/paragraph1";

function App() {
  return (
    <main className="flex flex-col justify-between">
      <div>
        <Header2>Why are you here?</Header2>
        <Paragraph1>
          I am probably into too many things, so here are a few of them so you
          could check out what I got to show about them:
        </Paragraph1>
        <NavLink to="/music">
          <Button>Music</Button>
        </NavLink>
        <Button>Photography</Button>
        <Button>Pizza</Button>
        <NavLink to="/coffee">
          <Button>Coffee</Button>
        </NavLink>
      </div>
    </main>
  );
}

export default App;
