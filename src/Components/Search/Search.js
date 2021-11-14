import React, { useState, useEffect } from "react";
import "./Search.css";
import Card from "../Card/Card";

export default function Search() {
  const [input, setInput] = useState("");
  const [searchedNames, setSearchedNames] = useState([]);
  const [timer, setTimer] = useState(0);

  // default array of names
  const names = [
    "James",
    "Mary",
    "Robert",
    "Patricia",
    "John",
    "Jennifer",
    "Michael",
    "Linda",
    "William",
    "Elizabeth",
    "David",
    "Barbara",
    "Richard",
    "Susan",
    "Joseph",
    "Jessica",
    "Thomas",
    "Sarah",
    "Charles",
    "Karen",
    "Christopher",
    "Nancy",
    "Daniel",
    "Lisa",
    "Matthew",
    "Betty",
    "Anthony",
    "Margaret",
    "Mark",
    "Sandra",
    "Donald",
    "Ashley",
    "Steven",
    "Kimberly",
    "Paul",
    "Emily",
    "Andrew",
    "Donna",
    "Joshua",
    "Michelle",
    "Kenneth",
    "Dorothy",
    "Kevin",
    "Carol",
    "Brian",
    "Amanda",
    "George",
    "Melissa",
    "Edward",
    "Deborah",
    "Ronald",
    "Stephanie",
    "Timothy",
    "Rebecca",
    "Jason",
    "Sharon",
    "Jeffrey",
    "Laura",
    "Ryan",
    "Cynthia",
    "Jacob",
    "Kathleen",
    "Gary",
    "Amy",
    "Nicholas",
    "Shirley",
    "Eric",
    "Angela",
    "Jonathan",
    "Helen",
    "Stephen",
    "Anna",
    "Larry",
    "Brenda",
    "Justin",
    "Pamela",
    "Scott",
    "Nicole",
    "Brandon",
    "Emma",
    "Benjamin",
    "Samantha",
    "Samuel",
    "Katherine",
    "Gregory",
    "Christine",
    "Frank",
    "Debra",
    "Alexander",
    "Rachel",
    "Raymond",
    "Catherine",
    "Patrick",
    "Carolyn",
    "Jack",
    "Janet",
    "Dennis",
    "Ruth",
    "Jerry",
    "Maria",
  ];

  useEffect(() => {
    setSearchedNames(names);
  }, []);

  let i,
    randomNum = {};
  // var timer = 0;

  for (i = 0; i < 100; i++) {
    randomNum[names[i]] = i;
  }
  // console.log(randomNum);

  // returning names if it matches with the input entered in search box
  const searchNames = async (input) => {
    let filtered = names.filter((name) =>
      name.toLowerCase().includes(input.toLowerCase())
    );
    setSearchedNames(filtered);

    console.log(input);
  };

  return (
    <div>
      <div className="heading">
        <h1>Name Search</h1>
        <input
          type="text"
          placeholder="Search a name"
          value={input}
          onChange={(e) => {
            e.preventDefault();
            setInput(e.target.value);
            clearTimeout(timer);

            setTimer(
              setTimeout(function () {
                searchNames(e.target.value);
              }, 1000)
            );
          }}
        />
      </div>
      <div className="all-names-div">
        {searchedNames.map((name) => (
          <Card name={name} randomNum={randomNum} />
        ))}
      </div>
    </div>
  );
}
