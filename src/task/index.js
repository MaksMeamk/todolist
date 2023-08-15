import { useState } from 'react'

const Task = ({ item, handleClickDelete, handleEdit }) => {
    const [isEdit, setisEdit] = useState(false);
    const [text, setText] = useState(item.title);
    const toggle = () => {
        if (isEdit) {
            handleEdit(item.id, text);
            setisEdit(!isEdit)
        }
        else {
            setisEdit(!isEdit)
        }
    }
    return (
        <div key={item.id}>
            {isEdit ?
                <input onChange={(e) => setText(e.target.value)} value={text} /> :
                <p> {text}</p>}
            <button onClick={() => handleClickDelete(item.id)}>Удалить</button>
            <button onClick={() => toggle()} > {isEdit ? 'Сохранить' : 'Изменить'}</button>
        </div >
    )
}
export default Task;