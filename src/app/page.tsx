"use client";

import { useState } from "react";

export default function Home ()
{
  const [ activeTab, setActiveTab ] = useState( "BUSCAR" );

  const renderContent = () =>
  {
    switch ( activeTab )
    {
      case "BUSCAR":
        return <div className="content">Conteúdo de BUSCAR</div>;
      case "CONSULTA":
        return <div className="content">Conteúdo de CONSULTA</div>;
      case "PET":
        return <div className="content">Conteúdo de PET</div>;
      case "ATENDIMENTO":
        return <div className="content">Conteúdo de ATENDIMENTO</div>;
      default:
        return <div className="content">Conteúdo de BUSCAR</div>;
    }
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Conteúdo Principal */ }
      <div className="flex-1 p-4">{ renderContent() }</div>

      {/* Barra Inferior */ }
      <div className="flex justify-around items-center bg-gray-800 text-white h-16">
        { [ "BUSCAR", "CONSULTA", "PET", "ATENDIMENTO" ].map( ( tab ) => (
          <button
            key={ tab }
            className={ `flex-1 py-2 text-center ${ activeTab === tab ? "bg-cyan-600" : ""
              }` }
            onClick={ () => setActiveTab( tab ) }
          >
            { tab }
          </button>
        ) ) }
      </div>
    </div>
  );
}
