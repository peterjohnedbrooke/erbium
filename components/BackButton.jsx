import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";

export default function BackButton({text}) {
  const router = useRouter()
  const arrowReturn = <FontAwesomeIcon className='icon' icon={faArrowLeftLong} />;
  
  return <span className='btnMain' onClick={() => router.back()}><p>{arrowReturn}</p></span>
  
}