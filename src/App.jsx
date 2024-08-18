import Button from "./components/Button/Button"
import commentIcon from "./assets/images/add_comment.svg"
import Avatar from "./components/Avatar/Avatar"
import imgSrc from "./assets/images/Mohan-muruge.jpg"

export default function App() {

  return(

    <div>


    <Button type="submit" text="COMMENT" icon={commentIcon} />


    <Avatar />
    <Avatar imgSrc={imgSrc}/>

  </div>
  ) 

}

