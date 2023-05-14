import "./header.css"

const Header = () => {
    return (
        <div className="custom_header">
            <nav className="navbar navbar-expand-lg">
                <a className="navbar-brand">TechZon</a>
                <div className="collapse navbar-collapse pr-md-5 justify-content-end" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link admin_circle"><img src="https://img4.gadgetsnow.com/gd/images/products/additional/large/G390858_View_1/mobiles/smartphones/apple-iphone-14-pro-max-256-gb-deep-purple-6-gb-ram-.jpg" /> Admin</a>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Header