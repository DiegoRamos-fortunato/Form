const camposDoFormulario = document.querySelectorAll("[required]");

const formulario = document.querySelector("conteudo__form")



camposDoFormulario.forEach((campo) => {
    campo.addEventListener("blur", () =>  verificaCampo(campo))
    campo.addEventListener("invalid", evento => evento.preventDefault())
})

const tiposDeErro = [
    'valueMissing', // campo vazio
    'typeMismatch', // não esta com o tipo de dado certo
    'patterMismatch', // não esta de acordo com a espressao
    'tooShort', // tamanho do campo
    'customError', // erros costumizados
    
]

const mensagens = {
    nome: {
        valueMissing: "O campo de nome não pode estar vazio.",
        patternMismatch: "Por favor, preencha um nome válido.",
        tooShort: "Por favor, preencha um nome válido."
    },
    sobrenome: {
        valueMissing: "O campo de sobrenome não pode estar vazio.",
        tooShort: "Por favor, preencha um sobrenome válido."
    },
    email: {
        valueMissing: "O campo de e-mail não pode estar vazio.",
        typeMismatch: "Por favor, preencha um email válido.",
        tooShort: "Por favor, preencha um e-mail válido."
    },
    senha: {
        valueMissing: "O campo de senha não pode estar vazio.",
        typeMismatch: "Por favor, preencha um senha válido.",
        tooShort: "Por favor, preencha um senha válido."
    },
    
   
}



function verificaCampo(campo) {
    let mensagem = "";
    campo.setCustomValidity('')

    tiposDeErro.forEach(erro => {
        if (campo.validity[erro]) {
            mensagem = mensagens[campo.name][erro]
            console.log(mensagem)
        }
    })

    const mensagemErro = campo.parentElement.querySelector('.mensagem__erro')

    const validadorDeInput = campo.checkValidity();

    if(!validadorDeInput) {
        mensagemErro.textContent = mensagem
    }else {
        mensagemErro.textContent = ""
    }

}