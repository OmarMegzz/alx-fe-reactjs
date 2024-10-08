function UserProfile() {
  return (
    <div className="user-profile hover:shadow-xl bg-gray-100 p-8 sm:p-4 sm:max-w-xs md:p-8 md:max-w-sm max-w-sm mx-auto my-20 rounded-lg shadow-lg">
      <img
        src="https://via.placeholder.com/150"
        className="rounded-full hover:scale-110 transition-transform duration-300 ease-in-out sm:w-24 sm:h-24 md:w-36 md:h-36 w-36 h-36 mx-auto"
        alt="User"
      />
      <h1 className=" hover:text-blue-500 sm:text-sm md:text-xl text-lg  text-blue-800 my-4 ">
        John Doe
      </h1>

      <p className=" sm:text-sm md:text-base md:text-xl text-lg text-gray-600 text-base ">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
