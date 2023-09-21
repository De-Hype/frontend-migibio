
const formGenerator = () => {
  return (
    <div className="flex justify-center py-5  item-center mt-7  ">
    
    <div className="w-2/4 flex justify-center  item-center flex-col  ">
      <div className="w-1/2 self-center border px-4 py-3 texr-center ">
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
  )
}

export default formGenerator