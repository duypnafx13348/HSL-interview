import { Box, TextField, Typography, Button, InputBase } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React from "react";

const NavBar = () => {
  const miniMaxSum = (arr: number[]): number[] => {
    const arrSort = arr.sort((a, b) => {
      return a - b;
    });
    const minArr = arrSort.slice(0, -1);
    const maxArr = arrSort.slice(1);

    const minSumArr = minArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);
    const maxSumArr = maxArr.reduce((accumulator, currentValue) => {
      return accumulator + currentValue;
    }, 0);

    console.log({ arrSort });

    return [minSumArr, maxSumArr];
  };
  console.log(miniMaxSum([100, 10, 50, 30, 20]));

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "red",
      }}
      p="1rem"
      minHeight={{ xs: "56px", sm: "64px" }}
    >
      <Box>Logo</Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        border="1px solid #333"
        borderRadius="0.25rem"
        maxHeight="2.5rem"
        minWidth="500px"
      >
        <InputBase sx={{ ml: 1, flex: 1 }} placeholder="Tìm kiếm sản phẩm..." />
        <Button
          variant="text"
          // size="small"
          sx={{
            // border: "none",
            // width: "inherit",
            // height: "100%",
            "&:hover": {
              border: "none",
              backgroundColor: "inherit",
            },
          }}
        >
          <SearchIcon
            color="primary"
            // sx={{
            //   "&:hover": {
            //     color: "red",
            //   },
            // }}
          />
        </Button>
      </Box>
      <Box>6</Box>
    </Box>
  );
};

export default NavBar;
