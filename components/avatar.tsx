import Image from "next/image";

const Avatar = () => {
    return (
        <img
        src="/me.png"
        alt="avatar"
        className={"w-64 h-64 lg:w-[20rem] lg:h-[20rem] xl:w-[22rem] xl:h-[22rem] hover:scale-110 transform transition duration-500 cursor-pointer ease-in-out rounded-full"}
        />
    );
}
export default Avatar;