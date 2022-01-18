const Footer = () => {
    return (
        <div className="w-full  flex md:justify-center justify-between items-center flex-col p-4 gradient-bg-footer">
      
    
        <div className="flex justify-center items-center flex-col mt-5">
          <p className="dark:text-white text-black text-sm text-center">Built on NextJs</p>
          <p className="dark:text-white text-black text-sm text-center font-medium mt-2">tejaskolwankar021@gmail.com</p>
        </div> 
    
        <div className="sm:w-[90%] w-full h-[0.25px] bg-gray-400 mt-5 " />
    
        <div className="sm:w-[90%] w-full flex justify-between items-center mt-3">
          <p className="dark:text-white text-black text-left text-xs">@tej_k_021</p>
          <p className="dark:text-white text-right text-xs text-black">All rights reserved</p>
        </div>
      </div>
    )
}

export default Footer
