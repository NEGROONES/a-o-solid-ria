const main = document.querySelector('main')
const root = document.querySelector(':root')
const input = document.getElementById('input')
const resultInput = document.getElementById('result')


document.getElementById('copyToClipboard').addEventListener('click', function (ev) {
    const button = ev.currentTarget
    if (button.innerText === 'Copiar') {
        button.innerText = 'Copiado!'
        button.classList.add('success')
        navigator.clipboard.writeText(resultInput.value)
    } else {
        button.innerText = 'Copiar'
        button.classList.remove('success')
    }
})
document.getElementById('themeSwitcher').addEventListener('click', function (){
    if (main.dataset.theme === 'dark') {
        root.style.setProperty('--bg-color', '#f1f5f9')
        root.style.setProperty('--border-color', '#aaa')
        root.style.setProperty('--font-color', '#212529')
        root.style.setProperty('--primary-color', '#26834a')
        main.dataset.theme = 'light'
    } else {
        root.style.setProperty('--bg-color', '#212529')
        root.style.setProperty('--border-color', '#666')
        root.style.setProperty('--font-color', '#f1f5f9')
        root.style.setProperty('--primary-color', '#4dff91')
        main.dataset.theme = 'dark'
    }
})