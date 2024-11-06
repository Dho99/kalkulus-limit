import { Box, Container, Text } from "@chakra-ui/react"


export default function Footer(){
    return (
        <>
            <Box backgroundColor={"black"}>
                <Container py={"5"}>
                    <Text display={"flex"} justifyContent={"center"}>Created By <Text fontWeight={"bold"} mx={"5px"}>3rd</Text> Group</Text>
                </Container>
            </Box>
        </>
)
}