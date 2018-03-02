import { selectAll } from '../deps/utils'

selectAll('code.lang-css').forEach(code => {
  const pre = code.parentNode
  let raw = code.innerHTML
  pre.onfocus = () => code.innerHTML = raw
  pre.onblur = () => {
    const snippet = code.closest('.snippet')
    const styleEl = snippet.querySelector('style')
    raw = code.innerHTML
    styleEl.innerHTML = raw.replace(/\.(.+?){/g, '.snippet-demo__$1 {')
    Prism.highlightElement(code)
  }
})
