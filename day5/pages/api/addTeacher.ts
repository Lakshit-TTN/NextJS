import type { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";

type Data = {
    id: number,
    name: string,
    subject: string,
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>,) {
    if (req.method === "POST") {
        const currentData = JSON.parse(fs.readFileSync("C:\\Users\\Lakshit\\Desktop\\next\\day5\\data\\data.json", "utf-8"));
        const newTeacher = {
            id: req.body.id,
            name: req.body.name,
            subject: req.body.subject,
        };
        fs.writeFileSync("C:\\Users\\Lakshit\\Desktop\\next\\day5\\data\\data.json", JSON.stringify(currentData));
        res.status(201).json(newTeacher);
    }
}
