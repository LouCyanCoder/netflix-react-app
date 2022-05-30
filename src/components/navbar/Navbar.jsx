import { ArrowDropDown, Notifications, Search } from "@mui/icons-material";
import { useState } from "react";
import "./navbar.scss";

const Navbar = () => {
	const [isScrolled, setIsScrolled] = useState(false);

	window.onscroll = () => {
		setIsScrolled(window.pageYOffset === 0 ? false : true);
		return () => (window.onscroll = null);
	};
	console.log(isScrolled);
	return (
		<section className={isScrolled ? "navbar scrolled" : "navbar"}>
			<div className="container">
				<div className="left">
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/799px-Netflix_2015_logo.svg.png"
						alt="logo"
					/>
					<span>Homepage</span>
					<span>Series</span>
					<span>Movies</span>
					<span>New & popular</span>
					<span>My list</span>
				</div>
				<div className="right">
					<Search className="icon" />
					<span>KID</span>
					<Notifications className="icon" />
					<img
						src="https://media-exp1.licdn.com/dms/image/D4D35AQFSmL9V0khEHQ/profile-framedphoto-shrink_200_200/0/1650209314622?e=1654524000&v=beta&t=2udrRFQ7HE7iYR6yjHxYFEF-R-DotqMlExPLTecxUTM"
						alt="profile pic"
					/>
					<div className="profile">
						<ArrowDropDown className="icon" />
						<div className="options">
							<span>Settings</span>
							<span>Logout</span>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Navbar;
