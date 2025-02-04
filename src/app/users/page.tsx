const Users = async () => {

    const users = await fetch('https://jsonplaceholder.typicode.com/users')
        .then(value => value.json());
    console.log(users);
    return (
        <></>
    )
}
export default Users;
