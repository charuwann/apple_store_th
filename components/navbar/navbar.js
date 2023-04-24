import HomeIcon from "../../images/homeIcon";
import SearchIcon from "../../images/searchIcon";
import BagIcon from "../../images/bagIcon";
import MenuMobile from "../../images/menuMobile";
import { useEffect, useState } from "react";
import MenuDropdown from "../menuDropdown";

function Navbar({ ...props }) {
	const [isScroll, setIsScroll] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);

	useEffect(() => {
		window.onscroll = function () {
			myFunction();
		};

		var navbarTag = document.getElementById("navbar");

		function myFunction() {
			console.log("window.pageXOffset ", window.pageXOffset);
			if (window.pageYOffset > 0) {
				setIsScroll(true);
				navbarTag.classList.add("sticky");
			} else {
				setIsScroll(false);
				navbarTag.classList.remove("sticky");
			}
		}
	}, []);

	const menu = [
		<HomeIcon fill={isScroll ? "white" : "black"} />,
		"Store",
		"Mac",
		"iPad",
		"iPhone",
		"Watch",
		"AirPods",
		"TV & Home",
		"Entertainment",
		"Accessories",
		"Support",
		<SearchIcon fill={isScroll ? "white" : "black"} />,
		<BagIcon fill={isScroll ? "white" : "black"} />,
	];

	const handleOpenMenu = () => {
		const dropdown = document.getElementById("dropdownMenu");
		dropdown.style.height = !openMenu ? "100vh" : "0px";
		dropdown.style.paddingTop = !openMenu ? "50px" : "0px";
		dropdown.style.visibility = !openMenu ? "visible" : "none";
		dropdown.style.opacity = !openMenu ? "1" : "0";
	};

	return (
		<div
			id="navbar"
			className="flex w-full justify-center duration-1000 z-50 fixed top-0"
		>
			<nav className="hidden md:flex lg:min-w-[1024px] max-w-[1024px] w-full h-11 justify-between items-center text-xs font-normal p-[22px]">
				{menu.map((item, index) => {
					return <a key={`${index}`}>{item}</a>;
				})}
			</nav>
			<nav className="md:hidden flex justify-between w-full items-center px-2">
				<div className="w-12 flex justify-center">
					<button>
						<HomeIcon fill={"black"} />
					</button>
				</div>
				<div className="flex justify-between items-center gap-3">
					<div className="w-12 flex justify-center">
						<button>
							<SearchIcon fill={"black"} />
						</button>
					</div>
					<div className="w-12 flex justify-center">
						<button>
							<BagIcon fill={"black"} />
						</button>
					</div>
					<div className="w-12 flex justify-center z-[300]">
						<button
							onClick={() => {
								handleOpenMenu();
								setOpenMenu(!openMenu);
							}}
						>
							<MenuMobile />
						</button>
					</div>
				</div>
			</nav>
			<MenuDropdown menu={menu} />
		</div>
	);
}

export default Navbar;
