import React, { useState, useEffect } from "react";
import PageDefault from '../../../components/PageDefault' 
import { Link } from 'react-router-dom';
import FormField from '../../../components/FormeField';
import Button from "../../../components/Button";

 

function CadatroCategoria() {
    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '',
    }
    const [categorias, setCategorias] = useState([]);
    const [values, setValues] = useState(valoresIniciais);


    function setValue(chave, valor) {
        // chave: nome, descrição, bla, bli
        setValues({
            ...values,
            [chave]: valor, // nome: 'valor'
        })
    }

    function handleChange(infosDoEvento) {
        const { value } = infosDoEvento.target;
        setValue(
            infosDoEvento.target.getAttribute('name'), 
            value
        );
    }

    useEffect(() => {
        console.log('alo alo w brasil');
        const URL_TOP = 'http://localhost:8080/categorias';
        fetch(URL_TOP)
        .then(async(respostaDoServidor) => {
            const resposta = await respostaDoServidor.json()
            setCategorias([
                ...resposta
            ])
        })
        
        // setTimeout(() => {
        //     setCategorias([
        //         {
        //             id: 1,
        //             nome: 'Front End',
        //             descricao: 'Uma categoria bacanuda',
        //             cor: '#cbd1ff'
        //         },
        //         {
        //             id: 2,
        //             nome: 'Back End',
        //             descricao: 'Outra categoria bacanuda',
        //             cor: '#cbd1ff'
        //         }
        //     ])
        // }, 4 * 1000);
    }, []);

    return (
        <PageDefault>
            <h1>Cadastro categoria: {values.nome}</h1>

            <form onSubmit={function handlerSubmit(infosDoEvento) {
                infosDoEvento.preventDefault();
                setCategorias([
                    ...categorias,
                    values
                ]);

                setValues(valoresIniciais)
            }}>
                
                <FormField
                    label="Nome da categoria"
                    type="text"
                    name="nome" 
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField
                    label="Descrição"
                    type="textarea"
                    name="descricao" 
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor"
                    type="color"
                    name="cor" 
                    value={values.cor}
                    onChange={handleChange}
                />
                
                <Button>
                    Cadastrar
                </Button>
            </form>

            {categorias.length === 0 && (
                <div>
                    Loading...
                </div>
            )}

            <ul>
                {categorias.map((categoria, indice) => {
                    return (
                        <li key={`${categoria}${indice}`}>
                            {categoria.nome}
                        </li>
                    )
                })}
            </ul>
            <Link to="/">
                Ir para home
            </Link>
        </PageDefault>
    )
}

export default CadatroCategoria;