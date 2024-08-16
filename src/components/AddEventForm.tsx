import React, {useState} from 'react';
export const AddEventForm: React.FC <{
        addEvent: Function
 }> = (props) => {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [description, setDescription] = useState('');
    const [coordinator, setCoordinator] = useState('');

    const submitEvent = () => {
        if (description !== '' && coordinator !== '' && date !== '' && time !== '') {
            props.addEvent(date, time, description, coordinator);
            setDate('');
            setTime('');
            setDescription('');
            setCoordinator('');
        }
    }   
    return (
        <div className="mt-5">
            <form>
                <div className="mb-3">
                    <label className="form-label">Date</label>
                    <input type="date" className="form-control" required 
                  
                    onChange={e => setDate(e.target.value)} value={date}/>        
                </div>

                <div className="mb-3">
                <select 
                    className="form-select" onChange={e => setTime(e.target.value)} value={time} required >
                    <option value="">Select Time</option>
                    <option value="9 a.m.">9 a.m.</option>
                    <option value="10 a.m.">10 a.m.</option>
                    <option value="11 a.m.">11 a.m.</option>
                    <option value="12 p.m.">12 p.m.</option>
                    <option value="1 p.m.">1 p.m.</option>
                    <option value="2 p.m.">2 p.m.</option>
                    <option value="3 p.m.">3 p.m.</option>
                    <option value="4 p.m.">4 p.m.</option>
                </select>        
                </div>
            
                <div className="mb-3">
                    <label className="form-label">Description</label>
                    <textarea className="form-control" rows={3} required 
                 
                    onChange={e => setDescription(e.target.value)} value={description}></textarea>     
                </div>
                <div className="mb-3">
                    <label className="form-label">Coordinator</label>
                    <input type="text" className="form-control" required 
                  
                    onChange={e => setCoordinator(e.target.value)} value={coordinator}/>
                    <button type="button" className="btn btn-primary mt-3" onClick={submitEvent}>Add Event</button>      
                </div>
            </form>
        </div>
    )
}