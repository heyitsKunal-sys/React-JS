yahn humne useContext hook ka use kiya hai. useContext hook ka use karne ke liye hume pehle context create karna padta hai. Context create karne ke liye humne createContext function ka use kiya hai. createContext function ko import karna padta hai react se.

phir app.jsx me CounterContext.Provider ka use kiya hai. Provider ke andar value pass karte hai jise hum context me share karna chahte hai.

CounterContext.Provider ke andar humne Counter component ko wrap kiya hai. Ab Counter component ke andar hum useContext hook ka use karke context me share ki gayi value ko access kar sakte hai.

ab Navbar component ke andar bhi hum useContext hook ka use karke context me share ki gayi value ko access kar sakte hai. is tarah humne useContext hook ka use karke context me share ki gayi value ko access kiya hai.