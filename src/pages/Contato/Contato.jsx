import React from 'react';
import FormularioContato from '../../components/FormularioContato/FormularioContato';
import './Contato.css';
import curriculo from '../../assets/img/curriculo.jpg'
import { ContextPaginas } from '../../PaginasContext';

const Contato = () => {
    const { CONT_CONTATO } = React.useContext(ContextPaginas);
    return (

        <div className="row mt-5">
            <div className="col-sm-12 col-lg-5 my-2  offset-1">
                <div className="box-imagem text-center">
                    <img className="img-fluid" src={curriculo} alt="..." />
                </div>
                <table className="mt-2 ">
                    <tbody >
                        <tr>
                            <td >
                                <i className="bi bi-envelope-fill"></i>
                                <a href={`mailto:${CONT_CONTATO.emailContato}`}>  {CONT_CONTATO.emailContato}</a>
                            </td>
                        </tr>
                        <tr>
                            <td >
                                <i class="bi bi-file-earmark-arrow-down-fill"></i>
                                <a className="mx-2" href="../../assets/docs/Profile.pdf" download> {CONT_CONTATO.downloadLabel}</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="col-sm-12 col-lg-6">
                <FormularioContato />
            </div>
        </div >
    );
};

export default Contato;