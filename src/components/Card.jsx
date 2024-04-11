import { motion } from "framer-motion";
const Card = (props) => {
  return (
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      className="card sm:h-80 w-60 sm:w-40 bg-[#3F3F3F] flex flex-col rounded-lg overflow-hidden cursor-pointer"
    >
      <div className="image-div h-4/6 min-h-[66.6%] w-full">
        <img className="w-full h-full" src={props.poster} alt="poster" />
      </div>
      <div className="flex flex-col h-full justify-between">
        <div className="title p-1 text-wrap leading-4">
          <h6>{props.title}</h6>
        </div>
        <div className="w-full text-slate-200 opacity-75 text-sm flex justify-between p-1">
          <p>{props.type}</p>
          <p>{props.year}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;

// {Poster: "https://m.media-amazon.com/images/M/MV5BM2ZmMjEyZmYtOGM4YS00YTNhLWE3ZDMtNzQxM2RhNjBlODIyXkEyXkFqcGdeQXVyMTUzMTg2ODkz._V1_SX300.jpg",
// Title: "Wednesday",
// Type: "series",
// Year: "2022–",
// imdbID:"tt13443470"}
