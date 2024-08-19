import Button from "./components/Button/Button"
import commentIcon from "./assets/images/add_comment.svg"
import Header from "./components/Header/Header"


export default function App() {

  return(

    <div>

      <Header />

    <Button type="submit" text="COMMENT" icon={commentIcon} />
    {/* <SearchBar /> */}
{/* 
    <Avatar />
    <Avatar imgSrc={imgSrc}/> */}

  </div>
  ) 

}

