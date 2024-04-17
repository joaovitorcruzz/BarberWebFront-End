import Head from "next/head";
import { Sidebar } from "@/src/components/sidebar";

import {
    Flex,
    Text,
    Heading,
    Button,
    useMediaQuery,
    Input
} from '@chakra-ui/react'

import { FiChevronLeft } from "react-icons/fi";

import Link from "next/link";

export default function NewHaircut() {
    const [isMobile] = useMediaQuery("(max-width: 500px)");
    return (
        <>
            <Head>
                <title>BarberPRO - Novo modelo de corte</title>
            </Head>
            <Sidebar>
                <Flex direction="column" alignItems="flex-start" justifyContent="flex-start">

                    <Flex
                        direction={isMobile ? "column" : "row"}
                        width="100%"
                        align={isMobile ? "flex-start" : "center"}
                        mb={isMobile ? 4 : 0}
                    >
                        <Link href="/haircuts">
                            <Button background="barber.400" color='white' p={4} display="flex" alignItems="center" justifyContent="center" mr={4}>
                            <FiChevronLeft size={24} color="#FFF"/>
                                Voltar
                            </Button>
                        </Link>
                        <Heading color="orange.900" margin="4px 4px 4px 0px" fontSize={isMobile ? "28px" : "3xl"}>
                            Modelos de corte
                        </Heading>

                    </Flex>

                    <Flex maxW="700px" bg="barber.400" width="100%" alignItems="center" justifyContent="center" pt={8} pb={8} direction="column">
                        <Heading mb={4} color='white' fontSize={isMobile ? "22px" : "3xl"}>Cadastrar modelo</Heading>
                        <Input
                        placeholder="Nome do corte"
                        size="lg"
                        type="text"
                        w="85%"
                        bg="gray.900"
                        mb={4}
                        textColor="white"
                        />
                        <Input
                        placeholder="Valor do corte ex: 59.90"
                        size="lg"
                        type="text"
                        w="85%"
                        bg="gray.900"
                        mb={4}
                        textColor="white"
                        />

                        <Button w="85%" size="lg" color="gray.900" mb={6} bg="button.cta" _hover={{bg: "#FFb13e"}}>
                            Cadastrar
                        </Button>
                    </Flex>

                </Flex>
            </Sidebar>
        </>
    )
}