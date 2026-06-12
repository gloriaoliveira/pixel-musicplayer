function TitleBar() {        // declara o componente
  return (                   // retorna o JSX
    <div className="title-bar">           {/* container principal */}
      <span className="title">cute musicplayer</span>   {/* texto do título */}
      <div className="window-controls">  {/* container dos botões */}
        <button>settings</button>   {/* minimizar */}
        <button>-</button>   {/* minimizar */}
        <button>□</button>   {/* maximizar */}
        <button>×</button>   {/* fechar */}
      </div>
    </div>
  )
}

export default TitleBar      // exporta pra poder usar em outros arquivos