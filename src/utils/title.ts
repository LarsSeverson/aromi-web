export class DocumentTitleBuilder {
  private readonly appName: string = 'ondrop'
  private readonly separator: string
  private readonly parts: string[] = []

  title: string = this.appName

  constructor (separator = ' • ') {
    this.separator = separator
  }

  prepend (title: string) {
    this.parts.unshift(title)
    this.title = [...this.parts, this.appName].join(this.separator)
    return this
  }

  reset () {
    this.parts.length = 0
    this.title = this.appName
    return this
  }

  apply () {
    document.title = this.title
    return this
  }
}
