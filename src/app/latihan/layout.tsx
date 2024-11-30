import { Container, Box, Text } from "@chakra-ui/react";
import { Alert } from "@/components/ui/alert"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Container mt={{ xl: "7%", lg: "7%", md: "10%", sm: "10%", base: "14%" }}>
        <Box mb={10}>
          <Text
            textStyle={"5xl"}
            color={"white"}
            justifyContent={"center"}
            display={"flex"}
            fontWeight={"bold"}
            textAlign={"center"}
            w="full"
          >
            Latihan
          </Text>

        </Box>
        <Alert status="info" bg={"blue.700"} shadow={"md"} color={"white"} title="Mode Fokus Diaktifkan, Fungsionalitas Navigasi dinonaktifkan" w={"fit-content"} mx={"auto"}/>
        <Box
          justifyContent={"center"}
          alignItems={"center"}
          my={"auto"}
          mt={-5}
          display={"flex"}
        >
          <Box
            border={"1px solid white"}
            rounded={"lg"}
            shadow={"lg"}
            color={"white"}
            w={"max-content"}
            py={10}
            px={10}
            mb={12}
          >
            
            <>
            {children}
            </>
          </Box>
        </Box>
      </Container>
    </>
  );
}
