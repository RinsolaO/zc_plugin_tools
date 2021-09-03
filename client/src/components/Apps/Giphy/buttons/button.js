import './button.css'

export const GreenBtn = (props)=>{
    return (
        
            <button className="giphyButton greenButton">
                {props.children}
            </button>
        
    )
}

export const WhiteBtn = (props)=>{
    return (
            <button className="giphyButton whiteBtn">
                {props.children}
            </button>
    )
}
