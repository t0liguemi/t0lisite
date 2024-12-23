import { NavLink } from "react-router";
import Header2 from "../ui/header2";
import Paragraph1 from "../ui/paragraph1";
import Button from "../ui/button";

export default function Home() {
  return (
    <main className="px-2 md:px-6 lg:px-12 xl:px-16">
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
    </main>
  );
}
