import type { NextApiRequest, NextApiResponse } from "next";
import data from "../../data/data.json";

type Data = {
    id: number,
    name: string,
    age: number,
    teacher_id: number
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data[]>) 
{
    const { teacherId } = req.query;
    const filteredStudents = data.students.filter((student) => student.teacher_id === Number(teacherId));
    res.status(200).json(filteredStudents);
}
