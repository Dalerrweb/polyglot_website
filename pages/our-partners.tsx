import OpportunitiesSection from "@/components/OpportunitiesSection";
import PartnerCard from "@/components/PartnerCard";
import TranslateContext from "@/context/useTranslate";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useContext } from "react";

export default function OurPartners() {
	let translation: any = useContext(TranslateContext);
	const thisPageTR = translation.ourPartners;

	return (
		<Layout>
			<main className="container mx-auto px-4 py-8 mt-8">
				<section className="mb-16 text-center">
					<div className="bg-gradient-to-r from-[#180B8A] to-[#E67915] text-white p-8 rounded-lg shadow-lg">
						<p className="text-2xl mb-4">{thisPageTR.hero.title}</p>
						<p className="text-lg mb-6">{thisPageTR.hero.text}</p>
						<Link href="#partners">
							<button className="bg-white text-[#180B8A] hover:bg-gray-100 text-lg px-8 py-3 border border-[#180B8A] rounded-md shadow-sm">
								{thisPageTR.hero.exploreBtn}
							</button>
						</Link>
					</div>
				</section>

				<section id="partners" className="mb-16">
					<h2 className="text-4xl font-semibold text-[#180B8A] mb-6">
						{thisPageTR.universities.title}
					</h2>
					<p className="text-lg text-gray-700 mb-8">
						{thisPageTR.universities.subTitle}
					</p>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
						{thisPageTR.universities.universities.map(
							(partner: any, index: number) => (
								<PartnerCard key={index} {...partner} />
							)
						)}
					</div>
					{/* <div className="text-center">
						<button className="bg-[#E67915] hover:bg-[#d16d13] text-white hover:bg-gray-100 text-md border rounded-md shadow-sm p-3">
							<Link href="#opportunities">
								{thisPageTR.universities.exploreBtn}
							</Link>
						</button>
					</div> */}
				</section>

				<OpportunitiesSection />

				<section className="mt-16">
					<h2 className="text-4xl font-semibold text-[#180B8A] mb-6">
						{thisPageTR.partnership.title}
					</h2>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{thisPageTR.partnership.array.map(
							(item: any, index: number) => (
								<div
									key={index}
									className="bg-white rounded-lg shadow-md p-6"
								>
									<h3 className="text-2xl font-semibold text-[#E67915] mb-4">
										{item.title}
									</h3>
									<p className="text-gray-700">{item.text}</p>
								</div>
							)
						)}
					</div>
				</section>
				<div className="h-[100px]"></div>
			</main>
		</Layout>
	);
}
