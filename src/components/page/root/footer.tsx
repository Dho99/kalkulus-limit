import { Box, Container, Text } from "@chakra-ui/react"


export default function Footer(){
    return (
        <Box backgroundColor={"black"} position={"relative"} w={"dvw"} zIndex={12}>
            <Container py={"5"}>
                <Text display={"flex"} justifyContent={"center"}>Created By <Text fontWeight={"bold"} mx={"5px"}>3rd</Text> Group</Text>
            </Container>
        </Box>
)
}