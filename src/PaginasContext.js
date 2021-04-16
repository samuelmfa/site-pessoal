import React from 'react';

export const ContextPaginas = React.createContext();

export const PaginaContent = ({ children }) => {
    const CONT_HOME = {
        nomePrincipal: 'Samuel Pereira Costa',
        labelBotao: 'Entrar em Contato',
        labelBtnTopo: 'Topo',
        dadosPessoais: {
            titulo: 'IT ANALYST | Desenvolvedor Frontend.',
            subtitulo: 'Um pouco sobre mim...',
            conteudo: `Trabalho com informática desde os 16 anos, já trabalhei fazendo manutenção de computadores,
        administrando e dando manutenção em redes, até que decidi me tornar programador atuando tanto no Backend quanto no Frontend,
        para isso me formei Tecnólogo em Análise e Desenvolvimento de Sistemas e realizei diversos cursos na área,
        e já com alguns trabalhos realizados na área me sinto feliz e realizado.`,
        },
        divisoesHome: {
            home: 'Home',
            formacao: 'Formacão',
            cursos: 'Cursos',
            experiencia: 'Experiência Profissional',
            contato: 'Contato'
        }

    };

    const CONT_HEADER = {
        home: 'Home',
        formacao: 'Formacão',
        cursos: 'Cursos',
        experiencia: 'Experiência',
        contato: 'Contato'
    };

    const CONT_CURSOS = {
        btnCredencial: 'Credencial'
    };

    const CONT_CONTATO = {
        tituloForm: 'Preencha o formulário para entrar em contato...',
        emailContato: 'samuelmfa@gmail.com',
        emailLabel: ' Email:',
        curriculoLabel: ' Currículo:',
        downloadLabel: 'download curriculo',
        formulario: {
            btnLabel: 'Enviar'
        }
    };

    const CONT_FOOTER = {
        pensamentos: `"Acredito em crescimento e aprendizado contínuo nessa profissão.
        Na área de desenvolvimento de software sempre surgem muitos desafios
        devido as rápidas mudanças, o mundo da tecnologia  é impulsionado
       pelas necessidades do mercado e dos clientes."`,
        links: [
            {
                titulo: 'Alura',
                link: 'https://www.alura.com.br/'
            },
            {
                titulo: 'React',
                link: 'https://pt-br.reactjs.org/'
            },
            {
                titulo: 'Angular',
                link: 'https://angular.io/'
            },
        ],

    };

    return (
        <ContextPaginas.Provider value={{ CONT_HOME, CONT_HEADER, CONT_CURSOS, CONT_CONTATO, CONT_FOOTER }} >
            {children}
        </ContextPaginas.Provider>
    );
};


