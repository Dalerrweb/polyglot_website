import TranslateContext from "@/context/useTranslate";
import Link from "next/link";
import { useContext } from "react";

export default function OpportunitiesSection() {
	let translation: any = useContext(TranslateContext);
	const thisPageTR = translation.ourPartners;

	return (
		<section id="opportunities" className="bg-gray-50 rounded-lg p-8">
			<h2 className="text-4xl font-semibold text-[#180B8A] mb-6">
				{thisPageTR.opportunities.title}
			</h2>
			<p className="text-gray-700 mb-6 text-lg">
				{thisPageTR.opportunities.text}
			</p>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
				<div>
					<h3 className="text-2xl font-semibold text-[#E67915] mb-4">
						{thisPageTR.opportunities.careerServices.title}
					</h3>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						{thisPageTR.opportunities.careerServices.list.map(
							(item: string, index: number) => (
								<li
									key={index}
									className="list-disc list-inside text-gray-700 space-y-2"
								>
									{item}
								</li>
							)
						)}
					</ul>
				</div>
				<div>
					<h3 className="text-2xl font-semibold text-[#E67915] mb-4">
						{thisPageTR.opportunities.academicSupport.title}
					</h3>
					<ul className="list-disc list-inside text-gray-700 space-y-2">
						{thisPageTR.opportunities.academicSupport.list.map(
							(item: string, index: number) => (
								<li
									key={index}
									className="list-disc list-inside text-gray-700 space-y-2"
								>
									{item}
								</li>
							)
						)}
					</ul>
				</div>
			</div>
			<h3 className="text-3xl font-semibold text-[#180B8A] mb-4">
				{thisPageTR.opportunities.secondTitle}
			</h3>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
				{thisPageTR.opportunities.stories.map(
					(story: any, index: number) => (
						<div
							key={index}
							className="bg-white p-4 rounded-lg shadow"
						>
							<h4 className="font-semibold text-[#E67915] mb-2">
								{story.name}
							</h4>
							<p className="text-gray-700">{story.subTitle}</p>
							<p className="text-sm text-gray-600 mt-2">
								{story.text}
							</p>
						</div>
					)
				)}
			</div>
			<div className="text-center">
				{/* <button className="bg-[#180B8A] hover:bg-[#0f0766] text-white text-lg px-8 py-3">
					<Link href="/opportunities">
						{thisPageTR.opportunities.oppoBtns}
					</Link>
				</button> */}
			</div>
		</section>
	);
}
