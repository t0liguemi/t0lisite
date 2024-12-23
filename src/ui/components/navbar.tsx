import { NavLink } from "react-router";
import Header1 from "../header1";

export default function Navbar() {
  return (
    <nav className="flex flex-row px-4">
      <NavLink to={"/"}><Header1>t0liguemi</Header1></NavLink>
    </nav>
  );
}
