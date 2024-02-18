import React from "react";
import Header from "./Header";
import { Box, Grid, Stack } from "@mui/material";
import ContentCardFront from "./ContentCards";
const datas = {
  status: 200,
  nbResult: 25,
  items: [
    {
      id: 1,
      name: "Ciment",
      quantity: 5,
      price: "200000",
      // image: { exampleImage },
    },
    {
      id: 2,
      name: "Fer 6",
      quantity: 3,
      price: "150000",
      // image: { exampleImage },
    },
    {
      id: 3,
      name: "Tole",
      quantity: 2,
      price: "120000",
      // image: { exampleImage },
    },
    {
      id: 4,
      name: "Brique",
      quantity: 8,
      price: "180000",
      // image: { exampleImage },
    },
    {
      id: 5,
      name: "Peinture",
      quantity: 10,
      price: "250000",
      // image: { exampleImage },
    },
    {
      id: 6,
      name: "Plomberie Kit",
      quantity: 2,
      price: "300000",
      // image: { exampleImage },
    },
    {
      id: 7,
      name: "Bois de Construction",
      quantity: 15,
      price: "220000",
      // image: { exampleImage },
    },
    {
      id: 8,
      name: "Fenêtre en Aluminium",
      quantity: 4,
      price: "400000",
      // image: { exampleImage },
    },
    {
      id: 9,
      name: "Isolant Thermique",
      quantity: 5,
      price: "120000",
      // image: { exampleImage },
    },
    {
      id: 10,
      name: "Tuile de Toit",
      quantity: 7,
      price: "350000",
      // image: { exampleImage },
    },
    {
      id: 11,
      name: "Porte en Bois",
      quantity: 3,
      price: "280000",
      // image: { exampleImage },
    },
    {
      id: 12,
      name: "Escalier en Métal",
      quantity: 1,
      price: "600000",
      // image: { exampleImage },
    },
    {
      id: 13,
      name: "Revêtement de Sol",
      quantity: 6,
      price: "180000",
      // image: { exampleImage },
    },
    {
      id: 14,
      name: "Échafaudage",
      quantity: 2,
      price: "350000",
      // image: { exampleImage },
    },
    {
      id: 15,
      name: "Chaudière",
      quantity: 1,
      price: "800000",
      // image: { exampleImage },
    },
    {
      id: 16,
      name: "Fibre de Verre",
      quantity: 4,
      price: "150000",
      // image: { exampleImage },
    },
    {
      id: 17,
      name: "Panneau Solaire",
      quantity: 2,
      price: "1200000",
      // image: { exampleImage },
    },
    {
      id: 18,
      name: "Gravier",
      quantity: 8,
      price: "100000",
      // image: { exampleImage },
    },
    {
      id: 19,
      name: "Câble Électrique",
      quantity: 5,
      price: "250000",
      // image: { exampleImage },
    },
    {
      id: 20,
      name: "Garde-Corps en Aluminium",
      quantity: 3,
      price: "450000",
      // image: { exampleImage },
    },
    // Continue with more products as needed
  ],
};
function DetailProduit() {
  return (
    <>
      <Box position={"relative"} height={"10vh"}>
        <Header />
      </Box>
      <Stack direction="row" alignItems="center">
            <Box
              display={"flex"}
              margin="auto"
              flexDirection={"row"}
              width={"100%"}
              sx={{
                backgroundColor: "white",
                overflowX: "hidden",
                "&::-webkit-scrollbar": {
                  width: 0,
                },
              }}
            >
              <Grid container justifyContent={"center"}>
                {datas &&
                  datas.map((e) => (
                    <Box key={e.id}>
                      <Box
                        sx={{
                          minWidth: { xs: 250, sm: 350 },
                          p: { xs: 1, sm: 2 },
                          width: "20vw",
                          borderRadius: 2,
                          overflow: "hidden",
                        }}
                      >
                        <ContentCardFront datas={e} />
                      </Box>
                    </Box>
                  ))}
              </Grid>
            </Box>
          </Stack>
    </>
  );
}

export default DetailProduit;
