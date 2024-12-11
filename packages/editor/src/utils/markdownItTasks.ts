import MarkdownIt from 'markdown-it'
import Token from 'markdown-it/lib/token'

const CHECKBOX_REGEX = /\[(X|\s|_|-)\]\s(.*)?/i

function matches(token: Token | void) {
  return token && token.content.match(CHECKBOX_REGEX)
}

function isInline(token: Token | void): boolean {
  return !!token && token.type === 'inline'
}

function isParagraph(token: Token | void): boolean {
  return !!token && token.type === 'paragraph_open'
}

function isListItem(token: Token | void): boolean {
  return !!token && (token.type === 'list_item_open' || token.type === 'task_item_open')
}

function looksLikeChecklist(tokens: Token[], index: number) {
  return (
    isInline(tokens[index]) && isListItem(tokens[index - 2]) && isParagraph(tokens[index - 1]) && matches(tokens[index])
  )
}

export default function markdownItTasks(md: MarkdownIt): void {
  // insert a new rule after the "inline" rules are parsed
  md.core.ruler.after('inline', 'tasks', (state) => {
    const tokens = state.tokens

    // work backwards through the tokens and find text that looks like a checkbox
    for (let i = tokens.length - 1; i > 0; i--) {
      const matchesChecklist = looksLikeChecklist(tokens, i)

      if (matchesChecklist) {
        const value = matchesChecklist[1]
        const checked = value.toLowerCase() === 'x'

        // convert surrounding list tokens
        if (tokens[i - 3].type === 'bullet_list_open') {
          tokens[i - 3].type = 'task_list_open'
        }

        if (tokens[i + 3].type === 'bullet_list_close') {
          tokens[i + 3].type = 'task_list_close'
        }

        // remove [ ] [x] from list item label – must use the content from the
        // child for escaped characters to be unescaped correctly.
        const tokenChildren = tokens[i].children

        if (tokenChildren) {
          const contentMatches = tokenChildren[0].content.match(CHECKBOX_REGEX)

          if (contentMatches) {
            const label = contentMatches[2]

            tokens[i].content = label
            tokenChildren[0].content = label
          }
        }

        // open list item and ensure checked state is transferred
        tokens[i - 2].type = 'task_item_open'

        if (checked === true) {
          tokens[i - 2].attrs = [['checked', 'true']]
        }

        // close the list item
        let j = i

        while (tokens[j].type !== 'list_item_close') {
          j++
        }
        tokens[j].type = 'task_item_close'
      }
    }

    return false
  })
}
