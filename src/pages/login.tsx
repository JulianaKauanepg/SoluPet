
import { 
  Flex,
  Box,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button
} from '@chakra-ui/react'
import Link from 'next/link'


export default function LoginPage() {

 
  return (
    <Flex 
      minHeight={'100vh'}
      width={'full'}
      align={'center'}
      justifyContent={'center'}
      backgroundColor={'background'}
    
    >
      <Box 
        px={12}
        py={12}
        width={'full'}
        maxWidth={'450px'}
        boxShadow={'lg'}
        background={'gray.700'}
        borderRadius={'6px'}
      >

        <Heading>
          <Text color={'gray.200'}  textAlign={'center'} fontSize={'2x-large'}>Entre em sua conta</Text>
        </Heading>

        <Box>
          <form action={''} autoComplete='off'>
            <FormControl isRequired marginTop={'15px'}>
              <FormLabel color={'gray.200'}>CPF</FormLabel>
              <Input
               type='text'
               name='cpf'
               border='none'
               outline='none'
               backgroundColor='gray.900'
               focusBorderColor='gray.500'
               color='gray.200'
               placeholder='Insira seu CPF' 

               />
            </FormControl>
            <FormControl isRequired>
              <FormLabel color={'gray.200'} marginTop={'15px'}>Senha</FormLabel>
              <Input 
                type='password'
                name='senha'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira sua senha' 
                
              />
            </FormControl>
            <Button 
               type='submit'
               size={'lg'}
               width={'full'}
               fontWeight={'semibold'}
               fontSize={'xl'}
               mt={8}
               colorScheme='#f9e3f9' 
               background={'#ef2fef'}
               
               
            > 
               Entrar       
            </Button>
            
          {/* Link para a rota de cadastro */}
            <Link href="/cadastro" color={'gray.200'}>Não possui uma conta?</Link>
          </form>
        </Box>
      </Box>
    </Flex>
  ) 
  
}









  




