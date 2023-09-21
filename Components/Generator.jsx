import { Router } from "next/router";
import { AiOutlineCopy, AiOutlineRocket } from "react-icons/ai";

const Generator = () => {
 
  return (
    <div className="pt-6">
      <div className="flex text-center item-center justify-center ">
        <h3 className="text-black font-extrabold text-sm  ">
          Start Generating Your Social Media Bios
        </h3>
        <AiOutlineRocket className="text-xl" />
      </div>

      <div className="flex justify-center py-5  item-center mt-7  ">
      
        <div className="w-3/4 flex justify-center  item-center flex-col  ">
          <div className="w-3/4 self-center border px-4 py-3 text-center ">
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam molestias aut tenetur delectus.
            </p>
            <input
              type="submit"
              className="px-4 py-1 font-bold outline-none rounded-sm my-3 w-full bg-black text-white cursor-pointer"
              value="Generate"
              
            />
          </div>

          <div className="border py-3 px-4 mt-3 relative">
            <AiOutlineCopy className="absolute right-3 cursor-pointer" />
            <p className="text-center pt-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam molestias aut tenetur delectus. Obcaecati inventore
              libero nulla quibusdam ullam voluptatibus, sed sapiente voluptates
              eos exercitationem optio facere pariatur repellendus quis!
            </p>
          </div>
        </div>
      </div>
      {/* <div className="w-2/4 border px-5 py-3">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
            molestias aut tenetur delectus. Obcaecati inventore libero nulla
            quibusdam ullam voluptatibus
          </p>
        </div> */}

      {/* <input
              type="submit"
              className="px-4 py-1 font-bold outline-none rounded-sm mb-3 w-full bg-black text-white cursor-pointer"
              value="Generate"
            /> */}

      {/* <div className="flex justify-center items-center ">
        <AiOutlineCopy />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam
          molestias aut tenetur delectus. Obcaecati inventore libero nulla
          quibusdam ullam voluptatibus, sed sapiente voluptates eos
          exercitationem optio facere pariatur repellendus quis!
        </p>
      </div> */}
    </div>
  );
};

export default Generator;
