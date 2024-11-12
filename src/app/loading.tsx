import { HStack, Stack } from "@chakra-ui/react";
import {
  Skeleton,
  SkeletonCircle,
  SkeletonText,
} from "@/components/ui/skeleton";
import { Flex, Container, Box, Text } from "@chakra-ui/react";
import Sidenav from "@/components/page/materi/sidenav";
import { Spinner } from "@chakra-ui/react"


export default function Loading() {
  return (
    <Container fluid={true} mt={{ xl: "5%", lg: "8%" }} zIndex={2}>
      <Flex>
        <Sidenav content={"Konsep Dasar Limit"} />
        <Box flexBasis={"100%"} minH={"100vh"} alignItems={"center"} display={"flex"} justifyContent={"center"} flexDirection={"column"}>
        <Spinner size="xl"/>
        <Text textStyle={"3xl"} mt={5} fontWeight={"semibold"}>Loading ... </Text>
        </Box>
      </Flex>
    </Container>
  );
}
