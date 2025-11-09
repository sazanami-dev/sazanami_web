import Image from "next/image"
export const About = () => {
	return(
		<div className="-mt-72 mb-30">
			<div className="ml-3 sm:ml-10 lg:ml-32 xl:ml-50 2xl:ml-80">
				<Image
					src="/about-sazanami.svg"
					alt="about-sazanami_dev"
					className="object-contain w-[70vw] sm:w-[55vw] md:w-[45vw] lg:w-[40vw]"
					width={800}
					height={300}
					priority
				/>   
			</div>
			<div className="mt-3 lg:mt-6 ml-10 mr-10 sm:ml-20 sm:mr-20 md:ml-30 md:mr-30 lg:ml-60 lg:mr-60 xl:ml-70 xl:mr-80 2xl:ml-120 2xl:mr-120">
				<p className="font-sans font-semibold text-base sm:text-lg md:text-xl xl:text-2xl">
					さざなみ開発はトライデントコンピュータ専門学校公認の技術系サークルです。
					このサークルでは勉強会やハッカソン、LTなどを開催しています。開発をしたい人や知識を持った人たちに出会える場を提供しています。
				</p>
			</div>
		</div>
	);
}