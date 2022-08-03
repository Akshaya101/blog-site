import {useState, useEffect} from 'react'
import {db} from '../firebase-config'
import {collection, getDocs} from 'firebase/firestore'

function Content(){
    const [content, updateContent] = useState([]) 
    const contentRef = collection(db, "content")
    useEffect(()=>{
        const getContent = async ()=>{
            const data = await getDocs(contentRef);
            updateContent(data.docs.map((doc)=>({...doc.data(), id: doc.id})))
        }
        getContent()
    },[])
    return(
        <div>
            {
                content.map((article)=>{
                    return <div>{article.content}</div>
                })
            }
        </div>
    )
}
export default Content