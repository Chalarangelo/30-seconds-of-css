import { selectAll } from '../deps/utils'
// import autoprefix from '../deps/'

// 30-seconds-of-code snippet!
const copyToClipboard = str => {
  const el = document.createElement('textarea')
  el.value = str
  el.setAttribute('readonly', '')
  el.style.position = 'absolute'
  el.style.left = '-9999px'
  document.body.appendChild(el)
  const selected =
    document.getSelection().rangeCount > 0 ? document.getSelection().getRangeAt(0) : false
  el.select()
  document.execCommand('copy')
  document.body.removeChild(el)
  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

const snippets = selectAll('.snippet')
snippets.forEach(snippet => {
  const css = snippet.querySelector('pre code.lang-css').textContent
  const autoprefixCss = css //Hook autoprexier to this part

  const copyButton = document.createElement('button')
  copyButton.classList = 'btn is-large codepen-btn'
  copyButton.innerHTML = '<i data-feather="copy"></i>Copy to clipboard'
  copyButton.onclick = () => copyToClipboard(autoprefixCss)

  snippet.insertBefore(copyButton, snippet.querySelector('.snippet-demo').nextSibling) // Insert next to h4 CSS
})
