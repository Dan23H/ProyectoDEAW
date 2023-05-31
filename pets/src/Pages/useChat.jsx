import {useEffect, useState} from 'react'
import {db} from './Firebase'

export const useChat = () => {
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    const [messages, setMessages] = useState([])
    
    useEffect(
        ()=>{
            const unsubscribe = db.collection('messages').onSnapshot(
                snapshot => {
                    setLoading(false)
                    setMessages(snapshot.docs.map(d=>({id: d.id, ...d.data()} )))
                    },
                    err => {
                        setError(err)
                    }
            );
            return () => unsubcribe()
        },
        [setMessages]
    )
    return { error, loading, messages, }
}