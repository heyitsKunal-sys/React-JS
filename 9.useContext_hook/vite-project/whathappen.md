isme humne kya kya kiya:
humne components folder me
navbar , button , component1  banaya

ab structure aisa hai:

app.jsx
  Navbar.jsx
    Button.jsx
      Component1.jsx
ab humne app.jsx me navbar ko import kiyaaur use kiya
ab humne navbar me button ko import kiya aur use kiya
ab humne button me component1 ko import kiya aur use kiya
ab hume ky krna tha jahan humara component1 h humne vahan count ko show krna tha aur counter pr click krne pr count increase hoga vo compomemt 1 ki jagah show hoga
to uske liye humne count ka use navbar button aur component1 me kiya
humne count ko app.jsx me state banaya aur usko navbar me pass kiya as props
ab humne navbar me count ko button me pass kiya as props
ab humne button me count ko component1 me pass kiya as props.

etna sab krna bouth hectic h isiliye hum
useContext ka use karenge jisse hume baar baar props pass krne ki zarurat nahi padegi
useContext ek hook hai jo hume ek global state provide karta hai jise hum apne components me use kar sakte hai bina props ke through pass kiye.

