import {
  BadRequestException,
  Controller,
  Delete,
  HttpCode,
  Param,
} from '@nestjs/common'
import { DeleteQuestionUseCase } from '@/domain/forum/application/use-cases/delete-question'
import { UserPayload } from '@/app/auth/jwt-strategy'
import { CurrentUser } from '@/app/auth/current-user-decorator'

@Controller('/questions/:id')
export class DeleteQuestionController {
  constructor(private deleteQuestion: DeleteQuestionUseCase) {}

  @Delete()
  @HttpCode(204)
  async handle(
    @CurrentUser() user: UserPayload,
    @Param('id') questionId: string,
  ) {
    const userId = user.sub

    const result = await this.deleteQuestion.execute({
      questionId,
      authorId: userId,
    })

    if (result.isLeft()) {
      throw new BadRequestException()
    }
  }
}