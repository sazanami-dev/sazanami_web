import Image from "next/image"
export const About = () => {
	return(
		<>
			<div className="-mt-72 sm:ml-20">
				<Image
					src="/about-sazanami.svg"
					alt="about-sazanami_dev"
					className="object-contain w-[70vw] sm:w-[35vw] md:w-[35vw]"
					width={800}
					height={300}
					priority
				/>   
			</div>
		</>
	);
}