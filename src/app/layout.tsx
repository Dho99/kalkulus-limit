import type { Metadata } from "next";
import localFont from "next/font/local";
import { Provider } from "@/components/ui/provider";
import { Box } from "@chakra-ui/react";
import Navbar from "@/components/ui/navbar";
import Footer from "@/components/page/root/footer";
import { Suspense } from "react";
import Loading from "./loading";
import ReloadProtector from "./reloadProrector";
import QuizProvider from "./quiz-context";


const inter = localFont({
  src: "./fonts/Inter-VariableFont_opsz,wght.ttf",
});

export const metadata: Metadata = {
  title: "LearnLimit - Home",
  description: "Learn Limit Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  

  return (
    
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter} antialiased`}>
        <ReloadProtector />
        <Provider>
          <Box bgColor={"blue.900"} maxW={"dvw"} overflowX={"hidden"}>
            <Navbar />
              <Suspense fallback={<Loading />}>
                <QuizProvider>
                  <Box
                    minH="100vh"
                    maxW="100vw"
                    bgColor="blue.900"
                    color="black"
                    py={{xl: 4, lg: 4, md: 4, sm: 10, base: 10}} 
                    display={"flex"}
                    // justifyContent={"center"}
                    m="auto"
                  >
                      {children}   
                  </Box>
                </QuizProvider>
              </Suspense>
            <Footer />
          </Box>
        </Provider>
      </body>
    </html>
  );
}
