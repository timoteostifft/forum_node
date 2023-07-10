import { expect, test } from 'vitest'
import { AnswerQuestionUseCase } from './awser-question'

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase()

  const answer = answerQuestion.execute({
    questionId: '1',
    instructorId: '2',
    content: 'Nova resposta'
  })

  expect(answer.content).toEqual('Nova resposta')
})