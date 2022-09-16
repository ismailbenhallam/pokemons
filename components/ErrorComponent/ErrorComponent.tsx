import {Alert, AlertDescription, AlertIcon, AlertTitle} from '@chakra-ui/react';

interface Props {
    title?: string
    message: string
}

const ErrorComponent = (props: Props) => {
    const {title, message} = props

    return (
        <Alert
            status='error'
            variant='subtle'
            flexDirection='column'
            alignItems='center'
            justifyContent='center'
            textAlign='center'
            height='200px'
        >
            <AlertIcon boxSize='40px' mr={0}/>
            <AlertTitle mt={4} mb={1} fontSize='lg'>
                {title || "Something went wrong"}
            </AlertTitle>
            <AlertDescription maxWidth='sm'>
                {message}
            </AlertDescription>
        </Alert>
    )
}

export default ErrorComponent