"use client";

import { useState } from "react";
import { FaSearch, FaStethoscope, FaPaw, FaClipboard } from "react-icons/fa";

export default function Home ()
{
  const [ activeTab, setActiveTab ] = useState( "BUSCAR" );

  const renderContent = () =>
  {
    switch ( activeTab )
    {
      case "BUSCAR":
        return (
          <div className="p-4">
            <input
              type="text"
              placeholder="Buscar..."
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        );
      case "CONSULTA":
        return <div>Conteúdo de CONSULTA</div>;
      case "PET":
        return <div>Conteúdo de PET</div>;
      case "ATENDIMENTO":
        return <div>Conteúdo de ATENDIMENTO</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Conteúdo Principal */ }
      <div className="flex-1">{ renderContent() }</div>

      {/* Barra Inferior */ }
      <div className="flex justify-around items-center bg-gray-800 text-white h-16">
        <button
          className={ `flex-1 flex flex-col items-center ${ activeTab === "BUSCAR" ? "bg-cyan-600" : ""
            }` }
          onClick={ () => setActiveTab( "BUSCAR" ) }
        >
          <FaSearch size={ 24 } />
          <span className="text-sm">BUSCAR</span>
        </button>
        <button
          className={ `flex-1 flex flex-col items-center ${ activeTab === "CONSULTA" ? "bg-cyan-600" : ""
            }` }
          onClick={ () => setActiveTab( "CONSULTA" ) }
        >
          <FaStethoscope size={ 24 } />
          <span className="text-sm">CONSULTA</span>
        </button>
        <button
          className={ `flex-1 flex flex-col items-center ${ activeTab === "PET" ? "bg-cyan-600" : ""
            }` }
          onClick={ () => setActiveTab( "PET" ) }
        >
          <FaPaw size={ 24 } />
          <span className="text-sm">PET</span>
        </button>
        <button
          className={ `flex-1 flex flex-col items-center ${ activeTab === "ATENDIMENTO" ? "bg-cyan-600" : ""
            }` }
          onClick={ () => setActiveTab( "ATENDIMENTO" ) }
        >
          <FaClipboard size={ 24 } />
          <span className="text-sm">ATENDIMENTO</span>
        </button>
      </div>
    </div>
  );
}
