import { useState } from "react";
import { Sidebarcontainer } from "./styles";
import Menulist from "./menulist";

const Sidebar = () => {
  const [menu, setMenu] = useState("");
  const menuAction = (e) => {
    console.log(e.target.id);
    setMenu(e.target.id);
  };
  const subMenuAction = (e) => {
    e.stopPropagation();
  };
  return (
    <Sidebarcontainer>
      <nav id="sidebar">
        <ul class="list-unstyled components">
          {Menulist.map((mainMenu) => {
            return (
              <li
                className={`menu ${menu === mainMenu.mainMenu ? "active" : ""}`}
                id={mainMenu.mainMenu}
                onClick={menuAction}
              >
                <a
                  href="#homeSubmenu"
                  data-toggle="collapse"
                  aria-expanded="false"
                  class="dropdown-toggle"
                  id={mainMenu.mainMenu}
                >
                  {mainMenu.mainMenu}
                </a>
                <ul
                  class="collapse list-unstyled subMenu"
                  id={mainMenu.mainMenu}
                >
                  {mainMenu.subMenu.map((subMenu) => {
                    return (
                      <li onClick={subMenuAction}>
                        <a href="#">{subMenu}</a>
                      </li>
                    );
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        {/* <ul class="list-unstyled components">
          <li class="active">
            <a
              href="#homeSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Apparels
            </a>
            <ul class="collapse list-unstyled" id="homeSubmenu">
              <li>
                <a href="#">Home 1</a>
              </li>
              <li>
                <a href="#">Home 2</a>
              </li>
              <li>
                <a href="#">Home 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Accessories</a>
          </li>
          <li>
            <a
              href="#pageSubmenu"
              data-toggle="collapse"
              aria-expanded="false"
              class="dropdown-toggle"
            >
              Housewares
            </a>
            <ul class="collapse list-unstyled" id="pageSubmenu">
              <li>
                <a href="#">Page 1</a>
              </li>
              <li>
                <a href="#">Page 2</a>
              </li>
              <li>
                <a href="#">Page 3</a>
              </li>
            </ul>
          </li>
          <li>
            <a href="#">Technique</a>
          </li>
          <li>
            <a href="#">Others</a>
          </li>
        </ul> */}
      </nav>
    </Sidebarcontainer>
  );
};

export default Sidebar;
