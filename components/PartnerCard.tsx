"use client";

import { useState } from "react";
import Image from "next/image";
import { Modal } from "./PartnerModal";

interface PartnerCardProps {
	name: string;
	shortDescription: string;
	fullDescription: string;
	logo: string;
}

export default function PartnerCard({
	name,
	shortDescription,
	fullDescription,
	logo,
}: PartnerCardProps) {
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<>
			<div className="bg-gradient-to-br from-[#180B8A] to-[#E67915] rounded-lg shadow-md overflow-hidden">
				<div className="bg-white m-1 rounded-lg p-6 flex flex-col items-center h-full">
					<div className="w-32 h-32 relative mb-4 bg-gray-100 flex items-center justify-center overflow-hidden">
						<Image
							src={logo || ""}
							alt={`${name} logo`}
							layout="fill"
							objectFit="contain"
							className="p-2"
						/>
					</div>
					<h3 className="text-xl font-semibold text-[#180B8A] mb-2 text-center">
						{name}
					</h3>
					<p className="text-gray-600 text-center mb-4 flex-grow">
						{shortDescription}
					</p>
					<button
						onClick={() => setIsModalOpen(true)}
						className="bg-[#E67915] hover:bg-[#d16d13] text-white hover:bg-gray-100 text-md border rounded-md shadow-sm p-3"
					>
						Learn More
					</button>
				</div>
			</div>

			<Modal
				isOpen={isModalOpen}
				onClose={() => setIsModalOpen(false)}
				title={name}
			>
				<div className="space-y-4">
					<Image
						src={logo || "/placeholder.svg"}
						alt={`${name} logo`}
						width={100}
						height={100}
						className="mx-auto"
					/>
					<p className="text-gray-700">{fullDescription}</p>
				</div>
			</Modal>
		</>
	);
}
