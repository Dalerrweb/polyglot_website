// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import tests from "./test.json";

type Data = { 
   testing: 
      { 
         id: number; 
         time: number; 
         title: string; 
         test:{ 
               id: number; 
               question: string; 
               answers: 
               { 
                  id: number; 
                  title: string; 
                  examination: boolean; 
               }[]; 
         }[];
      }[]; 
}

export default function handler(
   req: NextApiRequest,
   res: NextApiResponse<Data>
) {
   res.status(200).json(tests);
}
