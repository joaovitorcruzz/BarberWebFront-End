import Head from 'next/head';
import { Flex, Text } from '@chakra-ui/react';

import { canSSRAuth } from '@/src/utils/canSSRAuth';
import { Sidebar } from '@/src/components/sidebar';

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>BarberPRO - Minha barbearia</title>
            </Head>
            <Sidebar>
                <Flex>
                    <Text color='white' >Bem vindo ao dashboard</Text>
                </Flex>
            </Sidebar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {



    return {
        props: {

        }
    }

})