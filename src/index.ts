import _ from "lodash";

console.log(_.add(3,4));

console.log(_.dropRight([1,2,3,4,5], 2));

console.log(_.dropRight(["cat", "dog","fish","blueberry","pineapple"], 1));

console.log(_.multiply(2,5));

const myFunc = (num:any) => ((num * 5) as any);

export default myFunc;