import { useState } from 'react'
import SettingsMenu from './SettingsMenu'

function TitleBar() {     
    const [menuAberto, setMenuAberto] = useState(false)
    // declara o componente
  return (                   // retorna o JSX
    <div className="title-bar">           {/* container principal */}
      <span className="title">cute musicplayer</span>   {/* texto do título */}
      <div className="window-controls">  {/* container dos botões */}
        <button onClick={() => setMenuAberto(!menuAberto)}>settings</button>   {/* minimizar */}
        <button>-</button>   {/* minimizar */}
        <button>□</button>   {/* maximizar */}
        <button>×</button>   {/* fechar */}
      </div>

        {menuAberto && <SettingsMenu />}   {/* renderiza o menu se estiver aberto */}
    </div>
  )
}

export default TitleBar      // exporta pra poder usar em outros arquivos```