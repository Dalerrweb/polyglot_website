import axios from "axios";
import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

const MyComponent = () => {
	const [recaptchaValue, setRecaptchaValue] = useState<string | null>(null);

	const handleRecaptchaChange = async (value: string | null) => {
		setRecaptchaValue(value);

		if (value) {
			try {
				const response = await axios.post("/api/captcha-verification", {
					recaptchaValue: value,
				});

				if (response.data.success) {
					// Действия, выполняемые при успешной проверке reCAPTCHA
				} else {
					// Действия, выполняемые при неудачной проверке reCAPTCHA
				}
			} catch (error) {
				console.error("Ошибка при проверке reCAPTCHA:", error);
			}
		}
	};

	return (
		<div>
			<ReCAPTCHA
				sitekey={process.env.RECAPTCHA_SITE_KEY || ""}
				onChange={handleRecaptchaChange}
			/>
			{recaptchaValue && <p>reCAPTCHA успешно решена!</p>}
		</div>
	);
};

export default MyComponent;
