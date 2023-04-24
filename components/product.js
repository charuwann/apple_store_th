function Product({ title, data }) {
	return (
		<div>
			<div className="pt-[66px] pb-[22px] text-center">
				<h2 className="text-[40px] font-semibold">{title}</h2>
			</div>
			<div className="flex md:justify-between justify-center flex-wrap">
				{data.map((item, index) => {
					return (
						<button
							key={`${index}`}
							className="w-[352px] bg-[#f5f5f7] rounded-[18px] m-1 py-7 hover:text-blue-500"
						>
							<img src={item.url} alt={item.name} />
							<div className=" text-[14px] min-h-[41px] p-[26px 40px 9px]">
								{item.name}
							</div>
							<div
								style={{ color: "black !important" }}
								className=" text-[14px] min-h-[41px] p-[26px 40px 9px]"
							>
								{item.price}
							</div>
						</button>
					);
				})}
			</div>
		</div>
	);
}

export default Product;
