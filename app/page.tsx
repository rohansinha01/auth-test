import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Sign-In 
      <Button text={'Sign-Up'} link='/signup'/> 
      <Button text={'Sign-In'} link='/login'/> 
    </div>
  );
}
