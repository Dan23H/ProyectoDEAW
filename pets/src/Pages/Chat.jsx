import React from 'react';
import {useChat} from './useChat';
import {db} from './Firebase';

export const Chat = () => {
    const[message,setMessage] = React.useState('');
    const{loading, messages, erro} = useChat();
    
    const onPress = (e) => {
        e.preventDefault();
        
        db.collection('message').add({
            timestamp:Date.now(),
            message
        })
    }

return (
    <div className="App">
        <div className="App-header">
            <p>Chat privado</p>
            <form>
                <input value={message} onChange={(e) => setMessage(e.target.value)}/>
                <button type = "submit" onPress={onPress}>Enviar Mensaje</button>
                </form>
                <ul>
                    {messages.map(m => <li key={m.id}>{m.message}</li>)}
                    </ul>
                    </div>
                    </div>
)
}