import { Menu } from "semantic-ui-react";
import { useRouter } from "next/router";

export default function Gnb() {
  const router = useRouter();
  let activeItem;

  if (router.pathname === "/") {
    activeItem = "home";
  } else if (router.pathname === "/about") {
    activeItem = "about";
  } else if (router.pathname === "/admin") {
    activeItem = "admin";
  }

  function goLink(e, data) {
    if (data.name === "home") {
      router.push("/");
    } else if (data.name === "about") {
      router.push("/about");
    } else if (data.name === "admin") {
      router.push("/admin");
    }
  }

  return (
    <Menu>
      <Menu.Item name="home" active={activeItem === "home"} onClick={goLink}>
        home
      </Menu.Item>
      <Menu.Item name="about" active={activeItem === "about"} onClick={goLink}>
        about
      </Menu.Item>
      <Menu.Item name="admin" active={activeItem === "admin"} onClick={goLink}>
        admin
      </Menu.Item>
    </Menu>
  );
}
