// App.tsx
import coursesData from "./data/coursesData.js";

const App = () => {
  return (
    <>
      <div className="text-5xl text-blue-500 font-bold text-center border-2 border-blue-500 py-10">
        App
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-10 mt-10 mb-7">
        {coursesData.map(({ description, image, title }) => (
          <Card
            title={title}
            description={description}
            image={image}
          />
        ))}
      </div>
    </>
  );
};

export default App;

// 👇 Card component with correct TypeScript typing
type CardProps = {
  title: string;
  description: string;
  image: string;
};

const Card = ({ title, description, image }: CardProps) => {
  return (
    <div className="border-2 border-blue-400 cursor-pointer hover:scale-105 duration-300 p-2 rounded-md ">
      <img className="rounded-md" src={image} alt="Image" />
      <h1 className="text-xl font-bold py-1 text-blue-700">{title}</h1>
      <p className="text-base font-thin">{description}</p>
    </div>
  );
};
