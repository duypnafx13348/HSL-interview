import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { setCookie, deleteCookie } from "cookies-next";

interface Joke {
  id: number;
  contents: string[];
}

const Home = () => {
  return (
    <Box>
      <Box
        sx={{
          backgroundColor: "#2a8f2a",
          padding: "2rem",
          textAlign: "center",
          color: "#fff",
          fontSize: "4rem",
        }}
      >
        <Typography variant="h3" fontSize={{ xs: "2rem", md: "2rem" }}>
          A joke a day keeps the doctor away
        </Typography>
        <Typography variant="body1">
          If you joke wrong way, your teeth have to pay.
        </Typography>
      </Box>
      <Joke />
    </Box>
  );
};

const Joke = () => {
  const jokes: Joke[] = [
    {
      id: 1,
      contents: [
        'A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on."',
        'The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now."',
        'The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."',
      ],
    },
    {
      id: 2,
      contents: [
        'Teacher: "Kids,what does the chicken give you?"',
        'Student: "Meat!"',
        'Teacher: "Very good! Now what does the pig give you?"',
        'Student: "Bacon!"',
        'Teacher: "Great! And what does the fat cow give you?"',
        'Student: "Homework!"',
      ],
    },
    {
      id: 3,
      contents: [
        `The teacher asked Jimmy, "Why is your cat at school today Jimmy?" Jimmy replied crying, "Because I heard my daddy tell my mommy, 'I am going to eat that pussy once Jimmy leaves for school today!'"`,
      ],
    },
    {
      id: 4,
      contents: [
        `A housewife, an accountant and a lawyer were asked "How much is 2+2?" The housewife replies: "Four!". The accountant says: "I think it's either 3 or 4. Let me run those figures through my spreadsheet one more time." The lawyer pulls the drapes, dims the lights and asks in a hushed voice, "How much do you want it to be?"`,
      ],
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
        {jokes[id]?.contents.map((content, index) => (
          <Typography key={index}>- {content}</Typography>
        ))}
      </Box>
      <Box mt={3} textAlign="center">
        <Button variant="contained" color="primary" onClick={handleClickFunny}>
          This is Funny!
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleClickNotFunny}
          sx={{ ml: 1 }}
        >
          This is not Funny!
        </Button>
      </Box>
    </Box>
  );
};

export default Home;
