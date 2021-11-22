import React from 'react'
import styles from "./Contact.module.css"
const Contact = () => {
    return (
        <div className={styles.c}>
                      <div className={styles.cBg}></div>
        <div className={styles.cWrapper}>

            <div className={styles.cLeft}>
            
                    
                    <h1 className={styles.cTitle}>Hello, Lets Have a Talk !</h1>
                <div className={styles.cInfo}>
                    <div className={styles.cInfoItem}>
                    <div className={styles.cIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
</svg>
                        </div>    
                  
                        
                        +91 9527105923</div>
                    <div className={styles.cInfoItem}>
                  <div className={styles.cIcon}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" viewBox="0 0 20 20" fill="currentColor">
  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
</svg>
                  </div>
                   
                        tejaskolwankar021@gmail.com</div>
                    <div className={styles.cInfoItem}>
                    <div className={styles.cIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 text-red-600" viewBox="0 0 20 20" fill="currentColor">
  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
</svg>
                    </div>
                   
                        3/83 B Suragraj Anmol Society Uthkarshanagar Kuwarbav Ratnagiri</div>
                </div>
                </div>
            <div className={styles.cRight}>
                

                <form className="rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500">
      <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

      <label for="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
      <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-600 font-light text-gray-500" />

      <label for="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
      <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-600 font-light text-gray-500" />

      <label for="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
      <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-600 font-light text-gray-500" />

      <label for="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
      <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-red-600 font-light text-gray-500"></textarea>
      <div className="flex flex-row items-center justify-start">
      <button className="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
  Button
</button>
      </div>
    </form>



            </div>
        </div>
        </div>
    )
}

export default Contact
