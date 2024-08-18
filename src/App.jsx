import Button from "./components/Button/Button"
import commentIcon from "./assets/images/add_comment.svg"
import SearchBar from "./components/SearchBar/SearchBar"


export default function App() {

  return(

    <div>


    <Button type="submit" text="COMMENT" icon={commentIcon} />
    <SearchBar />



  </div>
  ) 

}

