import { Entity } from "@/core/entities/entity";
import { UniqueEntityID } from "@/core/entities/unique-entity-id";

interface QuestionAttachmentProps {
  questionId: UniqueEntityID
  attachmentId: UniqueEntityID
}

export class QuestionAttachment extends Entity<QuestionAttachmentProps> {
  get questionId() {
    return this.props.questionId
  }

  get attachment() {
    return this.props.attachmentId
  }

  static create(props: QuestionAttachmentProps, id?: UniqueEntityID) {
    const atachment = new QuestionAttachment(props, id)

    return atachment
  }
}