import { useState } from 'react';
import Head from 'next/head';
import {
    Flex,
    Text,
    Heading,
    Button,
    Link as ChackraLink,
    useMediaQuery,
} from '@chakra-ui/react';

import Link from 'next/link';
import { IoMdPerson } from 'react-icons/io';

import { canSSRAuth } from '@/src/utils/canSSRAuth';
import { Sidebar } from '@/src/components/sidebar';
import { setupAPIClient } from '@/src/services/api';

export interface ScheduleItem {
    id: string;
    customer: string;
    haircut: {
        id: string;
        name: string;
        price: string | number;
        user_id: string;
    }
}

interface DashboardProps {
    schedule: ScheduleItem[]
}

export default function Dashboard({ schedule }: DashboardProps) {
    const [list, setList] = useState(schedule)

    const [isMobile] = useMediaQuery("(max-width: 500px)")

    return (
        <>
            <Head>
                <title>BarberPRO - Minha barbearia</title>
            </Head>
            <Sidebar>
                <Flex direction="column" align="flex-start" justify="flex-start">
                    <Flex w="100%" direction="row" align="center" justify="flex-start">
                        <Heading fontSize="3xl" mt={4} mb={4} mr={4} color='white'>
                            Agenda
                        </Heading>
                        <Link href="/new">
                            <Button background="barber.400" color='white'>Registrar</Button>
                        </Link>


                    </Flex>

                    {list.map(item => (
                        <ChackraLink
                            key={item?.id}
                            w='100%'
                            m={0}
                            p={0}
                            mt={1}
                            bg='transparent'
                            style={{ textDecoration: 'none' }}
                        >
                            <Flex w='100%'
                                direction={isMobile ? 'column' : 'row'}
                                p={4}
                                rounded={4}
                                mb={4}
                                bg='barber.400'
                                justify="space-between"
                                align={isMobile ? 'flex-start' : 'center'}
                            >
                                <Flex direction='row' mb={isMobile ? 2 : 0} align="center" justify='center'>
                                    <IoMdPerson size={28} color='#f1f1f1' />
                                    <Text fontWeight='bold' ml={4} noOfLines={1} color='white'>{item?.customer}</Text>
                                </Flex>

                                <Text color='white' fontWeight='bold' mb={isMobile ? 2 : 0}>{item?.haircut?.name}</Text>
                                <Text color='white' fontWeight='bold' mb={isMobile ? 2 : 0}>R$ {item?.haircut?.price}</Text>

                            </Flex>
                        </ChackraLink>
                    ))}

                </Flex>
            </Sidebar>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    try {
        const apiClient = setupAPIClient(ctx);
        const response = await apiClient.get("/schedule")

        console.log(response.data);


        return {
            props: {
                schedule: response.data,
            }
        }

    } catch (err) {
        console.log(err);
        return {
            props: {
                schedule: []
            }
        }
    }
    
})