import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'

hljs.registerLanguage('javascript', javascript)

interface AlgorithmCodeProps {
  code: string
}

export default function AlgorithmCode({ code }: AlgorithmCodeProps) {
  const highlighted = code
    ? hljs.highlight(code, { language: 'javascript' }).value
    : 'Код появится позже'

  return (
    <div className="algorithm-code">
      <div className="algorithm-code__header">
        <span className="algorithm-code__title">Реализация на JavaScript</span>
        <span className="algorithm-code__language">JS</span>
      </div>
      <pre className="algorithm-code__pre"><code
        className="hljs algorithm-code__code"
        dangerouslySetInnerHTML={{ __html: highlighted }}
      /></pre>
    </div>
  )
}
