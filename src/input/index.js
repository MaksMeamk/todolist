import { useState } from 'react'
const Input = ({ tasks, setTasks }) => {

    const [text, setText] = useState('');

    const handleClick = () => {
        setTasks([...tasks, { id: tasks.length + 1, title: text }])
        setText('');
        console.log(tasks);
    };

    return <>
        <input onChange={(e) => setText(e.target.value)} value={text} />
        <button onClick={() => { handleClick() }}>Добавить</button>
    </>
}
export default Input