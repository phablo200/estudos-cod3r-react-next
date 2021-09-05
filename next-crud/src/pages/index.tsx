import Botao from '../components/Botao';
import Formulario from '../components/Formulario';
import Layout from '../components/Layout';
import Tabela from '../components/Tabela';
import useClientes from '../hooks/useClientes';

export default function Home() {
  
  const { 
    cliente,
    clientes,
    selecionarCliente, 
    excluirCliente, 
    novoCliente,
    salvarCliente,
    tabelaVisivel,
    exibirTabela 
  } = useClientes();



  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout titulo="Cadastro Simples">
        { 
          tabelaVisivel ? (
              <>
                <Botao cor="green" className="mb-4" onClick={novoCliente}>Novo Cliente</Botao>  
                <Tabela clientes={clientes} 
                  clienteSelecionado={selecionarCliente}
                  clienteExcluido={excluirCliente}
                />
              </>
            )
            : (
              <Formulario 
                cliente={cliente}  
                cancelado={exibirTabela} 
                clienteMudou={salvarCliente}
              />)
        }
      </Layout>
    </div>
  );
};
