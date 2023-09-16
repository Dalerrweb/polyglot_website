// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import tests from "./test.json"

type Data = { 
	tests: { 
		a1_level: { 
			id: number; 
			question: string; 
			time: number; 
			answers: { 
				id: number; 
				title: string; 
				examination: boolean; 
			}[]; 
		}[]; 
		a2_level: { 
			id: number; 
			question: string; 
			time: number; 
			answers: { 
				id: number; 
				title: string; 
				examination: boolean; 
			}[]; 
		}[];
	}
}

export default function handler(
	req: NextApiRequest,
	res: NextApiResponse<Data>
) {
	res.status(200).json(tests)
}
