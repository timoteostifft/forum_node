import { randomUUID } from 'node:crypto'

export class UniqueEntityID {
  constructor(value?: string) {
    this.value = value ?? randomUUID()
  }

  private value: string

  toString() {
    return this.value
  }

  toValue() {
    return this.value
  }
}
