const Bookstore=()=>{
    return(
        <>
        <Book></Book>
        
        </>
    )
};
const Book=()=>{
    return(
        <>
        <Title></Title>
        <Author></Author>
        <Image></Image>
        </>
    )
};
const Title=()=>{
    return <h1>Book Title</h1>;
};
const Author=()=>{
    return <h2>Book Author</h2>;
};
const Image=()=>{
    return <h3>Book Image</h3>;
};
export default Bookstore;