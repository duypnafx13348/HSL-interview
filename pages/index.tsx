import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
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

  return <h1>Home page</h1>;
}
