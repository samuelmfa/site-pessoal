import React from 'react';
import InputMask from "react-input-mask";
import { ContextPaginas } from '../../PaginasContext';

const FormularioContato = () => {
   
    const { CONT_CONTATO } = React.useContext(ContextPaginas);

    const [nome, setNome] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [telefone, setTelefone] = React.useState('');
    const [mensagem, setMensagem] = React.useState('');

    function handleSubmit(evento) {
        evento.preventDefault();
        if (nome !== '' || email !== '' || telefone !== '' || mensagem !== '') {
            const contato = { nome, email, telefone, mensagem };
            document.querySelector("#formContato").reset();
            console.log(contato);
            alert('Contato enviado com sucesso!');
        } else {
            alert('Preencha todos os campos');
        }

    }

    return (
        <div className="my-2">
            <div>
                <h5 className="titulo">{CONT_CONTATO.tituloForm}</h5>
            </div>
            <form id="formContato" onSubmit={handleSubmit}>
                <div className="mb-3">
                    <input className="form-control" type="text" id="nome" name="nome" placeholder="Nome"
                        onChange={({ target }) => { setNome(target.value) }} required />
                </div>
                <div className="mb-3">
                    <input className="form-control" type="email" id="email" name="email" placeholder="Email"
                        onChange={({ target }) => { setEmail(target.value) }} required />
                </div>
                <div className="mb-3">
                    <InputMask mask="(99) 99999-9999" className="form-control" type="text" id="telefone" name="telefone" placeholder="telefone"
                        onChange={({ target }) => { setTelefone(target.value) }} />
                </div>
                <div className="mb-3">
                    <textarea className="form-control" id="mensagem" name="mensagem" placeholder="mensagem" style={{ resize: 'none' }}
                        onChange={({ target }) => { setMensagem(target.value) }} required />
                </div>
                <div className="mb-3">
                    <button type="submit" className="btn btn-primary">{CONT_CONTATO.formulario.btnLabel}</button>
                </div>
            </form>

        </div>
    );
};

export default FormularioContato;