import React from 'react'
import { Link } from 'react-router-dom'
import MyLink from "../../../tools/myLink";
import Logo from "../../../assets/icons/logo/logo.png"
import { withCookies } from 'react-cookie';
import { readCookie, deleteCookie } from "../../../helper/cookieUser";
import * as RoutePath from '../../../config/routeConfig'
import { MDBDropdown, MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBBtn } from 'mdbreact'
const DashboardNavbar = props => {
    const name = readCookie(props.cookies)
    const LOGOUT = () => {
        deleteCookie(props.cookies)
        window.location.pathname = `${RoutePath.Login}`
    }
    return (
        <div className="d-flex flex-row w-100 justify-content-between py-2 px-5"
            style={{ background: 'linear-gradient(to left, #02AAB0 0%, #00CDAC 100%)', color: '#ffffff' }}>
            <div style={{ width: 80 }} className="d-flex flex-row">
                <img src={Logo} alt="Logo" className="w-100" />
                <div class="p-2"> <strong>IMPERIAL RESTAURANT</strong></div>
            </div>

            <div className="my-auto">

                <MDBDropdown size="md" dropleft>
                    <MDBDropdownToggle caret>
                        <span> <i className="fa fa-bell"></i></span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu basic>
                        <MDBDropdownItem>{name ? name.username : "no user"}</MDBDropdownItem>
                        <MDBDropdownItem divider />
                        <Link to={`${RoutePath.Admin_Register}`}>
                            <MDBDropdownItem>
                                <strong>Register</strong>
                                {/* <MyLink
                                className="pr-4"
                                to={`${RoutePath.Admin_Register}`}
                                text={"Register"}
                                style={{ cursor: 'pointer', color: 'black' }}
                            /> */}
                            </MDBDropdownItem>
                        </Link>
                        <MDBDropdownItem>
                            <div onClick={LOGOUT}><strong style={{ color: 'black' }}>Logout</strong></div>
                        </MDBDropdownItem>
                    </MDBDropdownMenu>

                </MDBDropdown>


            </div>
        </div>
    )
}
export default withCookies(DashboardNavbar)