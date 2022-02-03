export default function Home() {
	return (
		<main className="py-8 px-8 lg:py-[9.38rem] lg:px-[5rem] min-h-screen grid place-content-center bg-neutral-bg">
			<div className="w-full max-w-[90rem] min-h-[56.25rem] bg-white rounded-3xl shadow-xl grid grid-areas-layout-mobile grid-cols-layout-mobile grid-rows-layout-mobile lg:grid-areas-layout lg:grid-cols-layout lg:grid-rows-layout overflow-hidden">
				<div className="grid-in-header px-12 pt-8 pb-6 lg:py-8">
					<div className="flex flex-row justify-between lg:mb-[4.25rem]">
						<img
							className="w-[7.56rem] h-[2.38rem]"
							src="/images/logo.png"
							alt="Logitech Logo"
						/>
						<img
							className="w-6 h-6"
							src="/images/icon/search.png"
							alt="Search Button"
						/>
					</div>
				</div>
				<div className="grid-in-main px-12 py-8">
					<div className="flex flex-col gap-10 lg:gap-8 font-body w-full lg:max-w-[500px]">
						<div className="font-semibold text-2xl flex flex-row items-center">
							<span>Master Series</span>
							<img
								className="ml-3 mt-1"
								src="/images/icon/drop-down.png"
								alt="Drop Down Button"
							/>
						</div>
						<div className="text-4xl sm:text-6xl lg:text-[3.5rem] font-bold">
							MX Keys Mini
						</div>
						<div className="flex flex-row gap-6">
							{[
								{
									src: "/images/product/keyboard/mx-keys-mini-top-black-us.png",
									className: "border-[#343536] bg-[#FFFFFF]",
								},
								{
									src: "/images/product/keyboard/mx-keys-mini-top-pale-gray-us.png",
									className: "border-[#C4C4C4] bg-[#ECECEC]",
								},
								{
									src: "/images/product/keyboard/mx-keys-mini-top-rose-us.png",
									className: "border-[#F6DDE4] bg-[#ECECEC]",
								},
							].map((el) => {
								return (
									<div
										className={
											"p-3 border rounded-md " +
											el.className
										}
									>
										<img
											className="w-48 lg:w-auto"
											src={el.src}
											alt="Product Thumbnail"
										/>
									</div>
								);
							})}
						</div>
						<div className="text-[2.25rem] font-bold">$99.99</div>
						<div className="flex flex-col lg:flex-row gap-4">
							<button className="w-full lg:w-auto rounded-md py-5 lg:py-3 px-8 font-semibold text-xl lg:text-base bg-primary text-secondary">
								BUY NOW
							</button>
							<button className="w-full lg:w-auto rounded-md py-5 lg:py-3 px-8 font-semibold text-xl lg:text-base bg-secondary text-primary border border-primary">
								PLAY VIDEO
							</button>
						</div>
						<div className="flex flex-col gap-6 text-neutral-light-dark">
							<p className="font-medium text-xl lg:text-base">
								The minimalist keyboard for creators amet,
								consectetur adipiscing elit. Mi at sit aenean
								ipsum. In nisl a integer nunc gravida risus
								eget. Metus aenean nuncetti eget praesent
								pulvinar. Ac magna proin orci tortor. eni
								Volutpat aliquamarli enim ultrices massa nec
								ultricies ornare a, egestas. Lacus, amet cursuse
								fusce sagittis pretium. Sapien, tincidunt et
								blandit mattis ultricies turpis maecenas. In
								nisl a integer.
							</p>
							<div className="flex flex-col gap-2 text-neutral-dark text-xl lg:text-base">
								<div className="font-medium mr-4 flex items-center">
									<img
										className="block w-6 mr-4 lg:mr-2"
										src="/images/icon/cart.png"
										alt="Cart Icon"
									/>{" "}
									<p>Free shipping on orders over $29.00</p>
								</div>
								<div className="font-medium mr-4 flex items-center">
									<img
										className="block w-6 mr-4 lg:mr-2"
										src="/images/icon/clock.png"
										alt="Clock Icon"
									/>{" "}
									<p>60 day return policy</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="grid-in-preview w-full h-full px-12 py-8 flex flex-col items-center rounded-3xl bg-[#EAEBE8] font-body">
					<nav className="flex flex-row justify-end w-full block xl:hidden">
						<img
							className="block"
							src="/images/icon/search.png"
							alt="Navigation Button"
						/>
					</nav>
					<nav className="xl:flex xl:flex-row justify-between w-full hidden">
						<ul className="flex flex-row gap-8 items-center">
							<li className="font-medium">Products</li>
							<li className="font-medium">Solutions</li>
							<li className="font-medium">Business</li>
							<li className="font-medium">Support</li>
						</ul>
						<ul className="flex flex-row gap-4 items-center">
							<li>
								<img
									className="inline"
									src="/images/icon/cart.png"
									alt="Cart Icon"
								/>
							</li>
							<li>
								<img
									className="inline"
									src="/images/icon/profile.png"
									alt="Profile Picture"
								/>
							</li>
						</ul>
					</nav>
					<div className="grid place-content-center grow pt-24">
						<img
							src="/images/product/keyboard/mx-keys-mini-top-black-us-preview.png"
							alt="Product Preview"
						/>
					</div>
					<div className="flex flex-col gap-[5rem] items-center">
						<div className="font-semibold my-4 text-3xl md:text-3xl xl:te-4xl text-center">
							SMALLER - SMARTER - MIGHTIER
						</div>
						<img
							className="w-14 h-14"
							src="/images/icon/arrow-down-circle.png"
							alt="More Details Button"
						/>
					</div>
				</div>
			</div>
		</main>
	);
}
