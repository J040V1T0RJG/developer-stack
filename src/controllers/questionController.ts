import { Request, Response } from 'express';
import { answer } from '../types/answerTypes';
import { question } from '../types/questionTypes';

export async function createQuestion(req: Request, res: Response) {
  const question = <question>req.body;

  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  const answer = <answer>req.body;

  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  // TODO
}

export async function getById(req: Request, res: Response) {
  // TODO
}
