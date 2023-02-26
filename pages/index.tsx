import { Box, Button, Typography, Container, Divider } from "@mui/material";
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
          backgroundColor: "#4fc14f",
          padding: "2rem",
          textAlign: "center",
          color: "#fff",
          minHeight: "165px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Container maxWidth="md" sx={{ textAlign: "center" }}>
          <Typography
            variant="h3"
            fontSize={{ xs: "2rem", md: "2rem" }}
            mb="1rem"
          >
            A joke a day keeps the doctor away
          </Typography>
          <Typography variant="body1">
            If you joke wrong way, your teeth have to pay.
          </Typography>
        </Container>
      </Box>
      <Container maxWidth="md">
        <Joke />
      </Container>
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

  const handleClickFunny = () => {
    deleteCookie("funny");
    setCookie("funny", true);
    if (id >= jokes.length - 1) {
      alert("That's all the jokes for today! Come back another day!");
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
      alert("That's all the jokes for today! Come back another day!");
    } else {
      setId((prev) => {
        return prev + 1;
      });
    }
  };

  return (
    <Box padding="2rem">
      <Box>
        <Typography>{jokes[id]?.content}</Typography>
      </Box>
      <Divider sx={{ my: "2rem", width: "80%", mx: "auto" }} />
      <Box mt={3} textAlign="center">
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickFunny}
          sx={{ borderRadius: 0 }}
        >
          This is Funny!
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleClickNotFunny}
          sx={{ ml: 1, borderRadius: 0, mt: { xs: "1rem", md: 0 } }}
        >
          This is not Funny!
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
