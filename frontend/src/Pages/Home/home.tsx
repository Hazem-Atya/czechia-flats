import {
  Alert,
  CircularProgress,
  Container,
  Pagination,
  Stack,
} from "@mui/material";
import React, { useEffect } from 'react';

import { FlatCard, Header } from "./components";
import { SectionTitle } from "Shared";
import { useAppDispatch, useAppSelector } from "Store";
import { fetchFlatsPerPage, flatsSelector } from "Slices/flat.slice";
import {RECORDS_PER_PAGE} from "Constants"

function Home() {

  useEffect(() => {
    dispatch(fetchFlatsPerPage(0,RECORDS_PER_PAGE));
  },[]);


  const dispatch = useAppDispatch();
  const { loading, error, data, totalPages, page } =
    useAppSelector(flatsSelector);
  console.log(data)
  const handlePageChange = (event: any, value: number) => {
    window.scrollTo(0,0)
    console.log(value);
    const skip =(value-1)*RECORDS_PER_PAGE; 
    const limit=20;
    dispatch(fetchFlatsPerPage(skip,limit));
  };
  return (
    <Container>
      <Header />
      <SectionTitle text="Flats Highlights" />
      <Stack alignItems={"center"}>
        <Stack
          mt={5}
          mb={5}
          flexDirection={"row"}
          flexWrap={"wrap"}
          gap={"3%"}
          justifyContent={"center"}
        >
          {loading && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginTop: "30vh",
              }}
            >
              <CircularProgress />
            </div>
          )}
          {error && (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Alert severity="error">
                This is an error alert — check it out!
              </Alert>
            </div>
          )}
          {data && data.map((f, k) => (
            <FlatCard
              key={k}
              title={f.title}
              price={f.price}
              locality={f.locality}
              image_url={f.image_url}
            />
          ))}
        </Stack>
        <Pagination
          count={totalPages}
          variant="outlined"
          shape="rounded"
          page={page}
          onChange={handlePageChange}
        />
      </Stack>
    </Container>
  );
}

export default Home;
