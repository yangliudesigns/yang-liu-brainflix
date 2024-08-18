import Button from "./components/Button/Button"
import commentIcon from "./assets/images/add_comment.svg"
import imgSrc from "./assets/images/Mohan-muruge.jpg"
import Avatar from "./components/Avatar/Avatar"


export default function App() {

  return(

    <div>

    <Button type="submit" text="COMMENT" icon={commentIcon} />
    <Button type="submit" text="COMMENT" icon={uploadIcon} />

    <Avatar />
    <Avatar imgSrc={imgSrc}/>

  </div>
  ) 

}

