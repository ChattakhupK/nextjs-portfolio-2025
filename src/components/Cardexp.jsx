import React from "react";
import { Button, Image } from "antd";

const Cardexp = ({
  title = "Title Project",
  description = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod cumque nesciunt obcaecati ea reprehenderit nostrum quibusdam.",
  imageUrl = "https://placehold.co/600x400",
  demoLink = "",
  githubLink = "",
}) => {
  return (
    <div className="w-[250px] h-[320px] bg-white rounded-2xl overflow-hidden shadow-md flex flex-col justify-between transition-transform hover:-translate-y-1 hover:shadow-lg">
      <div>
        <Image
          priority="true"
          preview={false}
          src={imageUrl}
          alt="Project"
          className="h-[150px] object-cover w-full"
        />
        <div className="px-4 mt-3">
          <h1 className="text-lg font-semibold line-clamp-1">{title}</h1>
          <p className="text-sm text-gray-600 mt-2 line-clamp-3">
            {description}
          </p>
        </div>
      </div>

      <div className="px-4 pb-4 mt-4 flex gap-2">
        <a href={demoLink} target="_blank" rel="noopener noreferrer">
          <Button disabled={demoLink === "" ? true : false} type="primary">
            DEMO
          </Button>
        </a>
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          <Button disabled={githubLink === "" ? true : false} type="default">
            GITHUB
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Cardexp;
