import { Outlet } from "react-router-dom"
import Nav from "../components/sections/nav.jsx"

const HeaderLayout = () => {
  return (
    <>
      <div>
        <div>LOGO</div>
      <Nav/>
      </div>
      <Outlet />
      <p>Footer</p>
    </>
  )
}

export default HeaderLayout