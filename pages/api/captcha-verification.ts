import axios from "axios";

const Captcha = async (req: any, res: any) => {
	console.log(process.env.RECAPTCHA_SECRET_KEY, 'secret');

	if (req.method === "POST") {
		const { recaptchaValue } = req.body;

		// Проверьте reCAPTCHA на сервере, используя ваш Secret Key
		const response = await axios.post(
			"https://www.google.com/recaptcha/api/siteverify",
			null,
			{
				params: {
					secret: process.env.RECAPTCHA_SECRET_KEY,
					response: recaptchaValue,
				},
			}
		);

		const recaptchaData = response.data;

		if (recaptchaData.success) {
			// Действия, выполняемые при успешном решении reCAPTCHA
			res.status(200).json({ success: true });
		} else {
			res.status(400).json({ success: false });
		}
	} else {
		res.status(405).end();
	}
};

export default Captcha