import {
  Box,
  Button,
  Typography,
  Container,
  Divider,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import React, { useState } from "react";
import { setCookie, deleteCookie } from "cookies-next";

interface Joke {
  id: number;
  content: string;
}

const Home = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#29b363",
          padding: "2rem",
          textAlign: "center",
          color: "#fff",
          minHeight: "165px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            fontSize="1.75rem"
            fontWeight={600}
            mb="1rem"
          >
            A joke a day keeps the doctor away
          </Typography>
          <Typography fontSize={{ xs: "10px", sm: "13px" }} fontWeight={600}>
            If you joke wrong way, your teeth have to pay.
          </Typography>
        </Container>
      </Box>
      <Box sx={{ backgroundColor: "#fcfcfc" }}>
        <Container maxWidth="md">
          <Joke />
        </Container>
      </Box>
    </>
  );
};

const Joke = () => {
  const jokes: Joke[] = [
    {
      id: 1,
      content:
        'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
    },
    {
      id: 2,
      content:
        'Teacher: "Kids,what does the chicken give you?" Student: "Meat!" Teacher: "Very good! Now what does the pig give you?" Student: "Bacon!" Teacher: "Great! And what does the fat cow give you?" Student: "Homework!"',
    },
    {
      id: 3,
      content: `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
    },
    {
      id: 4,
      content: `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
    },
  ];

  const miniMaxSum = (arr: number[]): number[] => {
    // sort in order from smallest to largest
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

    return [minSumArr, maxSumArr];
  };
  console.log(miniMaxSum([100, 10, 50, 30, 20]));

  const [id, setId] = useState(0);
  const [open, setOpen] = useState(false);

  const Alert = () => {
    const handleClose = () => {
      setOpen(false);
    };

    return (
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText
            id="alert-dialog-description"
            fontSize="1rem"
            fontWeight={600}
            textAlign="center"
          >
            That's all the jokes for today! Come back another day!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    );
  };

  const handleClickFunny = () => {
    deleteCookie("funny");
    setCookie("funny", true);
    if (id >= jokes.length - 1) {
      setOpen(true);
    } else {
      setId((prev) => {
        return prev + 1;
      });
    }
  };
  const handleClickNotFunny = () => {
    deleteCookie("funny");
    setCookie("funny", false);
    if (id >= jokes.length - 1) {
      setOpen(true);
    } else {
      setId((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <Box py="2rem">
      <Box pl={0.5}>
        <Typography fontSize="17px" color="#787878">
          {jokes[id]?.content}
        </Typography>
      </Box>
      <Divider sx={{ my: "2rem", width: "80%", mx: "auto" }} light />
      <Box
        mt={3}
        textAlign="center"
        display={{ xs: "flex" }}
        flexDirection={{ xs: "column", sm: "row" }}
        justifyContent="center"
        alignItems="center"
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickFunny}
          sx={{
            borderRadius: 0,
            width: "170px",
            height: "2rem",
            fontSize: "12px",
            textTransform: "none",
            mb: { xs: 0, sm: "60px" },
          }}
        >
          This is Funny!
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleClickNotFunny}
          sx={{
            ml: { xs: 0, sm: "20px" },
            borderRadius: 0,
            width: "170px",
            height: "2rem",
            fontSize: "12px",
            textTransform: "none",
            mt: { xs: "1rem", sm: 0 },
            mb: { xs: "1rem", sm: "60px" },
          }}
        >
          This is not funny.
        </Button>
      </Box>
      <Alert />
    </Box>
  );
};

export default Home;
