import { Link } from "react-router-dom";
import styled from "styled-components";
import Icons from "../../theme/icons";
import smallLogo from "../../images/smallLogo.svg";
import SVG from "react-inlinesvg";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const NavBarButtons = () => {
  const history = useHistory();
  const [link, setLink] = useState(window.location.pathname);

  useEffect(() => {
    return history.listen((location) => {
      setLink(location.pathname);
      console.log(`You changed the page to: ${link}`);
    });
  }, [history, link]);

  const tabs = [
    {
      icon: <Icons.AddRecord />,
      title: "New Record",
      path: "/add",
    },
    {
      icon: <Icons.Patients />,
      title: "Patient",
      path: "/patient",
    },
    // {
    //   icon: <Icons.Profile />,
    //   title: "Profile",
    //   path: "/profile",
    // },
    {
      icon: <Icons.CheckRecords />,
      title: "Check Records",
      path: "/check",
    },
    // {
    //   icon: <Icons.Settings />,
    //   title: "Settings",
    //   path: "/settings",
    // },
  ];

  return (
    <StyledNavBarButtons>
      <div className="logo">
        <StyledSVG src={smallLogo} alt="" />
      </div>
      <div className="icons">
        {tabs.map((tab, index) => {
          return (
            <div className={`tabs ${link === tab.path ? "active" : ""}`}>
              <Link to={tab.path} key={index} className="tab-name">
                <div>{tab.icon}</div>
                <p>{tab.title}</p>
              </Link>
            </div>
          );
        })}
      </div>
    </StyledNavBarButtons>
  );
};

export default NavBarButtons;

const StyledNavBarButtons = styled.nav`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;

  .icons {
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    align-items: center;
    @media (max-width: 798px) {
      width: 100%;
    }
  }

  a {
    text-decoration: none;
    color: ${(props) => props.theme.notActive};
    font-size: 24px;
  }

  .logo {
    @media (max-width: 798px) {
      display: none;
    }
  }

  .tab-name {
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 33vw;

    p{
      font-size: 12px;

    }
  }

  .active {
    border-bottom: 2px solid ${(props) => props.theme.accent1} !important;

    a {
      color: ${(props) => props.theme.accent1} !important;
      font-weight: bold;
    }
  }
`;

const StyledSVG = styled(SVG)`
  max-width: 77px;

  & path {
    fill: ${(props) => props.theme.fontColor2};
  }
`;
