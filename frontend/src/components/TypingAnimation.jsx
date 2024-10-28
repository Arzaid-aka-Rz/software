import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return <TypeAnimation sequence={["Software Apps", 1000, "Digital Marketing", 1000,"Educational Courses", 1000]} wrapper="span" speed={50} className="font-bold lg:text-6xl text-blue-500 "  repeat={Infinity} />;
};

export default TypingAnimation;