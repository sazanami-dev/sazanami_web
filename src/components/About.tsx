import Image from "next/image"
export const About = () => {
	return(
		<>
			<div className="-mt-72 lg:ml-32">
				<Image
					src="/about-sazanami.svg"
					alt="about-sazanami_dev"
					className="object-contain w-[70vw] sm:w-[50vw] md:w-[45vw] lg:w-[40vw]"
					width={800}
					height={300}
					priority
				/>   
			</div>
			<div className="mt-3 ml-10 mr-10 sm:ml-20 sm:mr-20 md:ml-30 md:mr-30 lg:ml-60 lg:mr-60 2xl:ml-100 2xl:mr-100">
				<p className="font-sans font-extrabold sm:text-2xl">さざなみ開発はトライデントコンピュータ専門学校公認の技術系サークルです。
				このサークルでは勉強会やハッカソン、LTなどを開催しています。開発をしたい人や知識を持った人たちに出会える場を提供しています。</p>
			</div>
		</>
	);
}