import React, {useState} from "react"; 

const Clock = () => {
    let [date, setDate] = useState(0);
    date = new Date().toLocaleString();
    setInterval( () => {
        date = new Date().toLocaleString();
        setDate(date);
    }, 1000);

    return (
        <p>
            This is {date}
        </p>
    )

}

export default Clock


/* 
    constructor(props) {
        super(props);
        this.state = new Date()
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.setTime(), 1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    setTime() {
        this.setState(
            state
        )
    }
    render() {
        return (
            <div>
                <h3>Soy Rodrigo</h3>
                <h4>Son las {this.state.date.toLocaleDateString()}</h4>
            </div>
        )
    }
} */
