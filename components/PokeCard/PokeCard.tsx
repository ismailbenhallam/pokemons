import {Avatar, Badge, Box, Button, Center, Heading, Link, Stack, Text, useColorModeValue,} from '@chakra-ui/react';
import {titleCase} from "utils/string-utils";
import {SPRITES, URL_ID} from "../../constants";
import NextLink from "next/link";
import ROUTES from "../../routes";
import {NamedAPIResource} from "../../types";

interface Props extends NamedAPIResource {
    id: number
}

export default (props: Props) => (
    <Center py={6}>
        <Box
            maxW={'320px'}
            w={'full'}
            bg={useColorModeValue('white', 'gray.900')}
            boxShadow={'2xl'}
            rounded={'lg'}
            p={6}
            textAlign={'center'}>
            <Avatar
                size={'xl'}
                src={
                    SPRITES.OFFICIAL_ARTWORK.replace(URL_ID, String(props.id))
                }
                mb={4}
                pos={'relative'}
            />
            <Heading fontSize={'2xl'} fontFamily={'body'}>
                {titleCase(props.name)}
            </Heading>
            <Text fontWeight={600} color={'gray.500'} mb={4}>
                @lindsey_jam3s
            </Text>
            <Text
                textAlign={'center'}
                color={useColorModeValue('gray.700', 'gray.400')}
                px={3}>
                Actress, musician, songwriter and artist. PM for work inquires or{' '}
                <Link href={'#'} color={'blue.400'}>
                    #tag
                </Link>{' '}
                me in your posts
            </Text>

            <Stack align={'center'} justify={'center'} direction={'row'} mt={6}>
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
            </Stack>

            <Stack mt={8} direction={'row'} spacing={4}>
                <NextLink href={`${ROUTES.POKEMONS}/${props.id}`}>
                    <Button
                        flex={1}
                        fontSize={'md'}
                        rounded={'full'}
                        color="secondary.500"
                        bgColor="primary.500">
                        Check Pokemon
                    </Button>
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