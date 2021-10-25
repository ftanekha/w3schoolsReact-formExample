const {useState} = React
const {render} = ReactDOM

const 
User = props => {
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
    handleTextInput = ({target:{value}})=> setData( prevData => ({...prevData, name: value})), 
    handleSexInput = ({target:{value}})=> setData( prevData => ({...prevData, sex: value})),
    handleSkilllevelInput = ({target: {value}})=> setData( prevData => ({...prevData, skillLevel: value < 0 ? 0 : value > 100? 100: value})) 

    useEffect(()=> console.info('app just rendered for the first time bro!'),[])

    return(
        <>  
            <div className='form-container bg-dark my-3 py-5'>
                <form className='bg-warning my-2 p-2'>
                    <div className='row mx-2'>
                        <input type='text' className='col col-sm-12 col-md-4 col-lg-3 bg-dark text-white fw-bolder mx-2' onChange={handleTextInput}/>
                        <select className='col col-sm-6 col-md-2 col-lg-2 bg-dark text-white fw-bolder mx-2' onChange={handleSexInput}>
                            <option value='men'>men</option>
                            <option value='women'>women</option>
                        </select>
                        <input type='number' min='0' max='100' step='5'className='col col-sm-6 col-md-2 col-lg-2 bg-info text-white fw-bolder mx-2' onChange={handleSkilllevelInput}/>
                    </div>
                </form>
            </div>
            <div className='user-container'>
                <User name={data.name} sex={data.sex} skillLevel={data.skillLevel}/>
            </div>
        </>
    )
}

render(<App />, document.querySelector('#root'))


