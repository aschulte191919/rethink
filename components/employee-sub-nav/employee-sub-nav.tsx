import Link from "next/link";
import { useLocalStorage } from "../../hooks/useLocalStorage";
import { styled } from "../../stitches.config";

const Wrapper = styled("div", {
  display: "flex",
});

const Title = styled("h1", {
  fontSize: "30px",
  paddingTop: "10px",
  textAlign: "center",
});

const NavLink = styled("div", {
  fontSize: "15px",
  fontWeight: "500",
  paddingLeft: "10px",
  paddingRight: "10px",
  cursor: "pointer",

  "&:hover": {
    textDecoration: "underline",
  },
});

const EmployeeSubNav = () => {
  const [subNav, setSubNavState] = useLocalStorage<string>(
    "subNav",
    "available"
  );
  return (
    <>
      <Title>dashboard</Title>
      <Wrapper>
        <Link href="/employee-dashboard/available" passHref>
          <NavLink onClick={() => setSubNavState("available")}>
            available surveys
          </NavLink>
        </Link>
        <Link href="/employee-dashboard/past" passHref>
          <NavLink onClick={() => setSubNavState("past")}>past surveys</NavLink>
        </Link>
        <Link href="/employee-dashboard/wellness-report" passHref>
          <NavLink onClick={() => setSubNavState("wellness-report")}>
            my wellness
          </NavLink>
        </Link>
      </Wrapper>
    </>
  );
};

export default EmployeeSubNav;
