"use client";

import { useState, useEffect } from "react";
import { X } from "lucide-react";

interface ModalProps {
	isOpen: boolean;
	onClose: () => void;
	title: string;
	children: React.ReactNode;
}

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		if (isOpen) {
			setIsVisible(true);
		} else {
			const timer = setTimeout(() => setIsVisible(false), 300);
			return () => clearTimeout(timer);
		}
	}, [isOpen]);

	if (!isVisible) return null;

	return (
		<div
			className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300 ${
				isOpen ? "opacity-100" : "opacity-0"
			}`}
			onClick={onClose}
		>
			<div
				className={`bg-white rounded-lg shadow-xl max-w-md w-full max-h-[90vh] overflow-auto transition-all duration-300 ${
					isOpen ? "scale-100" : "scale-95"
				}`}
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex justify-between items-center p-4 border-b">
					<h2 className="text-xl font-semibold text-[#180B8A]">
						{title}
					</h2>
					<button
						onClick={onClose}
						className="text-gray-500 hover:text-gray-700"
					>
						<X size={24} />
					</button>
				</div>
				<div className="p-4">{children}</div>
			</div>
		</div>
	);
}
