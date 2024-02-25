import { HStack, Button, Stack} from "@chakra-ui/react";
import Logo from "./Logo";
import LoginPage from "@/pages/login";




/* Função que adiciona Barra de Navegação */
/* Utilizando o HStack para alinhar os elementos da Navbar na horizontal*/ 
const Navbar = () => {
    return (
    <HStack 
        bgColor="violet"
        width="full"
        padding="1rem 5rem"
        justifyContent={"space-between"}>
        
        {/* Adicionando conteúdo da Função Logo - imagem da Logo-Solupet*/}
        <Logo/> 

      {/*Adicionando um Botão na Barra de Navegação */} 

      <Stack>
        <Button colorScheme='purple' variant='outline'>
          Conecte-se
        </Button>
      </Stack>

    

    </HStack>


    );

};

export default Navbar;



 


