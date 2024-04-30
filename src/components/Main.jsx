import React from "react";
import Card from "./Card";
import profile from "../Assests/profile.jpg"

export default function Main() {
  const books = [
    {
      id: 1,
      name: "Harry Potter: The Philosopher's Stone",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
      ratings: 4.5,
      author: "J.K. Rowling",
      info: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    },
    {
      id: 2,
      name: "Harry Potter: The Chamber of Secrets",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
      ratings: 4.5,
      author: "J.K. Rowling",
      info: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    },
    {
      id: 3,
      name: "Harry Potter: The Prisoner of Azkaban",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51UoqRAxwEL._SX331_BO1,204,203,200_.jpg",
      ratings: 4.5,
      author: "J.K. Rowling",
      info: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    },
    {
      id: 4,
      name: "Alchemist",
      image: "https://m.media-amazon.com/images/I/61HAE8zahLL._SL1331_.jpg",
      ratings: 4.5,
      author: "Paulo Coelho",
      info: "The Alchemist is a novel by Brazilian author Paulo Coelho that was first published in 1988. Originally written in Portuguese, it became a widely translated international bestseller. An allegorical novel, The Alchemist follows a young Andalusian shepherd in his journey to the pyramids of Egypt, after having a recurring dream of finding a treasure there.",
    },
    {
      id: 5,
      name: "The Great Gatsby",
      image: "https://m.media-amazon.com/images/I/51oXKbq1rFL.jpg",
      ratings: 4.5,
      author: "F. Scott Fitzgerald",
      info: "The Great Gatsby is a 1925 novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, near New York City, the novel depicts first-person narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
    },
    {
      id: 6,
      name: "To Kill a Mockingbird",
      image: "https://m.media-amazon.com/images/I/51J4p1eJYrL.jpg",
      ratings: 4.5,
      author: "Harper Lee",
      info: "To Kill a Mockingbird is a novel by the American author Harper Lee. It was published in 1960 and was instantly successful. In the United States, it is widely read in high schools and middle schools. To Kill a Mockingbird has become a classic of modern American literature, winning the Pulitzer Prize.",
    },
  ];

  const bookData1 = books.map((book) => {
    return (
      <Card
        id={book.id}
        name={book.name}
        image={book.image}
        ratings={book.ratings}
        author={book.author}
        onClick={() => {
          console.log(book);
        }}
      />
    );
  });

  const bookData2 = books.map((book) => {
    return (
      <Card
        name={book.name}
        image={book.image}
        ratings={book.ratings}
        author={book.author}
        onClick={() => {
          console.log(book);
        }}
      />
    );
  });

  return (
    <div className="main w-5/6 h-full bg-slate-100/90 overflow-scroll">
      <div className="w-full flex">
        <div className="searchbar w-4/5 h-24  flex justify-center items-center gap-10">
          <input
            type="text"
            placeholder="Harry Potter: The Philosopher's Stone"
            className="w-1/5 h-1/2 border-2 bg-white rounded-full p-4 ml-2"
          />
          <button
            className="h-1/2 w-24 border-2 border-red-500 bg-white rounded-full
         text-red-500"
          >
            Search
          </button>
        </div>
        <div className="profile-card w-1/5 flex justify-center items-center gap-4">
          <img className="profile-photo w-12 rounded-full" src={profile} alt="MainProfile" />
          <div className="profile-details">
            <h5 className="text-sm">Hello</h5>
            <h1 className="font-black text-xl">User</h1>
          </div>
        </div>
      </div>
      <div className="px-14">
        <h1 className="text-4xl pb-14">Welcome !</h1>
        <h3 className="text-2xl pb-4 text-slate-600">Recommended for You</h3>
        <div className="card pb-14 flex flex-wrap  gap-16">{bookData1}</div>
        <h3 className="text-2xl pb-4 text-slate-600">Recent Readings</h3>
        <div className="card flex flex-wrap gap-16">{bookData2}</div>
      </div>
    </div>
  );
}
