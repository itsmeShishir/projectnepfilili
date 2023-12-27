import "./buttons.css";

const PrimaryButton = (props) => {
    const { text, type, width, loading, size, disable, onClick, ...more } = props;
  
    return (
      <button
        className={`custom__button primary__button ${width} ${size} `}
        type={type || "button"}
        onClick={onClick}
        disabled={loading || disable}
        {...more}
      >
        {loading && <div className="spinner mr-1"></div>}
        {!loading && text}
      </button>
    );
  };

  export {PrimaryButton}