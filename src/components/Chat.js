import Message from "./Message";
import {useState} from "react";

const Chat = () => {
    const [messageList, setMessageList] = useState([]);
    const [messageItem, setMessageItem] = useState({
        author: '',
        text: ''
    });

    return (
        <div className="chat container">
            <MessageForm data={messageItem} setData={setMessageItem} setMessage={setMessageList}></MessageForm>
            <div>
                {messageList.map((e, id) => <Message key={id} author={e.author} text={e.text}></Message>)}
            </div>
        </div>
    )
}

const MessageForm = ({data, setData, setMessage}) => {
    const {author, text} = data;

    const submitForm = (e) => {
        e.preventDefault();
        if (text.length > 0) {
            setMessage(p => [...p, {author, text}])

            setData({
                author: '',
                text: ''
            })
        }
    }

    return (
        <form onSubmit={submitForm}>
            <input className="chat__form-input"
                   type="text"
                   placeholder="Имя"
                   value={author}
                   onChange={(el) =>
                       setData(p => ({...p, author: el.target.value})
                       )}/>
            <input className="chat__form-input"
                   type="text"
                   placeholder="Сообщение"
                   value={text}
                   onChange={(el) =>
                       setData(p => ({...p, text: el.target.value})
                       )}/>
            <button className="chat__form-button" type="submit">Отправить</button>
        </form>
    )
}

export default Chat