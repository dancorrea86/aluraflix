import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault' 
import { Link } from 'react-router-dom';

 

function CadatroCategoria() {
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Filmes');

    console.log('[nomedacategoria]', nomeDaCategoria)


    return (
        <>
            <PageDefault>
                <h1>Cadastro categoria: {nomeDaCategoria}</h1>

                <form>
                    <label>
                        Nome da Categoria:
                        <input type="text"
                        value={nomeDaCategoria}
                        onChange={function funcaoHandleQueErroPediu(infosDoEvento) {
                            console.log('[infoDoEvento]', infosDoEvento.target.value)
                            console.log('[nomedacategoria.target.value]', nomeDaCategoria)
                            setNomeDaCategoria(infosDoEvento.target.value)
                        }}/>
                    </label>
                    
                    <button>
                        Cadastrar
                    </button>
                </form>
                <Link to="/">
                    Ir para home
                </Link>
            </PageDefault>
        </>
    )
}

export default CadatroCategoria;