import Head from 'next/head'
import {
    Button,
    Flex,
    Heading,
    Text,
    useMediaQuery
} from '@chakra-ui/react'

import { Sidebar } from '@/src/components/sidebar'
import { canSSRAuth } from '@/src/utils/canSSRAuth'
import { setupAPIClient } from '@/src/services/api'

interface PlanosProps {
    premium: boolean;
}

export default function Planos({ premium }: PlanosProps) {
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
                                bg={premium ? 'transparent' : 'button.cta'} isDisabled={premium} m={2} color='white' onClick={() => { }} _hover={{ bg: "#1C1C1C" }}
                            >
                                {premium ? (
                                    "VOCÊ JÁ É PREMIUM"
                                ) : (
                                    "VIRAR PREMIUM"
                                )}
                            </Button>
                            {premium && (
                                <Button m={2} bg='white' color='barber.900' fontWeight='bold' onClick={() => { }}>
                                    ALTERAR ASSINATURA
                                </Button>
                            )}
                        </Flex>

                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    try {

        const apiClient = setupAPIClient(ctx);
        const response = await apiClient.get('/me')


        return {
            props: {
                premium: response.data?.subscriptions?.status === 'active' ? true : false
            }
        }

    } catch (err) {
        console.log(err);

        return {
            redirect: {
                destination: '/dashboard',
                permanent: false,
            }
        }
    }

})