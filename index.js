// encontrar input
const inputContainer = document.querySelector("input")
// encontrar root
const rootElement = document.documentElement

window.onload = getThemeOnLocalStorage

// variaveis de temas
const lightTheme = {
    '--background-color' : '#FFF',
    '--button-background-color' : '#FFF',
}
const darkTheme = {
    '--background-color' : '#22212C',
    '--button-background-color' : '#22212C',
}

//verificar se o input está checado + condição
inputContainer.addEventListener('change', function(){
    const isCheked = inputContainer.checked

    isCheked ? changeTheme(darkTheme) : changeTheme(lightTheme)

})

// função chamadada pra mudar o tema
function changeTheme(theme){
    console.log(theme)

    for (let [property, value] of Object.entries(theme)){
        changeProperty(property, value)
    }
    saveThemeToLocalStorage(theme)
}

// função pra mudar as propriedades dentro do changeTheme
// passar onde vai ser alterado essas propriedades (no caso, root)
function changeProperty(property, value){
    rootElement.style.setProperty(property, value)
}


// SALVAR TEMAS NO LOCAL STORAGE
function saveThemeToLocalStorage(theme){
    //antes converta para JSON
    localStorage.setItem('theme', JSON.stringify(theme))
}

// Manter o tema que o usuario escolher ao recarregar a pagina
function getThemeOnLocalStorage(){
    const chosenTheme =  JSON.parse(localStorage.getItem('theme'))

    // se a função escolhida for igual a função dark = input.checked
    if (isTheseEngual(chosenTheme, darkTheme)){
        inputContainer.checked = true
    }
    changeTheme(chosenTheme) // passar propriedades pra mudar tema
}

// verificar se o tema escolhido é igual ao tema dark
function isTheseEngual(firstTheme, secondTheme){
    for (let prop in firstTheme){
        if (firstTheme[prop] != secondTheme[prop]) return false
    }
    return true
}