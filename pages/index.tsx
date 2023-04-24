import Layout from "../components/layout/layout";
import Product from "../components/product";

const macProducts = [
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
	{
		name: "MacBook Air with M1 chip",
		price: "From ฿ 34,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/macbook-air-segment-202301?wid=800&hei=600&fmt=png-alpha&.v=1671647221757",
	},
];

const iPhoneProducts = [
	{
		name: "iPhone 14 Pro",
		price: "From ฿ 41,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1663348188617",
	},
	{
		name: "iPhone 14 Pro",
		price: "From ฿ 41,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1663348188617",
	},
	{
		name: "iPhone 14 Pro",
		price: "From ฿ 41,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/iphone-14-pro-segment-202209?wid=800&hei=600&fmt=png-alpha&.v=1663348188617",
	},
];

const apppleWatchProducts = [
	{
		name: "Apple Watch Series 8",
		price: "From ฿ 15,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-s8-segment-202303_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1677318585019",
	},
	{
		name: "Apple Watch Series 8",
		price: "From ฿ 15,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-s8-segment-202303_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1677318585019",
	},
	{
		name: "Apple Watch Series 8",
		price: "From ฿ 15,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-s8-segment-202303_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1677318585019",
	},
	{
		name: "Apple Watch Series 8",
		price: "From ฿ 15,000",
		url: "https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/apple-watch-s8-segment-202303_GEO_TH?wid=800&hei=600&fmt=png-alpha&.v=1677318585019",
	},
];

export default function Home() {
	return (
		<main>
			<Layout>
				<div>
					<div className="mt-[-44px] relative flex justify-center items-center min-h-[689px]">
						<img
							src="https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/thai-aos-en-banner-hero-20160202?wid=2880&hei=1378&fmt=jpeg&qlt=90&.v=0"
							alt="banner-home"
							className="block h-auto min-w-[1439px]"
						/>
						<h1 className="text-5xl font-semibold absolute text-white">
							Shop for your favorite Apple products.
						</h1>
					</div>
					<div className="lg:max-w-[1080px] md:max-w-[720px] mx-auto">
						<Product title={"Mac"} data={macProducts} />
						<Product title={"iPhone"} data={iPhoneProducts} />
						<Product title={"Apple Watch"} data={apppleWatchProducts} />
						<Product title={"iPad"} data={iPhoneProducts} />
						<Product title={"Music and TV"} data={iPhoneProducts} />
					</div>
				</div>
			</Layout>
		</main>
	);
}
