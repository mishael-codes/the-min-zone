import { useRouter } from "next/navigation";
import { faCircleChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BackButton = () => { 
  const router = useRouter();
  const handleClick = () => {
    router.back();
  }

  return(
    <>
      <FontAwesomeIcon icon={faCircleChevronLeft} size="2x" color="#f97316" onClick={handleClick} className="cursor-pointer" />
    </>
  )
} 
 export default BackButton