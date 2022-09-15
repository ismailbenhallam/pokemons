import {Box, Center, Heading, Image, Stack, useColorModeValue,} from '@chakra-ui/react';
import {titleCase} from "utils/string-utils";
import {POKEBALL, SPRITES, URL_ID} from "utils/constants";
import NextLink from "next/link";
import ROUTES from "utils/routes";
import {NamedAPIResource} from "utils/types";

interface Props extends NamedAPIResource {
    id: number
}

const PokeCard = (props: Props) => (
    <Center py={6} transition="all .25s ease" _hover={{transform: 'scale(1.01)'}}>
        <Box
            border={"1px solid black"}
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'xl'}
            p={6}
            textAlign={'center'}>
            <Image
                src={
                    SPRITES.OFFICIAL_ARTWORK.replace(URL_ID, String(props.id))
                }
                bgColor={"white"}
                mb={4}
                pos={'relative'}
            />
            <Heading fontSize={'33px'} fontFamily={'mongo'} mb={5}>
                {titleCase(props.name)}
            </Heading>
            {/*<Text fontWeight={600} color={'gray.500'} mb={3}>
                @{props.id}
            </Text>*/}
            {/* <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                Actress, musician, songwriter and artist. PM for work inquires or{' '}
                <Link href={'#'} color={'blue.400'}>
                    #tag
                </Link>{' '}
                me in your posts
            </Text>*/}

            {/*<Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
                <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #art
                </Badge>
                <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #photography
                </Badge>
                <Badge
                    px={2}
                    py={1}
                    bg={useColorModeValue('gray.50', 'gray.800')}
                    fontWeight={'400'}>
                    #music
                </Badge>
            </Stack>*/}

            <Stack direction={'row'} spacing={4} justifyContent="center">
                <NextLink href={`${ROUTES.POKEMONS}/${props.id}`}>
                    <Image
                        cursor="pointer"
                        src={POKEBALL}
                        boxSize='40px'
                        transition="all .25s ease" _hover={{transform: 'scale(1.3)'}}
                    />
                    {/*<Button
                        flex={1}
                        fontSize={'18px'}
                        rounded={'full'}
                        bgColor="secondary.500"
                        _hover={{
                            bgColor: "secondary.600"
                        }}
                        color="primary.500">
                        Check Pokemon
                    </Button>*/}
                </NextLink>

                {/*Add to favorite*/}
                {/*<Button
                    flex={1}
                    fontSize={'sm'}
                    rounded={'full'}
                    bg={'blue.400'}
                    color={'white'}
                    boxShadow={
                        '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
                    }
                    _hover={{
                        bg: 'blue.500',
                    }}
                    _focus={{
                        bg: 'blue.500',
                    }}>
                    Follow
                </Button>*/}
            </Stack>
        </Box>
    </Center>
)

export default PokeCard