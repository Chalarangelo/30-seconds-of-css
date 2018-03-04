import { selectAll } from '../deps/utils'

const snippets = selectAll('.snippet')
snippets.forEach(snippet => {
  const codepenForm = document.createElement('form')
  codepenForm.action = 'https://codepen.io/pen/define'
  codepenForm.method = 'POST'
  codepenForm.target = '_blank'
  const codepenInput = document.createElement('input')
  codepenInput.type = 'hidden'
  codepenInput.name = 'data'
  const codepenButton = document.createElement('button')
  codepenButton.classList = 'btn is-large codepen-btn'
  codepenButton.innerHTML = '<i data-feather="eye"></i>Edit on Codepen'
  const css = snippet.querySelector('pre code.lang-css')
  const html = snippet.querySelector('pre code.lang-html')
  const js = snippet.querySelector('pre code.lang-js')
  const data = {
    css: css.textContent,
    title: snippet.querySelector('h3 > span').textContent,
    html: html ? html.textContent : '',
    js: js ? js.textContent : ''
  }
  codepenInput.value = JSON.stringify(data)
  codepenForm.appendChild(codepenInput)
  codepenForm.appendChild(codepenButton)
  snippet.insertBefore(codepenForm, snippet.querySelector('.snippet-demo').nextSibling)
})
