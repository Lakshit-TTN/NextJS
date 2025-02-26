import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/data.json";

type Data = {
    id: number,
    name: string,
    age: number,
    teacher_id: number
};

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data[]>,
) {
    res.status(200).json(data.students);
}
