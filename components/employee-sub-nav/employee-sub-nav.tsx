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
      <Title>surveys</Title>
      <Wrapper>
        <Link href="/surveys/available" passHref>
          <NavLink onClick={() => setSubNavState("available")}>
            available surveys
          </NavLink>
        </Link>
        <Link href="/surveys/past" passHref>
          <NavLink onClick={() => setSubNavState("past")}>past surveys</NavLink>
        </Link>
      </Wrapper>
    </>
  );
};

export default EmployeeSubNav;
