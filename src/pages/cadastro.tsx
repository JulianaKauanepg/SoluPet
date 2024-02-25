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
import React from 'react'
import Link from 'next/link'



const CadastroPage = () => {

  return (
    <Flex 
      minHeight={'100vh'}
      width={'full'}
      align={'center'}
      justifyContent={'center'}
      backgroundColor={'background'}
      p={100}
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
          <Text color={'gray.200'} textAlign={'center'} fontSize={'2x-large'}>
            Crie uma conta
          </Text>
        </Heading>

        <Box>
          <form  autoComplete='off'>
            <FormControl isRequired marginTop={'15px'}>
              <FormLabel color={'gray.200'}>Nome</FormLabel>
              <Input
               type='text'
               name='nome'
               border='none'
               outline='none'
               backgroundColor='gray.900'
               focusBorderColor='gray.500'
               color='gray.200'
               placeholder='Insira seu nome'
              
               />
            </FormControl>
            <Flex justify={'space-between'}>
            <FormControl isRequired marginTop={'15px'} width='49%'>
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
            <FormControl isRequired marginTop={'15px'} width='49%'>
            <FormLabel color={'gray.200'}>RG</FormLabel>
              <Input 
                type='text'
                name='rg'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200' 
                placeholder='Insira seu RG'
                
              />
            </FormControl>
            </Flex>
            <FormControl isRequired marginTop={'15px'}>
            <FormLabel color={'gray.200'}>Data de Nascimento</FormLabel>
              <Input 
                type='date'
                name='data_nasc'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200' 
               
              />
            </FormControl>
            <Flex justify={'space-between'}>
            <FormControl isRequired marginTop={'15px'} width='49%'>
            <FormLabel color={'gray.200'}>Celular</FormLabel>
              <Input 
                type='text'
                name='celular'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira seu contato' 
               
              />
            </FormControl>
            <FormControl marginTop={'15px'} width='49%'>
            <FormLabel color={'gray.200'}>Telefone</FormLabel>
              <Input 
                type='text'
                name='fone'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira seu telefone' 
                
              />
            </FormControl>
            </Flex>
            <FormControl isRequired marginTop={'15px'}>
            <FormLabel color={'gray.200'}>E-mail</FormLabel>
              <Input 
                type='text'
                name='email'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira seu e-mail'
               
              />
            </FormControl>
            <FormControl isRequired marginTop={'15px'}>
            <FormLabel color={'gray.200'}>CNPJ</FormLabel>
              <Input 
                type='text'
                name='cnpj'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira o CNPJ' 
                
              />
            </FormControl>
            <FormControl isRequired marginTop={'15px'}>
            <FormLabel color={'gray.200'}>Endereço da Clínica</FormLabel>
              <Input 
                type='text'
                name='endereco'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira o endereço' 
               
              />
            </FormControl>
            <Flex justify={'space-between'}>
            <FormControl isRequired marginTop={'15px'} width={'49%'}>
            <FormLabel color={'gray.200'}>Bairro</FormLabel>
              <Input 
                type='text'
                name='bairro'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira o bairro' 
                
              />
            </FormControl>
            <FormControl isRequired marginTop={'15px'} width='49%'>
            <FormLabel color={'gray.200'}>CEP</FormLabel>
              <Input 
                type='text'
                name='cep'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira o CEP' 
                
              />
               </FormControl>
               </Flex>
            <Flex justify={'space-between'}>
            <FormControl isRequired marginTop={'15px'} width='49%'>
            <FormLabel color={'gray.200'}>Município</FormLabel>
              <Input 
                type='text'
                name='municipio'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira o municipio' 
               
              />
            </FormControl>
            <FormControl isRequired marginTop={'15px'} width='49%'>
            <FormLabel color={'gray.200'}>Estado</FormLabel>
              <Input 
                type='text'
                name='estado'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Insira o estado' 
               
              />
            </FormControl>
            </Flex>
            <FormControl isRequired marginTop={'15px'}>
            <FormLabel color={'gray.200'}>Senha</FormLabel>
              <Input 
                type='password'
                name='senha'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200'
                placeholder='Crie uma senha' 
               
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
               Cadastrar      
            </Button>
            
          {/* Link para a rota de cadastro */}
            <Link href="/login" color={'violet'}><h3 color='gray.200'>Já possui uma conta?</h3></Link>
          </form>
        </Box>
      </Box>
    </Flex>
  )

  
  
}

export default CadastroPage








  




