import chair from '../../assets/images/chair.png'
import { DayPicker } from 'react-day-picker';

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {

    return (
    <div className="hero">
        <div>
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img alt=' ' src={chair} className="md:w-2/5 rounded-sm shadow-2xl" />
                <div>
                    <DayPicker mode="single"
                    selected={selectedDate}
                    onSelect={setSelectedDate} />
                </div>
            </div>
        </div>
    </div>
    );
};

export default AppointmentBanner;