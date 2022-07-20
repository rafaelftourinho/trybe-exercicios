import React, { Component } from 'react'

export class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido'
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei'
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei'
      },
    ];

    const conteudoImpresso = conteudos.map(({ conteudo, status, bloco}) => {
      return (
        <div key={conteudo} className='content'>
          <div key={conteudo} className='card'>
            <p>O conteúdo é: <strong>{conteudo}</strong></p>
            <p>Status: <strong>{status}</strong></p>
            <p>Bloco: <strong>{bloco}</strong></p>
            <br></br>
          </div>
        </div>
      )
    })
    return (
      <>
        {conteudoImpresso}
      </>
    )
  }
}

export default Content
