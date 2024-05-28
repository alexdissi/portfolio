const Avatar = () => {
    return (
        <img
        src="/me.png"
        alt="avatar"
        className={"w-52 h-52 lg:w-[16rem] lg:h-[16rem] xl:w-[20rem] xl:h-[20rem] hover:scale-110 transform transition duration-500 cursor-pointer ease-in-out rounded-full"}
        />
    );
}
export default Avatar;