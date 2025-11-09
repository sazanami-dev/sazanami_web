import Image from "next/image"
export const About = () => {
	return(
		<>
			<div className="-mt-72 sm:ml-32">
				<Image
					src="/about-sazanami.svg"
					alt="about-sazanami_dev"
					className="object-contain w-[70vw] sm:w-[40vw] md:w-[35vw]"
					width={800}
					height={300}
					priority
				/>   
			</div>
			<div className="ml-10 mr-10">
				<p>さざなみ開発はトライデントコンピュータ専門学校公認の技術系サークルです。
				このサークルでは勉強会やハッカソン、LTなどを開催しています。開発をしたい人や知識を持った人たちに出会える場を提供しています。</p>
			</div>
		</>
	);
}