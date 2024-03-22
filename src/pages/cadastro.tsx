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
import { useState } from 'react'




const CadastroPage = () => {

  const [formDados, setFormDados]  = useState({
    nome: '',
    cpf: '',
    rg: '',
    data_nasc: '',
    celular: '',
    fone: '',
    email: '',
    cnpj: '',
    endereco: '',
    bairro: '',
    cep: '',
    municipio: '',
    estado: '',
    password: ''
  })

  const handleFormEdit = (event, nome) => {
    setFormDados({
      ...formDados,
      [nome]: event.target.value
    })
  }
  
  const handleForm = async (event) => {
    try {
      event.preventDefault()
      console.log(formDados)
      const response = await fetch(`/api/cadastro`, {
        method: 'POST',
        body: JSON.stringify(formDados)
      })
      
      const json = await response.json()
      console.log(response.status);
      console.log(json);
  
    } catch (error) {
      
    }
  }

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
        <form onSubmit={handleForm} autoComplete='off'>
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
               value={formDados.nome} 
               onChange={(e) => handleFormEdit(e, 'nome')}
               />
            </FormControl>
            <Flex justify={'space-between'}>
            <FormControl  marginTop={'15px'} width='49%'>
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
                onChange={(e) => handleFormEdit(e, 'cpf')}
              />
            </FormControl>
            <FormControl  marginTop={'15px'} width='49%'>
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
                onChange={(e) => handleFormEdit(e, 'rg')}
              />
            </FormControl>
            </Flex>
            <FormControl  marginTop={'15px'}>
            <FormLabel color={'gray.200'}>Data de Nascimento</FormLabel>
              <Input 
                type='date'
                name='data_nasc'
                border='none'
                outline='none'
                backgroundColor='gray.900'
                focusBorderColor='gray.500'
                color='gray.200' 
                onChange={(e) => handleFormEdit(e, 'data_nasc')}
              />
            </FormControl>
            <Flex justify={'space-between'}>
            <FormControl  marginTop={'15px'} width='49%'>
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
                onChange={(e) => handleFormEdit(e, 'celular')}
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
                onChange={(e) => handleFormEdit(e, 'fone')}
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
                onChange={(e) => handleFormEdit(e, 'email')}
              />
            </FormControl>
            <FormControl  marginTop={'15px'}>
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
                onChange={(e) => handleFormEdit(e, 'cnpj')}
              />
            </FormControl>
            <FormControl  marginTop={'15px'}>
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
                onChange={(e) => handleFormEdit(e, 'endereco')} 
               
              />
            </FormControl>
            <Flex justify={'space-between'}>
            <FormControl  marginTop={'15px'} width={'49%'}>
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
                onChange={(e) => handleFormEdit(e, 'bairro')}
                
              />
            </FormControl>
            <FormControl  marginTop={'15px'} width='49%'>
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
                onChange={(e) => handleFormEdit(e, 'cep')}
                
              />
               </FormControl>
               </Flex>
            <Flex justify={'space-between'}>
            <FormControl  marginTop={'15px'} width='49%'>
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
                onChange={(e) => handleFormEdit(e, 'municipio')}
               
              />
            </FormControl>
            <FormControl marginTop={'15px'} width='49%'>
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
                onChange={(e) => handleFormEdit(e, 'estado')}
               
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
                onChange={(e) => handleFormEdit(e, 'senha')} 
               
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








  




