// import React from 'react'
// // 


// const Button = () => {
//     // const {theme, setTheme} = useTheme()
//     return (
//         <div>
//             <button
//   aria-label="Toggle Dark Mode"
//   type="button"
//   className="p-3 h-12 w-12 order-2 md:order-3"
//   onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
// ></button>
//         </div>
//     )
// }

// export default Button



import React from 'react'
import {useTheme} from 'next-themes'



const Button = () => {
    const {theme, setTheme} = useTheme()
    return (
        <div>
     
<button
  aria-label="Toggle Dark Mode"
  type="button"
  className="p-3 h-12 w-12 order-2 md:order-3"
  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
>theme</button>
        </div>
    )
}

export default Button
