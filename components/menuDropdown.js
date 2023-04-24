function MenuDropdown({ menu }) {
	delete menu[0];
	delete menu[menu.length - 1];
	delete menu[menu.length - 2];
	return (
		<div
			id="dropdownMenu"
			className="h-0 w-full bg-white fixed top-0 overflow-hidden z-[250] duration-1000"
		>
			{menu?.map((item) => {
				return (
					<div>
						<button className="text-[28px] font-medium pl-[48px] pt-[3px] pb-1">
							{item}
						</button>
					</div>
				);
			})}
		</div>
	);
}

export default MenuDropdown;
