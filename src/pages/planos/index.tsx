import Head from 'next/head'
import {
    Button,
    Flex,
    Heading,
    Text,
    useMediaQuery
} from '@chakra-ui/react'

import { Sidebar } from '@/src/components/sidebar'

export default function Planos() {
    const [isMobile] = useMediaQuery('(max-width: 500px)')
    return (
        <>
            <Head>
                <title>Barber Pro - Sua assinatura premium</title>
            </Head>
            <Sidebar>
                <Flex w='100%' direction='column' alignItems='flex-start' justify='flex-start'>
                    <Heading fontSize='3xl' mt={4} mr={4} mb={4} color='white'>
                        Planos
                    </Heading>
                </Flex>

                <Flex pb={8} maxWidth='780px' w='100%' direction='column' align='flex-start' justify='flex-start'>

                    <Flex w='100%' gap={4} flexDirection={isMobile ? 'column' : 'row'}>
                        <Flex color='white' rounded={4} p={2} flex={1} bg='barber.400' flexDirection='column'>
                            <Heading textAlign='center' fontSize='2xl' mt={2} mb={4} color='gray.100'>
                                Plano Grátis
                            </Heading>

                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Registrar cortes.</Text>
                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Criar apenas 3 modelos de corte.</Text>
                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Editar dados do perfil.</Text>
                        </Flex>

                        <Flex color='white' rounded={4} p={2} flex={1} bg='barber.400' flexDirection='column'>
                            <Heading textAlign='center' fontSize='2xl' mt={2} mb={4} color='#31fb6a'>
                                Premium
                            </Heading>

                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Registrar cortes ilimitados.</Text>
                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Criar modelos ilimitados.</Text>
                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Editar dados do perfil.</Text>
                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Editar modelos de corte.</Text>
                            <Text color='white' fontWeight='medium' ml={4} mb={2}>Receber todas atualizações.</Text>
                            <Text color='#31fb6a' fontWeight='bold' fontSize='2xl' ml={4} mb={2}>R$ 9.99</Text>

                            <Button 
                            bg='button.cta' m={2} color='white' onClick={() => {}} _hover={{bg: "#1C1C1C"}} 
                            >
                                VIRAR PREMIUM
                            </Button>
                        </Flex>

                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}