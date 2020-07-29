import React from 'react';
import PageDefault from '../../../components/PageDefault' 
import { Link } from 'react-router-dom';

 

function CadatroCategoria() {
    return (
        <div>
            <PageDefault>
                <h1>
                    Cadastro categoria
                </h1>

                <Link to="/">
                    Ir para home
                </Link>
            </PageDefault>
        </div>
    )
}

export default CadatroCategoria;