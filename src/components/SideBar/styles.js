import styled from "styled-components";

export const Sidebarcontainer = styled("div")`
  .navbar {
    padding: 15px 10px;
    background: #fff;
    border: none;
    border-radius: 0;
    margin-bottom: 40px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
  }

  .navbar-btn {
    box-shadow: none;
    outline: none !important;
    border: none;
  }

  .line {
    width: 100%;
    height: 1px;
    border-bottom: 1px dashed #ddd;
    margin: 40px 0;
  }

  /* ---------------------------------------------------
    SIDEBAR STYLE
----------------------------------------------------- */

  .wrapper {
    display: flex;
    width: 100%;
    align-items: stretch;
  }

  #sidebar {
    min-width: 250px;
    max-width: 250px;
    color: #fff;
    transition: all 0.3s;
  }

  #sidebar.active {
    margin-left: -250px;
  }

  #sidebar .sidebar-header {
    padding: 20px;
    background: #6d7fcc;
  }

  #sidebar ul.components {
    padding: 20px 0;
  }

  #sidebar ul p {
    color: #fff;
    padding: 10px;
  }

  #sidebar ul li a {
    padding: 10px;
    font-size: 1.1em;
    display: block;
    text-decoration: none;
    color: #333;
  }

  #sidebar ul li a:hover {
    color: #7386d5;
    background: #fff;
  }

  #sidebar ul li.active > a,
  a[aria-expanded="true"] {
    color: #000;
  }

  a[data-toggle="collapse"] {
    position: relative;
  }

  .dropdown-toggle::after {
    display: block;
    position: absolute;
    top: 50%;
    right: 20px;
    transform: translateY(-50%);
  }

  ul ul a {
    font-size: 0.9em !important;
    padding-left: 30px !important;
    background: #6d7fcc;
  }

  ul.CTAs {
    padding: 20px;
  }

  ul.CTAs a {
    text-align: center;
    font-size: 0.9em !important;
    display: block;
    border-radius: 5px;
    margin-bottom: 5px;
  }

  a.download {
    background: #fff;
    color: #7386d5;
  }

  a.article,
  a.article:hover {
    background: #6d7fcc !important;
    color: #fff !important;
  }

  /* ---------------------------------------------------
    CONTENT STYLE
----------------------------------------------------- */

  #content {
    width: 100%;
    padding: 20px;
    min-height: 100vh;
    transition: all 0.3s;
  }

  /* ---------------------------------------------------
    MEDIAQUERIES
----------------------------------------------------- */

  @media (max-width: 768px) {
    #sidebar {
      margin-left: -250px;
    }
    #sidebar.active {
      margin-left: 0;
    }
    #sidebarCollapse span {
      display: none;
    }
  }
`;