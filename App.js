const {useState} = React
const {render} = ReactDOM

const User = props => {
    return (
        <>
            <p className='text-warning fw-bolder'>{`${(props.sex === 'men' ? 'Mr' : 'Ms')} ${props.name} has reached a level of ${props.skillLevel}% in french.`}</p>
            <div className='progress'>
                <div className='progress-bar progress-bar-striped bg-success' style={{width:`${props.skillLevel}%`}}></div>
            </div>
        </>
    )
},
App = () => {
    const 
    [data, setData] = useState({name: 'pending..', sex: 'unknown', skillLevel: 'unknown'}),
    handleTextInput = ({target})=> setData( prevData => ({...prevData, name: target.value})), 
    handleSexInput = ({target})=> setData( prevData => ({...prevData, sex: target.value})),
    handleSkilllevelInput = ({target: {value}})=> setData( prevData => ({...prevData, skillLevel: value < 0 ? 0 : value > 100? 100: value})) 

    return(
        <>  
            <div className='form-container bg-dark my-3 py-5'>
                <form className='bg-warning my-2 py-2'>
                    <input type='text' className='bg-dark text-white fw-bolder mx-2' onChange={handleTextInput}/>
                    <select className='bg-dark text-white fw-bolder mx-2' onChange={handleSexInput}>
                        <option value='men'>men</option>
                        <option value='women'>women</option>
                    </select>
                    <input type='number' min='0' max='100' step='5'className='bg-info text-white fw-bolder' onChange={handleSkilllevelInput}/>
                </form>
            </div>
            <div className='user-container'>
                <User name={data.name} sex={data.sex} skillLevel={data.skillLevel}/>
            </div>
        </>
    )
}

render(<App />, document.querySelector('#root'))


