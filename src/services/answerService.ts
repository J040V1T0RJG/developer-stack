import { Prisma } from "@prisma/client";
import { prisma } from "../config/database"

export async function registerAnswer (answerData: Prisma.answersArgs) {
    await prisma.answers.create({data: <Prisma.answersArgs>answerData})
};
